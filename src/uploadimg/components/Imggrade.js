import { deleteDoc, doc } from "firebase/firestore";
import Usefirebase from "../hooks/Usefirebase"
import "./Imggrade.css";
import { db2, storage } from "../../firebase/Datadata";
import { deleteObject, ref } from "firebase/storage";
import { useState } from "react";
import { motion } from "framer-motion";
export default function Imggrade({ setclickimg }) {
  const { docs } = Usefirebase("img")
  const [showdelete,setShowdelete]=useState(false)
  const handelDelete = async (e,id,url ) => {
    e.stopPropagation()
    try {
      await deleteDoc(doc(db2,"img",id))

      const imgref=ref(storage,url)
      await deleteObject(imgref)
    } catch (err) {
      console.log(err);
    }
  }
  const [showdeleteId, setShowdeleteId] = useState(null);

return (
  <div className="box-imgs">
    <motion.div className="imgs">
      {docs && docs.map((params) => (
        <div className="img"
          key={params.id}
          onClick={() => setclickimg(params.url)}
          onMouseEnter={() => setShowdeleteId(params.id)}
          onMouseLeave={() => setShowdeleteId(null)}
          layout
        >
          <motion.img 
            src={params.url}
            alt="pictures"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          />
          {showdeleteId === params.id && ( 
            <button className="deletee"
              onClick={(e) => handelDelete(e, params.id, params.url)}
            >
              Delete
            </button>
          )}
        </div>
      ))}
    </motion.div>
  </div>
)

}
