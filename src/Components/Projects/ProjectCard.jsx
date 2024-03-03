import React from 'react'
import { FaReact } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
export default function ProjectCard({project}) {
  return (
    <div className='flex flex-col items-center justify-center gap-5 p-4 border-2 rounded shadow-lg md:flex-row'>
    <a href={project.website_link}>
    <img className='w-[270px] lg:w-[400px] rounded-lg border-0  sm:w-[350px]  object-contain shadow-lg' src={project.img_src} />
    </a>
<div>
  <div className='flex items-center justify-center gap-1'>
    <h1 className='font-mono text-2xl font-bold text-blue-700'>{project.name}</h1>
    <img className='inline h-16' src={project.icon}></img>
  </div>
  <p className='max-w-[300px] sm:max-w-[350px] text-gray-700 font-semibold  text-center'>{project.about} </p>
   <div className=' w-[100%] flex items-center justify-center'>
   <FaReact className='self-center mt-4 rotAnimate' color='#61dbfb' size={50}/>  
   </div>
   <a href={project.github} className='flex items-center gap-2 hover:text-blue-700 text-[15px] font-semibold text-xl w-[100%] justify-center mt-[10px]'>Code <FaGithub /></a>
</div>
</div>
  )
}
