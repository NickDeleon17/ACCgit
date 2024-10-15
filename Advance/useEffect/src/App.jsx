import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  // setCount(count + 1)

  useEffect(() => {
    if (count < 5) {
      setCount(count + 1)
    }
  }, [count]);



  return (
    <div>
      <p>MY USE EFFECT COUNTER: {count}</p>
      COUNT: {count}
    </div>
  );
}

export default App
