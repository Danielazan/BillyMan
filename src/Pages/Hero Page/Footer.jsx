import React from 'react'
import logo from "asstes/Solution Road New Logo.png"

const Footer = () => {
  return (
    <div className='bg-[#06080d] w-screen h-fit'>
        <div className='w-full flex flex-col items-center justify-between'>
            <div className='lg:w-1/2 h-fit w-full'>
                <div className='w-full h-auto flex items-center justify-center'>
                    <div className="rounded-full border border-solid border-black bg-white bod" style={{width:"80px", height:"80px",}}>
                        <img className="w-full max-w-full h-auto sm:w-6/2 md:w-full" src={logo} alt="Image description"/>  
                    </div>
                    
                    <span className='font-poppins ml-4 mr-2 font-bold cursor-pointer text-sm lg:text-lg flex  text-yellow-500'>Solutions Road Equipments & Sparks Ltd</span>
                    
                </div>
            </div>

            <div className=' w-full lg:w-full h-fit'>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    </div>
  )
}

export default Footer