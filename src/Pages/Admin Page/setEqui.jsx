import {useState} from 'react'
import { motion } from 'framer-motion';
import axios from 'axios';

const SetEqui = () => {
    const [File, setFile] = useState()

    const handlefile =(e)=>{
        setFile(e.target.files[0])
    }

    const handleupload =()=>{
        const mecInfo={
            Name:"model4",
            Description:"wonderful forntend",
            Model:"hmmm"
        }

        const formdata = new FormData()
        formdata.append("image",File)
        formdata.append("Name","model4")
        formdata.append("Description","wonderful forntend")
        formdata.append("Model","hmmm")

        axios.post("http://localhost:7000/api/machine",formdata,{
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          }).then((res =>{
            console.log(res.data)
        }))
    }
  return (
    <div className='w-full p-4'>
        <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className=" rounded-xl w-full"
        >
            <div className="w-full h-screen rounded-xl " style={{ border: '2px solid white' }}>
                <input type="file" onChange={handlefile} />

                <button onClick={handleupload}>
                    submit
                </button>
            </div>

        </motion.div>
    </div>
  )
}

export default SetEqui