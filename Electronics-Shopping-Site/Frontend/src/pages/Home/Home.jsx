import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar"
import CategoryNav from "../../components/Navbar/CategoryNav";
import { Link } from "react-router-dom";
import { Prices } from "../../components/Prices";
import { Banner } from "../../components/Banner/Banner";
import Footer from "../../components/Footer/Footer";
import api from "../../api/api"



const Home = () => {
    const [productData, setProductData] = useState(null);
    const [radio, setRadio] = useState([]);
  
   

    // fetching prduct -----------
    const fetchProducts = async () => {
      try {
        const res = await api.get("/products");
        setProductData(res.data?.products);
      } catch (error) {
        console.log(error);
      }
    };
  
    useEffect(() => {
      fetchProducts();
    }, []);
  

  const filterProducts = async()=>{
   try {
        const {data} = await api.post("/product-filterByPrice",{radio})
        setProductData(data?.products)
   } catch (error) {
     console.log(error)
   }
  }

  useEffect(() => {
      filterProducts();
    }, [radio,]);
  


      if (!productData) {
    return <p className="text-3xl">Loading product...</p>;
  }

  
  return (
 <>
     <div className='bg-slate-50 min-h-screen w-full pb-40'> 
         <Navbar/>
          <CategoryNav/>
          <Banner/>
            
           <div className=" w-full flex   lg:gap-10  lg:p-10">
                 <div className="hidden lg:flex flex-col border-r w-[25%] ">
                  <p className="text-xl mt-10">Filter By Price</p><br/>
                  {Prices.map((p)=>(
                    <div key={p._id} className="flex flex-col mt-2 cursor-pointer">
                      <div className="flex gap-2">
                      <input className="cursor-pointer" type="radio"  name="price" onChange={()=>setRadio(p.arr)}/><p>{p.name}</p>
                    </div>
                    </div>
                  ))}
                  </div>    
                     
                  <div className="px-10 w-full grid grid-cols-2 gap-4  md:grid-cols-3 lg:grid-cols-4 lg:gap-10 lg:mt-12 lg:px-2">
          {productData && productData.map((product) => (
            <Link to={`/product/${product._id}`} key={product._id} className="rounded-md bg-white shadow-md " >
               <div className="bg-slate-200 rounded-t-md  "><img className="p-3 mix-blend-multiply w-full " src={`${import.meta.env.VITE_API_URL}/product-photo/${product._id}`} alt="product-Image"/></div>
               <p className=" ml-3 text-black  text-xm mt-1">{product.name}</p>
               <p className=" ml-3 text-gray-500  text-xs">{product.description.substring(0,25)}...</p>
               <div className="flex justify-between mt-1">
                     <p className="ml-3 font-semibold">₹{product.price}</p>
                     <div className="h-4  mt-1 text-xs text-white bg-gradient-to-r from-white to-green-700  px-5 mr-4 rounded-r-3xl">Easy EMI</div>
               </div>
                 <p className="ml-3 text-gray-700">Free delivery</p>
              </Link>
          ))}
        </div>
        </div>
    </div>
     <Footer/>
     </>
  )
}

export default Home