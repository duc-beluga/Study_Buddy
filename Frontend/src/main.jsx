import React, { useContext } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import MyProfile from "./pages/MyProfile.jsx";
import ConnectMe from "./pages/ConnectMe.jsx";
import HomePage from "./pages/HomePage.jsx";
import Role from "./pages/Role.jsx";
import SignUp from "./pages/SignUp.jsx";
import SignIn from "./pages/SignIn.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AuthContextProvider } from "./context/AuthContext.jsx";

const router = createBrowserRouter([
  { path: "/", element: <Role /> },
  { path: "/home", element: <HomePage /> },
  { path: "/profile", element: <MyProfile /> },
  { path: "/connect", element: <ConnectMe /> },
  { path: "/signin", element: <SignIn /> },
  { path: "/signup", element: <SignUp /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthContextProvider>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </AuthContextProvider>
);
