import React, { useState } from "react";
import profilePath from "../assets/profile.svg";
import { Link, useNavigate } from "react-router-dom";

const Card = ({ tutor }) => {
  const [name, setName] = useState("");
  const navigate = useNavigate();
  const click = () => {
    const text = document.getElementById("name").textContent;
    setName(text);
    navigate("/chats");
  };
  return (
    <div className="w-44 h-80 flex flex-col justify-between items-center rounded-md bg-gray-400 p-4">
      <div>
        <img
          src={profilePath}
          alt="profile"
          className="rounded-full scale-75"
        />
      </div>
      <div id="name">{tutor.displayName}</div>
      <div>{tutor.school}</div>
      <div>{tutor.level}</div>
      <div>{tutor.year}</div>
      <div>
        <button className="" onClick={click}>
          Chat with me!
        </button>
      </div>
    </div>
  );
};

export default Card;
