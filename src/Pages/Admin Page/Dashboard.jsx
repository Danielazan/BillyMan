import React from 'react'
import { motion } from 'framer-motion';
const Dashboard = () => {
  return (
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
                    <div className="w-full h-[22rem] rounded-xl mt-6" style={{ border: '2px solid white' }}>
                         
                    </div>
                    <div className="w-full h-[10rem] rounded-xl mt-4" style={{ border: '2px solid white' }}></div>

                </motion.div>
                </div>
  )
}

export default Dashboard