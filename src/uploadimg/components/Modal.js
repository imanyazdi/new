import "./Modal.css"
import { motion } from "framer-motion";
export default function Modal({ clickimg, setclickimg }) {
    const handel=(e)=>{
       if (e.target.classList.contains("back-drop")) {
           setclickimg(null)
       }else{
       }
    }
    return (
        <motion.div 
        className="back-drop" 
        onClick={handel}
        initial={{opacity:0}}
        animate={{opacity:1}}
        >
            <motion.img
            src={clickimg}
             alt="pppp"
             initial={{y:"-10vh"}}
             animate={{y:0}}
             />
        </motion.div>
    )
}
