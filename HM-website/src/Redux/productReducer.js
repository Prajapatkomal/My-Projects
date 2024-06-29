import { LOADING, ERROR, SUCCESS} from "./actionType";

const defaultVal = {
    isLoading :false,
    isError : false,
    data : []
}

export const productReducer =(state = defaultVal,action)=>{

    switch(action.type){
      case LOADING : return  {...state,isLoading : true, isError:false}
      case ERROR: return  {...state,isLoading : false,isError:true}
      case SUCCESS : return  {...state,isLoading : false,isError: false, data: action.payload}
     default : return state
    }
}

