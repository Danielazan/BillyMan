import React from 'react'
import "./styles/Sats.css"
import Banner from "asstes/card.png"
import { BsStarFill,BsFillCursorFill } from "react-icons/bs";
import { MdOutlineGppGood,MdGppGood } from "react-icons/md";
import "./styles/istButton.css"
import "./styles/pyriamid.css"
import Card from "asstes/bill.png"
import './styles/joiningbox.css'
import Testimony from './Testimony';



const Sats = () => {
  return (
    <div className='w-screen h-fit bg-custombg'>
      <div className='flex w-full h-fit  justify-evenly items-center'>
        <div className='flex flex-col  mb-1 mt-2 items-center text-center justify-center align-items-center'>
            <span className='font-bold text-lg lg:2xl font-poppins text-white '>8542+</span>
            <span className='font-bold text-lg lg:2xl bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text '>Active Members</span>
        </div>
        <div className='flex flex-col  mb-1 mt-2 items-center text-center justify-center align-items-center sm:w-full'>
            <span className='font-bold text-lg lg:2xl  font-poppins text-white'>8542+</span>
            <span className='font-bold text-lg lg:2xl lg:4xl  bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text'>Trusted By People</span>
        </div>
        <div className='flex flex-col  mb-1 mt-2 items-center text-center justify-center align-items-center'>
            <span className='font-bold text-lg lg:2xl lg:4xl font-poppins text-white'>330k+</span>
            <span className='font-bold text-lg lg:2xl  bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text'>Worked Done</span>
        </div>
      </div>

      {/* the two div section starts here */}
      <div className='w-full flex flex-col lg:flex-row lg:mt-8'>

        <div className='w-screen lg:w-1/2 flex flex-col  lg:items-start justify-center font-poppins text-white lg:mr-19 lg:ml-8 lg:pr-8 '>
          <h2 className='text-white flex flex-col align-left font-poppins text=lg ml-4 lg:mr-8 mt-4 lg:mr-0 text-left'>
          You do the business, <span>we’ll handle the money.</span>
          </h2>
          <div className=' text-[#b3b4b7] text-sm font-poppins ml-4 lg:ml-0'>
            <p className='lg:mr-9 flex flex-col'>
              With the right credit card, you can improve your financial life by building credit, 
                <span>
                earning rewards and saving money. But with hundreds of credit cards on the market.
                </span> 
            </p> 
          </div>
          <button className="button w-[120px] h-[45px] mt-4 ml-6 lg:ml-0 items-center justify-center"> Button
          </button>
        </div>

        <div className='w-screen lg:w-1/2 flex flex-col items-center justify-between mt-4 lg:mt-0  lg:ml-6 lg:pr-14'>

            {/* the list card */}
            <div className='flex items-center justify-center gap-2 m-2'>
            <BsStarFill color="#00f6ff" className='text-4xl ml-4 ' />
            <section>
              <span className='text-white text-white text-xl font-poppins'>
                Rewards
              </span>
              <p className='text-[#b3b4b7] text-sm font-poppins'>
              The best credit cards offer some tantalizing combinations of promotions and prizes
              </p>
            </section>
            </div>

            <div className='flex items-center justify-center gap-2 backdrop-blur-lg bg-[#737373] bg-opacity-20 m-2 rounded-[18px] '>
            <BsFillCursorFill color="#00f6ff" className='text-4xl ml-4 ' />
            <section>
              <span className='text-white text-white text-xl font-poppins'>
                100% Secured
              </span>
              <p className='text-[#b3b4b7] text-sm font-poppins'> 
                    We take proactive steps make sure your information and transactions are secure.
                    Balance Transfer
              </p>
            </section>
            </div>

            <div className='flex items-center justify-center gap-2 m-2'>
            <MdOutlineGppGood color="#00f6ff" className='text-4xl ml-4 ' />
            <section>
              <span className='text-white text-white text-xl font-poppins'>
                 Balance Transfer
              </span>
              <p className='text-[#b3b4b7] text-sm font-poppins'>
                  A balance transfer credit card can save you a lot of money in interest charges.
              </p>
            </section>
            </div>
        </div>
      </div>

      {/* second two div section */}
      <div className='flex flex-col lg:flex-row w-full h-fit lg:mr-0 mt-8 lg:mt-6  '>
        <div className='w-full lg:w-1/2 lg:ml-14'>
           <img className=" h-auto w-full lg:mr-0 lg:w-1/2" src={Banner} alt="Image description"/>
        </div>

        <div className='w-screen lg:w-1/2 flex flex-col items-start justify-center'>
          <div class="pyramid-loader">
            <div class="wrapper">
              <span class="side side1"></span>
              <span class="side side2"></span>
              <span class="side side3"></span>
              <span class="side side4"></span>
              <span class="shadow"></span>
            </div>  
          </div>
          <h2 className='text-white flex flex-col items-start font-poppins text=lg ml-4 lg:mr-8 mt-4  text-left'>
          Easily control your <span>billing & invoicing.</span>
          </h2>
          <p className='text-[#b3b4b7] text-sm font-poppins flex flex-col ml-4 lg:ml-0 mr-10 lg:mr-0'>
          Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean neque. <span>Fusce ipsum orci rhoncus aliporttitor integer platea placerat.
            </span>
          </p>
            <div className='w-1/2'>

            </div>
          </div>
      </div>

        {/* third two div section */}

      <div className='flex flex-col lg:flex-row w-full h-fit lg:mr-0 mt-8 lg:mt-6  '>
        <div className='w-screen lg:w-1/2 flex flex-col items-start justify-center lg:mr-16 lg:mt-6'>

          <div class="loader items-center justify-center ml-28">
            <div class="loader-square"></div>
            <div class="loader-square"></div>
            <div class="loader-square"></div>
            <div class="loader-square"></div>
            <div class="loader-square"></div>
            <div class="loader-square"></div>
            <div class="loader-square"></div>
          </div>
          <h2 className='text-white flex flex-col items-start font-poppins text=lg ml-4 lg:ml-8 mt-4  text-left'>
            Find a better card deal <span>in few easy steps.</span>
          </h2>
          <p className='text-[#b3b4b7] text-sm font-poppins flex flex-col ml-4 lg:ml-8 mr-10 lg:mr-0'>
          Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
          </p>
        </div>

        <div className='w-full lg:w-1/2 lg:ml-25 lg:flex lg:items-center lg:justify-center '>
           <img className=" h-auto w-full lg:mr-0 lg:w-1/2" src={Card} alt="Image description"/>
        </div>
      </div>
        {/* Testimonial section */}

        <Testimony/>
    </div>
  )
}

export default Sats