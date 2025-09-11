import { useState } from "react";
import { IoSearch } from "react-icons/io5";
import { useNavigate } from "react-router-dom";


const SearchInput = () => {
const[searchVal,setSearchVal] = useState("")
const navigate = useNavigate()



  return (
             <div className="hidden md:flex w-[450px]  ">
                    <input
                      placeholder="search here..."
                      type="text"
                      value={searchVal}
                      onChange={(e)=>setSearchVal(e.target.value)}
                      className="w-full  outline-none pl-4  p-1  border rounded-l-full focus-within:shadow-md "
                    />
                    <button onClick={()=>navigate(`/search-product/${searchVal}`)}  className="bg-red-700 w-8 rounded-r-full flex items-center justify-center text-white">
                      <IoSearch />
                    </button>
                  </div>
            
  )
}

export default SearchInput