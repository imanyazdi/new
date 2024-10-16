import First from "./first/First";
import Create from "./Tamrin/allpage/create/Create";
import Recip from "./Tamrin/allpage/recip/Recip";
import Search from "./Tamrin/allpage/search/Search";
import Tamrin from "./Tamrin/Tamrin";
import Game from "./Cgame/Game";
import Trips from './components/Trips';
import Title from "./uploadimg/components/Title";
import "./App.css";
import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import Home from "./Tamrin/allpage/Home/Home";
function App() {
  return (
    <div className="allapp">
      <BrowserRouter>
        <nav>
          <NavLink to="">Home</NavLink>
          <NavLink to="/Title">upload img</NavLink>
          <NavLink to="/Tamrin">restaurant</NavLink>
          <NavLink to="/Game">Game</NavLink>
          <NavLink to="/Trips">fillter trips</NavLink>
        </nav>
        <Routes>
          <Route path="" element={<First/>}/>
          <Route path="/Title" element={<Title />} />
          <Route path="/Game" element={<Game />} />
          <Route path="/Trips" element={<Trips />} />
          <Route path="/Tamrin/*" element={<Tamrin />}>
            <Route path="" element={<Home/>}/>
            <Route path='Create' element={<Create />} />
            <Route path='Recip/:id' element={<Recip />} />
            <Route path='Search' element={<Search />} />
          </Route>
        </Routes>

      </BrowserRouter>
    </div>
  )
}

export default App;


