import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import AppRoutes from 'routes';
import 'bootstrap/dist/css/bootstrap.min.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppRoutes />
  </React.StrictMode>
);
