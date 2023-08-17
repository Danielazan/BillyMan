import React from 'react'
import './styles/Testimonbtn.css'
import './styles/AboutCard.css'
import './styles/TeamCard.css'
import './styles/whatpeople.css'
import './styles/TryServices.css'
const Testimony = () => {
  return (
    <div className='h-fit w-screen  '>
      {/* what people say about us */}
      
      <div className='flex flex-col lg:flex-row w-screen mt-8 items-center justify-center mb-4'>
 
      <div className='w-full lg:w-1/2 flex flex-col lg:block items-center justify-center lg:items-start lg:justify-start'>
            <div className="myCard lg:ml-28 lg:mb-4 items-center justify-center">
              <div class="innerCard">
                  <div class="frontSide">
                      <p class="title">FRONT SIDE</p>
                      <p>Hover Me</p>
                  </div>
                  <div class="backSide">
                      <p class="title">BACK SIDE</p>
                      <p>Leave Me</p>
                  </div>
              </div>
          </div>
            <p className='flex flex-col font-poppins text-[#5a5d65] lg:ml-6 text-left ml-4 mt-4 lg:mt-0  lg:text-left '>
              Everything you need to accept card payments <span>and grow your business anywhere on the planet.</span>
            </p>
            <button className=' lg:ml-20'>
                Learn More
                <div id="clip">
                    <div id="leftTop" class="corner"></div>
                    <div id="rightBottom" class="corner"></div>
                    <div id="rightTop" class="corner"></div>
                    <div id="leftBottom" class="corner"></div>
                </div>
                <span id="rightArrow" class="arrow"></span>
                <span id="leftArrow" class="arrow"></span>
            </button>
          </div>

          <div className='w-full  lg:w-1/2 lg:items-center lg:justify-center flex flex-col'>
              <div className='relative'>
                
              </div>

              <h1 className='text-white text-2xl font-poppins flex flex-col lg:text-4xl mt-6 lg:mt-0  text-center lg:text-left'>
              What people are <span>saying about us</span>
              </h1>
          </div>
          
      </div>

      {/* Teams Section */}

          <div className='w-full h-fit flex items-center justify-center'>
          <h1 className='bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text font-poppins text-6xl '>Team Members</h1>
          </div>
      <div className='w-full flex flex-col lg:flex-row items-center justify-between lg:pl-4 lg:pr-4 '>
          
        <div className="teamcard w-[280px] h-[350px] flex flex-col items-center justify-between text-left mb-3 lg:mb-0">
            <div className='rounded-full w-[150px] h-[150px] bg-black'>

            </div>
            <h1 className='text-[24px] text-white '>
              Lorem ipsum dolor sit, 
            </h1>
            <p className='text-xs font-poppins text-[#] text-left'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae eius saepe incidunt distinctio odio at ratione rerum veritatis ipsa natus accusamus aut veniam
            </p>

        </div>

        <div className="teamcard w-[280px] h-[350px] flex flex-col items-center justify-between text-left mb-3 lg:mb-0">
            <div className='rounded-full w-[150px] h-[150px] bg-black'>

            </div>
            <h1 className='text-[24px] text-white '>
              Lorem ipsum dolor sit, 
            </h1>
            <p className='text-xs font-poppins text-[#] text-left'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae eius saepe incidunt distinctio odio at ratione rerum veritatis ipsa natus accusamus aut veniam
            </p>

        </div>

        <div className="teamcard w-[280px] h-[350px] flex flex-col items-center justify-between text-left mb-3 lg:mb-0">
            <div className='rounded-full w-[150px] h-[150px] bg-black'>

            </div>
            <h1 className='text-[24px] text-white '>
              Lorem ipsum dolor sit, 
            </h1>
            <p className='text-xs font-poppins text-[#] text-left'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae eius saepe incidunt distinctio odio at ratione rerum veritatis ipsa natus accusamus aut veniam
            </p>

        </div>
      </div>

        {/* Try our services section */}

        <div className='w-full flex flex-col items-center justify-center mt-6 relative'>
          <div className="bg-black w-[200px] height-200 lg:w-[600px] lg:h-[400px]  py-5 d-flex justify-content-center align-items-center mb-20">
              <div className="obj ">
                  <div className="objchild">
                    <h1 className='text-white text-center text-2xl'>Try our services Now</h1>
                      <span className="inn6 text-white text-md">
                        <p className='font'> Everything you need to accept card payments and grow your business anywhere on the planet.</p>
                      </span>
                  </div>
              </div>
          </div>

          <div className='mt-20 w-[200px] h-[200px]'>

          </div>


        </div>

      

        
    </div>

      
  )
}

export default Testimony