import { useEffect, useState } from "react";
import { AdminMenu } from "./AdminMenu";
import axios from "axios";
import { Link } from "react-router-dom";

const Products = () => {
  const [productData, setProductData] = useState(null);

  // fetching prduct -----------
  const fetchProducts = async () => {
    try {
      const res = await axios.get("http://localhost:3000/products");
      console.log(res.data);
      setProductData(res.data?.products);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="bg-blue-50 min-h-screen w-full">
       <p className="text-center text-3xl py-10 font-bold">Products</p>
      <div className="flex justify-between ">
        <div>
          <AdminMenu />
        </div>
          <div className=" grid grid-cols-4 gap-8 m-10">
          {productData && productData.map((product) => (
            <Link key={product._id} to={`/admin/updateProduct/${product._id}`}>
            <div className="border bg-slate-50" >
              <img className="h-[200px] w-[100%]" src={`http://localhost:3000/product-photo/${product._id}`} alt="product-Image"/>
               <p className="ml-3 text-xm">{product.name}</p>
                <p className="ml-3  font-semibold">₹{product.price}</p>
              </div>
              </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
