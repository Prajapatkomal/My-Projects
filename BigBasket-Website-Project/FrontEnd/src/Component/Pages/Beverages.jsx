import { useContext, useEffect } from "react"
import {fetchdata} from '../../Redux/action.type'
import {useDispatch, useSelector} from "react-redux"
import { Box, Button, Center,  Grid, GridItem, Image, Text } from "@chakra-ui/react"
import { Link } from "react-router-dom"
import { Context } from "../../Context/Context"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSave} from '@fortawesome/free-solid-svg-icons'
import.meta.env.VITE_BACKEND_URL

const Beverages = () => {
  const products = useSelector(state => state.products)
  const {setdata,basketCount,setBasketCount} = useContext(Context)

  const dispatch = useDispatch()

  const BASE_URL = import.meta.env.VITE_BACKEND_URL || 'https://my-projects-5.onrender.com/';

    useEffect(() => {
      dispatch(fetchdata('Beverages'))
    }, [dispatch])

  
  
  //  console.log(products.data.products)

   if (products.isLoading) {
    return <Center>Loading...</Center>;
  }

  if (products.isError) {
    return <Center>Error loading products</Center>;
  }


 

  return (<Box bg='lavender' pb='100px'>
    <Box w="72%" ml="14%" mt="20px" pt='20px'>
    <Image src='https://www.bigbasket.com/media/uploads/banner_images/L2-YXPL154-1200x300-25thmar.jpg?tr=w-1200,q=80'/>
    <Image pt='20px' src='https://www.bigbasket.com/media/uploads/flatpages/test-1/Beverages.jpg'/>
    <Text  pt='20px'>Beverages</Text>
      <Grid templateColumns= {{base: 'repeat(2, 1fr)' , sm:'repeat(2, 1fr)', md:'repeat(3, 1fr)',lg:'repeat(4, 1fr)' }}  gap='20px' pt='20px' 
      >

{products.data.products && products.data.products.map((el,ind)=>{
       const imageUrl = `${BASE_URL}${el.image_url}`;
       console.log(imageUrl)

 return <GridItem  key={ind} boxShadow={'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px'}  bg='white'  borderRadius='10px'  p='10px' >
    <Center><Link to={`/product/${el._id}`}><Image   onClick={()=>setdata(el)}   boxSize={'200px'}  border='1px solid lightgrey' borderRadius='10px' src={imageUrl}/> </Link></Center> <br/>
    <Text fontSize='15px'color='grey'  pl='20px'> <Link  to={`/product/${el._id}`}>{el.brand}</Link></Text> 
   <Text fontSize='17px' pl='20px'><Link  to={`/product/${el._id}`}  onClick={()=>setdata(el)} >{el.title}</Link></Text> <br/> 
   <Text fontWeight='bold' fontSize='17px' pl='20px'><Link  to={`/product/${el._id}`}  onClick={()=>setdata(el)} >Rs:{el.price}</Link></Text> <br/> 
   <Box display={'flex'} justifyContent={'space-evenly'} mb='10px'>
     <Button bg='white' h='30px' w='20px' border='1px solid grey'><FontAwesomeIcon icon={faSave} /></Button>
   <Button border='1px solid red' bg='white' color='red' h='30px' w='140px' onClick={()=>setBasketCount(basketCount+1)}>Add</Button>
   </Box>
  
   </GridItem>
})}
</Grid>
</Box>
</Box>

)

}

export default Beverages