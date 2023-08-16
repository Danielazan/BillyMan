import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Container,Row,Col} from 'react-bootstrap';
import "./styles/Sats.css"
import Banner from "asstes/card.png"
import { BsStarFill,BsFillCursorFill } from "react-icons/bs";
import { BiCheckSquare } from "react-icons/bi";
import { MdOutlineGppGood,MdGppGood } from "react-icons/md";
import "./styles/istButton.css"


const Sats = () => {
  return (
    <div className='w-screen h-fit bg-custombg'>
      <div className='flex w-screen h-fit  justify-between items-center pr-5 pl-5'>
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
      <div className='w-screen flex flex-col lg:flex-row lg:m-6'>

        <div className='w-screen lg:w-1/2 flex flex-col  lg:items-start justify-center font-poppins text-white lg:mr-19 lg:ml-8 '>
          <h2 className='text-white flex flex-col align-left font-poppins text=lg ml-4 lg:mr-8 mt-4 lg:mr-0 text-left'>
          You do the business, <span>we’ll handle the money.</span>
          </h2>
          <div className=' text-[#b3b4b7] text-sm font-poppins ml-4 lg:ml-0'>
          With the right credit card, you can improve your financial life by building credit, earning rewards and saving money. But with hundreds of credit cards on the market.
          </div>
          <button className="btn w-[120px] h-[45px] mt-4 items-center justify-center"> Button
          </button>
        </div>

        <div className='w-screen lg:w-1/2 flex flex-col items-center justify-between  lg:mx-7 lg:px-14'>

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
      <div className='flex flex-col lg:flex-row w-screen h-fit mr-2 lg:mr-0  lg:mx-24'>
        <div className='w-full lg:w-1/2'>
           <img className=" h-auto w-full mr-4 lg:mr-0 lg:w-1/2" src={Banner} alt="Image description"/>
        </div>

        <div className='w-full lg:w-1/2 flex flex-col items-start justify-center'>
          <h2 className='text-white flex flex-col items-start font-poppins text=lg ml-4 lg:mr-8 mt-4 lg:mr-0 text-left'>
          Easily control your <span>billing & invoicing.</span>
          </h2>
          <span className='text-[#b3b4b7] text-sm font-poppins ml-4 lg:ml-0'>
            With the right credit card, you can improve your financial life by building credit, earning rewards and saving money. But with hundreds of credit cards on the market.
          </span>
          </div>
      </div>
    </div>
  )
}

export default Sats