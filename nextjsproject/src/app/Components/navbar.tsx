// import { useState } from "react";
// import { LuDownload } from "react-icons/lu";
// import LinkButton from "./LinkButton";
// import Logo from "./Logo";
// import Link from "next/link";
// import MobileNav from "./MobileNav";

// const navlinks=[
//     {url:"#home",label:"Home"},
//     {url:"#services",label:"Services"},
//     {url:"#resume",label:"Resume"},
//     {url:"#projects",label:"Home"},
//     {url:"#skills",label:"Skills"},
//     {url:"#testimonials",label:"Testimonials"},
//     {url:"#contact",label:"Contacts"},
// ]

// export default function Navbar(){
//     const [navOpen,setNavOpen]=useState(false)
//     return( 
//         <nav className="h-18 fixed z-50 w-full">
// <div className="flex items-center h-full justify-between w[-90%] mx-auto">
//   <Logo/>
// <ul className="hidden lg:flex space-x-10">
//     {navlinks.map((link)=>{
//        return (
//         <li key={link.url}>
//   <Link className="text-gray-500 hover:text-cyan-300 font-medium 
//   transition-colors duration-300"href={link.url}>{link.label}</Link>
            
//         </li> 
//        ) 
//     })}
// </ul>
// <LinkButton href="/document/cv.pdf" text="Download " 
// download icon ={LuDownload}
//  iconPosition="left"/>

// </div>
// <MobileNav navOpen={navOpen} />

//         </nav>
//     ) 
// }
// "use client";

// import { useState } from "react";
// import { LuDownload, LuMenu, LuX } from "react-icons/lu";
// import LinkButton from "./LinkButton";
// import Logo from "./Logo";
// import Link from "next/link";
// import MobileNav from "./MobileNav";

//  export const navlinks = [
//   { url: "#home", label: "Home" },
//   { url: "#services", label: "Services" },
//   { url: "#resume", label: "Resume" },
//   { url: "#projects", label: "Home" },
//   { url: "#skills", label: "Skills" },
//   { url: "#testimonials", label: "Testimonials" },
//   { url: "#contact", label: "Contacts" },
// ];

// export default function Navbar() {
//   const [navOpen, setNavOpen] = useState(false);

//   return (
//     <nav className="h-18 fixed z-50 w-full">
//       <div className="flex items-center h-full justify-between w-[-90%] mx-auto">
//         <Logo />

//         <ul className="hidden lg:flex space-x-10">
//           {navlinks.map((link) => (
//             <li key={link.url}>
//               <Link
//                 href={link.url}
//                 className="text-gray-500 hover:text-cyan-300 font-medium 
//                 transition-colors duration-300"
//               >
//                 {link.label}
//               </Link>
//             </li>
//           ))}
//         </ul>

//         <LinkButton
//           href="/document/cv.pdf"
//           text="Download"
//           download
//           icon={LuDownload}
//           iconPosition="left"
//         />
//       </div>
//  <button  
//  type="button"
//  onClick={()=>setNavOpen(!navOpen)}
//  aria-label="Open navigation menu"
//  className="w-8 h-8  cursor-pointer text-white z-50
//   lg:hidden">
// {navOpen ? <LuX size={30}/>:<LuMenu size={30}/>}
//  </button>


//       <MobileNav navOpen={navOpen} />
//     </nav>
//   );
// }
"use client";

import { useState } from "react";
import { LuDownload, LuMenu, LuX } from "react-icons/lu";
import Link from "next/link";

import LinkButton from "./LinkButton";
import Logo from "./Logo";
import MobileNav from "./MobileNav";

export const navlinks = [
  { url: "#home", label: "Home" },
  { url: "#services", label: "Services" },
  { url: "#resume", label: "Resume" },
  { url: "#projects", label: "Projects" },
  { url: "#skills", label: "Skills" },
  { url: "#testimonials", label: "Testimonials" },
  { url: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <nav className="fixed z-50 w-full bg-black">
      <div className="mx-auto flex h-18 w-[90%] items-center justify-between">
        <Logo />

        {/* Desktop Nav */}
        <ul className="hidden lg:flex space-x-10">
          {navlinks.map((link) => (
            <li key={link.url}>
              <Link
                href={link.url}
                className="text-gray-400 hover:text-cyan-300 font-medium transition-colors"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Download Button */}
        <LinkButton
          href="/document/cv.pdf"
          text="Download"
          download
          icon={LuDownload}
          iconPosition="left"
        />

        {/* Mobile Menu Button */}
        <button
          type="button"
          aria-label="Toggle navigation menu"
          title="Toggle navigation menu"
          onClick={() => setNavOpen((prev) => !prev)}
          className="lg:hidden text-white"
        >
          {navOpen ? <LuX size={30} /> : <LuMenu size={30} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {navOpen && <MobileNav navOpen={navOpen} setNavOpen={setNavOpen} />}
    </nav>
  );
}
