import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementByAmount } from "./counterSlice";

const Counter = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  return (
    <>
      <center>
        <h1
          onClick={() => {
            dispatch(increment());
          }}
        >
          <button>+</button>
        </h1>
        <div>Count_Number : {count}</div>
        <h2
          onClick={() => {
            dispatch(decrement());
          }}
        >
          <button>-</button>
        </h2>

        <h2
          onClick={() => {
            dispatch(incrementByAmount(count));
          }}
        >
          <button>Inc by 10</button>
        </h2>
      </center>
    </>
  );
};

export default Counter;
