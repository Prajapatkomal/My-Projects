
import { useContext } from 'react'
import { Context } from '../../Context/Context'
import { Box, Button,  Heading, Image, Input,Show,Text } from '@chakra-ui/react'
import.meta.env.VITE_BACKEND_URL

const ProductDetails = () => {

  const BASE_URL = import.meta.env.VITE_BACKEND_URL || 'https://my-projects-4.onrender.com/';


    const {data,basketCount,setBasketCount,setBasketItems} = useContext(Context)
  console.log(data)

  const imageUrl = `${BASE_URL}${data.image_url}`;


  return (<>
  <Show above="sm">
         <Box p='40' pt='0' pb='0' mt='20px' display={'flex'}  gap='50px' >
              <Box p='10' w='100%'><Image src={imageUrl} border='1px solid grey'/></Box>
             <Box  p='10' w='100%'>
              <Heading size='lg' color='blue.700' mb='10px'>Product Detail</Heading>
              <Heading size='md'> {data.title}</Heading>
              <Text fontSize='20px' color='grey'>MRP inclusive of all taxes</Text>
              <Text pb='5' fontSize={'24px'} color='blue.600' >4+ rating</Text>
               <hr/>
               <Heading size='lg' pb='2' color={'red'}>50%off</Heading>
               <Text fontSize={'25px'} fontWeight={'bold'}>Rs:{data.price}</Text>
              
               <Input type='text' placeholder='Type Quantity here'/>
               <Button w='100%' p='8' fontSize='25px' mt='10' mb='10' color='white' bg='red.600' onClick={()=>{setBasketCount(basketCount+1) ;setBasketItems(data)}}> Add to basket</Button>
                <Text> Available in stores <br/>
                Delivery Time : 2-7 days</Text>
               <Text fontWeight='bold' fontSize={'20'}>Delivery and Payment</Text>
               <Button border='2px solid lightgrey' w='100%' p='8' fontSize='25px' mt='5' color='black' bg='White'>Save for later</Button>
              </Box> 
             </Box>    
   
  </Show>


  <Show below="sm">
  <Box p='10' pt='0' pb='0' mt='10px' display={'flex'} flexDirection={'column'}  gap='20px' >
              <Box p='10' w='100%'><Image src={imageUrl} border='1px solid grey'/></Box>
             <Box  p='10' w='100%'>
              <Heading size='lg' color='blue.700' mb='10px'>Product Detail</Heading>
              <Heading size='md'> {data.title}</Heading>
              <Text fontSize='20px' color='grey'>MRP inclusive of all taxes</Text>
              <Text pb='5' fontSize={'24px'} color='blue.600' >4+ rating</Text>
               <hr/>
               <Heading size='lg' pb='2' color={'red'}>50%off</Heading>
               <Text fontSize={'25px'} fontWeight={'bold'}>Rs:{data.price}</Text>
              
               <Input type='text' placeholder='Type Quantity here'/>
               <Button w='100%' p='8' fontSize='25px' mt='10' mb='10' color='white' bg='red.600' onClick={()=>{setBasketCount(basketCount+1) ;setBasketItems(data)}}> Add to basket</Button>
                <Text> Available in stores <br/>
                Delivery Time : 2-7 days</Text>
               <Text fontWeight='bold' fontSize={'20'}>Delivery and Payment</Text>
               <Button border='2px solid lightgrey' w='100%' p='8' fontSize='25px' mt='5' color='black' bg='White'>Save for later</Button>
              </Box> 
             </Box>    
  </Show>
    </>
  )
}

export default ProductDetails