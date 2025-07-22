import Link from "next/link";
import { ModeToggle } from "./ModeToggle";

export default function Navbar() {
  return (
    <nav className="w-full relative flex items-center justify-between max-w-2xl mx-auto py-5">
      <Link href="/" className="font-bold text-3xl">
        Daily<span className="text-primary">Blog</span>
      </Link>

      <ModeToggle />
    </nav>
  );
}
