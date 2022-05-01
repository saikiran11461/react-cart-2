
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import './index.css';

import { CartContext, CartContextProvider } from './Context/CartContex';
import { AuthContextProvider } from './Context/AuthContext';


ReactDOM.render(

  <React.StrictMode>

  <AuthContextProvider>
    <CartContextProvider>

      <BrowserRouter>
        
    <App />
  
      </BrowserRouter>
    </CartContextProvider>
    </AuthContextProvider>



   </React.StrictMode>,
  
  document.getElementById('root'));

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// )