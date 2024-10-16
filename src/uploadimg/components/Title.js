import React, { useState } from 'react'
import "./Title.css"
import Form from './upload img/Form'
import Imggrade from './Imggrade'
import Modal from './Modal'
export default function Title() {
    const[clickimg,setclickimg]=useState(null)
    return (    
        <div className='title'>
            <h1>openGram</h1>
            <h2>your pictures</h2>
            <p>Lorem ipsum dolor sit,
                amet consectetur adipisicing elit.
                Velit fugiat rem repellendus modi expedita,
                quasi hic magni repellat harum eius iste sequi natus,
                quidem sit totam at laborum quibusdam aliquid.
            </p>
            <Form></Form>
            <Imggrade setclickimg={setclickimg}></Imggrade>
            {clickimg &&< Modal clickimg={clickimg} setclickimg={setclickimg}/>}
        </div>
    )
}
  