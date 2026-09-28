'use client';

import Link from 'next/link';
import GoogleLoginButton from '@/components/GoogleLoginButton';

// 로그인과 회원가입은 같은 Google OAuth 흐름이라 한 화면에서 처리한다.
// 처음 로그인하는 계정은 그 자리에서 가입된다.
export default function LoginForm() {
  return (
    <div className="space-y-6">
      <GoogleLoginButton label="Google로 계속하기" />

      <p className="text-center text-xs leading-relaxed text-slate-500">
        처음이신가요? Google 계정으로 계속하면 <span className="font-semibold text-slate-700">바로 가입</span>됩니다.
        <br />
        계속하면{' '}
        <Link href="/terms" className="text-teal-600 hover:underline">이용약관</Link>과{' '}
        <Link href="/privacy" className="text-teal-600 hover:underline">개인정보처리방침</Link>에 동의하게 됩니다.
      </p>
    </div>
  );
}
