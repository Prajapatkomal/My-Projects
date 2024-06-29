import { Box,  Image, Text } from '@chakra-ui/react'
import React from 'react'

const Sustainability = () => {
  return (
    <Box>
      <Image p='10' src='https://image.hm.com/content/dam/sustainability-site/startpage/9501-CPD-01_16x9-sustainability-destination.jpg?imwidth=2160'/>
      <Text textAlign={'center'} color='red.700' fontSize={'50'} fontWeight={'bold'}> Sustainability </Text>
      <Image  p='10' w='100%'src='https://lp2.hm.com/hmgoepprod?source=url[https://www2.hm.com/content/dam/sustainability-site/lets-clean-up/9501-CPM-39_16x9-lets-clean-up.jpg]&scale=size[960]&sink=format[jpeg],quality[80]'/>
    </Box>
  )
}

export default Sustainability