import { useLocation } from "react-router-dom"
import "./Search.css"
import  {Usecallection}  from "../../hooks/Usecollection"
import Child from "../Home/child"
import { useEffect, useState } from "react"

export default function Search() {
  const[data,setData]=useState(null)
  const location=useLocation()
  const query=new URLSearchParams(location.search)
  const urlll=query.get("q")
  const url=Usecallection("recipes")
useEffect(()=>{
  if (url.collectiondata) {
    const rest=url.collectiondata.filter((param)=>param.title===urlll)
    setData(rest)
  }
},[url.collectiondata,urlll])
console.log(data);
  return (
    <div className="search">
      <h1>result for "{urlll}"</h1>
        {data&&<Child props={ data}/>}
    </div>
  )
}
