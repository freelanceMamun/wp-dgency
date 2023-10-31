import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import { StateContext } from './context/context.jsx';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <StateContext>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StateContext>
  </React.StrictMode>
);
