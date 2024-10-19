import React, { useEffect } from 'react'
import "./Trips.css";
import { useState } from 'react'
import { useFetch } from './hooks/fetch'
export default function Trips() {
  const [url, setUrl] = useState("http://localhost:3000/trip")
  const { data, loading, eror } = useFetch(url)
  const [left, setLeft] = useState(false)
  const [right, setRight] = useState(false)
  const [point, setPoint] = useState(true)

  useEffect(() => {
    if (!left) {
      setLeft(data)
    } else {
      setRight(data)
    }

  }, [data])
  const handelclick = (url) => {
    setUrl(`http://localhost:3000/trip?${url}`)
  }
  const pointer = () => {
    setPoint(false)
  }


  return (
    <div>
      
      {point &&
        <div className='point'>
          <p>This is a test page created to utilize the "useState" and "useEffect" hooks.<p />
            <p>please install json link:</p>
            <p>C:\Users\Desktop\fetch\src\components\date\db.json</p>
          </p>
          <button onClick={pointer}>ok</button>
        </div>
      }
    {!point&&
          <div className='tripboxs'>
          <div className='left'>
            {loading && <p>loading...</p>}
            {eror && <p>eror...</p>}
            {left && left.map((event) => (
              <div key={event.id} className='trip-child'>
                <h2>{event.title}</h2>
                <h3>{event.price}$</h3>
                <h3>{event.loc}</h3>
              </div>
            ))}
          </div>
            <div className='trip-btns'>
              <button className='trip-btn' onClick={() => handelclick("loc=iran")}>Iranian trips</button>
              <button className='trip-btn' onClick={() => handelclick("loc=turky")}>Turkish trips</button>
              <button className='trip-btn' onClick={() => handelclick("")}>all trips</button>
            </div>
          <div className='right'>
            {right && right.map((event) => (
              <div key={event.id} className='trip-child'>
                <h2>{event.title}</h2>
                <h3>{event.price}$</h3>
                <h3>{event.loc}</h3>
              </div>
            ))}
          </div>
        </div>}
    </div>
  )
}
