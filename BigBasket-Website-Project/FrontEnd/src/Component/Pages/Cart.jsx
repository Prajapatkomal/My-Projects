import { Box, Text } from "@chakra-ui/react"
import { useContext } from "react"
import { Context } from "../../Context/Context"



const Cart = () => {
    const {basketItems} = useContext(Context)
console.log(basketItems)

  return (
     <Box w='100%' bg='white' p='100px'>
         <Box p='10px' boxShadow={'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px'} >
           <Text textAlign={'center'}>Cart Page</Text>
         </Box>
     </Box>
  )
}

export default Cart