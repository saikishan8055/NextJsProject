// "use client";

// import React from "react";
// import { navlinks } from "./navbar";
// // import { link } from "fs";
// import Link from "next/link";

// interface MobilenavProp{
//     navOpen : boolean,

// }

// export default function MobileNav({navOpen}:MobilenavProp){
//     const   showMobileNav = navOpen ? "translate-z-0":"translate-y-0"
//     return(
//         <>
//         <div className={`fixed inset-0 transform right-0 z-50 bg-black opacity-30
//             w-full h-screen transition-all duration-500 ${showMobileNav}`}></div>
//             <ul className={`fixed flex items-center justify-center text-white flex-col
//                 h-full transform transition-all duration-500 delay-300 w-[80%] sm:w-[60%]
//                 bg-slate-800 space-y-1 z-80 right-0 top-0 ${showMobileNav}`}>
//            {navlinks.map((link)=>{
//             return(
//                 <li key={link.url}>
//                  <Link href={link.url} className="flex justify-center
//                  items-center text-xl 
//                  font-medium text-white py-4 px-6
//                  rounded-lg hover:bg-slate-700/50
//                  hover:text-cyan-300 transition-all duration-300  border-b
//                  border-slate-700/30 w-full text-center">
//                     {link.label}
//                  </Link>
//                 </li>
//             )
//            })}
//            </ul>
        
//         </>

//     )
// }
"use client";

import Link from "next/link";
import { navlinks } from "./navbar";

interface MobileNavProps {
  navOpen: boolean;
  setNavOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function MobileNav({ navOpen, setNavOpen }: MobileNavProps) {
  // ✅ CRITICAL FIX
  if (!navOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 z-40 bg-black/30"
        onClick={() => setNavOpen(false)}
      />

      {/* Menu */}
      <ul
        className="fixed right-0 top-0 z-50 flex h-full w-[80%] sm:w-[60%]
        flex-col items-center justify-center space-y-2
        bg-slate-800 text-white transition-transform duration-300
        translate-x-0"
      >
        {navlinks.map((link) => (
          <li key={link.url} className="w-full text-center">
            <Link
              href={link.url}
              onClick={() => setNavOpen(false)}
              className="block w-full py-4 px-6 text-xl font-medium
              hover:bg-slate-700/50 hover:text-cyan-300 transition-all"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
