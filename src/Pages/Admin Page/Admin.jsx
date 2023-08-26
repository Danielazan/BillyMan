import Sidebar from 'components/sidebar'
import {useState} from 'react'
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from "react-icons/gi";
import { motion } from 'framer-motion';
import { AiFillHome } from "react-icons/ai";
import {BsFillPeopleFill } from "react-icons/bs";
import { MdShoppingBag,MdNotificationsActive } from "react-icons/md";
import  Navbar  from 'components/Navbars';
import { SiBlockchaindotcom } from "react-icons/si";
import { BsFillProjectorFill,BsBrowserSafari } from "react-icons/bs";
import { BiSolidLogOut } from "react-icons/bi";
import { BsFillGrid3X3GapFill,BsFillFileExcelFill} from "react-icons/bs";


import logo from "asstes/Solution Road New Logo.png"

const Admin = () => {
    const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className='w-full h-fit bg-[#081225]'>
        <Navbar/>

        <div className='w-full flex items-center pl-4 md:hidden'>
            {!isOpen && <GiHamburgerMenu color="white" className="text-4xl mt-2" onClick={()=>toggleSidebar()} />}
            {isOpen && <BsFillFileExcelFill color="white" className="text-4xl mt-2" onClick={()=>toggleSidebar()} />}
        </div>

        <div className="w-full flex flex-col md:flex-row">
            <div className='w-1/6 h-fit  ml-4 hidden md:block' >
                <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className=" rounded-xl w-full"
                >
                    <div className='w-full bg-black rounded-xl flex flex-col  h-fit'style={{ border: '2px solid white' }}>

                        <div className='w-full mt-3 p-4'>
                            <h1 className='text-white font-poppins text-[1.6rem]'>Solution Roads</h1>
                        </div>

                        <div className='w-full items flex flex-col justify-between  gap-10 mb-3 pl-4'>
                            <div className='flex items-center justify-start gap-2'>
                                <SiBlockchaindotcom/>
                                <Link to="/" className='no-underline text-white font-poppins'>Dashboard</Link>
                            </div>
                            <div className='flex items-center justify-start gap-2'>
                                <BsFillPeopleFill/>
                                <Link to="/" className='no-underline text-white font-poppins'>Admins</Link>
                            </div>
                            <div className='flex items-center justify-start gap-2'>
                                <BsFillProjectorFill/>
                                <Link to="/" className='no-underline text-white font-poppins'>Projects</Link>
                            </div>
                            <div className='flex items-center justify-start gap-2'>
                                <BsBrowserSafari/>
                                <Link to="/" className='no-underline text-white font-poppins'>Services</Link>
                            </div>
                            <div className='flex items-center justify-start gap-2'>
                                <MdNotificationsActive/>
                                <Link to="/" className='no-underline text-white font-poppins'>Notification</Link>
                            </div>
                            <div className='flex items-start justify-start gap-2'>
                                <BiSolidLogOut/>
                                <Link to="/" className='no-underline text-white font-poppins'>Login Out</Link>
                            </div>
                            
                        </div>

                        <div className='items-center h-fit w-full flex flex-col '>
                        <div className='w-full h-auto flex flex-col items-center text-center justify-center'>
                            <div className="rounded-full border border-solid border-black bg-white bod" style={{width:"80px", height:"80px",}}>
                                <img className="w-full max-w-full h-auto sm:w-6/2 md:w-full" src={logo} alt="Image description"/>  
                            </div>
                            
                            <span className='font-poppins ml-4 mr-2 font-bold cursor-pointer text-sm lg:text-lg flex  text-yellow-500'>Solutions Road Equipments & Spars Ltd</span>
                            
                        </div>
                    </div>

                    </div>
                </motion.div>
            </div>

            {/* Mobile view */}

            <div className={`${isOpen ? 'block' : 'hidden'}`} >
                <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className=" rounded-xl w-full"
                >
                    <div className='w-full bg-black rounded-xl flex flex-col  h-fit'style={{ border: '2px solid white' }}>

                        <div className='w-full mt-3 p-4'>
                            <h1 className='text-white font-poppins text-[1.6rem]'>Solution Roads</h1>
                        </div>

                        <div className='w-full items flex flex-col justify-between  gap-10 mb-3 pl-4'>
                            <div className='flex items-center justify-start gap-2'>
                                <SiBlockchaindotcom/>
                                <Link to="/" className='no-underline text-white font-poppins'>Dashboard</Link>
                            </div>
                            <div className='flex items-center justify-start gap-2'>
                                <BsFillPeopleFill/>
                                <Link to="/" className='no-underline text-white font-poppins'>Admins</Link>
                            </div>
                            <div className='flex items-center justify-start gap-2'>
                                <BsFillProjectorFill/>
                                <Link to="/" className='no-underline text-white font-poppins'>Projects</Link>
                            </div>
                            <div className='flex items-center justify-start gap-2'>
                                <BsBrowserSafari/>
                                <Link to="/" className='no-underline text-white font-poppins'>Services</Link>
                            </div>
                            <div className='flex items-center justify-start gap-2'>
                                <MdNotificationsActive/>
                                <Link to="/" className='no-underline text-white font-poppins'>Notification</Link>
                            </div>
                            <div className='flex items-start justify-start gap-2'>
                                <BiSolidLogOut/>
                                <Link to="/" className='no-underline text-white font-poppins'>Login Out</Link>
                            </div>
                            
                        </div>

                        <div className='items-center h-fit w-full flex flex-col '>
                        <div className='w-full h-auto flex flex-col items-center text-center justify-center'>
                            <div className="rounded-full border border-solid border-black bg-white bod" style={{width:"80px", height:"80px",}}>
                                <img className="w-full max-w-full h-auto sm:w-6/2 md:w-full" src={logo} alt="Image description"/>  
                            </div>
                            
                            <span className='font-poppins ml-4 mr-2 font-bold cursor-pointer text-sm lg:text-lg flex  text-yellow-500'>Solutions Road Equipments & Spars Ltd</span>
                            
                        </div>
                    </div>

                    </div>
                </motion.div>
            </div>
            {/* Second half of the the Admin page begins here */}
            <div  className=" w-full md:w-5/6 h-screen">
                <div className="w-full p-4">
                <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className=" rounded-xl w-full"
                >
                    <div className="w-full h-[4rem] rounded-xl " style={{ border: '2px solid white' }}>
                        <div className='w-full'>
                            <h1>Hello</h1>
                        </div>
                    </div>
                    <div className="w-full h-[22rem] rounded-xl mt-6" style={{ border: '2px solid white' }}></div>
                    <div className="w-full h-[10rem] rounded-xl mt-4" style={{ border: '2px solid white' }}></div>

                </motion.div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Admin