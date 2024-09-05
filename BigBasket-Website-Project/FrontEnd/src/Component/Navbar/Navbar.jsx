import {
  Box,
  Button,
  Divider,
  IconButton,
  Image,
  Input,
  Link,
  Select,
  Show,
  Text,
} from "@chakra-ui/react";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../../Context/Context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping,faUserPlus,faBars } from "@fortawesome/free-solid-svg-icons";
import navStyle from './Navbar.module.css'
import { SearchIcon} from '@chakra-ui/icons'

const Navbar = () => {
  const navigate = useNavigate();
  const { basketCount} = useContext(Context);
  const [sidebar,setsidebar] = useState(false)


  const style = {
   display : sidebar? "flex":"none"    // flex when sidebar is open 
  }


  const blurStyle = {
    filter: sidebar ? "blur(20px)" : "none", // Add blur when sidebar is open
  };



  const handleSighUp = () => {
    document.title= "Login/SignUp"
    navigate("/login");
  };

  const handleCategoryChange = (e) => {
    const selectedCategory = e.target.value;

    document.title= selectedCategory
    // Navigate based on the selected category
    switch (selectedCategory) {
      case "Fruits & Vegetables":
        navigate("/fruitsAndVegetables");
        break;
      case "Dairy Products":
        navigate("/dairyProducts");
        break;
      case "Beverages":
        navigate("/beverages");
        break;
      case "Beauty & Hygiene":
        navigate("/beautyAndHygiene");
        break;
      case "Foodgrains,Oil and Masala":
        navigate("/foodgrainOilMasala");
        break;
      case "Cleaning & Household":
        navigate("/cleaningAndHousehold");
        break;
      default:
        break;
    }
  };

  return (
    <>
      <Show above="sm">
        <Box w="100%" p="2px" bg="green"></Box>
        <Box
          mt="10px"
          w="100%"
          display="flex"
          justifyContent={"center"}
          gap="25px"
        >
          <Image
            h="50px"
            w="100px"
            src=" https://gumlet-images.assettype.com/afaqs%2F2021-11%2Fc57035f1-ad95-4b5c-881e-086506b1f6db%2Fbb_TATA_Double_line_logo.jpg?format=webp&w=480&dpr=2.6"
          />
           <IconButton
            colorScheme='blue'
            aria-label='Search database'
            bg='white'
            color='green'
            icon={<SearchIcon/>}

          />
          <Input w="30%" h="40px" type="text"></Input>
          <Link href='https://www.google.com/maps' isExternal ><Button bg={"lightgrey"} fontSize="13px" p="20px">
            Select Location
          </Button>
          </Link>
          <Button
            bg={"black"}
            color="white"
            fontSize="13px"
            p="20px"
            onClick={handleSighUp}
          >
            Login/Sign <br/> Up
          </Button>
          <Link href="/cart" mt="5px">
            <FontAwesomeIcon
              color="red"
              fontSize="30px"
              icon={faCartShopping}
            />
            {basketCount}
          </Link>
        </Box>

        <Box
          w="100%"
          mt="15px"
          display="flex"
          justifyContent={"center"}
          gap="25px"
        >
          <Select
            placeholder="Shop by Category"
            bg="green"
            w="150px"
            h="40px"
            color="white"
            fontSize="13px"
            onChange={handleCategoryChange} // Handle category change
          >
            <option value="Fruits & Vegetables">Fruits & Vegetables</option>
            <option value="Beverages">Beverages</option>
            <option value="Beauty & Hygiene">Beauty & Hygiene</option>
            <option value="Cleaning & Household">Cleaning & Household</option>
            <option value="Foodgrains,Oil and Masala">
              Foodgrains,Oil and Masala
            </option>
            <option value="Dairy Products">Dairy Products</option>
          </Select>

          <Box fontSize={"12px"} display="flex" gap="40px" mt="8px">
            <Link className={navStyle.navLink} href="/">Home</Link>
            <Link className={navStyle.navLink} href="/fruitsAndVegetables"> Fruits & Vegitables</Link>
            <Link className={navStyle.navLink} href="/beverages">Beverages</Link>
            <Link className={navStyle.navLink} href="/dairyProducts">Dairy Product</Link>
            <Link className={navStyle.navLink} href="beautyAndHygiene">Beauty & Hygiene</Link>
          </Box>
          <Divider orientation="vertical" height="40px" />
          <Box display="flex" gap="35px">
            <Button fontSize="13px" borderRadius={"25px"} p="5">
              Smart <br />
              Basket
            </Button>
            <Button fontSize="13px" borderRadius={"25px"} p="5">
              % Offers
            </Button>
          </Box>
        </Box>
      </Show>


 {/* this code for mobile screen */}

      <Show below="sm">
        <Box display="flex" w='100%' justifyContent={"space-evenly"}>
        <Image
            h="50px"
            w="100px"
            src=" https://gumlet-images.assettype.com/afaqs%2F2021-11%2Fc57035f1-ad95-4b5c-881e-086506b1f6db%2Fbb_TATA_Double_line_logo.jpg?format=webp&w=480&dpr=2.6"
          />
          <Text fontWeight={'bold'}>Use our app for best <br/>
          experience</Text>
        </Box>



        <Box bg="green">
          <Box display="flex" justifyContent={"space-between"} p='15px'>
          <Link  fontSize='22px' onClick={()=>setsidebar(true)} ><FontAwesomeIcon icon={faBars} /></Link>
      <Box w='100%' fontSize={'20px'}fontWeight={'bold'} style={style} pl='5' gap='3' flexDirection={'column'} position={'fixed'} h='100vh' backdropFilter={'blur(100px)'} bg='white' zIndex={1000}>
      <Link className={navStyle.smLink} href='/' mt='30px'>Home</Link>      
      <Link className={navStyle.smLink}  href='/fruitsAndVegetables'>Fruits & Vegetables</Link>
      <Link className={navStyle.smLink} href='/beverages'>Beverages</Link>
      <Link className={navStyle.smLink} href='/dairyProducts'>Dairy Products</Link>
      <Link className={navStyle.smLink} href='/beautyAndHygiene'>Beauty & Hygiene</Link>
      <Link className={navStyle.smLink} href='/foodgrainOilMasala'>Foodgrains, Oil and Masala</Link>
      <Link className={navStyle.smLink} href='/cleaningAndHousehold'>Cleaning & Household</Link>
          <Link onClick={()=>setsidebar(false)} ><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg></Link>
      </Box>
     
            <Link href='https://www.google.com/maps' isExternal><Button style={blurStyle} bg={"green"} fontSize="13px" p="20px" color='white'>
              Select Location
            </Button>
            </Link>
          
            <Button
              style={blurStyle}
              bg={"green"}
              fontSize="22px"
              p="20px"
              onClick={handleSighUp} >
                <FontAwesomeIcon icon={faUserPlus} />
             </Button>
          


          </Box>
        </Box>
      </Show>
    </>
  );
};

export default Navbar;
