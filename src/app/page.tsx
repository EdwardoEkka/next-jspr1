"use client";
import MyComponent from "./components/component2";
import FuncComponent from "./components/component1";
import FunctionComponent from "./components/component3";
import Link from 'next/link';

export default function Home() {
  const handleClickFromHome = () => {
    alert("Button clicked in Home component!");
    // You can perform any other actions or state updates here
  };

  return (
    <main className="Main">
      <Link href="/home">
        Home
      </Link>
      <Link href="/profile">
        Profile
      </Link>
      <MyComponent name="John" />
      <FuncComponent data="Hey Dude" />
      <FunctionComponent onClick={handleClickFromHome} />
    </main>
  );
}
