import React from "react";
import profilePath from "../assets/profile.svg";

const Card = () => {
  return (
    <div className="w-44 h-80 flex flex-col justify-between items-center rounded-md bg-gray-400 p-4">
      <div>
        <img
          src={profilePath}
          alt="profile"
          className="rounded-full scale-75"
        />
      </div>
      <div>Name</div>
      <div>Location</div>
      <div>Level</div>
      <div>Subject</div>
    </div>
  );
};

export default Card;
