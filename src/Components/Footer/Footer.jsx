import React from 'react'
import { FaGithub } from 'react-icons/fa';
import { FaCopyright } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaLocationArrow } from "react-icons/fa6";

export default function Footer() {
  return (
    <div className=" relative flex items-center justify-around text-white h-[100px] bg-black container-full ">
      <h1 className='flex items-center gap-1 font-bold'>Copyright<FaCopyright />All rights are reserved</h1>
      <div className='flex items-center gap-2'>
        <a href='https://github.com/webAnkit23' className='duration-100 hover:scale-125'>
        <FaGithub  size={25}/>
        </a>
      <a href='https://www.linkedin.com/in/ankit-singh-471269224/' className='duration-100 hover:scale-125'>
        <CiLinkedin  size={30}/>
      </a>
      <div  className='absolute flex flex-col items-center justify-center p-[5px] cursor-pointer bottom-[110px] md:bottom-[30px] right-2'>
        <FaLocationArrow onClick={() =>{
            window.scrollTo({top:'0px' ,behavior:'smooth'})
        }} className=' hover:rotate-[-46deg] duration-150 text-black md:text-white ' size={40}/>
      </div>
      </div>
    </div>
    
  )
}
