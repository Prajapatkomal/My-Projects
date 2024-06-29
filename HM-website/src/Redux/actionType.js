

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




const url = 'http://localhost:3000/products'


export const fetchdata =(category) => async (dispatch) => {
  try {
    dispatch(fetchloading())
    const res = await fetch(`${url}?category=${encodeURIComponent(category)}`)
    const data = await res.json()
    dispatch(fetchsuccess(data))
    console.log(data)

  } catch (error) {
    dispatch(fetcherror())
    console.log(error)
  }
}


// export const fetchdata =() => async (dispatch) => {
//   try {
//     dispatch(fetchloading())
//     const res = await fetch(url)
//     const data = await res.json()
//     dispatch(fetchsuccess(data))
//     console.log(data)

//   } catch (error) {
//     dispatch(fetcherror())
//     console.log(error)
//   }
// }






