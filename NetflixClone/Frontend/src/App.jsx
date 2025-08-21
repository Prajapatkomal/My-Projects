
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home/Home'
import Login from './pages/Home/Login/Login'
import Player from './pages/Home/Player/Player'
import AddMovie from './pages/Home/addMovie/AddMovie'


function App() {
  return (
    <Routes>
         <Route path="/home" element={<Home/>}/>
           <Route path="/" element={<Login/>}/>
           <Route path="/player/:id"  element={<Player/>}/>
           <Route path="/addMovie" element={<AddMovie/>}/>
    </Routes>   

  )
}

export default App
