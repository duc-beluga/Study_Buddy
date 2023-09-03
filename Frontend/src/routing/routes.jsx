import { createBrowserRouter } from "react-router-dom";
import MyProfile from "../pages/MyProfile";
import App from "../App";
import ChatPage from "../pages/ChatPage";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/profile", element: <MyProfile /> },
  { path: "/chats", element: <ChatPage /> }
]);
