import React from 'react';

import './Projects.css';
import project_datas from '../../datas/project_data';
import ProjectCard from './ProjectCard';
export default function Projects() {
  return (
    <div className="container-full border-2 p-[20px] pt-[50px] flex flex-col lg:pl-[70px] lg:pr-[70px] gap-[30px] ">
      <h1 className='text-[30px] font-bold  text-blue-700 '>Projects</h1>
      {project_datas.map((project,i) =>{
          return <ProjectCard key={i} project ={project}/>
      })}
    </div>
  )
}
