import { useState } from 'react'
import './App.css'


function App() {
  const initPerson ={
    fname: "",
    lname: "",
    age: 21
  }

  const [personData, setPersonData] = useState({initPerson})

  const handleChange = (event) =>{
    setPersonData({ ...personData, [event.target.name]: event.target.value})
  }

  const handleSumbmit=(event) =>{
    event.preventDefault()
    console.log("Sending Data: ", personData)
    setPersonData(initPerson)
  }

  const handleReset = () =>{
    setPersonData({ firstName: '', lastName: '' });
  };

  return (
    <>
    {/* submission of a form */}
    <form onSubmit={handleSumbmit}>
      <label htmlFor="fname" placeholder='First Name:'>
        First Name:
      <input type="text"
         name="fname"
         id="fname" 
         value={personData.fname} 
         required placeholder='First Name' 
         autoComplete='off'
         minLength={2}
         maxLength={5}
         onChange={handleChange}/>
      </label>
      <br />
      <label htmlFor="lname">
        Last Name:
      <input type="text" 
      name="lname" id="lname" 
      value={personData.lname} 
      placeholder="Last Name" 
      autoComplete='off'
      maxLength={5}
      onChange={handleChange}/>
      </label>
      <br />
      <label htmlFor="age">
        Age:
      <input type="number" 
      name="age" 
      id="age" 
      value={personData.age} 
      placeholder='Age' 
      min={21}
      max={99}
      onChange={handleChange}/>
      </label>
      <br />
      <button>Submit</button>
      <button onClick={handleReset}>Reset</button>
    </form>
    </>
  )
}

export default App
