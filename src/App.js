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
import { AnimatePresence, motion } from "framer-motion"
function App() {
  return (
    <BrowserRouter>
      <Childapp></Childapp>
    </BrowserRouter>
  )

  function Childapp() {
    const pageTransition = {
      initial: { opacity: .9, x: -20 },
      animate: { opacity: 1, x: 0 },
      exit: { opacity: .1, x: -10 },
      transition: { duration: 0.4 }
    };
    const location = useLocation();
    const ishome = location.pathname === "/";
    return (
      <div className="allapp">
        <div className='background'></div>
        <nav className={ishome ? "sss" : ""} >
          <NavLink to="/">Home</NavLink>
          <NavLink to="/Title">upload img</NavLink>
          <NavLink to="/Tamrin">restaurant</NavLink>
          <NavLink to="/Game">Game</NavLink>
          <NavLink to="/Trips">fillter trips</NavLink>
        </nav>
        <AnimatePresence mode="wait">
        <Routes location={location }key={location.pathname}>
          <Route path="/" element={<motion.div {...pageTransition}><First /></motion.div> } />
          <Route path="/Title" element={<motion.div {...pageTransition}><Title /></motion.div>} />
          <Route path="/Game" element={<motion.div {...pageTransition}><Game /></motion.div> } />
          <Route path="/Trips" element={<motion.div {...pageTransition}><Trips /></motion.div> } />
          <Route path="/Tamrin/*" element={<Tamrin />}>
            <Route path="" element={<Home />} />
            <Route path='Create' element={<Create />} />
            <Route path='Recip/:id' element={<Recip />} />
            <Route path='Search' element={<Search />} />
          </Route>
        </Routes>
        </AnimatePresence>
      </div>

    )
  }
}

export default App;


