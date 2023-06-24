import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./styles.css";
import {BrowserRouter} from "react-router-dom"
import { createTheme } from '@mui/material';
import { ThemeProvider } from '@emotion/react';
import { ChakraProvider } from "@chakra-ui/react";

  const theme = createTheme({
    typography: {
      // In Chinese and Japanese the characters are usually larger,
      // so a smaller fontsize may be appropriate.
      fontSize: 14,
    },
    transitions:{
      
    }
  });

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   

    {/*  wrapping the entire app with the browser router as it would be using a single router to manage all the routing */}
    <BrowserRouter> 
     <ThemeProvider theme={theme}>
      
      <App />
      </ThemeProvider>
    </BrowserRouter>
    
  </React.StrictMode>
);

