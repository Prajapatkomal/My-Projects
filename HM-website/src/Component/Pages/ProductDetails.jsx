
import { useContext } from 'react'
import { Context } from '../../Context/Context'
import { Box, Button,  Heading, Image, Select, Text } from '@chakra-ui/react'

const ProductDetails = () => {


  const {data,cart,setcart} = useContext(Context)

console.log(data)


if (!data || !data.image) {
  console.error('Data or data.image is missing.');
  return <Box>Loading...</Box>;
}


  return (<>
         <Box p='20' display={'flex'} flexDirection={{base:'column', sm:'column' ,md:'row',lg:'row'}} justifyContent={'space-between'} gap='50px' >
              <Box boxShadow={'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px'} p='20' w='100%'><Image src={data.image}/></Box>
             <Box boxShadow={'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px'} p='20' w='100%'>
              <Heading size='lg' color='blue.700' mb='20px'>Product Detail</Heading>
              <Heading size='lg'> {data.title}</Heading>
              <Text fontSize='20px' color='grey'>MRP inclusive of all taxes</Text>
              <Text pb='5' fontSize={'24px'} color='blue.600' >4+ rating</Text>
               <hr/>
               <Heading size='md' pb='2' color={'red'}>50%off</Heading><Heading>Rs:{data.price}</Heading>
               <Text fontSize='20px' color={'blue.600'}>Inclusive of all taxes
               EMI starts at ₹173 per month.</Text>
               <Select mt='10'>
               <option value='size'>Size</option>
                <option value='s'>S</option>
                <option value='m'>M</option>
                <option value='L'>L</option>
                <option value='xl'>Xl</option>
                <option value='xxl'>XXL</option>
               </Select>
               <Button w='100%' p='10' fontSize='25px' mt='10' mb='10' color='white' bg='black' onClick={()=>setcart(cart+1)}>Add</Button>
                <Text> Available in stores <br/>
                Delivery Time : 2-7 days</Text>
               <Text fontWeight='bold' fontSize={'25'}>Delivery and Payment</Text>
               <Button w='100%' p='10' fontSize='25px' mt='10' mb='10' color='white' bg='black'>Buy</Button>

              </Box>
              
             </Box>    
   
      
  
   
    </>
  )
}

export default ProductDetails