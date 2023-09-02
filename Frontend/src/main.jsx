import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import MyProfile from "./pages/MyProfile.jsx";
import ConnectMe from "./pages/ConnectMe.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/profile", element: <MyProfile /> },
  { path: "/connect", element: <ConnectMe /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
