import Link from 'next/link';
export default function Home() {

  return (
    <main className="Main">
      Hello Bitch
      <Link href="/home">
        Home
      </Link>
    </main>
  );
}
