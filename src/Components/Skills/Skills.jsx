import React from 'react'
import { SiCss3 } from "react-icons/si";
import { DiJavascript } from "react-icons/di";
import { FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { FaSass } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { RiHtml5Fill } from "react-icons/ri";
import { FaNode } from "react-icons/fa";
import { BiLogoMongodb } from "react-icons/bi";
import { SiExpress } from "react-icons/si";
import './Skills.css'
export default function Skills() {
    const size =70
  return (
    <div className="flex items-center flex-wrap sm:justify-center gap-4 mt-[30px] container-full">
            <RiHtml5Fill  className='one duration-300 hover:translate-y-[-10px]' color='orange' size={72}/>
            <SiCss3 className='two duration-300 hover:translate-y-[-10px]' color='#3473e6' size={60}/>
            <DiJavascript className='three duration-300 hover:translate-y-[-10px]' color='#94bf27' size={75}/>
            <div className='roAni '>
               <FaReact className='four duration-300 hover:translate-y-[-10px]' color='#61dbfb' size={size}/>
            </div>
            <FaNode className='three duration-300 hover:translate-y-[-10px]' color='rgb(128 178 1)' size={80}/>
            <SiExpress className='three duration-300 hover:translate-y-[-10px] ml-2' color='rgb(128 178 1)' size={60}/>


            <BiLogoMongodb className='three duration-300 hover:translate-y-[-10px]' color='rgb(99 164 0)' size={70}/>
            
            <SiTailwindcss className='five duration-300 hover:translate-y-[-10px]' color='#61dbfb' size={size}/>
            <FaJava className=' six duration-300 hover:translate-y-[-10px]' color='blue' size={size}/>
            <SiMysql className="cursor-not-allowed seven hover:translate-y-[-10px] " color='cadetblue' size={size}/>
            
    </div>
  )
}
