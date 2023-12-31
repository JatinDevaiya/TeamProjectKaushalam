import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementByAmount } from "./counterSlice";
import { useState } from "react";
import './counnter.css'

const Counter = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  const [incbynum, setincbynum] = useState(0)
  // console.log(incbynum,"aaa");
  return (
    <>
      <center >
        <h1
          onClick={() => {
            dispatch(increment());
          }}
        >
          <button >➕</button>
        </h1>
        <div>Count_Number : {count}</div>
        <h2
          onClick={() => {
            dispatch(decrement());
          }}
        >
          <button>➖</button>
        </h2>

        <input className="inpt" type="number" onChange={(e)=>{setincbynum(Number(e.target.value))}}/>
        {console.log( "aaaaa", incbynum)}
        <span
          onClick={() => {
            dispatch(incrementByAmount(incbynum));
          }}
        >
          <button className="btn">Increment by this input field </button>
        </span>
      </center>
    </>
  );
};

export default Counter;
