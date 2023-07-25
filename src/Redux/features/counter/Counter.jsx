import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementByAmount } from "./counterSlice";
import { useState } from "react";

const Counter = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  const [incbynum, setincbynum] = useState(0)
  // console.log(incbynum,"aaa");
  return (
    <>
      <center>
        <h1
          onClick={() => {
            dispatch(increment());
          }}
        >
          <button>➕</button>
        </h1>
        <div>Count_Number : {count}</div>
        <h2
          onClick={() => {
            dispatch(decrement());
          }}
        >
          <button>➖</button>
        </h2>

        <input type="number" onChange={(e)=>{setincbynum(Number(e.target.value))}}/>
        {console.log(incbynum)}
        <span
          onClick={() => {
            dispatch(incrementByAmount(incbynum));
          }}
        >
          <button>Increment by this input field </button>
        </span>
      </center>
    </>
  );
};

export default Counter;
