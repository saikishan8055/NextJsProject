
import { LuDownload } from "react-icons/lu";
import LinkButton from "./LinkButton";
import Logo from "./Logo";
import Link from "next/link";
const navlinks=[
    {url:"#home",label:"Home"},
    {url:"#services",label:"Services"},
    {url:"#resume",label:"Resume"},
    {url:"#projects",label:"Home"},
    {url:"#skills",label:"Skills"},
    {url:"#testimonials",label:"Testimonials"},
    {url:"#contact",label:"Contacts"},
]

export default function Navbar(){
    return( 
        <nav className="h-18 fixed z-50 w-full">
<div className="flex items-center h-full justify-between w[-90%] mx-auto">
  <Logo/>
<ul className="hidden lg:flex space-x-10">
    {navlinks.map((link)=>{
       return (
        <li key={link.url}>
  <Link className="text-gray-500 hover:text-cyan-300 font-medium 
  transition-colors duration-300"href={link.url}>{link.label}</Link>
            
        </li> 
       ) 
    })}
</ul>
<LinkButton href="/document/cv.pdf" text="Download " download icon ={LuDownload} iconPosition="left"/>

</div>
        </nav>
    ) 
}