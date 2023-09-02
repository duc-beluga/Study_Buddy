import { createBrowserRouter } from "react-router-dom";
import MyProfile from "../pages/MyProfile";
import App from "../App";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/profile", element: <MyProfile /> },
]);
