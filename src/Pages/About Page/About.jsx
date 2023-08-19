import React from 'react'
import Navbars from 'components/Navbars'
import Aboutbg from 'asstes/Aboutbg.jpg'
import './styles/Aboutbgbtn.css'

const About = () => {
  return (
    <div className='w-screen flex flex-col '>
      <div className=' hidden md:block bg-cover bg-no-repeat w-full max-w-full h-[70vh]  md:w-full' style={{ backgroundImage: `url(${Aboutbg})`, backgroundPosition:`center`}} >
        <Navbars/>
            {/* the hero side of the about page */}
          <div className='flex flex-col w-full items-center justify-center '>
            <h1 className='flex flex-col text-4xl lg:text-6xl items-center justify-center font-poppins text-white '>We are changing the <span>Whole Game</span></h1>

              {/*  */}
            <div className='flex w-1/6 h-fit items-center justify-between gap-4 '>
              <button class="btn h-[50px]">
                  Button
              </button>

              <button class="btn h-[50px]">
                  Button
              </button>
            </div>
          </div>
          </div>
          {/* the div section that contains the our stroy */}
          <div className='w-ful h-fit flex flex-col lg:flex-row '>
              <div className='w-1/2 flex flex-col items-start justify-between'>
                  <h2>Our Story</h2>
                  <p className='text-sm text-white font-poppins '>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit illo animi voluptate mollitia numquam non reprehenderit similique inventore rerum sint, nemo commodi reiciendis magni aut illum odio ipsam quasi neque? Minus, velit delectus saepe inventore sapiente corrupti non? At, atque!
                  </p>
              </div>
              <div></div>
      </div>
        
        
    </div>
  )
}

export default About