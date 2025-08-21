import axios from "axios";
import "./TitleCards.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const TitleCards = () => {
  const [movies, setMovies] = useState([]);

  const getMovie = async () => {
    try {
      const data = await axios.get("https://netflixapp-ssmb.onrender.com/movie", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      setMovies(data.data);
    } catch (error) {
      console.log(error);
    }
  };
  

  useEffect(() => {
    getMovie();
  }, []);

  return (
    <div className="title-cards">
      <p>Popular on Netflix</p>
      <div className="card-list">
        {movies.map((movie, index) => {
          return (
            <Link to={`/player/${movie._id}`} className="cards" key={index}>
              <img src={movie.poster} />
              {/* <p>{movie.title}</p> */}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default TitleCards;
