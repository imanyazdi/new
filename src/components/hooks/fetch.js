import { useEffect, useState } from "react"

export const useFetch = (url) => {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(false)
    const [eror, setEror] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)
            
            const response = await fetch(url)
            if (!response.ok) {
                setLoading(false)
                setEror(true)
            }else{
                setEror(false)
            }
            let json = await response.json()

            setLoading(false)
            setData(json)
        }
        fetchData()
    }, [url])
    return { data, loading, eror }
}