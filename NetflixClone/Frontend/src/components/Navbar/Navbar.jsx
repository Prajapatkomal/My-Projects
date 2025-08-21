import { useEffect,useRef } from "react";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";


const Navbar = () => {

  const navRef = useRef()
  const navigate = useNavigate()

useEffect(()=>{
     window.addEventListener("scroll",()=>{
        if(window.scrollY >= 80){
            navRef.current.classList.add("nav-dark")
        }else{
             navRef.current.classList.remove("nav-dark")
        }
     })
},[])


function logout(){
  localStorage.clear()
  navigate("/")
}

  
  return (
    <div ref={navRef} className="navbar">
      <div className="navbar-left">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaPq8Rvsxh6jgR6izg26xaHuyTlkHynRiWLw&s" />
        <ul>
          <li>Home</li>
          <li>TV shows</li>
          <li>Movies</li>
          <li>New & Popular</li>
          <li>My List</li>
        </ul>
      </div>
      <div className="navbar-right">
        <span class="material-symbols-outlined">search</span>
        <span class="material-symbols-outlined">notifications</span>
        <div className="profile">
          <p>profile</p>
        <span class="material-symbols-outlined">arrow_drop_down</span>
         <div className="dropdown">
           <p onClick={logout}>Sign out of Netflix</p>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
