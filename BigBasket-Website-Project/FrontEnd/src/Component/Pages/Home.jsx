import { Box, Button, Heading, Image, Text } from "@chakra-ui/react";
import ImageSlider from "../ImageSlider";


const Home = () => {

  return (
    <Box w="72%" ml="14%" mt="40px">
      
      <ImageSlider/>
      <Box  mt='40px' w='100%' display='grid'  gridTemplateColumns={{base:'repeat(2,1fr)',sm:'repeat(2,1fr)',md:'repeat(6,1fr)',lg:'repeat(6,1fr)'}} justifyContent={'space-between'} gap='40px'>
        <Button fontSize={'12px'} fontWeight='bold' pl='50px' pr='50px'>EGGS MEAT <br/>AND FISH</Button>
       < Image w='120px' src='https://www.bigbasket.com/media/uploads/banner_images/hp_topstrip_m_250923_02.png?tr=w-1920,q=80'/>
         
        <Button bg='green.500' fontWeight='bold' fontSize={'12px'}  pl='50px' pr='50px'>AYURVEDA</Button>
        <Button fontSize={'12px'} fontWeight='bold'  pl='50px' pr='50px'>BUY MORE <br/>SAVE MORE</Button>
        <Button fontSize={'12px'} fontWeight='bold'  pl='50px' pr='50px'>DEALS <br/>OF THE WEEK</Button>
        <Button fontSize={'12px'} fontWeight='bold'  pl='50px' pr='50px'>COMBO STORE</Button>
      </Box>


      <Heading size="lg" mt="20px" mb="20px">
        Top Offers
      </Heading>
      <Box display='grid'  gridTemplateColumns={{base:'repeat(2,1fr)',sm:'repeat(2,1fr)',md:'repeat(4,1fr)',lg:'repeat(4,1fr)'}} justifyContent={'space-between'}>
        <Image
          border="1px solid lightgrey"
          borderRadius="20px"
          w="220px"
          h="170px"
          src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/91e53046-98e0-4c5b-ae53-7d073e5210e1/2b94a9cf-895f-460d-849a-1eee860c974c/hp_dow-topoffersStorefront_m_480_250723_01.jpg?tr=w-1920,q=80"
        />
        <Image
          border="1px solid lightgrey"
          borderRadius="20px"
          w="220px"
          h="170px"
          src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/91e53046-98e0-4c5b-ae53-7d073e5210e1/2b94a9cf-895f-460d-849a-1eee860c974c/hp_big-packs-topoffersStorefront_m_480_250723_02.jpg?tr=w-1920,q=80"
        />
        <Image
          border="1px solid lightgrey"
          borderRadius="20px"
          w="220px"
          h="170px"
          src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/91e53046-98e0-4c5b-ae53-7d073e5210e1/2b94a9cf-895f-460d-849a-1eee860c974c/hp_combos-topoffersStorefront_m_480_250723_03.jpg?tr=w-1920,q=80"
        />
        <Image
          border="1px solid lightgrey"
          borderRadius="20px"
          w="220px"
          h="170px"
          src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/91e53046-98e0-4c5b-ae53-7d073e5210e1/2b94a9cf-895f-460d-849a-1eee860c974c/hp_30-corner-topoffersStorefront_m_480_250723_04.jpg?tr=w-1920,q=80"
        />
      </Box>
 



      <Heading size="lg" mt="20px" mb="20px">
        Fruits and vegetables
      </Heading>
      <Box display='grid'  gridTemplateColumns={{base:'repeat(2,1fr)',sm:'repeat(2,1fr)',md:'repeat(4,1fr)',lg:'repeat(4,1fr)'}} justifyContent={'space-between'}>
        <Image
          border="1px solid lightgrey"
          borderRadius="20px"
          w="220px"
          h="170px"
          src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/91e53046-98e0-4c5b-ae53-7d073e5210e1/41a0810e-1fc3-46e4-9d2c-7d9e79e0aa29/hp_f&v_m_fresh-vegetables_480_250923.jpg?tr=w-1920,q=80"
        />
        <Image
          border="1px solid lightgrey"
          borderRadius="20px"
          w="220px"
          h="170px"
          src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/91e53046-98e0-4c5b-ae53-7d073e5210e1/41a0810e-1fc3-46e4-9d2c-7d9e79e0aa29/hp_f&v_m_fresh-fruits_480_250923.jpg?tr=w-1920,q=80"
        />
        <Image
          border="1px solid lightgrey"
          borderRadius="20px"
          w="220px"
          h="170px"https
          src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/91e53046-98e0-4c5b-ae53-7d073e5210e1/41a0810e-1fc3-46e4-9d2c-7d9e79e0aa29/hp_f&v_m_cuts-&-exotics_480_250923.jpg?tr=w-1920,q=80"
        />
        <Image
          border="1px solid lightgrey"
          borderRadius="20px"
          w="220px"
          h="170px"
          src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/91e53046-98e0-4c5b-ae53-7d073e5210e1/41a0810e-1fc3-46e4-9d2c-7d9e79e0aa29/hp_f&v_m_herbs-&-seasoning_480_250923.jpg?tr=w-1920,q=80"
        />
      </Box>


      <Heading size="lg" mt="20px" mb="20px">
        Your Daily Staples
      </Heading>
      <Box  display='grid'  gridTemplateColumns={{base:'repeat(2,1fr)',sm:'repeat(2,1fr)',md:'repeat(6,1fr)',lg:'repeat(6,1fr)'}} justifyContent={'space-between'}>
        <Image
          border="1px solid lightgrey"
          borderRadius="20px"
          w="150px"
          h="120px"
          src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/91e53046-98e0-4c5b-ae53-7d073e5210e1/0bb0a6da-8713-48fc-a40d-93cd63ca2025/hp_atta-flour-staplesStorefront_m_480_250323_01.jpg?tr=w-1920,q=80"
        />
        <Image
          border="1px solid lightgrey"
          borderRadius="20px"
          w="150px"
          h="120px"
          src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/91e53046-98e0-4c5b-ae53-7d073e5210e1/0bb0a6da-8713-48fc-a40d-93cd63ca2025/hp_dry-fruits-staplesStorefront_m_480_250323_05.jpg?tr=w-1920,q=80"
        />
        <Image
          border="1px solid lightgrey"
          borderRadius="20px"
          w="150px"
          h="120px"
          src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/91e53046-98e0-4c5b-ae53-7d073e5210e1/0bb0a6da-8713-48fc-a40d-93cd63ca2025/hp_dals-pulses-staplesStorefront_m_480_250323_03.jpg?tr=w-1920,q=80"
        />
        <Image
          border="1px solid lightgrey"
          borderRadius="20px"
          w="150px"
          h="120px"
          src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/91e53046-98e0-4c5b-ae53-7d073e5210e1/0bb0a6da-8713-48fc-a40d-93cd63ca2025/hp_cooking-oils-staplesStorefront_m_480_250323_04.jpg?tr=w-1920,q=80"
        />
         <Image
          border="1px solid lightgrey"
          borderRadius="20px"
          w="150px"
          h="120px"
          src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/91e53046-98e0-4c5b-ae53-7d073e5210e1/0bb0a6da-8713-48fc-a40d-93cd63ca2025/hp_salt-staplesStorefront_m_480_250323_06.jpg?tr=w-1920,q=80"
        />
         <Image
          border="1px solid lightgrey"
          borderRadius="20px"
          w="150px"
          h="120px"
          src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/91e53046-98e0-4c5b-ae53-7d073e5210e1/0bb0a6da-8713-48fc-a40d-93cd63ca2025/hp_rice-staplesStorefront_m_480_250323_02.jpg?tr=w-1920,q=80"/>
      </Box>


 
      <Heading size="lg" mt="20px" mb="20px">
        Cleaning & Household
      </Heading>
      <Box  display='grid'  gridTemplateColumns={{base:'repeat(2,1fr)',sm:'repeat(2,1fr)',md:'repeat(4,1fr)',lg:'repeat(4,1fr)'}} justifyContent={'space-between'}>
        <Image
          border="1px solid lightgrey"
          borderRadius="20px"
          w="220px"
          h="170px"
          src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/91e53046-98e0-4c5b-ae53-7d073e5210e1/fefafda6-5ef7-4ed2-8fee-2574720666d7/hp_c&h_m_cleaners_480_250723.jpg?tr=w-1920,q=80"
        />
        <Image
          border="1px solid lightgrey"
          borderRadius="20px"
          w="220px"
          h="170px"
          src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/91e53046-98e0-4c5b-ae53-7d073e5210e1/fefafda6-5ef7-4ed2-8fee-2574720666d7/hp_c&h_m_detergents-&-fabric-care_480_250723.jpg?tr=w-1920,q=80"
        />
        <Image
          border="1px solid lightgrey"
          borderRadius="20px"
          w="220px"
          h="170px"
          src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/91e53046-98e0-4c5b-ae53-7d073e5210e1/fefafda6-5ef7-4ed2-8fee-2574720666d7/hp_c&h_m_paper-disposables-&-garbage-bags_480_250723.jpg?tr=w-1920,q=80"
        />
        <Image
          border="1px solid lightgrey"
          borderRadius="20px"
          w="220px"
          h="170px"
          src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/91e53046-98e0-4c5b-ae53-7d073e5210e1/fefafda6-5ef7-4ed2-8fee-2574720666d7/hp_c&h_m_freshner_480_250723.jpg?tr=w-1920,q=80"
        />
      </Box>



      
      <Text mt="40px" fontSize={"20px"} fontWeight={"bold"} >
        bigbasket - online grocery store
      </Text>
      <Text color="grey" pb='20'>
        Did you ever imagine that the freshest of fruits and vegetables,
        top-quality pulses and food grains, dairy products, and hundreds of
        branded items could be handpicked and delivered to your home, all at the
        click of a button? In today's fast-paced world, bigbasket.com, India's
        pioneering online grocery store, continues to bring a staggering array
        of over 40,000 products from more than 1,000 brands to the doorsteps of
        over 10 million satisfied customers. From essential household cleaning
        products to the latest beauty and makeup trends, bigbasket remains your
        one-stop shop for daily needs. In these times, we've eliminated the
        stress associated with shopping for daily essentials. You can now
        effortlessly order all your household products and groceries online.
        Plus, the added convenience of finding all your requirements at a single
        source, coupled with substantial savings, demonstrates that bigbasket,
        India's largest online supermarket, has transformed the way we shop for
        groceries. Online grocery shopping has become second nature. And when it
        comes to freshness, whether it's fruits and vegetables or dairy and
        meat, we've got you covered! Easily obtain fresh eggs, meat, fish, and
        more with just a few clicks. We now serve 300+ cities and towns across
        India and ensure swift delivery times, guaranteeing that all your
        groceries, snacks and branded foods reach you on time. Slotted Delivery:
        Choose the most convenient delivery slot to receive your groceries,
        ranging from early morning delivery for early birds to late-night
        delivery for those on the night shift. bigbasket caters to every
        schedule. Instant delivery from bbnow: In response to the
        ever-increasing demand for convenience, bbnow by bigbasket offers
        lightning-fast grocery delivery, ensuring that your essentials are at
        your doorstep within 15-30 minutes. Our quick delivery service has
        revolutionized the way you shop for groceries. Choose from 5000+ grocery
        essentials. bbnow is available only in select cities. Whether it's a
        last-minute dinner party or you simply need something urgently, we've
        got you covered. This service exemplifies our commitment to providing
        you with not just the widest range of products but also the fastest and
        most efficient shopping experience, making bigbasket.com the go-to
        destination for all your immediate grocery needs.
      </Text>
    </Box>
  );
};

export default Home;
