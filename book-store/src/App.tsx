import React from 'react';
import './App.css';
import Home from "./pages/Home";
import Layout from "./components/layout/Layout";
import {BookStoreThemeProvider} from "./context/themeContext";
import {createBrowserRouter, RouterProvider,} from "react-router-dom";
import Error from "./components/common/Error";
import Signup from "./pages/Signup";
import ResetPassword from "./pages/ResetPassword";
import Login from "./pages/Login";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout><Home/></Layout>,
        errorElement: <Error/>
    },
    {
        path: "/books",
        element: <Layout>
            <div>도서목록</div>
        </Layout>
    },
    {
        path: "/signup",
        element: <Layout><Signup/></Layout>
    },
    {
        path: "/reset",
        element: <Layout><ResetPassword/></Layout>
    },
    {
        path: "/login",
        element: <Layout><Login/></Layout>
    }
]);

function App() {
    return (
        <BookStoreThemeProvider>
            <RouterProvider router={router}/>
        </BookStoreThemeProvider>
    )
}

export default App;
