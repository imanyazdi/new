import Abot from './page/Abot';
import Contact from './page/Contact';
import Home from "./page/Home";
import './Appage.css';
import Trips from "./page/trips"
import { BrowserRouter, Router, Route, Routes, NavLink, Navigate } from 'react-router-dom'
import { useState } from 'react';

// import Trips from './components/Trips';
function Appage() {
  const [login]=useState(true)
  return (
    <div className="App">
      {/* <Trips></Trips> */}
      
        <nav>
          <NavLink to='/'>Home</NavLink>
          <NavLink to="/Contact">Contact</NavLink>
          <NavLink to="/Abot"> Abot</NavLink>
        </nav>
        <Routes>

          <Route path='/' element={<Home />} />
          <Route path='/Contact' element={<Contact />} />
          <Route path='/Abot/*' element={<Abot />} />
          <Route path='/trips/:id' element={<Trips />} />
          <Route path='*' element={<Navigate to="/" />} />
          <Route 
          path='/mmm' 
          element={login ? <p> hello koskesh</p> : <Navigate to="/"/>} />
        </Routes>
     
    </div>
  );
}

export default Appage;
