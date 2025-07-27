// import Link from "next/link";

// export default function Navbar() {
//   return (
//     <nav className="flex flex-col lg:flex-row justify-between items-center py-4 px-2 sticky top-0 bg-white z-10">
//       <div className="flex items-center gap-[1ch]">
//         <div className="w-5 h-5 bg-yellow-400 rounded-full" />
//         <span className="text-sm font-semibold tracking-widest">dsujoydev</span>
//       </div>
//       <div className="flex flex-col items-center lg:flex-row gap-12 text-md text-zinc-400">
//         <Link className="text-black font-medium" href="#">
//           Home
//         </Link>
//         <Link href="#projects" scroll={false}>
//           Projects
//         </Link>
//         <Link href="#experiene" scroll={true}>
//           Experience
//         </Link>

//         <Link href="#">Contact</Link>
//       </div>
//     </nav>
//   );
// }

"use client";

import { useState } from "react";
import Link from "next/link";
// import MenuIcon from '@mui/icons-material/Menu';
// import CloseIcon from '@mui/icons-material/Close';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex flex-col lg:flex-row justify-between items-center py-4 px-2 sticky top-0 bg-white z-10">
      <div className="flex items-center justify-between w-full lg:w-auto">
        <div className="flex items-center gap-[1ch]">
          <div className="w-5 h-5 bg-yellow-400 rounded-full" />
          <span className="text-sm font-semibold tracking-widest">dsujoydev</span>
        </div>
        <div className="lg:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>{isOpen ? "X" : "Menu"}</button>
        </div>
      </div>
      <div
        className={`flex flex-col items-center lg:flex-row mx-4 text-md text-zinc-400 ${
          isOpen ? "block" : "hidden"
        } lg:block `}
      >
        <Link className="text-black font-medium mr-4" href="#">
          Home
        </Link>
        <Link className="mr-4" href="#projects" scroll={false}>
          Projects
        </Link>
        <Link className="mr-4" href="#experiene" scroll={true}>
          Experience
        </Link>
        <Link className="mr-4" href="#certifications" scroll={true}>
          Certifications
        </Link>
        <Link className="mr-4" href="#">
          Contact
        </Link>
      </div>
    </nav>
  );
}
