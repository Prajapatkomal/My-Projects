import { Box, Center, Heading, Image } from '@chakra-ui/react'
import React from 'react'

export const HnMHome = () => {
  return (<>
    <Box p='50px' display={'flex'} justifyContent={'center'} gap='20' flexDirection={{base:'column',sm:'column',md:'row',lg:'row'}}>
      <Image w='100%' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1jqfmA0vr3iEgul_uuhlrVF5-7e6yxoMh6A&s'/>
      <Image  w='100%' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnAcIApTptEZQMXvBTOd-pKVJrrOBrKMEy1A&s'/>
    </Box>
    <Box p='50px' display={'flex'} justifyContent={'center'} gap='20' flexDirection={{base:'column',sm:'column',md:'row',lg:'row'}}>
      <Image boxSize='100%' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTf8FYbf2MDhRQOoxpuZCGPgcAX6NGjMUTRAQ&s'/>
      <Image boxSize='100%' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3EcZ1GB8xUANOY6gangLMSH84tIpuVIAOXQ&s'/>
      <Image boxSize='100%' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPYZLe-BOggPq4AhpJPQQD4B4YG_7p2IUJUw&s'/>
    </Box>
    <Heading textAlign={'center'}>Redefine Comfort</Heading>
    <Box p='50px' display={'flex'} justifyContent={'center'} gap='20' flexDirection={{base:'column',sm:'column',md:'row',lg:'row'}}>
    <Image boxSize='45%' src='https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSug1kpf8oyOUSlIFEJvNQa1XXhwZ-tV_5rUrWhapgPi8KvvTF-fUAUFe_vQ-ntPuawIWF5Hd1hLYbXPp1LlWx4jAidaFFn_VCZXuo-Uwo&usqp=CAE'/>
    <Image boxSize='50%' src='https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQtBd65ImtuXpzrJjE0CQjrE2V8EmOI_w5jPF1yGgjNv1ccuC2NWbFq-xmKFXMZpAptZxA88HE4vxAICDG6uZMsk-kTUwc-DNDmlfy3lhM&usqp=CAE'/>
  </Box>
    </>
  )
}

