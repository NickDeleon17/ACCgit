import { useState } from 'react'
import * as React from 'react';
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom'
import './App.css'
import Home from "./component/home"
import About from "./component/about"
import Contact from "./component/contact"
import {Button} from '@mui/material/';
import axios from 'axios'
import Moviecard from './component/movieCard';


function App() {
  const{ VITE_TMDB_API_TOKEN } = process.env;
  const [movies, setMovies] = useState([])
  const baseurl="https://api.themoviedb.org/3"
  const handleClick=() =>{

    const options = {
      method: 'GET',
      url: 'https://api.themoviedb.org/3/movie/now_playing',
      params: {language: 'en-US', page: '1'},
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${VITE_TMDB_API_TOKEN}`
      }
    };

    axios(options)
    .then(response => {
      console.log(response)
      // response.data.results => array of movie objects
      let movieArray = response.data.results.map((movie)=> {
       return <Moviecard doggy ={movie}/>
      })
      setMovies(movieArray)
  })
    .catch(err => console.log(err))
  }

  return (
    <Router>
    <div className="App">
      <div className="container">
    <ul>
      <li><Link to="/home">Home</Link></li>
      <li><Link to="/about">about</Link></li>
      <li><Link to="/contact">contact</Link></li>
    </ul>
    <hr />
    <Routes>
    <Route path="/home" element={<Home/>} />
    <Route path="/about" element={<About/>} />
    <Route path="/contact" element={<Contact/>} />
    </Routes>
    <Button onClick={handleClick}  variant="contained" color="success">Click Me</Button>
    {movies}
      </div>
    </div>
  
    </Router>
  )
}

export default App


// tmdb key:
// eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZWViYmUyNTg3OThjM2ZiODg5Yzg1NmQ2ZDQwNzExYyIsIm5iZiI6MTcyNzg3OTE2Ni4yMzE0MzYsInN1YiI6IjY2ZmQ1NzJiZTI2YTUzYzEyMjU5NjE1YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.wWa5J1mFVlzlRi3LBKJ0CLOIaq6aC2Ts7Nr-E9sfBAE
