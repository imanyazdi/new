import { useEffect, useState } from "react"
import "./Create.css"
import { Link, Navigate, useNavigate } from "react-router-dom"
import { addDoc, collection } from "firebase/firestore"
import { db1 } from "../../../firebase/Datadata"
export default function Create() {
  const [title, setTitle] = useState("")
  const [time, setTime] = useState("")
  const [method, setMethod] = useState("")
  const [ingredients, setIngredients] = useState("")
  const [newingridients, setNewngridients] = useState([])
  
  const Navigate=useNavigate();
  let handel = async (e) => {
    e.preventDefault()
    const doc={title,ingredients:newingridients,method,cookingTime:time+"min"}
      try{
          const ref=collection(db1,"recipes")
            await addDoc(ref,doc)
            Navigate("/Tamrin")
      }catch(err){
        console.log(err);
      }
      
  }

  let add = ((e) => {
    e.preventDefault()
    if (ingredients && !newingridients.includes(ingredients)) {
      setNewngridients(prev => [...prev, ingredients])
      setIngredients("")
    } else { setIngredients("") }

  })

  return (
    <div className="create">
      <div className="recip"><h2>Add New Recip</h2></div>
      <form onSubmit={handel}>
        <label>
          <span>recipe Title : </span>
          <input
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            required
          />
        </label>
        <label >
          <span>ingridients : </span>
          <div className="ingridient">
            <input
              onChange={(e) => (
                setIngredients(e.target.value))}
              value={ingredients}
            />
            <button className="btnnn" onClick={add}>add</button>
          </div>
        <div className="em">
          methode:
          {newingridients.map(el => (
            <em key={el}>{el}-</em>
          ))}
        </div>
        </label>

        <label>
          <span>cooking time : </span>
          <input type="number"
            onChange={(e) => setTime(e.target.valueAsNumber)}
            value={time}
            required
          />
        </label>
        <label>
          <span>method :</span>
          <input
            onChange={(e) => setMethod(e.target.value)}
            value={method}
            required
          />
        </label>


        <span><button className="btnn">submit</button></span>
      </form>
    </div>
  )
}
