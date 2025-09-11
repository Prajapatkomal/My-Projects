
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"
import Navbar from "../../components/Navbar/Navbar";
import CategoryNav from "../../components/Navbar/CategoryNav";
import { Prices } from "../../components/Prices";
import Footer from "../../components/Footer/Footer";
import api from "../../api/api";

// category based products------

export const ProductPage = () => {
 const {category} = useParams()
  const [products, setProducts] = useState(null);
      
 const [categoryId,categoryName]= category.split(",")
     const [radio, setRadio] = useState([]);

   
     // fetching prduct -----------
     const fetchProducts = async () => {
       try {
         const res = await api.get("/products");
         setProducts(res.data?.products);
       } catch (error) {
         console.log(error);
       }
     };
   
     useEffect(() => {
       fetchProducts();
     }, []);

// filter Products By Price:-----

     const filterProductsByPrice = async()=>{
   try {
        const {data} = await api.post("/product-filterByPrice",{radio})
        setProducts(data?.products)
   } catch (error) {
     console.log(error)
   }
  }

  useEffect(() => {
      filterProductsByPrice();
    }, [radio]);
   
        if (!products) {
    return <p className="text-3xl">Loading product...</p>;
  }



//  filter Products By category:---
const  filterProducts = products?.filter(p=>p.category === categoryId)


  
 

  return (
    <>
            <div className='bg-slate-50 min-h-screen w-full pb-40'> 
         <Navbar/>
          <CategoryNav/>
           <div className="flex flex-col px-6 w-full lg:flex-row  gap-10 mt-32 lg:px-12">
                 <div className=" flex flex-col  border-r lg:w-[30%]  mt-10 ">
                    <p className="text-xl mt-10">Filter By Price</p><br/>
                                     {Prices.map((p)=>(
                                       <div key={p._id} className="flex flex-col mt-2 cursor-pointer">
                                         <div className="flex gap-2">
                                         <input className="cursor-pointer" type="radio"  name="price" onChange={()=>setRadio(p.arr)}/><p>{p.name}</p>
                                       </div>
                                       </div>
                                     ))}
                  </div>    

                  <div className=" grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 mt-16">
          {filterProducts && filterProducts.map((product) => (
             <Link to={`/product/${product._id}`}  key={product._id} className="rounded-md bg-white shadow-md p-2">
               <div className="bg-slate-200 rounded-t-md "><img className="p-3 mix-blend-multiply w-[300px]" src={`${import.meta.env.VITE_API_URL}/product-photo/${product._id}`} alt="product-Image"/></div>
               <p className=" ml-3 text-gray-800  text-xs mt-1 lg:text-[15px]">{product.name}</p>
                <p className=" ml-3 mt-1 text-gray-500  text-xs">{product.description.substring(0,20)}...</p>
                <p className="ml-3  mt-2 font-semibold text-xs lg:text-[18px]">₹{product.price}</p>
                 <p className="ml-3 mt-1 text-gray-700 text-xs lg:text-xs">Free delivery</p>
                 </Link>
          ))}
        </div>
    </div>
     </div>
     <Footer/>
     </>
  )
}
