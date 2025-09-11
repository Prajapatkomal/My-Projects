
import Navbar from "../../components/Navbar/Navbar"
import { AdminMenu } from "./AdminMenu"


const AdminDashboard = () => {
  return (
  <>
        <Navbar/>
     <div className="bg-blue-50 min-h-screen w-full pt-20">
     <p className='text-center text-3xl py-10 font-bold'>Admin Panel</p>
     
        <div>
             <AdminMenu/>
        </div>
    
    </div>
     </>
  )
 
}

export default AdminDashboard