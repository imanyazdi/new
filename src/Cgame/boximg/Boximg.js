
import { useEffect, useState } from "react"
import cover from "../img/cover.png"
import "./Boximg.css"
 
export default function Boximg({ params, handelchoice, filip ,again}) {
    const [filipped, setFilipped] = useState(false)
    let handelclick = () => {
        setFilipped(true)
        setTimeout(() => {
            setFilipped(false)
        }, 1200);
        handelchoice(params)
    }

    return (
        <>
            <div onClick={handelclick}
             className={params.status ||again|| filipped || !filip ? "filipped" : ""}
             >
                <img className='back' src={params.src} alt="nn" />
                <img onClick={() => {

                }} className='front' src={cover} alt="nn" />
            </div>
        </>
    )
}

