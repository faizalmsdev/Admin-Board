import React from 'react';
import ReactDOM from 'react-dom/client';

import {DarkModeContextProvider} from "./context/darkModeContext";
import { AuthContextProvider } from './context/AuthContext';

import App from './App';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <DarkModeContextProvider>
      <AuthContextProvider>
        <App />
      </AuthContextProvider>
    </DarkModeContextProvider>
    
  </React.StrictMode>
);

