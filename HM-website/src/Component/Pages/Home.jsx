import { Box, Button, Flex, Heading, Image } from '@chakra-ui/react'
import React from 'react'

const Home = () => {
  return (<>

  <Box>
    <Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSU1GOqj0pPhRZa8NyKqQlajRPTQ_DXrBSYIw&s'/>
  </Box>
    <Box h='600px' w='1400px' bg='orange.600' mt='20' ml='175' color='white' textAlign={'center'} p='10' >
       <Heading p='5'>Start Shopping Now</Heading> <br/>
       <Heading p='5'>up to 50% off on New Brands </Heading> <br/>
       <Heading p='5'>Try Latest Outfit According to Your Choise</Heading>
       <Flex gap='5' pt='100' justifyContent={'center'}>
       <Button>Women</Button>
       <Button>Men</Button>
       <Button>Kids</Button>
        <Button>Baby</Button>
        <Button>Home</Button>
        <Button>Sports</Button>
       </Flex>
    </Box>
    <Box display={'flex'} justifyContent={'center'}  m='20' gap='5'>
    <Image boxSize='300px' w='500px' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTB3At9a1M1VsZRW3t51ruN74HyLCpalUqOrA&s'/>
    <Image boxSize='300px' w='500px' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmym2MBFLvlqdMn9cs5DaBCFhxd8DoJzqK1g&s'/>
    </Box>

    <Box display={'flex'} justifyContent={'center'}  w='1000px' gap='5' bg='orange.100' p='20' m='auto' >
    
    <Image boxSize='300px' w='300px' src='https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQmXLeJ_WPE7_zujPEdYL7FB-2LpE91sudBModfg8S_nXXm28uX'/>
    <Image boxSize='300px' w='300px' src='https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQ9gOSWBe-TXrALTSMQ_C9qDq3DO25s1caR141Iooed4Gq9ZQBj'/>
     <Image boxSize='300px' w='300px' src='https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT5MrqwphvFDKQ5hZ0dWTG1rn6SWzRrQ9XFHEzMQt4EeqyyzdUj'/>
    <Heading  alignContent={'center'}>Summer denim essentials</Heading>
    </Box>
  </>
  )
}

export default Home