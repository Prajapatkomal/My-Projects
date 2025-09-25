import { useEffect, useState } from "react";
import { AdminMenu } from "./AdminMenu";
import { Link } from "react-router-dom";
import api from "../../api/api";

const Products = () => {
  const [productData, setProductData] = useState(null);
  const [page, setPage] = useState(1);
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

  return (
    <div className="bg-blue-50 min-h-screen w-full text-black">
       <p className="text-center text-3xl py-10 font-bold">Products</p>
      <div className="flex flex-col gap-5 lg:flex-row lg:justify-between ">
        <div>
          <AdminMenu />
        </div>
          <div className=" grid grid-cols-2 lg:grid-cols-4 gap-8 mx-10">
          {productData && productData.map((product) => (
            <Link key={product._id} to={`/admin/updateProduct/${product._id}`}>
            <div className="border bg-slate-50 h-full" >
              <img className="h-[180px] w-[100%]" src={`${import.meta.env.VITE_API_URL}/product-photo/${product._id}`} alt="product-Image"/>
               <p className="ml-3 text-xm">{product.name}</p>
                <p className="ml-3  font-semibold">₹{product.price}</p>
              </div>
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
  );
};

export default Products;
