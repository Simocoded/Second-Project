import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Wallet from './Components/Wallet/Wallet';
import Connect from './Components/Connect/Connect';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element:<App/>,
  },
  {
    path: "wallet/",
    element:<Wallet/>,
  },
  {
    path: "connect/",
    element:<Connect/>,
  },


]);
 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
