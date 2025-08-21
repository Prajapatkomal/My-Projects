import { useNavigate,useParams } from "react-router-dom";
import {useState,useEffect} from "react"
import "./Player.css";
import axios from "axios"


const Player = () => {
 const navigate = useNavigate()
  const [movie,setMovie] = useState([])
const params = useParams();
const id = params.id;

 const getMovie = async()=>{
    const data = await axios.get(`https://netflixapp-ssmb.onrender.com/movie/${id}`,{
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        }
      })
    console.log(data.data)
    setMovie(data.data)
  }

  useEffect(()=>{
    getMovie()
  },[])


  return (
    <div className="player">
      <span class="material-symbols-outlined" onClick={()=>navigate("/home")}>arrow_back</span>
      <iframe
        width="90%"
        height="90%"
        src={`https://www.youtube.com/embed/${movie.videoKey}`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
      <div className="player-info">
        <p>{movie.category}</p>
        <p>{movie.title}</p>
        <p>{movie.type}</p>
      </div>
    </div>
  );
};

export default Player;
