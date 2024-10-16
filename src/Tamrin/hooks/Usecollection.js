import { collection, onSnapshot } from "firebase/firestore"
import { useEffect, useState } from "react"
import { db1 } from "../../firebase/Datadata"

export  const Usecallection = (c) => {
    const [collectiondata, setCollectiondata] = useState(null)
    const [loading, setLoading] = useState(false)
    const [erroe, setError] = useState(false)
    useEffect(() => {
        setLoading(true)
        let ref = collection(db1, c)
        const unsub = onSnapshot(ref, (snapshot) => {
            if (snapshot.empty) {
                setError("error")
                setLoading(false)
            } else {
                let result = []
                snapshot.docs.forEach(doc => {
                    result.push({ id: doc.id, ...doc.data() })
                })
                setCollectiondata(result)
                setLoading(false)
            }
        })
        return () => unsub()
    }, [c])
    return { collectiondata,loading,erroe }
}