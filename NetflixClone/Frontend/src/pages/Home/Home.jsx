import "./Home.css";
import Navbar from "../../components/Navbar/Navbar";
import TitleCards from "../../components/TitleCards/TitleCards";
import MoreCards from "../../components/MoreCards/MoreCards";
import { Footer } from "../../components/Footer/Footer";

const Home = () => {
  

  return (
    <div>
      <Navbar />
      <div className="banner">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaNAfquIHObQw88-iZvwrh3QNNu8EbJUaL1g&s" />
        <div className="series">
          <p>
            <span>N</span>SERIES
          </p>
        </div>
        <div className="caption">
          <p>
            Discovering his ties to a secret ancient order, a young man living
            in modern Istanbul embarks on a quest to save the city from an
            immortal enemy.
          </p>
          <div className="btndiv">
          <a href="https://www.youtube.com/watch?v=80dqOwAOhbo"  target="_blank"><button className="btn" >
            <span class="material-symbols-outlined">play_arrow</span> Play
          </button></a>
        <a href="https://www.netflix.com/in/title/80189829" target="_blamk"><button className="btn infobtn">
            <span class="material-symbols-outlined">info</span>More Info
          </button></a>
          </div>
        </div>
        <TitleCards />
      </div>
        <div>
           <MoreCards category={"Blockbuster Movies"}/>
              <MoreCards category={"Upcoming"}/>
             <MoreCards category={"Only on Netflix"}/>
        </div>
        <Footer/>

    </div>
  );
};

export default Home;
