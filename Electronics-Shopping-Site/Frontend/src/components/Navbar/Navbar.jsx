
import { FiShoppingCart } from "react-icons/fi";
import { FaRegUserCircle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import SearchInput from "../SearchInput/SearchInput";
import { CartContext } from "../../Context/CartContext";
import { useContext, useEffect, useState } from "react";
import {AiOutlineHome} from "react-icons/ai";
import Logo from "../Logo";
import api from "../../api/api";


const Navbar = () => {
  const navigate = useNavigate();
   const [cart,setCart] = useContext(CartContext)
   const [login,setLogin] = useState(false)
   const[role,SetRole] = useState("")

   const token = localStorage.getItem("token")

   
  const fetchCartProducts = async()=>{
        try {
          const {data} = await api.get("/cart",{
            headers:{
              Authorization : `Bearer ${localStorage.getItem("token")}`
            }
          })
          setCart(data?.cart?.products)
        } catch (error){
           console.log(error)
        }
    }

     useEffect(()=>{
       fetchCartProducts()
    },[cart])


   const fetchUser  = async()=>{
    try {
        const {data} = await api.get("/user",{
        headers:{
            Authorization:`Bearer ${token}` }
      })

       if(data?.user?.role === 1){
        SetRole("admin")
       }else{
         SetRole("user")
       }

    } catch (error) {
      console.log(error)
    }
   }

   useEffect(()=>{
        fetchUser()
   },[])

   


  const handleLogout = () => {
    if (!token) {
      toast("User already Logged out");
      navigate("/");
    } else {
      localStorage.removeItem("token");
      toast("User Logged out Successfully");
      setLogin(false)
      navigate("/");
    }
  };

  return (
    <div className="fixed top-0 left-0  w-full  z-50 h-16 px-4 bg-white shadow-lg  flex justify-between lg:px-10 items-center ">

      <div>
        <Logo/>
      </div>

       <SearchInput/>
      <div className="flex gap-5">
        <div onClick={()=>{navigate("/")}} className="text-2xl  text-black"><AiOutlineHome/></div>
        <button  onClick={()=>token? handleLogout() : navigate("/login")} className="bg-red-600 px-2 border-0 text-white rounded-md active:bg-red-700 cursor-pointer">{token?"Logout":"Login"}</button>


       {role==="admin"?
       <div>
          <Link to="/adminDashboard" className="text-black border-b-2 border-black cursor-pointer font-semibold text-[18px]  active:text-blue-700">Admin</Link>
        </div>
        :
        <div className="text-2xl relative group cursor-pointer  text-black">
          <FaRegUserCircle />
          <div className=" hidden group-hover:block text-sm shadow-md absolute p-5 -left-4 bg-slate-50">
            <p
              onClick={()=>navigate("/user-dashboard")}
              className="text-black cursor-pointer font-semibold text-[16px] hover:text-blue-600"
            >
              Profile
            </p>

             <p
              onClick={()=>navigate("/user-orders")}
              className=" text-black cursor-pointer font-semibold text-[16px] hover:text-blue-600"
            >
              Orders
            </p>
          
          </div>
        </div>

}

        <div  onClick={()=>navigate("/cart")} className="text-2xl relative cursor-pointer mr-2 text-black">
          <FiShoppingCart/>
          <div className="w-4 h-5 bg-red-600 absolute -top-4 -right-2 rounded-sm">
            <p className="text-sm text-center text-white">{cart?cart.length:0}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
