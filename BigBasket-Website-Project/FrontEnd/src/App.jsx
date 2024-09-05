import { Route, Routes } from 'react-router-dom'
import Footer from './Component/Footer/Footer.jsx'
import Navbar from './Component/Navbar/Navbar.jsx'
import Home from './Component/Pages/Home.jsx'
import FruitsAndVegetables from './Component/Pages/fruitsAndVegetables.jsx'
import Beverages from './Component/Pages/Beverages.jsx'
import CleaningAndHousehold from './Component/Pages/CleaningAndHousehold.jsx'
import DairyProducts from './Component/Pages/DairyProducts.jsx'
import BeautyAndHygiene from './Component/Pages/BeautyAndHygiene.jsx'
import FoodgrainOilMasala from "./Component/Pages/FoodgrainOilMasala.jsx"
import ProductDetails from './Component/Pages/ProductDetails.jsx'
import Login from './Component/Pages/Login.jsx'
import Cart from './Component/Pages/Cart.jsx'



function App() {


  return (
    <>
      <Navbar/>
      <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/fruitsAndVegetables' element={<FruitsAndVegetables/>}/>
    <Route path='/beverages' element={<Beverages/>}/>
    <Route path='/cleaningAndHousehold' element={<CleaningAndHousehold/>}/>
    <Route path='/dairyProducts' element={<DairyProducts/>}/>
    <Route path='/foodgrainOilMasala' element={<FoodgrainOilMasala/>}/>
    <Route path='/beautyAndHygiene' element={<BeautyAndHygiene/>}/>
    <Route path='/cart' element={<Cart/>}/>
    <Route path='/product/:id' element={<ProductDetails/>}/>
</Routes>
       <Footer/>
    </>
  )
}

export default App
