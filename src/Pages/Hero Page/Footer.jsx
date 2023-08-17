import React from 'react'
import logo from "asstes/Solution Road New Logo.png"

const Footer = () => {
  return (
    <div className='bg-[#06080d] w-full h-fit'>
        <div className='w-full '>
            <div className='lg:w-1/2 h-fit w-full'>
                <div className='w-full flex items-center justify-evenly'>
                    <div className="rounded-full border border-solid border-black bg-white bod" style={{width:"40px", height:"40px",}}>
                        <img className="w-full max-w-full h-auto sm:w-6/2 md:w-full" src={logo} alt="Image description"/>  
                    </div>
                    
                    <span className='font-poppins font-bold cursor-pointer text-sm text-yellow-500'>Solutions Road</span>
                    <span className='font-poppins font-bold cursor-pointer text-yellow-500 text-[10px]'>Equipments & Sparks Ltd</span>
                </div>
            </div>
            <div className='w-6/2 h-fit'></div>
        </div>
    </div>
  )
}

export default Footer