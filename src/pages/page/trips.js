import { useNavigate, useParams } from 'react-router-dom'
import { useFetch } from "../hooks/fetch";
import { useEffect } from 'react';
export default function Trips() {
    const { id } = useParams()
    const url = "http://localhost:3000/trips/" + id
    const { data, loading, eror } = useFetch(url)
    const navigate=useNavigate()
    useEffect(()=>{
        if (eror) {
           setTimeout(() => {
            navigate("/")
           }, 1000);
        }
    })
    return (
        <div>
            <p>welcome to page-{id}</p>
            {loading && <div>loading...</div>}
            {data &&
                <div>
                    <p>your choise is : {data.title}</p>
                    <p>prise is :{data.price}</p>
                    <p>this contry :{data.loc}</p>
                </div>
            }

        </div>
    )
}