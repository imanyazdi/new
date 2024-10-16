import { Link } from 'react-router-dom'
import Bar from "./recip/Bar";
import "./Nav.css"
import  {Usethem}  from "../hooks/Usethem";

export default function Nav() {
    const {color}=Usethem()
    return (
        <div className='nav' style={{backgroundColor:color}} >
            <Link to="/Tamrin" className='brand'><h1>Aramesh-Shoes</h1></Link>
            <Bar />
            <Link to="Create" id='brand'><h2>Create new recipe</h2></Link>
        </div>
    )
}
