import { useState } from 'react'
import './App.css'
import meme from "./assets/sponge.jpeg"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>My Image Demo</h1>
     {/* <img style={{height: 500}}src={meme} alt="" /> */}
    </>
  )
}

export default App
