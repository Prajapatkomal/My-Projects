import { useState } from "react"
import "./Login.css"
import axios from "axios"
import { useNavigate } from "react-router-dom"

const Login = () => {

  const [loginState,setLoginState] = useState(false)

  const [userName,setUserName] = useState("")
   const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")

const navigate = useNavigate()

const handleSignup = async(e)=>{
   e.preventDefault()
  try {
     const data = await axios.post("https://netflixapp-ssmb.onrender.com/signup",{
      userName,email,password
  })
  console.log(data.data.msg)
  alert(data.data.msg)
  setLoginState(true)

  } catch (error) {
     alert(error.response.data.msg)
     console.log(error)
  }
}

const handleLogin = async(e)=>{
   e.preventDefault()
  try {
      const data = await axios.post("https://netflixapp-ssmb.onrender.com/login",{
      email,password
  })
  console.log(data.data.msg)
  alert(data.data.msg)
  if(data.data.token){
      navigate("/home")
  }
  localStorage.setItem("token",data.data.token)
  
  } catch (error) {
        alert(error.response.data.msg)
       console.log(error)
  }
}



  return (
    <div className="loginpage">
    <div className="login">
        <h3>Sign Up</h3>
        <div className="login-form">
            {loginState?"":<input type="text" value={userName} placeholder="Your Name" onChange={(e)=>{setUserName(e.target.value)}}/>}
              <input type="email" placeholder="Email" value={email}  onChange={(e)=>{setEmail(e.target.value)}}/>
                <input type="password" placeholder="Password" value={password}  onChange={(e)=>{setPassword(e.target.value)}}/>
                  {loginState?<button onClick={handleLogin}>Sign In</button>
                  :<button onClick={handleSignup}>Sign Up</button>}
        </div>
        <div>
             <div className="checkboxDiv">
                <input type="checkbox" />
                <label htmlFor="">Remember Me</label>
             </div>
             <p>Need Help</p>
        </div>
         <div>
           {loginState?<p>New to Netflix <span onClick={()=>{setLoginState(false)}}>Sign Up Now</span></p>
            :<p>Already have an account <span onClick={()=>{setLoginState(true)}}>Sign In Now</span></p>}
         </div>
    </div>
    </div>
  )
}

export default Login



