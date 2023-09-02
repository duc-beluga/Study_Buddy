import React from "react";
import { Link } from "react-router-dom";

const Role = () => {
  return (
    <div className="flex h-screen w-screen justify-center items-center space-x-4 flex-col">
      <div className="p-4 pb-6 pl-10 text-2xl">I'm a</div>
      <div className="space-x-4">
        <Link
          to="/signup"
          className="bg-blue-500 rounded-md shadow-lg p-2 text-white mt-3 text-xl"
        >
          Student
        </Link>
        <Link
          to="/signup"
          className="bg-blue-500 rounded-md shadow-lg p-2 text-white mt-3 text-xl"
        >
          Tutor
        </Link>
      </div>
    </div>
  );
};

export default Role;
