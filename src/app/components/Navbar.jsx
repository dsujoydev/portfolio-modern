import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center py-4 px-2 sticky top-0 bg-white z-10">
      <div className="flex items-center gap-[1ch]">
        <div className="w-5 h-5 bg-yellow-400 rounded-full" />
        <span className="text-sm font-semibold tracking-widest">dsujoydev</span>
      </div>
      <div className="flex gap-12 text-md text-zinc-400">
        <Link className="text-black font-medium" href="#">
          Home
        </Link>
        <Link href="#projects" scroll={false}>
          Projects
        </Link>
        <Link href="#experiene" scroll={true}>
          Experience
        </Link>

        <Link href="#">Contact</Link>
      </div>
    </nav>
  );
}
