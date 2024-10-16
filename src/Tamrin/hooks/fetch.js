import { useEffect, useState } from "react"

export const useFetch = (url ,method="GET") => {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [eror, setEror] = useState(false)
    const [options, setOptions] = useState(null)

    const postData=(postData)=>{
        setOptions({
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(postData)
        })
    }
    useEffect(() => {
        const fetchData = async (fetchoption) => {

            const response = await fetch(url,{...fetchoption})
            if (!response.ok) {
                setEror(true)
            } else {
                setEror(false)
                
            }
            let json = await response.json()
            
            setLoading(false)
            setData(json)
        }
        if (method==="GET") {
            fetchData()
        }
        if (method==="POST" && options) {
            fetchData(options)
        }
    }, [url,method,options])
    return { data, loading, eror, postData }
}