
import { useContext, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {fetchdata} from '../../Redux/actionType'
import {  Center, Grid, GridItem, Image, Text,Box, Heading, Flex, Button, Select, } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { Context } from '../../Context/Context'

const Ladies = () => {
  const products = useSelector(state => state.productdata)
  const dispatch = useDispatch()
  const {cart,setcart,setdata} = useContext(Context)
  const [searchTerm, setSearchTerm] = useState('');
  

  useEffect(() => {
    dispatch(fetchdata( 'Womens Clothing'))
  },[dispatch])



  if (products.isLoading) {
    return <Center>Loading...</Center>;
  }

  if (products.isError) {
    return <Center>Error loading products</Center>;
  }

  const filteredProducts = products.data
  ? products.data.filter((el) =>
      el.title.toLowerCase().includes(searchTerm.toLowerCase())
    )
  : [];


  return (
    <>
     <Select border='3px solid' ml='50px' w='200px' placeholder='select type' onChange={(e)=>setSearchTerm(e.target.value)}>
             <option value='T-shirt'>T-shirt</option>
             <option value='saree'>saree</option>
             <option value='jeans'>jeans</option>
             <option value='Top'>Top</option>
             <option value='kurti'>kurti</option>
             <option value='pant'>pant</option>
      </Select>

      <Image src=' https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReITZ3N6HJhZzssMkWmvphnnLAt5JtxTbHSw&s'/>
    <Box  m='20'  bg='blue.900'  p='20'>
       <Box display={'flex'} justifyContent={'center'} gap='20' flexDirection={{base:'column',sm:'column',md:'row',lg:'row'}}>
         <Image w='500px'  src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQx5t7UI3Fizsa8MLO2bgkebUOJDK9bQZZJCg&s'/>
         <Image w='4=500px' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCrVICSRA_nSwhLx6Gjf0E3QIj2kVCgqVcWQ&s'/>
       
       </Box>
  
    </Box>
    <Box display={'flex'} justifyContent={'center'} flexDirection={{base:'column',sm:'column',md:'row',lg:'row'}} m='20' gap='5'>
    <Image boxSize='300px' w='500px' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTB3At9a1M1VsZRW3t51ruN74HyLCpalUqOrA&s'/>
    <Image boxSize='300px' w='500px' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmym2MBFLvlqdMn9cs5DaBCFhxd8DoJzqK1g&s'/>
    </Box>



    {filteredProducts ? 
        <Grid templateColumns= {{base: 'repeat(2, 1fr)' , sm:'repeat(2, 1fr)', md:'repeat(2, 1fr)',lg:'repeat(3, 1fr)' }}  p='10px' gap='20px'>
         {filteredProducts.map((el,ind)=>{
           return <GridItem  key={ind} boxShadow={'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px'}   >
              <Center><Link to={`/products/${ind}`}><Image boxSize={'500px'} w='300px' src={el.image}  onClick={()=>setdata(el)}/> </Link></Center> <br/>
             <Text p='8' fontWeight={'bold'} fontSize='20px'  textAlign={'center'}><Link  onClick={()=>setdata(el)} to={`/products/${ind}`}>{el.title} <br/>Rs: {el.price}</Link></Text> <br/> 
             <Button  ml='20px' mb='20px' bg='black' color='white' onClick={()=>setcart(cart+1)}  >Add <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M240-80q-33 0-56.5-23.5T160-160v-480q0-33 23.5-56.5T240-720h80q0-66 47-113t113-47q66 0 113 47t47 113h80q33 0 56.5 23.5T800-640v480q0 33-23.5 56.5T720-80H240Zm0-80h480v-480h-80v80q0 17-11.5 28.5T600-520q-17 0-28.5-11.5T560-560v-80H400v80q0 17-11.5 28.5T360-520q-17 0-28.5-11.5T320-560v-80h-80v480Zm160-560h160q0-33-23.5-56.5T480-800q-33 0-56.5 23.5T400-720ZM240-160v-480 480Z"/></svg></Button>
             </GridItem>
     })}
     </Grid>
      :
      <Grid templateColumns= {{base: 'repeat(2, 1fr)' , sm:'repeat(2, 1fr)', md:'repeat(2, 1fr)',lg:'repeat(3, 1fr)' }}  p='10px' gap='20px'>
      {products.data && products.data.map((el,ind)=>{
        return <GridItem  key={ind} boxShadow={'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px'}   >
           <Center><Link to={`/products/${ind}`}><Image boxSize={'500px'} w='300px' src={el.image}  onClick={()=>setdata(el)}/> </Link></Center> <br/>
          <Text p='8' fontWeight={'bold'} fontSize='20px'  textAlign={'center'}><Link  onClick={()=>setdata(el)} to={`/products/${ind}`}>{el.title} <br/>Rs: {el.price}</Link></Text> <br/> 
          <Button  ml='20px' mb='20px' bg='black' color='white' onClick={()=>setcart(cart+1)}  >Add <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M240-80q-33 0-56.5-23.5T160-160v-480q0-33 23.5-56.5T240-720h80q0-66 47-113t113-47q66 0 113 47t47 113h80q33 0 56.5 23.5T800-640v480q0 33-23.5 56.5T720-80H240Zm0-80h480v-480h-80v80q0 17-11.5 28.5T600-520q-17 0-28.5-11.5T560-560v-80H400v80q0 17-11.5 28.5T360-520q-17 0-28.5-11.5T320-560v-80h-80v480Zm160-560h160q0-33-23.5-56.5T480-800q-33 0-56.5 23.5T400-720ZM240-160v-480 480Z"/></svg></Button>
          </GridItem>
  })}
  </Grid>
    }
   
    </>
  )
}

export default Ladies







 

 

 


 

  