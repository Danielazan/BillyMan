import React from 'react'
import Navbars from '../../components/Navbars'
import HeroImg2 from "asstes/mobileMachine.jpg"
import { AiFillGitlab } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';
import Footer from './Footer'

import "./styles/Hero.css"
import Sats from './Sats';

const Hero = () => {
  const navigate = useNavigate();
 
  const hanleClick= ()=>{
    console.log("Clicked")
  }



  return (
    <div  className='flex flex-col w-screen  justify-between items-center' >
      <div className=' hidden md:block bg-cover bg-no-repeat w-full max-w-full h-screen  md:w-full' style={{ backgroundImage: `url(${HeroImg2})`, backgroundPosition:`center`}} >
      
      <Navbars/>
        <div className='justify-center w-screen flex items-center flex-col h-[60%]'>
            <h1 className="text-9xl font-bold text-white">
                <span className="bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">Dream</span>
                 Home
            </h1>
            <h2 className="text-9xl font-bold text-white">In Boston</h2>
        </div>
        <div className='justify-center w-screen flex align-center flex flex-col items-center mt-6 '>
            <a href="#stats">
            <AiFillGitlab color='red' className="flex  justify-center items-end bounce text-6xl" onClick={()=>hanleClick()}/>
            </a>
        </div>
      </div>

      <div className="block md:hidden w-full bg-cover bg-no-repeat w-full max-w-full h-screen justify-center items-center " style={{ backgroundImage: `url(${HeroImg2})`, backgroundPosition:`center`}}>
        <Navbars/>

        <div className='w-full flex sm:justify-center sm:items-center flex-col h-[60%] flex-col justify-center items-center'>
            <h1 className="text-6xl font-bold text-white items-center">
                <span className="bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">Dream</span>
                 Home
            </h1>
            <h2 className="text-6xl font-bold text-white">In Boston</h2>
        </div>
        <div className='justify-center w-screen flex align-center flex flex-col items-center mt-6 '>
        <a href="#stats">
            <AiFillGitlab color='red' className="flex  justify-center items-end bounce text-6xl" onClick={()=>hanleClick()}/>
            </a>
        </div>
      </div>
      <section id="stats">
      <Sats />
      </section>
      
        <section>
            <Footer/>
        </section>
    </div>
    
  )
}

export default Hero