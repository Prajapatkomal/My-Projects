
import './App.css'
import Navbar from './Component/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Sale from './Component/Pages/Sale'
import Home from './Component/Pages/Home'
import Sustainability from './Component/Pages/Sustainability'
import {HnMHome} from './Component/Pages/HnMHome'
import  Kids  from './Component/Pages/Kids'
import Baby from './Component/Pages/Baby'
import Ladies from './Component/Pages/Ladies'
import Men from './Component/Pages/Men'
import { Footer } from './Component/Footer/Footer'
import Sports from './Component/Pages/Sport'
import { CustomerService } from './Component/Pages/CustomerService'
import Newsletter from './Component/Pages/Newsletter'
import { FindStore } from './Component/Pages/FindStore'
import ProductDetails from './Component/Pages/ProductDetails'



function App() {


  return (
     <>
    <Navbar/>
     <Routes>
    
         <Route path='/' element={<Home/>}/>
         <Route path='/sale' element={<Sale/>}/>
         <Route path='/women' element={<Ladies/>}/>
         <Route path='/men' element={<Men/>}/>
         <Route path='/baby' element={<Baby/>}/>
         <Route path='/kids' element={<Kids/>}/>
         <Route path='/h&mHome' element={<HnMHome/>}/>
         <Route path='/sport' element={<Sports/>}/>
         <Route path='/sustainability' element={<Sustainability/>}/>
         <Route path='/products/:id' element={<ProductDetails/>}/>

         <Route path='/customerService' element={<CustomerService/>}/>
         <Route path='/newsletter' element={<Newsletter/>}/>
         <Route path='/findStore' element={<FindStore/>}/>
     </Routes>
      <Footer/>
     </>
  )
}

export default App
