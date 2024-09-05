
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter} from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react';
import { ContextProvider } from './Context/Context.jsx';
import { Provider } from 'react-redux'
import { store } from './Redux/store.js'


ReactDOM.createRoot(document.getElementById('root')).render(
 <ContextProvider>
<Provider store={store}>
<ChakraProvider>
<BrowserRouter>
      <App/> 
</BrowserRouter>
</ChakraProvider>
</Provider>
</ContextProvider>



)
