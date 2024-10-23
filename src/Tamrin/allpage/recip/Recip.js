import { useParams } from "react-router-dom"
import "./Recip.css"
import { useEffect, useState } from "react"
import { doc,onSnapshot, updateDoc } from "firebase/firestore"
import { db1 } from "../../../firebase/Datadata";
export default function Recip() {
  const { id } = useParams()
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [erroe, setError] = useState(false)
  useEffect(() => {
    setLoading(true)
    const ref = doc(db1, "recipes", id)
    const unsub=onSnapshot(ref,(snap)=>{
      if (snap.empty) {
        setError("erroe")
      }else{
        setLoading(false)
        setData(snap.data())
      }
    })
    return()=>unsub()
  }, [id])
  const haldlechange = async () => {
  try {
    const ref=doc(db1,"recipes",id)
    await updateDoc(ref,{
      title:"document"
    })    
  } catch (err) {
    console.log(err);
  }
      
  }
  return (

    <div className="recipid">
      {loading && <h2>loading...</h2>}
      <div className="recepise">
        {data &&
          <>
            <h1 className="title">{data.title}</h1>
            <ul className="ingredients">
              {data.ingredients.map(param => (
                <li key={param}>{param}</li>
              ))}
            </ul>
            <h3 className="lorem">{data.method}</h3>
            <h2 className="time">{data.cookingTime}</h2>
            <h2 className="changertitle" ><button onClick={() => haldlechange()}>change data</button></h2>
          </>
        }
      </div>
    </div>
  )
}
