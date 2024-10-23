import { Link } from 'react-router-dom'
import Bar from "./recip/Bar";
import "./Nav.css"
import  {Usethem}  from "../hooks/Usethem";

export default function Nav() {
    const {color}=Usethem()
    return (
        <div className='nav' style={{backgroundColor:color}} >
            <Link to="/Tamrin" className='brand'><h2>Aramesh-Restaurant</h2></Link>
            <Bar />
            <Link to="Create" id='brand'><h3>Create new recipe</h3></Link>
        </div>
    )
}
