//https://github.com/NickDeleon17/ACCgit/tree/main/Advance/Final2
import { useState } from 'react'
import './App.css'
import ChangeColor from './Components/background'
import InputField from './Components/inputField'

function App() {

  return (
    <>

    <div className='changeColor'>
    <ChangeColor />
    </div>

    <div className='inputFeild'>
    <InputField />
    </div>

    </>
  )
}

export default App
