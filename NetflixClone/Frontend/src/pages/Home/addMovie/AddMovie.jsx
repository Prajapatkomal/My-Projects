import axios from "axios"
import { useState } from "react"

const AddMovie = () => {
  const [data,setData] = useState({title:"",poster:"",videoKey:"",type:"",category:""})


  const handleSubmit = (e)=>{
    e.preventDefault()
    console.log(data)
    setData({title:"",poster:"",videoKey:"",type:"",category:""})
  }


   const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };


  const addMovie = async () => {
  try {
    const res = await axios.post("http://localhost:8080/movie/create", data, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });

    console.log("Movie added:", res.data);
    return res.data;
  } catch (error) {
    console.error(error);
  }

};



  return (
    <div>
        <h1>addMovie</h1>
        <form onSubmit={handleSubmit}>
        <input type="text" placeholder="title" value={data.title}  name="title" onChange={handleChange}/>
          <input type="text" placeholder="poster" value={data.poster} name="poster" onChange={handleChange}/>
            <input type="text" placeholder="videoKey" value={data.videoKey}name="videoKey" onChange={handleChange}/>
              <select name="type" value={data.type} onChange={handleChange}>
                 <option value="">Select category</option>
                 <option value="trailer">trailer</option>
                   <option value="movie">movie</option>
              </select>
               <select name="category"  value={data.category} onChange={handleChange}>
                 <option value="">Select category</option>
                 <option value="Upcoming">Upcoming</option>
                   <option value="Blockbuster Movies">Blockbuster Movies</option>
              </select>
                <button onClick={addMovie}>Submit</button>
        </form>
        </div>
  )
}

export default AddMovie














