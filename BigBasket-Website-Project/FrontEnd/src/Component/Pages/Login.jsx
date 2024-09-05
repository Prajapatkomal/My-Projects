import { Box, Button, Input, Show, Text } from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const url = 'https://my-projects-5.onrender.com/';

const Login = () => {

  const [email,setEmail] = useState("")
const [password,setPassword] = useState("")
const navigate = useNavigate()

const handleSignUp = async()=>{
    const payload  = {
        email,
        password,
    }
    try {
       const res = await fetch(`${url}user/register`,{
       method: "POST",
       headers : { 'Content-Type': 'application/json'},
       body:JSON.stringify(payload)    
   })
   const data = await res.json()
   alert(`${data.message}`)

} catch (error) {
  alert(`An error occured to Sign Up${error}`)
}
}


  
  
  const handleLogin = async()=>{
      const payload  = {
          email,
          password,
      }
      try {
          const res = await fetch(`${url}user/login`,{
         method: "POST",
         headers : { 'Content-Type': 'application/json'},
         body:JSON.stringify(payload)    
     })
     const data = await res.json()
     if(data.token){ 
        localStorage.setItem("tekon",data.token) 
         alert(`${data.message}`)
         navigate('/')
     }else{
      alert(`${data.message}`)
     }
  
  } catch (error) {
    alert(`An error occured in Login${error}`)
  }
  }


  return (
    <>
      <Show above="sm">
      <Box bg='black' w='40%' ml='30%' mt='100px'  mb='100px' display={'flex'} flexDirection={'column'} p='60px' >
        <Text color='white' fontWeight={'bold'} fontSize={'30px'}>Login/ Sign up</Text>
        <Text color="white" mb='30px'>Using OTP</Text>
        <Text color="lightgrey" fontSize={'12px'}>Enter Email Here</Text>
        <Input bg='white' mb='40px' type="email" placeholder="Enter Email Id" onChange={(e)=>setEmail(e.target.value)} />
        <Text color="lightgrey" fontSize={'12px'} >Enter Password Here</Text>
        <Input bg='white' type="text" placeholder="Enter Password " onChange={(e)=>setPassword(e.target.value)}  />
        <Button color="white" bg='red.600' mt='50px' onClick={handleSignUp}>Sign Up</Button>
        <Text color="white" mt='30px' fontSize={'12px'} textAlign='center'>If you have already an account please login here</Text>
        <Button color="white" bg='red.600' mt='10px' onClick={handleLogin}>Login</Button>
        <Text color="grey" fontSize={'15px'} textAlign={'center'} >
          By continuing, I accept TCP - bigbasket’s Terms <br/> and Conditions &
          Privacy Policy This site is<br/> protected by reCAPTCHA and the Google -
          Privacy <br/>Policy and & Terms of Service apply.
        </Text>
      </Box>
      </Show>



      <Show below="sm">
      <Box bg='black' w='80%' ml='10%' mt='50px'  mb='50px' display={'flex'} flexDirection={'column'} p='60px' >
        <Text color='white' fontWeight={'bold'} fontSize={'15px'}>Login/ Sign up</Text>
        <Text color="white" mb='15px'>Using OTP</Text>
        <Text color="lightgrey" fontSize={'15px'}>Enter Email Here</Text>
        <Input bg='white' mb='40px' type="email" placeholder="Enter Email Id" onChange={(e)=>setEmail(e.target.value)} />
        <Text color="lightgrey" fontSize={'15px'} >Enter Password Here</Text>
        <Input bg='white' type="text" placeholder="Enter Password " onChange={(e)=>setPassword(e.target.value)}  />
        <Button color="white" bg='red.600' mt='50px' onClick={handleSignUp}>Sign Up</Button>
        <Text color="white" mt='30px' fontSize={'12px'} textAlign='center'>If you have already an account please login here</Text>
        <Button color="white" bg='red.600' mt='10px' onClick={handleLogin}>Login</Button>
        <Text color="grey" fontSize={'15px'} textAlign={'center'} >
          By continuing, I accept TCP - bigbasket’s Terms <br/> and Conditions &
          Privacy Policy This site is protected by reCAPTCHA and the Google -
          Privacy Policy and & Terms of Service apply.
        </Text>
      </Box>
      </Show>
    </>
  );
};

export default Login;
