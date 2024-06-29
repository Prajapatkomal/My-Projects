import { Box, Checkbox, Heading, Input, Radio, Text } from '@chakra-ui/react'
import React from 'react'

export default function Newsletter() {
  return (
    <Box  boxShadow={'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px'} p='30px'  m='100px'display={'flex'} flexDirection={'column'} >
        <Text fontSize={'40px'} mb='30px'fontWeight={'bold'}>H&M Fashion News Subscription</Text>
        <Text fontSize={'30px'} mb='30px'fontWeight={'bold'}>Subscribe now to experience</Text>
        <Text fontSize={'20px'} mb='30px' fontWeight={''}>EXCLUSIVE OFFERS
         CURATED INSPIRATION
        NEW DROPS, COLLECTION UNVEILINGS AND MUCH MORE</Text>
        <Text  fontWeight={'bold'}>Email</Text>
        <Input type='email' w='90%' mb='30px' placeholder={'type email here...'}/>
        <Text  mb='30px' fontWeight={'bold'}>FOR A MORE PERSONAL NEWSLETTER (Optional)</Text>
        <Text  fontWeight={'bold'}>What looks are you looking for?</Text>
        Ladies<Radio mb='20px'></Radio>
        Men<Radio></Radio>
        Kid's update<Checkbox mb='20px'></Checkbox> 
        <Text>POST CODE</Text>
        <Input w='90%' />
    </Box>
  )
}
