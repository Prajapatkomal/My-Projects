
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";
import axios from "axios"
import { toast} from 'react-toastify';


const Login = () => {
  const navigate = useNavigate()
  const[userInfo,setUserInfo] =useState({userName:"",email:"",password:""})
  const [loginState,setLoginState] = useState(false)
  const[showPassword,setShowPassword] = useState(false)


const handleChange =(e)=>{
  const {name,value} = e.target
  setUserInfo({...userInfo,[name]:value})
}

const handleSubmit = (e)=>{
 e.preventDefault()
 

}

const handleSignUp =async()=>{
  try {
      const res = await axios.post("http://localhost:3000/user/signup",userInfo)
    console.log(res.data)
    toast(res.data.msg || "Signup Successfully")
    setLoginState("true")
  } catch (error) {
    console.log(error.response.data.msg)
     toast.error(error.response?.data?.msg || "Something went wrong!");
  }
}


const handleLogin =async()=>{
   try {
      const res = await axios.post("http://localhost:3000/user/login",userInfo)
    console.log(res.data)
    toast(res.data.msg || "Loged in Successfully")
    
    localStorage.setItem("token",res.data.token)
     navigate("/")
     
   } catch (error) {
      console.log(error)
       toast.error(error.response?.data?.msg || "Something went wrong!");
   }
  setUserInfo({
     userName:"",email:"",password:""
 })
}

  return (
    <div className="bg-blue-50 min-h-screen w-full flex justify-center items-center">
    <div className='bg-slate-900 w-[350px] max-h-[400px] flex flex-col justify-center  text-white p-10 '>
    <div className="flex flex-col items-center">
        <p className="text-[20px] font-bold mb-5">{loginState?"Sign In":"Sign Up"}</p>
          <form onSubmit={handleSubmit} className="flex flex-col gap-3 w-[260px] m-auto">
            {loginState?"":<input className=" rounded-sm p-1  text-black "  type="text"  placeholder="Your Name"  name="userName" value={userInfo.userName}  onChange={handleChange}/>}
              <input className=" rounded-sm p-1  text-black" type="email" placeholder="Email"  name="email" value={userInfo.email}  onChange={handleChange}/>
              <div className="flex relative">
                <input className="rounded-sm p-1 w-full text-black  " type={showPassword?"text":"password"} placeholder="Password"  name="password" value={userInfo.password} onChange={handleChange}/>
                    <div onClick={()=>setShowPassword(!showPassword)} className="absolute  right-2 top-2  text-black cursor-pointer" >
                      {showPassword?<IoMdEye/>: <IoMdEyeOff/>}
                    </div>
              </div>
                  {loginState?<button   onClick={handleLogin} className="bg-red-600  rounded-sm p-1 w-full">Sign In</button>
                  :<button  onClick={handleSignUp} className="bg-red-600 rounded-sm p-1 w-full">Sign Up</button>}
             </form>  
       
         <div className="flex flex-col mt-5">
           {loginState?<p>New to Netflix <span className="text-blue-600 cursor-pointer" onClick={()=>{setLoginState(false)}}>Sign Up Now</span></p>
            :<p>Already have an account <span className="text-blue-600 cursor-pointer"  onClick={()=>{setLoginState(true)}}>Sign In Now</span></p>}
         </div>
    </div>
    </div>
    </div>
  )
}

export default Login