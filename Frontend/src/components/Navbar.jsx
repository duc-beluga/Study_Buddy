import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-between m-6 mb-0  text-sm">
      <div className="grid grid-cols-3 divide-x-2 place-items-center">
        <a href="#" className="p-2 font-bold">
          StudyBuddy
        </a>
        <a href="#" className="p-2 pl-4">
          My Profile
        </a>
        <a href="#" className="p-2 pl-4">
          Connect Me
        </a>
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
