

export const LOADING = 'LOADING'
export const ERROR = 'ERROR'
export const SUCCESS = 'SUCCESS'



export const fetchloading = ()=>{
    return {type: LOADING}
}

export const fetcherror = ()=>{
    return {type: ERROR}
}

export const fetchsuccess = (data)=>{
    return {type: SUCCESS, payload:data}
}





const url = 'https://my-projects-5.onrender.com/product'

// const url = 'http://localhost:5000/product'


export const fetchdata =(category) => async (dispatch) => {
  try {
    dispatch(fetchloading())
    const res = await fetch(`${url}?category=${(category)}`)
    const data = await res.json()
    dispatch(fetchsuccess(data))
   

  } catch (error) {
    dispatch(fetcherror())
    console.log(error)
  }
}




