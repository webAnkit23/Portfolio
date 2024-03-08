import React from 'react'
import './About.css'
import Translate from '../Animations/Translate';
export default function About() {
    const text ='FRONT-END DEVOLOPER';
    
  return (
   

    <div  id='about' className="pt-[120px] overflow-hidden min-h-[100vh] z-0 flex justify-center items-center  flex-col gap-[120px] lg:flex-row container-full lg:mt-[120px] bg-gray-300 p-5 sm:p-12 ">
      <Translate>
        <div className=' z-0 relative max-w-[370px] max-h-[300px] h-[340px] rounded shadow-sm'>
            <img className='w-[100%] h-[100%] rounded shadow-sm ' src='https://image.spreadshirtmedia.com/image-server/v1/mp/products/T1459A839PA3861PT28D1047395429W6002H10000/views/1,width=1200,height=630,appearanceId=839,backgroundColor=F2F2F2/eat-sleep-code-repeat-coding-programming-sticker.jpg'></img>
            <div>
            <div className='absolute tt right-[-70px] bottom-[-70px] '>
                   <div className=' hover:translate-x-[-300px] duration-1000 border-2 relative bg-white rounded-full h-[200px] w-[200px] flex items-center justify-center'>
                      <div className=' rotate absolute w-[100%] h-[100%]'>
                        {text.split('').map((character,i) =>{
                            return <span key={i} className={`absolute left-[50%] text-[20px]  spa text-gray-500 font-semibold`} style={{transform:`rotate(${i*17}deg)`}}>{character}</span>
                        })}
                      </div>
                      <img className='w-[110px]' src='https://img.freepik.com/premium-vector/coder-developer-concentrated-working-project-developing-programming-coding-technologies_569013-336.jpg'></img>
                   </div>  
               </div>
            </div>
        </div>
        </Translate>
        <Translate>
        <div className='max-w-[450px]'>
          <h1 className='font-bold text-blue-500 sm:text-2xl '>About me</h1>
          <h2 className='mt-2 text-[30px] font-semibold'>Front-end Devoloper Based in Gorapkhpur , India</h2>
          <p className='mt-2  text-[17px] font-mono font-medium sm:text-[19px] text-gray-500'>Hey everyone , My name is Ankit Singh and I'm a Frontend Devoloper . My passion is a to create amazing  interface for websites .</p>
          <p className='mt-2  text-[17px] font-mono font-medium sm:text-[19px] text-gray-500'>Currently i make my sites using ReactJs with combination of tailwind css.</p>
          <p className='mt-2  text-[17px] font-mono font-medium sm:text-[19px] text-gray-500'>So if you're a fellow developer, a potential client, or someone who shares a passion for technology, I'd love to connect and explore how we can work together to turn ideas into reality.</p>
        </div>
        </Translate>
    </div>
   
  )
}
