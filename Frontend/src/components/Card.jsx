import React, { useState } from "react";
import profilePath from "../assets/profile.svg";

const Card = () => {
  const [name, setName] = useState('');
  
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
      <button>Chat with me!</button>
    </div>
  );
};

export default Card;
