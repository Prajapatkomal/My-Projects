import { createContext, useEffect, useState } from "react";


export  const CartContext = createContext()

export const CartProvider = ({children})=>{

    const [cart, setCart] = useState([])
    

 
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);


    return(
        <CartContext.Provider value={[cart,setCart]}>
              {children}
        </CartContext.Provider>
    )
}