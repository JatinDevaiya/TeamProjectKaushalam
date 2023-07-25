import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import {changeTextColor} from "./Themslice" 
import '../counter/counnter.css'

const Them = () => {
    const [color, setColor] = useState("white")
    const dispatch = useDispatch()
  return (
    <div>
        <br />
        <center>
        <input className='inpt' type="text" onChange={(e)=>{setColor(e.target.value)}}  />
        <button className="btn" onClick={()=>{dispatch(changeTextColor(color))}}>chang Text Color</button>
        </center>
    </div>
  )
}

export default Them