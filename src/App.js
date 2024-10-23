import React from 'react';
import First from "./first/First";
import Create from "./Tamrin/allpage/create/Create";
import Recip from "./Tamrin/allpage/recip/Recip";
import Search from "./Tamrin/allpage/search/Search";
import Tamrin from "./Tamrin/Tamrin";
import Game from "./Cgame/Game";
import Trips from './components/Trips';
import Title from "./uploadimg/components/Title";
import "./App.css";
import { BrowserRouter, NavLink, Route, Routes, useLocation } from "react-router-dom";
import Home from "./Tamrin/allpage/Home/Home";
import { AnimatePresence, motion } from "framer-motion";

function App() {
  return (
    <BrowserRouter>
      <Childapp />
    </BrowserRouter>
  );

  function Childapp() {
    const pageTransition = {
      initial: { opacity: .1, x: -30 },
      animate: { opacity: 1, x: 0 },
      exit: { opacity: .1, x: -10 },
      transition: { duration: 0.4 }
    };
    const pageTransition2= {
      exit: { opacity: .1, x: -30 },
      transition: { duration: .5 }
    };
    const location = useLocation();
    const ishome = location.pathname === "/";

    return (
      <div className="allapp">
        <div className='background'></div>
        <nav className={`navbar navbar-expand-lg ${ishome ? "sss" : "navbar-light bg-light"}`}>
          <div className="container-fluid">
            <NavLink className="navbar-brand" to="/">Home</NavLink>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav me-auto">
                <li className="nav-item">
                  <NavLink className="nav-link" to="/Title">Upload Image</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/Tamrin">Restaurant</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/Game">Game</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/Trips">Filter Trips</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<motion.div {...pageTransition}><First /></motion.div>} />
            <Route path="/Title" element={<motion.div {...pageTransition2} ><Title /></motion.div>} />
            <Route path="/Game" element={<motion.div {...pageTransition2}><Game /></motion.div>} />
            <Route path="/Trips" element={<motion.div {...pageTransition}><Trips /></motion.div>} />
            <Route path="/Tamrin/*" element={<Tamrin />}>
              <Route path="" element={<Home />} />
              <Route path='Create' element={<Create />} />
              <Route path='Recip/:id' element={<Recip />} />
              <Route path='Search' element={<Search />} />
            </Route>
          </Routes>
        </AnimatePresence>
      </div>
    );
  }
}

export default App;
