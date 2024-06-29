import { Box, Button, Flex, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'

const Sale = () => {
  return (<>
    <Box>
    <Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSU1GOqj0pPhRZa8NyKqQlajRPTQ_DXrBSYIw&s'/>
  </Box>
    <Box h='100%' w='90%' bg='red.600' m='auto'  color='white' textAlign={'center'} p='10' >
    <Heading p='5'>SALE starts now</Heading> <br/>
    <Heading p='5'>up to 50% off</Heading> <br/>
    <Heading p='5'>Unlock your fashion game: 10,000+ styles</Heading>
    <Box  display='grid' gap='5'  justifyContent={'center'} 
    gridTemplateColumns={{base:'repeat(3,1fr)',sm:'repeat(3,1fr)', md:'repeat(6,1fr)',lg: 'repeat(6,1fr)'}}>
    <Button>Women</Button>
    <Button>Men</Button>
    <Button>Kids</Button>
     <Button>Baby</Button>
     <Button>Home</Button>
     <Button>Sports</Button>
    </Box>
    </Box>
    <Box ml='50px' display='grid' gap='5'  justifyContent={'center'} mt='50px' 
    gridTemplateColumns={{base:'repeat(1,1fr)',sm:'repeat(1,1fr)', md:'repeat(3,1fr)',lg: 'repeat(3,1fr)'}}>
      <Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSY25gbq82hvLaCkwkN9VaerEV5e_nw7IrsJw&s' />
      <Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAb2GAXXhbtuXSzEsDayH9CxLFM72LtPkEYg&s' />
      <Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAXh7S6GL1U8TbKb1FYkFt6AWtnLi1XC6_zg&s' />
    </Box>

 <Heading  p='20' textAlign='center'>H&M Sale</Heading>
 <Text textAlign='center'>Shop the sale online at H&M and stock up on lots of great deals! Discover latest styles for less from all our departments. </Text>

 </>
  )
}

export default Sale