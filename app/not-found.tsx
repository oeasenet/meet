import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="error-page" data-lk-theme="default">
      <div className="error-block">
        <img src="/images/LogoHFitted.svg" alt="OEASE Meet" width="780" height="75" />
        <h1>404 NOT FOUND</h1>
        <Link href="https://oease.net" className="home-link">
          Home
        </Link>
      </div>
    </main>
  );
}
