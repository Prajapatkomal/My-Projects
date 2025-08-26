import { IoSearch } from "react-icons/io5";
import { FiShoppingCart } from "react-icons/fi";
import { FaRegUserCircle } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { useNavigate } from "react-router-dom";
import { toast} from 'react-toastify';

const Navbar = () => {
 const navigate =useNavigate()

 const login =()=>{
    navigate("/Login")
 }

 const handleLogout = ()=>{
   localStorage.clear("token")
   const token = localStorage.getItem("token")
    if(!token){
      toast("User Logged out Successfully")
    }
 }

  return (
        <div className="h-16 bg-white shadow-lg  flex justify-between px-10 items-center">
          <div className="block  sm:hidden text-2xl">
             <GiHamburgerMenu/>
          </div>
          
             <div>
                  <img  className="h-16" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsElkio-FooGtoS9BEgbS1JnuElKTCe--n9A&s" alt="" />
             </div>

              <div className="hidden md:flex w-[450px]  ">
                <input placeholder="search here..." type="text" className="w-full  outline-none pl-4  p-1  border rounded-l-full focus-within:shadow-md "/>
                <div className="bg-red-700 w-8 rounded-r-full flex items-center justify-center text-white">
                  <IoSearch/>
                </div>
             </div>
              <div className="flex gap-5"> 
                 <div className="text-2xl relative group">
                    <FaRegUserCircle/>
                    <div className=" hidden group-hover:block text-sm shadow-md absolute p-5 -left-4 bg-slate-50">
                      <p className="cursor-pointer font-semibold text-[16px] hover:text-blue-600" onClick={login}>Login</p>
                       <p className="cursor-pointer font-semibold text-[16px]  hover:text-red-600"  onClick={handleLogout}>Logout</p>
                       <p className="cursor-pointer font-semibold text-[16px]  hover:text-red-600" onClick={()=>navigate("/adminDashboard")}>Admin</p>
                    </div>
                </div>
                <div className="text-2xl relative">
                      <FiShoppingCart/>
                      <div className="w-4 h-5 bg-red-600 absolute -top-4 -right-2">
                         <p className="text-sm text-center text-white">5</p>
                    </div>
                </div>
               
                
             </div>

        </div>
   
  )
}

export default Navbar