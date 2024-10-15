import { useState, useEffect } from 'react'
import axios from 'axios'
import BasicTable from './Components/Table'
import './App.css'


const App = () => {
  const [data, setData] = useState([]);
  const [showTable, setShowTable] = useState(false);

  const handleSubmit = () => {
    axios.get('https://swapi.dev/api/people')
    .then(response =>{
      setData(response.data.results);
      setShowTable(true);
    })
    .catch(error => console.error("it's not you, it's me", error));
  };

  const handleReset = () =>{
    setData([]);
    setShowTable(false);
  };

  return (
    <>
    <button onClick={handleSubmit}>Click for good time</button>
    <button onClick={handleReset}>Quit</button>
    {showTable && <BasicTable data={data}/>}
    </>
  )
}

export default App
