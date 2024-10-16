import { Routes, Route,Link } from 'react-router-dom'
import Child from "./child";
export default function Abot() {
  return (
    <div>
      <h2>About</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus recusandae autem doloremque, deserunt velit nemo magnam facere eaque excepturi nobis veritatis blanditiis aut ullam magni cum, distinctio nesciunt error eveniet!</p>
      <Link to="child"><button>more...</button></Link>
      <Routes>
        <Route path='/child' element={<Child />} />
      </Routes>
    </div>
  )
} 