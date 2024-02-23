import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import TransactionList from "./TransactionList.jsx";
import {NavBar} from "./NavBar.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
    },
    {
        path: "/transaction-list",
        element: <TransactionList/>,
    },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <NavBar/>
        <RouterProvider router={router}/>
        <ToastContainer/>
    </React.StrictMode>,
)
