import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import MyProfile from "./pages/MyProfile.jsx";
import ConnectMe from "./pages/ConnectMe.jsx";
import HomePage from "./pages/HomePage.jsx";
import Role from "./pages/Role.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  { path: "/", element: <Role /> },
  { path: "/home", element: <HomePage /> },
  { path: "/profile", element: <MyProfile /> },
  { path: "/connect", element: <ConnectMe /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
