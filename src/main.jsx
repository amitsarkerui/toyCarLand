import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout/Layout.jsx";
import Home from "./Home/Home.jsx";
import Login from "./Login/Login.jsx";
import Register from "./Register/Register.jsx";
import AuthProvider from "./AuthProvider/AuthProvider.jsx";
import AddToys from "./AddToys/AddToys.jsx";
import AllToys from "./Alltoys/AllToys.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/addToys",
        element: <AddToys></AddToys>,
      },
      {
        path: "/allToys",
        element: <AllToys></AllToys>,
        loader: () => fetch("http://localhost:5000/allToys"),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="max-w-7xl mx-auto">
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </div>
  </React.StrictMode>
);
