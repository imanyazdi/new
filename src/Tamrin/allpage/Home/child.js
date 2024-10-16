import { Link } from "react-router-dom";
import "./Child.css";
import React from 'react'
import Delete from "../../assets/delete.svg";
import { deleteDoc, doc } from "firebase/firestore";
import { db1 } from "../../../firebase/Datadata";

export default function Child({ props }) {
    const handeldelete = async (id) => {
        try {
            const ref = doc(db1, "recipes", id)
            await deleteDoc(ref)

        } catch (err) {
            console.log(err);
        }
    }
    
    return (
        <div className="child">
            {props.map((prop) => (
                <div className="cart" key={prop.id}>
                    <h1>{prop.title}</h1>
                    {console.log(prop.ingredients)}
                    <h2>{`${prop.ingredients}`}</h2>
                    <h4>{prop.method}</h4>
                    <h3>({prop.cookingTime})</h3>
                    <img
                        className="deletef"
                        src={Delete}
                        
                        onClick={() => { handeldelete(prop.id) }}
                    />
                    <Link to={`Recip/${prop.id}`} ><button>cook this</button></Link>
                </div>
            ))}
        </div>
    )
}
