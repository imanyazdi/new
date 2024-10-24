import { Link } from "react-router-dom";
import "./Child.css";
import React, { useContext } from 'react'
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
        <div className="row child">
            {props.map((prop) => (
                <div className="col-8 col-sm-5 col-md-5 p-3 my-5 mx-auto  cart" key={prop.id}>
                    <h2>{prop.title}</h2>
                    <h3>{`${prop.ingredients}`}</h3>
                    <h5>{prop.method}</h5>
                    <h5>({prop.cookingTime})</h5>
                    <img
                        className="deletef"
                        src={Delete}
                        
                        onClick={() => { handeldelete(prop.id) }}
                    />
                    <Link to={`Recip/${prop.id}`} ><button >cook this</button></Link>
                </div>
            ))}
        </div>
    )
}
