
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import "./index.css"
import { ToastContainer} from 'react-toastify';
import PageNotFound from './pages/PageNotFound'
import AdminDashboard from "./pages/Admin/AdminDashboard"
import Order from './pages/Admin/Order'
import Products from './pages/Admin/Products'
import CreateProduct from './pages/Admin/CreateProduct'
import CreateCategory from './pages/Admin/createCategory'
import UpdateProduct from './pages/Admin/UpdateProduct'



function App() {
  

  return (
    <>
       
    <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
           <Route path="/adminDashboard" element={<AdminDashboard/>}/>
            <Route path="/admin/createProduct" element={<CreateProduct/>}/>
               <Route path="/admin/updateProduct/:id" element={<UpdateProduct/>}/>
             <Route path="/admin/createCategory" element={<CreateCategory/>}/>
             <Route path="/admin/orders" element={<Order/>}/>
              <Route path="/admin/products" element={<Products/>}/>
          
            <Route path="/*" element={<PageNotFound/>}/>

         
    </Routes>
     <ToastContainer/>
     </>
  )
}

export default App
