import { signOut } from "firebase/auth";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase";

const Navbar = ({ active }) => {
  const [activeLink, setActiveLink] = useState(active);
  const navigate = useNavigate();

  const handleSignOut = () => {
    signOut(auth);
    navigate("/");
  };
  return (
    <div className="flex justify-between m-6 mb-0 text-sm">
      <div className="grid grid-cols-4 divide-x-2 place-items-center">
        <Link
          to="/home"
          className={`p-2 ${activeLink === "home" ? "font-bold" : ""}`}
          onClick={() => setActiveLink("home")}
        >
          StudyBuddy
        </Link>
        <Link
          to="/profile"
          className={`p-2 pl-4 ${activeLink === "profile" ? "font-bold" : ""}`}
          onClick={() => setActiveLink("profile")}
        >
          My Profile
        </Link>
        <Link
          to="/connect"
          className={`p-2 pl-4 pr-0 ${
            activeLink === "connect" ? "font-bold" : ""
          }`}
          onClick={() => setActiveLink("connect")}
        >
          Connect Me
        </Link>
        <Link
          to="/chat"
          className={`p-2 pl-4 ${activeLink === "chat" ? "font-bold" : ""}`}
          onClick={() => setActiveLink("chat")}
        >
          Chat
        </Link>
      </div>
      <div className="pt-2">
        <button className="p-2" onClick={handleSignOut}>
          Sign Out
        </button>
        {/* to="/signin" */}
      </div>
    </div>
  );
};

export default Navbar;
