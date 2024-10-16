import { useContext } from "react"
import "./Createback.css"
import { Them } from "../Context/Themcontext"
import { Usethem } from "../hooks/Usethem"
import Icon from "../assets/sun.svg";

const colorbox = ["rgb(1, 58, 34)", "rgb(49, 12, 83)", "rgb(187, 10, 99)"]
export default function Createback() {
  const { change,changemode,mode } = Usethem()
 function handelmode() {
  changemode(mode==="dark"?"light":"dark")
 }
  return (
    <div className="thembox">
      <div className="them">
        {colorbox.map((color) => (
          <div key={color}
            onClick={() => change(color)}
            style={{ backgroundColor: color }}
          />

        ))}
      </div>
      <div className="mode">
      <img src={Icon}
        onClick={handelmode}
        style={{filter:mode==="dark"? "invert(100%)": "invert(10%)" }}
        />
      </div>
    </div>
  )
}
