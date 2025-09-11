
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../../api/api";


const CategoryNav = () => {
     const [categoryData, setCategoryData] = useState(null);
         // fetching categories to create product -----------
          const fetchCategories = async () => {
              try {
                const res = await api.get("/product-category");
                setCategoryData(res.data?.category);
              } catch (error) {
                console.log(error);
              }
            };
        
          useEffect(() => {
            fetchCategories();
          }, []);

  return (
    
        <div className="fixed top-16 left-0 w-full z-40 border bg-slate-100">
  <div className="flex items-center justify-start lg:justify-between gap-4 overflow-x-auto scrollbar-hide p-4">
                             {categoryData && categoryData.map((c)=>(
                                 <Link to={`/${[c._id,c.name]}`}   key={c._id} className="cursor-pointer text-black font-semibold hover:text-red-500 " >{c.name}</Link>
                             ))}
                            </div> 
                            </div> 
  )
}

export default CategoryNav