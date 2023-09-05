import {useState} from 'react'
import { motion } from 'framer-motion';
import axios from 'axios';
import { AiOutlineDropbox } from "react-icons/ai";
import base from "base.js"

const SetEqui = () => {
    const [File, setFile] = useState()

    const [Modelcap, setModelcap] = useState([])
    const [ModelName, setModelName] = useState("")
    const [ModelCapcity, setModelCapcity] = useState("")

    const [NotModel, setNotModel] = useState(true)

    const [EquimentName, setEquimentName] = useState("")
    const [Description, setDescription] = useState("")

    const Models ={
        ModelName,
        ModelCapcity
    }

       const AddModel =()=>{
            setModelcap([...Modelcap, Models])
            setModelName("")
            setModelCapcity("")

            console.log(Modelcap)
            console.log(Modelcap)
        }

    const handlefile =(e)=>{
        setFile(e.target.files[0])
    }

    const handleupload =()=>{
        const formdata = new FormData()
        formdata.append("image",File)
        formdata.append("Name",EquimentName)
        formdata.append("Description",Description)
        formdata.append("Model",JSON.stringify(Modelcap))

        axios.post(`${base.url}/api/machine`,formdata,{
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          }).then((res =>{
            console.log(res.data)
        }))
    }
  return (
    <div className='w-full h-fit p-4'>
        <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className=" rounded-xl w-full"
        >
            <div className="w-full h-screen rounded-xl " style={{ border: '2px solid white' }}>
                
                <div className="w-full h-fit flex items-center justify-between p-6" >
                    <h1 className='text-2xl text-blue-500 font-poppins'>Equiment Name</h1>
                    <input 
                    className="border-b text-center border-blue-500 w-[40rem]" placeholder="Equipment" type="text"
                    style={{backgroundColor: "transparent"}}
                    value={EquimentName}
                    onChange={(e) => setEquimentName(e.target.value)}
                      />
                </div>

                <div className="w-full h-fit flex items-center justify-between p-6" >
                    <h1 className='text-2xl text-blue-500 font-poppins'>Description</h1>
                    <input 
                    className="border-b text-center border-blue-500 w-[40rem]" placeholder="Description" type="text"
                    style={{backgroundColor: "transparent"}}
                    value={Description}
                    onChange={(e) => setDescription(e.target.value)}
                      />
                </div>

                <div className="w-full h-fit flex items-center justify-between p-6  " >
                    <h1 className='text-2xl text-blue-500 font-poppins'>Add Image</h1>
                    <input className="border p-6 border-[#fdc901] rounded-xl" type="file" onChange={handlefile} />
                </div>
                

                <div className="w-full h-fit mt-2 justify-center">
                    <button className=" border border-blue-500 w-[28rem]" onClick={()=>{setNotModel(!NotModel)}}>
                        <AiOutlineDropbox className='w-[300px] ' color="#22a7f2"/>
                        Add models and Capacity for this Equipment
                    </button>

                    <div className={`${NotModel ? "hidden":"block"} w-full mt-6 h-fit text-left `}>
                        <div className="w-full h-fit flex items-center justify-between">
                        <h1 className="text-white font-poppins text-2xl">Model Name</h1>

                        <input 
                        className="border-b border-blue-500 w-[40rem]" placeholder="Model Name" type="text"
                        value={ModelName}
                        style={{backgroundColor: "transparent"}}
                        onChange={(e) => setModelName(e.target.value)}
                        />
                        </div>

                        <div className="w-full h-fit flex items-center justify-between">
                        <h1 className="text-white font-poppins text-2xl">Model Capacity</h1>

                        <input 
                        className="border-b border-blue-500 w-[40rem]" placeholder="Model Capacity" type="text"
                        style={{backgroundColor: "transparent"}}
                        value={ModelCapcity}
                        onChange={(e) => setModelCapcity(e.target.value)}
                        />
                        </div>
                           <div className="w=full h-fit flex items-center justify-center">
                           <button className="font-poppins text-white text-xl" onClick={AddModel}>
                                Add More Models
                            </button>
                           </div>
                    </div>
                </div>

                
                <button onClick={handleupload}>
                    submit
                </button>
            </div>

        </motion.div>
    </div>
  )
}

export default SetEqui