import React from "react"
import { useState } from "react"
import "./Bar.css"
import { useNavigate } from "react-router-dom"

export default function Bar() {
    let navigate=useNavigate()
    const [term,setTerm]=useState("")
   
    let handelsearch=(e)=>{
        e.preventDefault()
        navigate(`/Tamrin/search?q=${term}`)
    }
    return (
    <div className="bar">
        <form onSubmit={handelsearch}>
            <label ><h5>search:</h5></label>
            <input 
                type="text"
                onChange={(e)=>setTerm(e.target.value)}
                required
             />
        </form>
    </div>
  )
}
