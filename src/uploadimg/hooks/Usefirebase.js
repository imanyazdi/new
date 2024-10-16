import { collection, onSnapshot, orderBy, query, setDoc } from "firebase/firestore"
import { useEffect, useState } from "react"
import {db2} from "../../firebase/Datadata";
export default function Usefirebase(name) {
    const [docs, setDocs]=useState([])
    useEffect(()=>{
        const q=query(collection(db2,name),orderBy("timeup","desc"))
        const unsub =onSnapshot(q,(snap)=>{
            let document=[]
            snap.forEach(element => {
                document.push({...element.data(),id : element.id} )
            });    
            setDocs(document)
        })
        return ()=>unsub()
    },[name])
  return {docs}
}
