import { useNavigate } from "react-router-dom"


export const AdminMenu = () => {
    const navigate = useNavigate()
  return (
       <div>
                <div className="flex flex-col border w-[300px] ml-4">
                <button onClick={()=>navigate("/adminDashboard")} className="bg-black border text-white py-3 text-2xl">Admin Panel</button>
               <button onClick={()=>navigate("/admin/createCategory")} className="bg-white text-black hover:bg-blue-500 py-2">Create Category</button>
                <button onClick={()=>navigate("/admin/createProduct")} className="bg-white text-black hover:bg-blue-500 py-2">Create Product</button>
                <button onClick={()=>navigate("/admin/products")} className="bg-white border text-black hover:bg-blue-500 py-2">Products</button>
                <button onClick={()=>navigate("/admin/orders")} className="bg-white text-black hover:bg-blue-500 py-2"> Orders</button>
        </div>
        </div>
  )
}
