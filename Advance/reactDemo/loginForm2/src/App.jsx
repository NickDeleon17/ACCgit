import { useState } from 'react'
import './App.css'
import { personObj, greeting } from './helper';

function App() {
  // const [fname, setFname] = useState("Nick")
  // const [age, setAge] = useState(35)
  // const [pw, setPw] = useState("")

  const [person, setPerson] = useState(personObj);

  return (
    <form action="/getdata" method="get">
    <h1>{greeting}</h1>
    <label>first name</label>
    <input type="text" name="" id=""/>
    <label>age</label>
    <input type="number" name="" id="" />
    <label>password</label>
    <input type="password" name="" id="" />
    <button type='sumbit'>Submit</button>


    </form>

    )
}

export default App
