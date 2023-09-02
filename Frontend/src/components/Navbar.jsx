import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-between m-6 mb-0  text-sm">
      <div className="grid grid-cols-3 divide-x-2 place-items-center">
        <Link to="/" className="p-2 font-bold">
          StudyBuddy
        </Link>
        <Link to="/profile" className="p-2 pl-4">
          My Profile
        </Link>
        <Link to="/connect" className="p-2 pl-4">
          Connect Me
        </Link>
      </div>
      <div>
        <a href="#" className="p-2">
          Sign Out
        </a>
      </div>
    </div>
  );
};

export default Navbar;
