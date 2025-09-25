import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar"
import CategoryNav from "../../components/Navbar/CategoryNav";
import { Link } from "react-router-dom";
import { Prices } from "../../components/Prices";
import { Banner } from "../../components/Banner/Banner";
import Footer from "../../components/Footer/Footer";
import api from "../../api/api"



const Home = () => {
    const [productData, setProductData] = useState([]);
    const [page, setPage] = useState(1);
    const [radio, setRadio] = useState([]);
  
   

    // fetching prduct -----------
    const loadProducts  = async () => {
      try {
        const {data} = await api.get(`/products?page=${page}`);
        if (page === 1) {
        setProductData(data.products);
      } else {
        setProductData((prev) => [...prev, ...data.products]);
      }
       
      } catch (error) {
        console.log(error);
      }
    };
  
    useEffect(() => {
      loadProducts();
    }, [page]);
  

  const filterProducts = async()=>{
   try {
        const {data} = await api.post("/product-filterByPrice",{radio})
        setProductData(data?.products || [])
   } catch (error) {
     console.log(error)
   }
  }

 useEffect(() => {
    if (radio.length > 0) {
      filterProducts();
    } else {
      setPage(1); // reset pagination if filter is cleared
    }
  }, [radio]);


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
               <div className="bg-slate-200 rounded-t-md  "><img className="p-3 mix-blend-multiply h-[180px] w-full lg:h-[200px] " src={`${import.meta.env.VITE_API_URL}/product-photo/${product._id}`} alt="product-Image"/></div>
               <p className=" ml-3 text-black  text-xm mt-1">{product.name}</p>
               <p className=" ml-3 text-gray-500  text-xs">{product.description.substring(0,25)}...</p>
               <div className="flex justify-between mt-1">
                     <p className=" text-black ml-3 font-semibold">₹{product.price}</p>
                     <div className="mr-1 h-4 px-3 mt-1 text-xs text-white bg-gradient-to-r from-white to-green-700  lg:px-5  rounded-r-3xl lg:mr-4">Easy EMI</div>
               </div>
                 <p className="ml-3 text-gray-700">Free delivery</p>
              </Link>
          ))}
        </div>
        </div>
        <div className="flex justify-center mt-10">
         <button className=" bg-black text-white px-2 rounded-sm"  onClick={() => setPage(page + 1)}>
        Load More
      </button>
      </div>
    </div>
     <Footer/>
     </>
  )
}

export default Home