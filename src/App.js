import "../../TeamProjectKaushalam/src/Redux/features/counter/counnter.css";
import Coin from "./Redux/features/coin/Coin";
import Counter from "./Redux/features/counter/Counter";
import Them from "./Redux/features/them/Them";

function App() {
  return (
    <>
     
     <div className="ctrn">

      <Counter />
      <Coin />
      <Them />
     </div>
    </>
  );
}

export default App;
