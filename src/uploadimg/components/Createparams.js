import React, { useEffect } from 'react'
import Usestorage from '../hooks/Usestorage'
import "./Createparams.css";
import {motion} from "framer-motion"
export default function Createparams({ file, setFile }) {
    const { progress, url } = Usestorage(file)
    useEffect(()=>{
        if (url) {
            setFile(null)
        }
    },[setFile,url])
    return (
        <div>
            <motion.div 
            className='progress-bar'
            initial={{width:0}}
            animate={{width: progress+10+"%"}}
            ></motion.div>
        </div>

    )
}
