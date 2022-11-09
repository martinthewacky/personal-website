import Link from "next/link";

export default function Header() {
  return (
    <header>
      <div>
        <Link href="/">@</Link>
      </div>
      <div>
        <button>Toggle Theme</button>
        <button>Menu</button>
      </div>
    </header>
  );
}
