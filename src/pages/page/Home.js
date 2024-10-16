import {useFetch} from "../hooks/fetch";
import { Link } from 'react-router-dom'

import "../page/Home.css"
export default function Home(){
    const{data, loading, eror}=useFetch("http://localhost:3000/foods")
    return(
        <div className="home">
            <h1>articles</h1>
            {loading&& <div>loading...</div> }
            {eror&& <div>{eror}</div> }
            {data&&data.map((params)=>(
                <div key={params.id} className="box">
                    <h3>{params.title}</h3>
                    <h4>{params.price}</h4>
                    <Link to={`trips/${params.id}`} >more information...</Link>
                </div>
            ))}
        </div>
    )

} 