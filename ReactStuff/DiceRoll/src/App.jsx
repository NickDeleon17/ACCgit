import { useState, useEffect } from 'react'
import './App.css'
import Dice from './assets/DIce'
import { rollDice } from './assets/helper'

function App() {

  const [dice1, setDice1] = useState(0)
  const [dice2, setDice2] = useState(0)
  // const [dice3, setDice3] = useState(0)
  // const [dice4, setDice4] = useState(0)
  // const [dice5, setDice5] = useState(0)
  const [total, setTotal] = useState(0)

  const rollDices = () => {
    const die1 = rollDice()
    const die2 = rollDice()
    // const die3 = rollDice()
    // const die4 = rollDice()
    // const die5 = rollDice()
    setDice1(die1)
    setDice2(die2)
    // setDice3(die3)
    // setDice4(die4)
    // setDice5(die5)

    setTotal(die1 + die2+2)
  }

  useEffect(() => {
    rollDices()
  }, [])

  return (
    < >
    <h1>Clickity Clack!</h1>
    <Dice  value={dice1} />
    <Dice value={dice2} />
    {/* <Dice value={dice3} />
    <Dice value={dice4} />
    <Dice value={dice5} /> */}
    <button onClick={rollDices}>One - two, buckle my shoe!</button>
    <h2>You rolled { total }</h2>
    </>
  )
}

export default App
