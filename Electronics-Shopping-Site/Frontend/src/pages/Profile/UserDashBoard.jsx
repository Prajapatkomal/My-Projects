import { useEffect, useState } from "react"
import Navbar from "../../components/Navbar/Navbar"
import { toast} from 'react-toastify';
import api from "../../api/api";



export const UserDashBoard = () => {
const[userInfo,setUserInfo] =useState({userName:"",email:"",password:"",address:"",phone:""})

  const token =  localStorage.getItem("token")

const fetchUser  = async()=>{
  try {
      const res = await api.get("/user",{
        headers:{
            Authorization:`Bearer ${token}`
        }
      })

     const user =  res.data.user
     setUserInfo({
        userName: user.userName || "",
        email: user.email || "",
        password:  "",
        address: user.address || "",
        phone: user.phone || "",

     })
     
  } catch (error) {
    console.log(error)
  }
}

useEffect(()=>{
     fetchUser()
},[])



const handleChange =(e)=>{
  const {name,value} = e.target
  setUserInfo({...userInfo,[name]:value})
}


const handleSubmit = (e)=>{
 e.preventDefault()
}



const handleUpdate  = async()=>{
  try {
      const res = await api.put("/user/update",userInfo,{
          headers:{
            Authorization:`Bearer ${token}`,
            "Content-Type" :"application/json"
        }
      })
    toast(res.data.msg || "Profile Updated Successfully")
    
  } catch (error) {
    console.log(error.response)
     toast.error(error.response?.data?.msg || "Something went wrong!");
  }
}



  return (
    <div>
          <Navbar/>
          <div className="mt-20 pt-10  text-center">
              <p className="text-3xl font-semibold my-5">My Profile</p>
          </div>
          <div>
            {token?
              <div className=' w-[350px] min-h-fit border  flex flex-col justify-center items-center text-white p-5 m-auto'>
              <div className="flex flex-col items-center">

                    <form onSubmit={handleSubmit} className="flex flex-col  w-[260px] m-auto">
                    <label className="text-slate-500 " htmlFor="userName">userName</label>
                     <input className="border rounded-sm p-1  text-black "  type="text"  placeholder="Your Name"  name="userName" value={userInfo.userName}  onChange={handleChange}/>
                         <label className="text-slate-500 mt-3" htmlFor="email">Email</label>
                        <input className=" border rounded-sm p-1  text-black" type="email" placeholder="Email"  name="email" value={userInfo.email} disabled  onChange={handleChange}/>
                       <label className="text-slate-500 mt-3 " htmlFor="password">password</label>
                          <input className="border rounded-sm p-1 w-full text-black  "  placeholder="Update Password"  name="password" value={userInfo.password} onChange={handleChange}/>
                        <label className="text-slate-500 mt-3 " htmlFor="address">address</label>
                          <input className="border rounded-sm p-1 w-full text-black"  placeholder="address"  name="address" value={userInfo.address} onChange={handleChange}/>
                           <label className="text-slate-500 mt-3 " htmlFor="phone">Phone</label>
                          <input className="border rounded-sm p-1 w-full text-black"  placeholder="phone"  name="phone" value={userInfo.phone} onChange={handleChange}/>
                  
                           <button   onClick={handleUpdate} className="bg-red-600  rounded-sm p-1 w-full mt-4">Update Profile</button>

                       </form>  
                 
                   
              </div>   
            
        
        </div>
        : <div>
            <p className="text-center text-red-700 font-semibold text-3xl">Please Login to view Profile</p>
        </div>
        }
        </div>
        </div>
  )
}
