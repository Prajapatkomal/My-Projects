import { Box, Button, Center, Heading, Input, Text } from '@chakra-ui/react'
import React from 'react'

export const CustomerService = () => {
  return (<Box boxShadow={'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px'} m='40px'>
    <Box mt='100px'>
    <Text pb='15px'  fontSize={'75px'} textAlign={'center'}>Welcome to Customer Service</Text> 
     <Text pb='15px'  fontSize={'50px'} textAlign={'center'}>How can we help you today?</Text>
     <Heading size='md' textAlign={'center'}>QUICK LINKS</Heading>
     </Box>


<Box p='20'm='auto' w='70%' display={'flex'} flexDirection={{base:'column', sm:'column' ,md:'row',lg:'row'}} justifyContent={'space-between'} gap='40px' >
      <Box boxShadow={'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px'} p='20' w='100%'>
        <Text fontSize={'25px'} mb='30px' fontWeight='bold'>I WANT TO KNOW WHERE MY ORDER IS</Text>
        <Text fontSize={'20px'} mb='30px'  >Enter the order number found in the order confirmation email</Text>
        <Text  textAlign='start' fontWeight='bold'>Order No.</Text>
        <Input type='text' p='50px' mb='50px' placeholder='eg: 396934929236'/>
        <Button fontSize={'20px'} bg='black' color='white' mt='20px' p='35px' >Track My Order</Button>
      </Box>

       <Box boxShadow={'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px'} p='20' w='100%'>
        <Text fontSize={'25px'} mb='10px' fontWeight='bold'>I WANT TO RETURN SOMETHING</Text>
        <Text fontSize={'20px'} mb='20px'  >Register returns easily online. 
        All you need is the order number found in the order confirmation email,
         and the email address used when placing your order.
        The return request must be raised with us within 15 
        days from the date you receive your parcel<br/> confirmation email</Text>
       <Button fontSize={'20px'} bg='black' color='white' mt='20px' p='35px' >Register a return</Button>
      </Box>

</Box>
</Box>
  )
}



