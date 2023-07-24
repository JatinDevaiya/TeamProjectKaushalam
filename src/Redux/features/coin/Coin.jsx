import React from "react";
import { useSelector } from "react-redux";

const Coin = () => {
  const coin = useSelector((state) => state.counter.count);
  const color = useSelector((state) => state.them.color)
  console.log(color);
  return (
    <center>
      <div style={{color:color}}>Coin : {coin}</div>
    </center>
  );
};

export default Coin;
