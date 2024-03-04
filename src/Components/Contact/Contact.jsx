import React from 'react'
import { MdOutlineLocationOn } from "react-icons/md";
import { BsLinkedin } from "react-icons/bs";
import { HiOutlineMailOpen } from "react-icons/hi";
import { FaInstagram } from "react-icons/fa";
export default function Contact() {
  return (
    <div className="flex flex-col items-center justify-center pt-[30px] pb-[30px] sm:p-[30px]  bg-gray-300 container-fill">
     <h1 className='text-[40px] text-blue-500 font-bold'>Contact</h1>
     <h2 className='flex gap-[5px] text-[25px] items-end font-semibold'>Don't be Shy! Hit me up! <img className='inline w-[20px]' src='https://static-00.iconduck.com/assets.00/backhand-index-pointing-down-emoji-emoji-1316x2048-3mlweser.png'></img></h2>
      <div className ='flex flex-wrap mt-[35px] items-center justify-center gap-3'>
    <a href='/'>
     <div className='duration-200 hover:scale-[1.1] flex w-auto gap-5 p-5 rounded shadow bg-slate-100'>
        <div className='w-[40px] duration-200 hover:scale-[1.1] h-[40px] flex items-center justify-center shadow  rounded-full'>
          <MdOutlineLocationOn className=' hover:text-blue-500' size={25} />
        </div>
       
        <div >
            <h3 className='font-semibold text-blue-500 '>Location</h3>
            <p className='font-normal text-gray-500 cursor-pointer hover:text-green-700'>Gorakhpur,India</p>
        </div>
     </div>
     </a>

     <a href='https://www.linkedin.com/in/ankit-singh-471269224/'>
     <div className='duration-200 hover:scale-[1.1] flex w-auto gap-5 p-5 rounded shadow bg-slate-100'>
    
        <div className='w-[40px] duration-200 hover:scale-[1.1]  h-[40px] flex items-center justify-center shadow  rounded-full'>
          <BsLinkedin color='rgb(0,110,181)' size={25} />
        </div>
       
        <div >
            <h3 className='font-semibold text-blue-500 '>LinkedIn</h3>
            <p className='font-normal text-gray-500 cursor-pointer hover:text-green-700'>Ankit Singh</p>
        </div>
     </div>
     </a>
     <a className='duration-200 hover:scale-[1.1]'>
     <div className='flex w-auto gap-5 p-5 rounded shadow bg-slate-100'>
        <div className='w-[40px] duration-200 hover:scale-[1.1] h-[40px] flex items-center justify-center shadow  rounded-full'>
          <FaInstagram color='#8909ee' size={25} />
        </div>
       
        <div >
            <h3 className='font-semibold text-blue-500 '>Instagram</h3>
            <p className='font-normal text-gray-500 cursor-pointer hover:text-green-700'>Ankit Singh_x0</p>
        </div>
     </div>
     </a>
     <a>
     <div className=' duration-200 hover:scale-[1.1] flex w-auto gap-5 p-5 rounded shadow bg-slate-100'>
        <div className='w-[40px] duration-200 hover:scale-[1.2]  h-[40px] flex items-center justify-center shadow  rounded-full'>
          <HiOutlineMailOpen className='cursor-pointer hover:text-blue-500' size={25} />
        </div>
       
        <div >
            <h3 className='font-semibold text-blue-500 '>Email</h3>
            <p className='font-normal text-gray-500 cursor-pointer hover:text-green-700'>www.ankitsingh2323@gmail.com</p>
        </div>
     </div>
     </a>
     </div>
    </div>
  )
}
