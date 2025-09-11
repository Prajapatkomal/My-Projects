
import { useState } from "react";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import CategoryNav from "../../components/Navbar/CategoryNav";
import Footer from "../../components/Footer/Footer";
import api from "../../api/api";

const SearchProduct = () => {
  const {keyword} = useParams()
const [products, setProducts] = useState(null);

  const fetchProduct = async () => {
          try {
            const res = await api.get(`/search-product/${keyword}`);
             console.log(res.data?.product);
             setProducts(res.data?.product)
          } catch (error) {
            console.log(error);
          }
        };

  useEffect(()=>{
    fetchProduct()
  },[keyword])

     if (!products) {
    return <p className="text-3xl">Loading product...</p>;
  }


  return (
    <>
      <div className='bg-slate-50 min-h-screen w-full'> 
             <Navbar/>
              <CategoryNav/>
                <div className=" p-3 bg-white shadow-md mt-32">
                  <p>results for <span className="text-orange-700">{keyword}</span></p> 
                </div>
               <div className="flex w-[100%] gap-10 mt-10">
                       
                      <div className=" grid grid-cols-4 gap-16  justify-between  m-auto">
              {products && products.map((product) => (
               <Link to={`/product/${product._id}`} key={product._id} className="rounded-md w-[220px] bg-white shadow-md p-2 " >
                   <div className="bg-slate-200  rounded-t-md  "><img className="p-3 mix-blend-multiply h-[220px] w-[100%]" src={`${import.meta.env.VITE_API_URL}/product-photo/${product._id}`} alt="product-Image"/></div>
                   <p className="ml-3 text-xm mt-1">{product.name}</p>
                    <p className=" ml-3 text-gray-500  text-xs">{product.description.substring(0,25)}...</p>
                    <p className="ml-3  font-semibold">₹{product.price}</p>

                  </Link>
                  
              ))}
            </div>
            </div>
        </div>
        <Footer/>
        </>
      )
}

export default SearchProduct