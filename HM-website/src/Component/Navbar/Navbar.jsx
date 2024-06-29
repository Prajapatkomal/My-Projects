
import { Box, Button, Center, Flex, Highlight, Image, Input, Popover, PopoverBody, PopoverCloseButton, PopoverContent, PopoverTrigger, Show, Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import {SignDrawer} from './SignDrawer'
import ShoppingBag from './ShoppingBag'
import navStyle from './Navbar.module.css'
import { useContext, useState } from 'react'
import { Context } from '../../Context/Context'

const Navbar = () => {
const [sidebar,setsidebar] = useState(false)
const {cart} = useContext(Context)

const style={
    display : sidebar ? 'flex' : 'none'
}


  return (<>
   <Show above='sm'>
    <Box  display={'flex'} flexDirection={'row'} justifyContent={'space-between'} fontSize= '22px'  h='fit-content' p='30px'>
         <Flex gap='20px'  >
            <Link  to='/customerService' className={navStyle.Link}>Customer Service </Link>
            <Link to='/newsletter' className={navStyle.Link}>Newsletter</Link>
            <Link to='/findstore' className={navStyle.Link}>Find a store</Link>
            <Box bg='white'>
            <Popover>
           <PopoverTrigger>
         <Button bg='white'fontSize={'25px'} pb='4' mt='5px'>ooo</Button>
            </PopoverTrigger>
         <PopoverContent>
           <PopoverCloseButton />
          <PopoverBody>
            <Link>Download Android</Link> <br/>
            <Link>Download iOS</Link>
          </PopoverBody>
         </PopoverContent>
         </Popover>
            </Box>
         </Flex>



         <Center>
            <Image  boxSize='50px' w='80px' src='../../src/assets/ProductImage/HM Image.png'/>
         </Center>
         


          <Box display={'flex'} flexDirection={'row'}  gap='20px' h='fit-content' >
                  <SignDrawer/>
                  <Button  fontSize={'22px'} bg='white'>
                  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Zm0-108q96-86 158-147.5t98-107q36-45.5 50-81t14-70.5q0-60-40-100t-100-40q-47 0-87 26.5T518-680h-76q-15-41-55-67.5T300-774q-60 0-100 40t-40 100q0 35 14 70.5t50 81q36 45.5 98 107T480-228Zm0-273Z"/></svg>
                     Favourite</Button>
                   <ShoppingBag/>
          </Box>  
     </Box>
 <Box display={'flex'} justifyContent={'center'} ml= '300px'>
   <Flex fontSize={'30px'}  gap='20px'  pt='5' justifyContent={'center'}  >
    
      <Link className={navStyle.Link}  to='/sale'>Sale</Link>
      <Link className={navStyle.Link} to='/women'>Ladies</Link>
      <Link className={navStyle.Link} to='/men'>Men</Link>
      <Link className={navStyle.Link} to='/baby'>Baby</Link>
      <Link className={navStyle.Link} to='/kids'>Kids</Link>
      <Link className={navStyle.Link} to='/h&mHome'>H&MHome</Link>
      <Link className={navStyle.Link} to='/sport'>Sport</Link>
      <Link className={navStyle.Link} to='/sustainability'>Sustainability</Link>
</Flex>
    <Input  w='100' ml='100'  placeholder='Serach here...' border='1px solid white'/> 
</Box>
<Center>
 <Highlight  query='Check Your Balance'     styles={{ py: '3',color :'red'}}>
 HM.com/Customer Service/Gift Cards/Check Your Balance
</Highlight>
</Center>
</Show>



<Show below='sm'>
   <Box display={'flex'}  justifyContent={'space-between'} pt='5'>
   <Flex gap='3'>     
      <Link onClick={()=>setsidebar(true)} ><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg></Link>
      <Image  boxSize='30px' w='50px' src='data:image/png;base64,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'/>
      <Box w='100%' fontSize={'20px'}fontWeight={'bold'} style={style} pl='5' gap='3' flexDirection={'column'} position={'fixed'} h='100vh' backdropFilter={'blur(20px)'} >
      <Link className={navStyle.smLink}  to='/sale'>Sale</Link>
      <Link className={navStyle.smLink} to='/women'>Ladies</Link>
      <Link className={navStyle.smLink} to='/men'>Men</Link>
      <Link className={navStyle.smLink} to='/baby'>Baby</Link>
      <Link className={navStyle.smLink} to='/kids'>Kids</Link>
      <Link className={navStyle.smLink} to='/h&mHome'>H&MHome</Link>
      <Link className={navStyle.smLink} to='/sport'>Sport</Link>
      <Link className={navStyle.smLink} to='/sustainability'>Sustainability</Link>
      <Text mt='30px'><Link to='/customerService'className={navStyle.Link}>Customer Service </Link></Text>
            <Link to='newsletter' className={navStyle.Link}>Newsletter</Link>
            <Link to='findstore' className={navStyle.Link}>Find a store</Link>
      <Link onClick={()=>setsidebar(false)} ><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg></Link>
     
      </Box>
   </Flex>

   <Flex gap='3' pr='2'>
   <Link><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM160-160v-112q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v112H160Zm80-80h480v-32q0-11-5.5-20T700-306q-54-27-109-40.5T480-360q-56 0-111 13.5T260-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T560-640q0-33-23.5-56.5T480-720q-33 0-56.5 23.5T400-640q0 33 23.5 56.5T480-560Zm0-80Zm0 400Z"/></svg></Link>
   <Link><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"/></svg></Link>
   <Link><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Zm0-108q96-86 158-147.5t98-107q36-45.5 50-81t14-70.5q0-60-40-100t-100-40q-47 0-87 26.5T518-680h-76q-15-41-55-67.5T300-774q-60 0-100 40t-40 100q0 35 14 70.5t50 81q36 45.5 98 107T480-228Zm0-273Z"/></svg></Link>
   <Link><Text color='red'>{cart}<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M240-80q-33 0-56.5-23.5T160-160v-480q0-33 23.5-56.5T240-720h80q0-66 47-113t113-47q66 0 113 47t47 113h80q33 0 56.5 23.5T800-640v480q0 33-23.5 56.5T720-80H240Zm0-80h480v-480h-80v80q0 17-11.5 28.5T600-520q-17 0-28.5-11.5T560-560v-80H400v80q0 17-11.5 28.5T360-520q-17 0-28.5-11.5T320-560v-80h-80v480Zm160-560h160q0-33-23.5-56.5T480-800q-33 0-56.5 23.5T400-720ZM240-160v-480 480Z"/></svg> </Text></Link>
   </Flex>
</Box> 

</Show>

     </>
      
  )
}

export default Navbar