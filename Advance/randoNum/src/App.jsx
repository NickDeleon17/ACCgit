import React, { useState } from 'react';
import "./App.css";

function App() {
  const [number, setNumber] = useState(null);
  const [number2, setNumber2] = useState(null);

  const getRandomNumber = () => {
    const randomNum = Math.floor(Math.random() * 6) + 1;
    setNumber(randomNum);
    const randomNum2 = Math.floor(Math.random() *6) + 1;
    setNumber(randomNum)
    setNumber2(randomNum2)
  };
    const totaldice = number+number2;




  return (
    <>
      <div className="casino">
        <button id="casinoBtn"  onClick={getRandomNumber}>Random Number button</button>

        <div style={{fontWeight: 'bold', fontSize: '30px', color: 'green'}}>Number is: {number}</div>
        <div style={{fontWeight: 'bold', fontSize: '30px', color: 'green'}}>Number is: {number2}</div>
        <div style={{fontWeight: 'bold', fontSize: '30px', color: 'green'}}>Number is: {totaldice}</div>
      
      </div>
    </>

  );
}

export default App;
