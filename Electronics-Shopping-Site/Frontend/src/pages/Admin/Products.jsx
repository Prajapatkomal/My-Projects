import { useEffect, useState } from "react";
import { AdminMenu } from "./AdminMenu";
import { Link } from "react-router-dom";
import api from "../../api/api";

const Products = () => {
  const [productData, setProductData] = useState(null);

  // fetching prduct -----------
  const fetchProducts = async () => {
    try {
      const res = await api.get("/products");
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
      <div className="flex flex-col gap-5 lg:flex-row lg:justify-between ">
        <div>
          <AdminMenu />
        </div>
          <div className=" grid grid-cols-2 lg:grid-cols-4 gap-8 mx-10">
          {productData && productData.map((product) => (
            <Link key={product._id} to={`/admin/updateProduct/${product._id}`}>
            <div className="border bg-slate-50 h-full" >
              <img className="h-[180px] w-[100%]" src={`http://localhost:3000/product-photo/${product._id}`} alt="product-Image"/>
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
