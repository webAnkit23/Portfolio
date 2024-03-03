import React from 'react'
import { SiCss3 } from "react-icons/si";
import { DiJavascript } from "react-icons/di";
import { FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { FaSass } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { RiHtml5Fill } from "react-icons/ri";
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
            
            <SiTailwindcss className='five duration-300 hover:translate-y-[-10px]' color='#61dbfb' size={size}/>
            <FaJava className=' six duration-300 hover:translate-y-[-10px]' color='blue' size={size}/>
            <SiMysql className="cursor-not-allowed seven opacity-30" color='green' size={size}/>
            <FaSass className='cursor-not-allowed eight opacity-30' color='pink' size={size}/>  
    </div>
  )
}
