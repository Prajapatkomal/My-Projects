
import {useEffect,useState } from "react";
import { Link, useParams } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import CategoryNav from "../../components/Navbar/CategoryNav";
import api from "../../api/api";


export const ProductDetail = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  


  const fetchSingleProduct = async () => {
    try {
      const res = await api.get(`/product/${productId}`);
      setProduct(res.data?.product);
    } catch (error) {
      console.log(error);
    }
  };

  

    useEffect(() => {
    fetchSingleProduct();
  }, [productId]);
  
   
     if (!product) {
    return <p className="text-3xl">Loading product...</p>;
  }

  const handleCart =async()=>{
      try {
         await api.post("/addCart",{ productId: product._id },{
           headers:{ 
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            "Content-Type":"application/json"
           }
         }
)
 
      } catch (error) {
         console.log(error)
      }  
  }


  

    

  return (
    <div className="bg-slate-50 min-h-screen w-full">
      <Navbar />
      <CategoryNav/>

      <div className="flex flex-col lg:flex-row min-w-[100%] justify-between gap-10 px-20 py-20 mt-20">
              
        <div className=" w-full lg:w-[40%]  ">
            <div className="w-full lg:w-[70%] lg:m-auto bg-slate-50">
              <img className="w-full mix-blend-multiply " src={`${import.meta.env.VITE_API_URL}/product-photo/${product._id}`}/>
              </div>    
             
                
        </div>
              
         
             
        <div className="flex flex-col w-full  lg:w-[50%] gap-2">
               <p className="text-2xl">{product.name}</p>
               <p className="text-xl">{product.description}</p>
               <p className="text-3xl font-semibold">₹{product.price}</p>
               <p className="text-xl text-gray-500">Free Delivery</p>
               <p className="font-semibold">Available Offer:-</p>
               <p>✅  Bank Offer5% cashback on Axis Bank Credit Card upto ₹4,000 per statement quarterT&C</p>
                <p>✅  Bank Offer5% cashback on Axis Bank Debit Card up to ₹750T&C</p>
                <p>✅  Bank Offer5% cashback on SBI Credit Card upto ₹4,000 per calendar quarterT&C</p>

              <div className="flex justify-between gap-5 mt-5">
                <button className="border p-2 w-full bg-blue-800 text-white font-semibold text-xl rounded-md active:bg-red-600" onClick={handleCart}>Add</button>
                  <Link to="/cart" className="border p-2 w-full  bg-blue-800 text-white text-xl font-semibold rounded-md active:bg-red-600 text-center" onClick={handleCart}>Buy</Link>
                </div>  
         </div>
 
        </div>


      </div>
   
  );
};
