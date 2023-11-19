import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react'// 1. import `extendTheme` function
import { extendTheme } from '@chakra-ui/react'

// 2. Add your color mode config
const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
}

// 3. extend the theme
const theme = extendTheme({ config })

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Suspense fallback={<div>Loading</div>}>
      <BrowserRouter>
        <ChakraProvider theme={theme}>
          <App />
        </ChakraProvider>
      </BrowserRouter>
    </Suspense>
  </React.StrictMode>,
);
