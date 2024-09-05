import { createContext , useState} from "react";


export const Context = createContext();

export const ContextProvider = ({children})=>{

const [basketCount,setBasketCount] =useState(0)
const [data,setdata] = useState([])
const [basketItems,setBasketItems] = useState([])



    return <>
           <Context.Provider value={{data,setdata,basketCount,setBasketCount,basketItems,setBasketItems}}>
              {children}
           </Context.Provider>
    </>
}