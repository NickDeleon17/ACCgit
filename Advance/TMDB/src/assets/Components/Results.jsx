import { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card.jsx";
import Error from "./Error.jsx";
import { useLocation } from "react-router-dom";
import "../Results.css";
import Sad from "../Sad.jpg";

function Results() {
  const VITE_TMDB_API_TOKEN = import.meta.env.VITE_TMDB_API_TOKEN;
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const fetchMovies = async () => {
      const searching = new URLSearchParams(location.search);
      const search = searching.get("search");
      try {
        if (search) {
          const response = await axios.get(
            "https://api.themoviedb.org/3/search/movie",
            {
              params: {
                query: search,
                api_key: import.meta.env.VITE_TMDB_API_TOKEN,
                language: "en-US",
                page: "1",
              },
              headers: {
                accept: "application/json",
              },
            }
          );
          setMovies(response.data.results);
        } else {
          const response = await axios.get(
            "https://api.themoviedb.org/3/movie/now_playing",
            {
              params: {
                language: "en-US",
                page: "1",
                api_key: VITE_TMDB_API_TOKEN,
              },
              headers: {
                accept: "application/json",
              },
            }
          );
          setMovies(response.data.results);
          console.log(response.data.results);
        }
      } catch (err) {
        setError(true);
        console.error(err);
      }
    };

    fetchMovies();
  }, [VITE_TMDB_API_TOKEN, location.search]);

  if (error) return <Error />;

  return (
    <div className="results">
      {movies.length > 0 ? (
        movies.map((movie) => <Card key={movie.id} movie={movie} />)
      ) : (
        <p style={{ fontSize: "28px", color: "#646cff" }}>
          That movie does not exist.
          <a href="/">
            {" "}
            <u>Return Home</u>
          </a>
          <img src={Sad} alt="sad" style={{ width: "1500px" }} />
        </p>
      )}
    </div>
  );
}

export default Results;
