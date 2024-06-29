import { Box, Center, Heading,  Image,  Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import footerStyle from './Footer.module.css'
import { faFacebook, faInstagram, faTiktok, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export const Footer = () => {


  return (
 <Box bg='lightgrey' p='20' mt='20'>
  <Center display={'flex'} flexDirection={{base:'column',sm:'column', md:'row',lg:'row'}}  gap='20'>
     <Box display={'flex'} flexDirection={'column'} fontWeight={'500'}>
     <Heading size={'lg'} >Shop</Heading>
     <Link  className={footerStyle.link}  to='/sale'>Sale</Link>
      <Link  className={footerStyle.link}  to='/women'>Ladies</Link>
      <Link  className={footerStyle.link}  to='/men'>Men</Link>
      <Link   className={footerStyle.link} to='/baby'>Baby</Link>
      <Link   className={footerStyle.link} to='/kids'>Kids</Link>
      <Link  className={footerStyle.link}  to='/h&mHome'>H&MHome</Link>
      <Link   className={footerStyle.link}  to='/sport'>Sport</Link>
     </Box>


   <Box display={'flex'} flexDirection={'column'} fontWeight={'500'}>
          <Heading size={'lg'} >Help</Heading>
            <Link className={footerStyle.link} >Customer Service </Link>
            <Link className={footerStyle.link} >Newsletter</Link>
            <Link className={footerStyle.link} >Find a store</Link>
            
   </Box>
        
    
    <Box>
          <Text fontWeight={'600'}>Sign up now and be the first to know<br/> about exclusive offers, latest fashion <br/>news & style tips!
          </Text>
          <Heading size='lg'>
          Read more-
          </Heading>
    </Box>
 
</Center>

<Center gap='10' m='5'>
  <FontAwesomeIcon  fontSize={'30'} icon={faFacebook} />
  <FontAwesomeIcon fontSize={'30'} icon={faInstagram} />
  <FontAwesomeIcon fontSize={'30'} icon={faTiktok} />
  <FontAwesomeIcon fontSize={'30'} icon={faYoutube} />
</Center>
<Text fontSize={'22px'} textAlign={'center'}>The content of this site is copyright-protected and is the property of H & M Hennes & Mauritz AB.</Text>
      <Center>
            <Image  mt='5' boxSize='30px' w='50px' src='src/assets/ProductImage/HM Image.png'/>
     </Center>
     <Heading textAlign='center' p='5' size='md'>INDIA | Rs.</Heading>
 </Box>

    
  ) 
}

