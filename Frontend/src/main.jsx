import React, { useContext } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import MyProfile from "./pages/MyProfile.jsx";
import ConnectMe from "./pages/ConnectMe.jsx";
import HomePage from "./pages/HomePage.jsx";
import Role from "./pages/Role.jsx";
import SignUp from "./pages/SignUp.jsx";
import SignIn from "./pages/SignIn.jsx";
import Chat from "./pages/Chat.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AuthContextProvider } from "./context/AuthContext.jsx";
import { RoleContextProvider } from "./context/RoleContext.jsx";
import ChatPage from "./pages/ChatPage.jsx";
import { ChatContextProvider } from "./context/ChatContext.jsx";
import { IdContextProvider } from "./context/IdContext.jsx";

const router = createBrowserRouter([
  { path: "/", element: <Role /> },
  { path: "/home", element: <HomePage /> },
  { path: "/profile", element: <MyProfile /> },
  { path: "/connect", element: <ConnectMe /> },
  { path: "/signin", element: <SignIn /> },
  { path: "/signup", element: <SignUp /> },
  { path: "/chats", element: <ChatPage /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RoleContextProvider>
    <IdContextProvider>
      <AuthContextProvider>
        <ChatContextProvider>
          <React.StrictMode>
            <RouterProvider router={router} />
          </React.StrictMode>
        </ChatContextProvider>
      </AuthContextProvider>
    </IdContextProvider>
  </RoleContextProvider>
);
