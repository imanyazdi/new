
import Home from "./allpage/Home/Home";
import Nav from "./allpage/Nav";
import "./tamrin.css"
import Createback from './allpage/Createback';
import { Usethem } from './hooks/Usethem';
import { Outlet } from "react-router-dom";


export default function Tamrin() {
  const{mode}=Usethem()
  return (
    <div className={`zpp ${mode}`}>
        <Nav></Nav>
        <Createback/> 
        <Outlet></Outlet>
    </div>
  )
}
