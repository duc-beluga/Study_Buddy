import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const ChatNavbar = () => {
  const currentUser = useContext(AuthContext);
  return (
    <div className="flex items-center h-12 justify-between p-2 bg-slate-400">
      <div className="font-bold">Chat</div>
      <div className="flex">
        <div className="p-1 px-3">
          <img
            src={currentUser.photoURL}
            alt="avatar"
            className="h-6  w-6 rounded-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default ChatNavbar;
