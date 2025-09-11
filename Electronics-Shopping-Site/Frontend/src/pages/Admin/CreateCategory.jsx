import { useState } from "react"
import { AdminMenu } from "./AdminMenu"
import { useEffect } from "react"
import { toast} from 'react-toastify';
import api from "../../api/api";

const CreateCategory = () => {
const [category,setCategory] = useState("")
const [categoryData, setCategoryData] = useState(null)
const[reload,setReload] = useState(false)


const token =  localStorage.getItem("token")

useEffect(()=>{
   const fetchCategories = async()=>{
     try {
        const res = await api.get("/product-category")
        console.log(res.data.category)
         setCategoryData(res.data?.category)
    } catch (error) {
       console.log(error)
    }
   }
   fetchCategories()
},[reload])


const handleSubmit = async()=>{
  try {
     const res = await api.post("/admin/createCategory",{name:category},{
      headers:{
        "Content-Type":"application/json",
         Authorization : `Bearer ${token}`
      }
     })
 
     toast(res.data.msg)
      setCategory("");        // clear input
      setReload(!reload);    //reload page when new category created
    
  } catch (error) {
     console.log(error)
     toast.error(error)
  }

}



const handleDelete = async(id)=>{
    try {
         const res =  await api.delete(`/admin/delete-category/${id}`,{
             headers:{
         Authorization : `Bearer ${token}`
      }
          })
          setReload(!reload)
          toast(res.data.msg)
    } catch (error) {
       console.log(error)
        toast.error(error)
       
    }
}



  return (
     <div className="bg-blue-50 min-h-screen w-full text-black">
     <p className='text-center text-3xl py-10 font-bold'>Create Category</p>
     <div className="w-full flex flex-col gap-5 lg:flex-row  lg:justify-between lg:pr-[100px] ">
         <AdminMenu/>
         <div>
          <div className="flex  gap-2 lg:justify-around  w-[600px] lg:gap-[20px] ">
          <input className="w-[240px] ml-3 lg:w-full h-10  pl-10 " type="text" placeholder="type category here" value={category} name="category" onChange={(e)=>setCategory(e.target.value)}/>
          <button className=" bg-blue-600 p-1 rounded-md text-white" onClick={handleSubmit}>Submit</button>
          </div>
           { categoryData && categoryData.map((cat)=>{
              return (
             <div key={cat._id} className="flex w-[300px] lg:w-full justify-between my-5 items-cente border h-10 pl-5 border-b-gray-50 items-center">
               <p className="text-xl">{cat.name}</p>
               <button className=" bg-red-600  p-1 rounded-md text-white" onClick={()=>handleDelete(cat._id)}>Delete</button>
                </div>
              )
          })}
          </div> 
        </div>
    </div>
  
  )
}

export default CreateCategory