import Link from "next/link"
import { IconBase, IconType } from "react-icons"


interface LinkButtonProps{
    href:string,
    text:string,
    icon?:IconType,
    iconPosition?:"right" | "left",
    rounded ? : boolean,
    download:boolean 
}


export default function LinkButton({href,text,icon:Icon,iconPosition = "right",rounded,download=false}:LinkButtonProps){
    return (
        <div className="hidden lg:block">
             <Link href={href} download={download} className="px-8 py-3 
        bg-linear-to-r from-blue-900 to-purple-800
        hover:from-blue-600 hover:to-purple-500
        text-white font-medium transition-all duration-100
        hover:scale-[1.02] active:scale-[0.95]
        inline-flex items-center justify-center gap-2
        ${rounded ? 'rounded-full':'rounded-lg'}   
   
        ">
{Icon && iconPosition === "left" && <Icon className="w-5 h-5"/>}
{text}
{Icon && iconPosition === "right" && <Icon className="w-5 h-5"/>}


        </Link>

        </div>
       
    )
}