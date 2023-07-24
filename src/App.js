import "./App.css";
import Coin from "./Redux/features/coin/Coin";
import Counter from "./Redux/features/counter/Counter";
import Them from "./Redux/features/them/Them";

function App() {
  return (
    <>
      {/* <center style={{color:"red",padding:"50px",fontSize:"50px"}}>Hello Kaushalam...How are You</center>
    <h1>Good Afternoon</h1> */}
      <Counter />
      <Coin />
      <Them />
    </>
  );
}

export default App;
