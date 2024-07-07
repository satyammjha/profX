import * as React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import * as ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
<<<<<<< HEAD
import ContextProvider from './Context/Context'
=======
>>>>>>> b1758df978e824ca736f570b223c9e0ce7257646

const rootElement = document.getElementById('root')
ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
<<<<<<< HEAD
    <ContextProvider>
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </ContextProvider>
=======
    <ChakraProvider>
      <App />
    </ChakraProvider>
>>>>>>> b1758df978e824ca736f570b223c9e0ce7257646
  </React.StrictMode>,
)