import { createContext , useState} from "react";


export const Context = createContext();

export const ContextProvider = ({children})=>{

const [cart,setcart] =useState(0)
const [data,setdata] = useState([])


    return <>
           <Context.Provider value={{cart,setcart,data,setdata}}>
              {children}
           </Context.Provider>
    </>
}