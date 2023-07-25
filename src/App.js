import "./App.css";
import Coin from "./Redux/features/coin/Coin";
import Counter from "./Redux/features/counter/Counter";
import Them from "./Redux/features/them/Them";

function App() {
  return (
    <>
     
      <Counter />
      <Coin />
      <Them />
    </>
  );
}

export default App;
