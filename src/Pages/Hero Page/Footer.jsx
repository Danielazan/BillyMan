import React from 'react'
import logo from "asstes/Solution Road New Logo.png"
import './styles/FooterCard.css'
import './styles/FooterSpinner.css'


const Footer = () => {
  return (
    <div className='bg-[#06080d] w-screen h-fit'>
        <div className='w-full flex flex-col items-center justify-between'>
            <div className=' h-fit w-full flex '>
                <div className='w-full h-auto flex items-center justify-center'>
                    <div className="rounded-full border border-solid border-black bg-white bod" style={{width:"80px", height:"80px",}}>
                        <img className="w-full max-w-full h-auto sm:w-6/2 md:w-full" src={logo} alt="Image description"/>  
                    </div>
                    
                    <span className='font-poppins ml-4 mr-2 font-bold cursor-pointer text-sm lg:text-lg flex  text-yellow-500'>Solutions Road Equipments & Sparks Ltd</span>
                    
                </div>
            </div>

            <div className=' w-full lg:w-full h-fit'>
                <div className='w-full hidden lg:flex  '>
                    <div className="flex card  flex-row w-full items-center justify-between  h-fit">
                            
                        <div className="card2 flex flex-col items-center justify-between lg:w-6/12 w-full h-fit">
                            <div className="spinner ml-6 mt-3  ">
                                <div className="spinnerin"></div>
                            </div>
                            <h1 className='text-center'>Follow Us</h1>

                            <div className='flex items-center justify-between ml-4'>
                                <div className='flex flex-col list-none text-white font-poppins text-sm '>
                                    <li className='text-white text-left'>Home</li>
                                    <li>Contact</li>
                                    <li>Email</li>
                                </div>

                                <div className='list-none text-white font-poppins text-sm flex flex-col text-left items-start justify-start ml-4'>

                                    <li className='text-white text-left'>Home</li>
                                    <li>Contact</li>
                                    <li>Email</li>
                                </div>
                                
                            </div>

                            
                            <p className="text-white">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet consequatur unde recusandae, architecto corrupti iusto!
                            </p>

                        </div>

                        <div className="card2 flex flex-col items-center justify-between lg:w-6/12 w-full h-fit">
                            <div className="spinner ml-6 mt-3 ">
                                <div className="spinnerin"></div>
                            </div>
                            <h1>Stay Secure</h1>

                            <div className='list-none text-left'>
                                <li>Home</li>
                                <li>Contact</li>
                                <li>Email</li>
                            </div>
                            <p>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet consequatur unde recusandae, architecto corrupti iusto!
                            </p>

                        </div>

                        <div className="card2 flex flex-col items-center justify-between lg:w-6/12 w-full h-fit">
                            <div className="spinner ml-6 mt-3 ">
                                <div className="spinnerin"></div>
                            </div>
                            <h1>Stay Secure</h1>

                            <div className='list-none'>
                                <li>Home</li>
                                <li>Contact</li>
                                <li>Email</li>
                            </div>
                            <p>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet consequatur unde recusandae, architecto corrupti iusto!
                            </p>

                        </div>
                    </div>
                </div>

                {/* for mobile view */}
                <div className='w-full flex   lg:hidden  '>
                    <div className="flex card  flex-col w-full items-center justify-between  h-fit">
                            
                        <div className="card2 flex flex-col items-center justify-between lg:w-6/12 w-full h-fit">
                            <div className="spinner ml-6 mt-3  ">
                                <div className="spinnerin"></div>
                            </div>
                            <h1 className='text-center'>Stay Secure</h1>

                            <div className='list-none text-white font-poppins text-sm flex flex-col text-left items-start justify-start ml-4'>

                                <li className='text-white text-left'>Home</li>
                                <li>Contact</li>
                                <li>Email</li>
                            </div>
                            <p>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet consequatur unde recusandae, architecto corrupti iusto!
                            </p>

                        </div>

                        <div className="card2 flex flex-col items-center justify-between lg:w-6/12 w-full h-fit">
                            <div className="spinner ml-6 mt-3 ">
                                <div className="spinnerin"></div>
                            </div>
                            <h1>Stay Secure</h1>

                            <div className='list-none text-left'>
                                <li>Home</li>
                                <li>Contact</li>
                                <li>Email</li>
                            </div>
                            <p>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet consequatur unde recusandae, architecto corrupti iusto!
                            </p>

                        </div>

                        <div className="card2 flex flex-col items-center justify-between lg:w-6/12 w-full h-fit">
                            <div className="spinner ml-6 mt-3 ">
                                <div className="spinnerin"></div>
                            </div>
                            <h1>Stay Secure</h1>

                            <div className='list-none'>
                                <li>Home</li>
                                <li>Contact</li>
                                <li>Email</li>
                            </div>
                            <p>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet consequatur unde recusandae, architecto corrupti iusto!
                            </p>

                        </div>
                    </div>
                </div>

                
            </div>
        </div>
    </div>
  )
}

export default Footer