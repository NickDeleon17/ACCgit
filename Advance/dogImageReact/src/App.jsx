import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import DogImageCard from "./components/dogImageCard";
import {Stack, Button} from '@mui/material/';



const App = () => {
  // consume an api
  // http request
  //  click a button - get an image of a dog

  // using an api
  // .fetch() utilze an endpoint
  // .then get a response - parse if good else throw error
  // .then do something with data
  // .catch handle errors

  // using axios - a widely used HTTP client for making REST API calls.
  // called skeleton or scaffolding

  // axios.method(endpoint)
  // .then - response
  // .then - error

  const endpoint = `https://dog.ceo/api/breeds/image/random`;
  const [dogImage, setDogImage] = useState("");

  // useEffect to show data from API
  useEffect(() => {
    axios
      .get(endpoint)
      .then((response) => {
        setDogImage(response.data.message);
      })
      .catch((error) => {
        console.error("Error: ", error.message);
      });
  }, []);

  // use button to show new image from API
  const handleClick = () => {
    console.log("Clicked");
    axios
      .get(endpoint)
      .then((response) => {
        setDogImage(response.data.message);
      })
      .catch((error) => {
        console.error("Error: ", error.message);
      });
  };

  return (
    <>
      <h1>Random dog</h1>
      <button onClick={handleClick}>Click for dog</button>
      <DogImageCard imagePath={dogImage}/>
      <Stack direction="row" spacing={2}>

      <Button color="info" variant="outlined">Secondary</Button>

      <Button variant="outlined" color="success">
        Success
      </Button>

      <Button variant="outlined" color="error">
        Error
      </Button>

    </Stack>

    </>
  );
};

export default App;
