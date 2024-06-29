import { Box, Image, Input, Text } from '@chakra-ui/react'
import React from 'react'

export const FindStore = () => {
  return (
    <Box m='auto' p='100px'>
        <Text fontSize={'30px'} fontWeight={'bold'}>Find A Store</Text>
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"/></svg>
        <Input  p='40px' w='90%'/>
        <Image pt='50px' boxSize={'100%'} w='80%' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUeFDcFn16QKlgwq31BOdSRsODopupaaXp-g&s'/>
    </Box>
  )
}
