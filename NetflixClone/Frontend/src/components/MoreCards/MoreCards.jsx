import "./MoreCards.css"
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const MoreCards = ({category}) => {

  const [movies,setMovies] = useState([])



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

  useEffect(()=>{
        getMovie()
  },[])


  const filterData = movies.filter((movie)=>movie.category === category)

  return (
    <div className="more-cards">
        <p>{category?category:"Popular on Netflix"}</p>
    <div className="card-list">
      {filterData.map((movie, index) => {
        return (
          <Link to={`/player/${movie._id}`} className="cards" key={index}>
            <img src={movie.poster}/>
            {/* <p>{movie.Title}</p> */}
          </Link>
        );
      })}
    </div>
</div>
  );
};

export default MoreCards;
