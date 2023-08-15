import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Container,Row,Col} from 'react-bootstrap';
import "./styles/Sats.css"
import ListCard from "asstes/listcard.png"

const Sats = () => {
  return (
    <div className='w-screen h-fit bg-custombg'>
      <div className='flex w-screen h-fit  justify-between items-center pr-5 pl-5'>
        <div className='flex flex-col  mb-1 mt-2 items-center text-center justify-center align-items-center'>
            <span className='font-bold text-lg lg:2xl font-poppins text-white '>8542+</span>
            <span className='font-bold text-lg lg:2xl bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text '>Active Members</span>
        </div>
        <div className='flex flex-col  mb-1 mt-2 items-center text-center justify-center align-items-center'>
            <span className='font-bold text-lg lg:2xl  font-poppins text-white'>8542+</span>
            <span className='font-bold text-lg lg:2xl lg:4xl  bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text'>Trusted By People</span>
        </div>
        <div className='flex flex-col  mb-1 mt-2 items-center text-center justify-center align-items-center'>
            <span className='font-bold text-lg lg:2xl lg:4xl font-poppins text-white'>330k+</span>
            <span className='font-bold text-lg lg:2xl  bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text'>Worked Done</span>
        </div>
      </div>

      {/* the two div section starts here */}
      <div className='w-screen flex flex-col lg:flex-row m-6'>
        <div className='w-1/2 flex flex-col items-center justify-center font-poppins text-white'>
          <h2>
            You do the bussiness we handle the money
          </h2>
        </div>
        <div className='w-1/2'>
        <img className="w-full max-w-full h-auto sm:w-6/2 md:w-6/2" src={ListCard} alt="Image description"/>
        </div>
      </div>
    </div>
  )
}

export default Sats