import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import Navbar from "../../components/Navbar/Navbar";
import CategoryNav from "../../components/Navbar/CategoryNav";
import { useState } from "react";
import { useEffect } from "react";
import DropIn from "braintree-web-drop-in-react";
import { toast } from "react-toastify";
import api from "../../api/api";

const CartPage = () => {
  const [cart,setCart] = useContext(CartContext);
  const [clientToken,setClientToken] = useState("")
  const [instance, setInstance] = useState("")
   const [loading, setLoading] = useState(false)
  


const totalPrice =()=>{
  const cart = JSON.parse(localStorage.getItem("cart"))
  let total=0
  cart.forEach((p) => {
      const price = Number(p.price) || 0;
      total += price
    });
    return total;
}

  const handleRemove= async(p_id)=>{
      try {
         await api.delete(`/deleteCart/${p_id}`,{
             headers:{
            Authorization : `Bearer ${localStorage.getItem("token")}`
          }
         })
      setCart(cart.filter((p) => p._id !== p_id));
      toast.success("Product removed from cart");
      } catch (error) {
        console.log(error)
      }
  }



  const getToken = async()=>{
     try {
         const res = await api.get("/braintree/token")
         setClientToken(res.data?.clientToken)
     } catch (error) {
       console.log(error)
     }
  }



useEffect(()=>{
   getToken()
},[])

const handlePayment = async () => {
  try {
    setLoading(true);

    // Get payment method nonce from Drop-in (no PayPal, only card)
    const { nonce } = await instance.requestPaymentMethod();

    const { data } = await api.post(
      "/braintree/payment",
      {
        nonce,
        cart: JSON.parse(localStorage.getItem("cart") || "[]"),
      },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );

    if (data.ok) {
      
      localStorage.removeItem("cart");
      setCart([]);
      toast.success("Payment completed successfully (Sandbox)");
    } else {
      toast.error("Payment failed");
    }
  } catch (error) {
    console.error("Braintree payment error:", error);
    toast.error("Payment failed, please try again");
  } finally {
    setLoading(false);
  }
};




  return (
    <div className="bg-slate-50 min-h-screen w-full">
      <Navbar />
      <CategoryNav />
      <div className="bg-white min-h-screen mt-32">
    {cart.length !==0 && <p className="text-center pt-5 text-2xl">
    You have {cart.length} items in your cart
  </p>
   }

  {localStorage.getItem("token") ? (
    cart.length !== 0 ? (
      // CART ITEMS CONTAINER
      <div className="flex flex-col lg:flex-row gap-10 m-8 justify-between">
         <div className="flex flex-col gap-5   w-full p-10">
        {cart.map((p, i) => (
          <div
            key={i}
            className="border rounded-xl shadow-sm flex items-center gap-5 p-4 bg-white"
          >
            <img
              className="h-28 w-28 object-cover rounded-lg"
              src={`${import.meta.env.VITE_API_URL}/product-photo/${p._id}`}
              alt={p.name}
            />
            <div className="flex flex-col justify-center">
              <p className="font-semibold text-lg">{p.name}</p>
              <p className="text-gray-500 text-sm">
                {p.description.substring(0, 30)}...
              </p>
               <p className="font-semibold">
                ₹{p.price}
              </p>
              <button className="text-white mt-2 bg-red-600 w-fit text-xs px-2 py-1 rounded-md" onClick={()=>handleRemove(p._id)}>Remove</button>
            </div>
          </div>
        ))}  
         </div>
         <div className="flex flex-col gap-2 p-10 text-center w-full"> 
          <p className="text-xl">Total | Checkout | Payment | </p>
          <hr/>
          <p className="text-2xl">Total: ₹{totalPrice()}</p>
          <div className="border border-black w-fit text-center p-4 mx-auto">
            <label className="font-semibold">Your Address:-</label>
            <div>
                   <input className="border"  placeholder='building...' type="text"/><br/>
                   <input className="border mt-1" placeholder="locality..." type="text"/><br/>
                   <input className="border mt-1"placeholder="city..." type="text"/><br/>
                    <input className="border mt-1"placeholder="pincode..." type="number"/><br/>
                   <button className="bg-slate-900 border-white rounded-md  text-white w-full mt-2">Save</button>
            </div>
            </div>


           <div>
            {!clientToken || !cart?.length?(""):(
              <>
              <DropIn
            options={{ 
              authorization: clientToken,
               paypal:false,
               card: {
                       cardholderName: true
                    }
             }}
            onInstance={instance => setInstance(instance)}
          />
          <button className="bg-red-600 px-3 py-2 mt-5 text-white rounded-md hover:cursor-pointer" 
          onClick={handlePayment}
          disabled={!instance || loading}
          >Make Payment
          </button>
              </>
            )}
        </div>
            </div>
  
      </div>
    ) : (
      // EMPTY MESSAGE
      <div className="border-b p-20 mx-20 text-center">
        <p className="text-xl lg:text-4xl font-semibold">Your cart is empty</p>
      </div>
    )
  ) : (
    // LOGIN MESSAGE
    <div className="border-b p-20 mx-20 text-center">
      <p className="text-xl lg:text-4xl font-semibold">Please login to view cart</p>
    </div>
  )}

</div>
    </div>
  );
};

export default CartPage;
