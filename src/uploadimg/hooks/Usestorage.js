import { useEffect, useState } from "react"
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { db2,storage } from "../../firebase/Datadata";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
export default function Usestorage(file) {
    const[progress,setProgress]=useState(0)
    const[err,setErr]=useState(null)
    const[url,setUrl]=useState(null)
    useEffect(()=>{
      if (!file) {
      }else{
        const storageref=ref(storage,file.name) 
        const collectionref=collection(db2,"img")

        const uploadtask=uploadBytesResumable(storageref,file)
       const unsub= uploadtask.on("state_changed",(snapshot)=>{
            const precent=(snapshot.bytesTransferred/snapshot.totalBytes)*90
                setProgress(precent)
            
        },(err)=>{
            setErr(err)
        },async ()=>{
            const downloadURL=await getDownloadURL(storageref)
            setUrl(downloadURL) 
            console.log(url);
            const timeup=serverTimestamp()
            await addDoc(collectionref,{url:downloadURL,timeup})
        })
        return () =>unsub()
    }},[file])
    return {progress,url,err}
}
 