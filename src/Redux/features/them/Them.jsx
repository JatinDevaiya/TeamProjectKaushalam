import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import {changeTextColor} from "./Themslice" 

const Them = () => {
    const [color, setColor] = useState("white")
    const dispatch = useDispatch()
  return (
    <div>
        <br />
        <center>
        <input type="text" onChange={(e)=>{setColor(e.target.value)}}  />
        <button onClick={()=>{dispatch(changeTextColor(color))}}>chang Text Color</button>
        </center>
    </div>
  )
}

export default Them