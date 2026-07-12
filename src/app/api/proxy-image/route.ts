import { NextRequest, NextResponse } from 'next/server';

// 내부망/루프백/링크로컬 주소로의 요청 차단 (SSRF 방어)
function isBlockedHost(hostname: string): boolean {
  const h = hostname.toLowerCase();
  if (h === 'localhost' || h.endsWith('.localhost') || h === '0.0.0.0') return true;
  if (/^127\./.test(h) || /^10\./.test(h) || /^192\.168\./.test(h)) return true;
  if (/^172\.(1[6-9]|2\d|3[01])\./.test(h)) return true; // 172.16.0.0 – 172.31.255.255
  if (/^169\.254\./.test(h)) return true; // 링크로컬
  if (h === '::1' || h.startsWith('fe80') || h.startsWith('fc') || h.startsWith('fd')) return true; // IPv6 루프백/링크로컬/ULA
  return false;
}

export async function GET(request: NextRequest) {
  const url = new URL(request.url).searchParams.get('url');

  if (!url) {
    return new NextResponse('URL is required', { status: 400 });
  }

  let target: URL;
  try {
    target = new URL(url);
  } catch {
    return new NextResponse('Invalid URL', { status: 400 });
  }

  // http/https 외 프로토콜(file:, data: 등) 차단
  if (target.protocol !== 'http:' && target.protocol !== 'https:') {
    return new NextResponse('Unsupported protocol', { status: 400 });
  }
  if (isBlockedHost(target.hostname)) {
    return new NextResponse('Forbidden host', { status: 403 });
  }

  try {
    const response = await fetch(target, {
      redirect: 'error', // 리다이렉트를 통한 내부망 우회 방지
      headers: {
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        Referer: target.origin,
      },
    });

    if (!response.ok) {
      return new NextResponse('Failed to fetch image', { status: response.status });
    }

    const contentType = response.headers.get('content-type') || '';
    if (!contentType.startsWith('image/')) {
      return new NextResponse('Not an image', { status: 415 });
    }

    const blob = await response.blob();
    return new NextResponse(blob, {
      headers: {
        'Content-Type': contentType,
        'Cache-Control': 'public, max-age=31536000, immutable',
      },
    });
  } catch (error) {
    console.error('Proxy fetch failed:', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}
