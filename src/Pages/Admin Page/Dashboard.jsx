import {useEffect,useState} from 'react'
import { motion } from 'framer-motion';
import { HiOutlineSearch } from "react-icons/hi";
import "./styles/containt.css"
import axios from "axios"
import MachinaryContext from "Hooks/useMachinaryContext"
import base from "base.js"

const Dashboard = () => {
    const today = new Date();
    const options = { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' };
    const formattedDate = today.toLocaleDateString('en-US', options);

    const URL = base.local

    const [remechains, setremechains] = useState([])
    const {mechines, dispatchMachine} = MachinaryContext()

    const [showAllCards, setShowAllCards] = useState(false);
    
    useEffect(() => {
        axios.get(`${URL}/api/machine`).then((res)=>{
            const json = res.data
    
            console.log(json)
            
             dispatchMachine({type:"Display Machines",payload:json})
          })
          
          const remechains = mechines.reverse()

          const visibleCards = remechains.slice(0, 3);

          setremechains(visibleCards)

        console.log(remechains)
      
    }, [dispatchMachine])
    
    


  return (
    <div className="w-full p-4 h-screen">
                <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className=" rounded-xl w-full"
                >
                    <div className="w-full h-[4rem] pt-2 rounded-xl " style={{ border: '2px solid white' }}>
                        <div className='w-full flex items-center justify-between pr-4 '>
                            
                            <div className='relative flex items-center justify-between w-fit h-fit border border-gray-300 rounded-xl focus:border-blue-500 bg-[#f0f3f463]'>
                                <input
                                    type="text" 
                                    placeholder="Search for equipment"

                                    className="pl-6  py-2 
                                    bg-transparent rounded-xl focus:outline-none focus:ring-1 focus:ring-blue-500 text-black"
                                />
                                <div className="inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                    <HiOutlineSearch color='red' className="w-5 h-5 text-2xl  mr-4" />
                                </div>
                            </div>
                            <div className="">
                                    <h3>{formattedDate}</h3>
                                </div>
                        </div>

                        
                    </div>
                    
                    {/* second div */}
                    <div className="w-full h-[22rem] rounded-xl mt-6" style={{ border: '2px solid white' }}>
                         <div className="flex items-center justify-between w-full px-4 py-3">
                            <div className="flex flex-col w-1/2 ">
                                <h2 className='text-4xl font-poppins text-white'>List Item</h2>

                                <h3 className='text-sm'>117 <span className='text-gray-300 font-poppins text-sm'>
                                    Procees to resolve them
                                    </span></h3>
                            </div>
                            <div className='flex items-center justify-evenly'>
                                <h2 className='flex flex-col'>
                                    94,
                                    <span className="text-sm">
                                        Done
                                    </span>
                                </h2>
                                {/* vertical Line */}
                                <div className="w-0.5 bg-red-600 h-[4rem]"></div>
                                {/* vertical line ends here */}
                                <h2 className='flex flex-col '>
                                    94,
                                    <span className="text-sm">
                                        Done
                                    </span>
                                </h2>
                            </div>
                         </div>

                         {/* the table contents starts here */}

                         
                                
                            <div className="overflow-scroll w-full h-[14rem] shadow-md md:rounded-xl px-4 py-3 main-cont rounded-lg">
                                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                        <tr>
                                            <th scope="col" className="px-6 py-3">
                                                Product name
                                            </th>
                                            <th scope="col" className="px-6 py-3">
                                                Color
                                            </th>
                                            <th scope="col" className="px-6 py-3">
                                                Category
                                            </th>
                                            <th scope="col" className="px-6 py-3">
                                                Price
                                            </th>
                                            <th scope="col" className="px-6 py-3">
                                                Action
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {mechines && remechains.map(rem =>{
                                            
                                        })}
                                        <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                Apple MacBook Pro 17"
                                            </th>
                                            <td className="px-6 py-4">
                                                Silver
                                            </td>
                                            <td className="px-6 py-4">
                                                Laptop
                                            </td>
                                            <td className="px-6 py-4">
                                                $2999
                                            </td>
                                            <td className="px-6 py-4">
                                                <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                            </td>
                                        </tr>
                                        <tr className="border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
                                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                Microsoft Surface Pro
                                            </th>
                                            <td className="px-6 py-4">
                                                White
                                            </td>
                                            <td className="px-6 py-4">
                                                Laptop PC
                                            </td>
                                            <td className="px-6 py-4">
                                                $1999
                                            </td>
                                            <td className="px-6 py-4">
                                                <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                            </td>
                                        </tr>
                                        <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                Magic Mouse 2
                                            </th>
                                            <td className="px-6 py-4">
                                                Black
                                            </td>
                                            <td className="px-6 py-4">
                                                Accessories
                                            </td>
                                            <td className="px-6 py-4">
                                                $99
                                            </td>
                                            <td className="px-6 py-4">
                                                <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                            </td>
                                        </tr>
                                        <tr className="border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
                                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                Google Pixel Phone
                                            </th>
                                            <td className="px-6 py-4">
                                                Gray
                                            </td>
                                            <td className="px-6 py-4">
                                                Phone
                                            </td>
                                            <td className="px-6 py-4">
                                                $799
                                            </td>
                                            <td className="px-6 py-4">
                                                <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                Apple Watch 5
                                            </th>
                                            <td className="px-6 py-4">
                                                Red
                                            </td>
                                            <td className="px-6 py-4">
                                                Wearables
                                            </td>
                                            <td className="px-6 py-4">
                                                $999
                                            </td>
                                            <td className="px-6 py-4">
                                                <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                        
                    </div>
                    <div className="w-full h-[10rem] rounded-xl mt-4" style={{ border: '2px solid white' }}></div>

                </motion.div>
                </div>
  )
}

export default Dashboard