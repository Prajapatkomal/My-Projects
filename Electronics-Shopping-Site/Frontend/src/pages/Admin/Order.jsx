import { AdminMenu } from "./AdminMenu"
import { useEffect, useState } from "react";
import moment from "moment";
import api from "../../api/api";


const Order = () => {
 const [orders, setOrders] = useState([]);

 const token = localStorage.getItem("token")

  const getOrders = async () => {
    try {
      const { data } = await api.get("/admin/orders",{
        headers: {
          Authorization: `Bearer ${token}`
        },
      });
      console.log(data)
      setOrders(data.orders);
    } catch (error) {
      console.log(error);
    }
  };

 
  const handleStatusChange = async (orderId, newStatus) => {
  await api.put(
      `/admin/order-status/${orderId}`,
      { status: newStatus },
      { headers: 
        { Authorization: `Bearer ${token}` } 
      }
    );
    getOrders(); // refresh orders after update
  };


  useEffect(() => {
    getOrders();
  }, []);


  return (
     <div className="bg-blue-50 min-h-screen w-full">
     <p className='text-center text-3xl py-10 font-bold'>Order</p>
        <div className="flex flex-col gap-5 lg:flex-row gap-5">
        <div>
             <AdminMenu/>
        </div>
                <div className="overflow-x-auto rounded-box border  bg-base-100 w-full mr-5 text-black">
                  <table className="table">
                    <thead>
                      <tr className="text-lg">
                        <th>#</th>
                        <th>Status</th>
                        <th>Buyer</th>
                        <th>Date</th>
                        <th>Payment</th>
                        <th>Quantity</th>
                      </tr>
                    </thead>
                    <tbody>
                      {orders?.map((o, i) => {                                       {/* Order details row */}
                        return (
                          <>
                          <tr key={i} className="bg-slate-50">
                            <th>{i + 1}</th>
                            <td>
                            <select
                               value={o.status}
                               onChange={(e) => handleStatusChange(o._id, e.target.value)}
                               >
                               <option value="Not Processed">Not Processed</option>
                              <option value="Processing">Processing</option>
                             <option value="Shipped">Shipped</option>
                             <option value="Delivered">Delivered</option>
                             <option value="Cancel">Cancel</option>
                            </select>
                             </td>
                            <td>{o?.buyer?.userName}</td>
                            <td>{moment(o?.createdAt).format("MMM D, YYYY, h:mm A")}</td>
                            <td>{o?.payment?"Success":"Failed"}</td>
                            <td>{o?.products.length}</td>
                          </tr>                                                      {/* products details row */}
                          <tr>
                          <td colSpan={6}> 
                    <div  className="p-4 flex flex-wrap gap-10"> 
                            {o?.products.map((p, i) => (                              
                        <div key={i}
                    className=" w-[350px] rounded-xl shadow-sm flex items-center gap-5 p-4 bg-white"
                  >
                    <img
                      className="h-28 w-28 object-cover rounded-lg"
                      src={`${import.meta.env.VITE_API_URL}/product-photo/${p._id}`}
                      alt={p.name}
                    />
                    <div className="flex flex-col justify-center">
                      <p className="font-semibold text-xs">{p.name}</p>
                      <p className="text-gray-500 text-sm">
                        {p.description.substring(0,20)}...
                      </p>
                       <p className="font-semibold">
                        ₹{p.price}
                      </p>
                    </div>
                  </div>
                    
                ))}
                  </div>
                  </td>
                   </tr>
                          </>
                        );
                      })}
                    </tbody>
                  </table>
                    
                    
                </div>
              </div>
    </div>

  )
}

export default Order