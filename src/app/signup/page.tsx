import { permanentRedirect } from 'next/navigation';

// 회원가입은 로그인 화면(Google OAuth)으로 합쳐졌다. 예전 링크·북마크를 위해 남겨 둔다.
export default function SignupPage() {
  permanentRedirect('/login');
}
