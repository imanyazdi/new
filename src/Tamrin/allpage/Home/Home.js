import Child from "./child";
import "./Home.css"

import { Usecallection } from "../../hooks/Usecollection";
export default function Home() {


  const {collectiondata:data ,loading,erroe}=Usecallection("recipes")
  return (
    <div className="home">
      {erroe&&<p>dont find information...</p>}
      {loading && <p>loading...</p>}
      {data && <Child props={data}/>}
    </div>
  )
}
 