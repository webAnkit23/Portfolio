import React from 'react'
import { LuGithub } from "react-icons/lu";
import { CiLinkedin } from "react-icons/ci";
import './Hero.css'
import Skills from '../Skills/Skills';
export default function Hero() {
  return (
    <div id='home' className="flex mt-[100px] flex-col justify-between gap-5 p-10  container-fill lg:flex-row-reverse lg:items-center lg:justify-center lg:gap-20">
        <div className="self-center border-2 borderToggle">
            <img className=' animate w-[300px] lg:w-[400px]' src='https://static.vecteezy.com/system/resources/thumbnails/016/746/979/small/freelancer-software-developer-programmer-coder-illustrator-vector.jpg'/>
        </div>
        <div className="flex flex-col items-center text-center lg:text-left lg:items-start">
            <div  className="textAnimate font-bold sm:text-[60px] leading-tight text-[44px] lg:w-[550px]">
                Front-End React <span className="text-blue-700 font-bold sm:text-[60px] leading-tight text-[44px] ">Devoloper </span>
                <img className='inline h-[60px]' src='https://www.stefantopalovic.com/static/media/waving.1bae5fcfb51082b5c2b4.png'/>
               
            </div>
            <p className='typing mt-2 text-lg text-gray-800 max-w-[480px] ' style={{fontFamily:'math'}}>Hi , I'm Ankit Singh . A passionate Front-end React Developer living in Gorakhpur</p>
            <div className="flex items-center justify-center gap-5 mt-5 logo">
                <a href='https://www.linkedin.com/in/ankit-singh-471269224/' className='duration-200 hover:scale-[1.2] hover:text-blue-700'><CiLinkedin size={35}/></a>
                <a href='https://github.com/webAnkit23' className=' duration-200 hover:scale-[1.2]  hover:text-blue-700'><LuGithub size={30}/></a>
            </div>
            <Skills />
        </div>
      
        .
    </div>
  )
}
