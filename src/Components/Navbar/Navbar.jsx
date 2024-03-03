import React, { useEffect, useState } from 'react'
import { RxCross2 } from "react-icons/rx";
import { FaBars } from "react-icons/fa6";
export default function Navbar({refe}) {
    const [showList ,setShowList] = useState(false);
    console.log(refe);
    const handleClick =(el) =>{
      setShowList(false);
      console.log(refe[el]);
      refe[el].current.scrollIntoView({behavior:'smooth'});

    }
  return (
    <div className='z-[100] fixed w-[100%] top-0 flex items-center justify-between h-20 p-2 pl-10 pr-10 bg-white shadow-md select-none  container-full'>
            <h1 className='text-2xl font-bold text-blue-700 duration-150 hover:text-blue-500'>Ankit.dev</h1>
            <div className={`${showList?' translate-x-[0px] z-50':'translate-x-[-100%] '} flex md:transform-none duration-500 absolute left-0 top-20 w-[100%] items-center justify-center bg-white -z-10 md:relative md:w-auto md:top-0 md:z-0 `}>
                <ul className={`md:flex  gap-5 flex-col md:flex-row items-center text-lg font-semibold text-grey-500`}>
                    <li className='flex items-center w-auto p-3 h-14'>
                        <p className='duration-150 hover:text-blue-500' onClick={() =>handleClick('homeRef')}>Home</p>
                    </li>
                    <li className='flex items-center w-auto p-3 h-14' >
                        <p   className='duration-150 hover:text-blue-500' onClick={() =>handleClick('aboutRef')}>About</p>
                    </li>
                    <li className='flex items-center w-auto p-3 h-14' >
                        <p  className='duration-150 hover:text-blue-500'onClick={() =>handleClick('projectRef')}>Projects</p>
                    </li>
                    <li className='flex items-center w-auto p-3 h-14' >
                        <p  className='duration-150 hover:text-blue-500'onClick={() =>handleClick('contactRef')}>Contact</p>
                    </li>
                </ul>
                </div>
                <div className='md:hidden' onClick={() => setShowList(prev=>!prev)}>
                  {showList?<RxCross2 size={30}/> : <FaBars size={30}/>}
                </div>
    </div>
  )
}
