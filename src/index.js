import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import MachianryContextProvider from "Context/Machinary"
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MachianryContextProvider>
          <App/>
    </MachianryContextProvider>
  </React.StrictMode>
);

