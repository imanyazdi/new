import { useState } from "react";
import "./Form.css";
import Createparams from "../Createparams";
export default function Form() {
  const [err, setErr] = useState(null)
  const [file, setFile] = useState(null)
  const type = ["image/jpeg", "image/png","image/webp"]
  const channgehandler = (e) => {
    let select = e.target.files[0]
    console.log(select.type);
    if (select && type.includes(select.type)) {
      setErr(null)
      setFile(select)
    } else {
      setFile(null)
      setErr("your select is not img")
    }
  }
  return (
    <form >
      <label className="label">
         <input type="file" onChange={channgehandler} />
         <span className="plusss">+</span>
      </label>
      <div className="output">
        {err && <div className="err">{err}</div>}
        {file && <Createparams file={file} setFile={setFile}/>}
      </div>
    </form>
  )
}
 