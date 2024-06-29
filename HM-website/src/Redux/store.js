import { applyMiddleware, combineReducers, legacy_createStore } from "redux"
import logger from "redux-logger"
import { thunk } from "redux-thunk"
import { productReducer } from "./productReducer"




const rootReducer = combineReducers({

    productdata : productReducer
})

const middleware = applyMiddleware(thunk,logger)

export const store = legacy_createStore(rootReducer,middleware)