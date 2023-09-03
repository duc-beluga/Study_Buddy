import React from "react";
import Navbar from "../components/Navbar";

const Chat = () => {
  return (
    <div>
      <Navbar active="chat"></Navbar>
      <div className="flex">
        <div className="w-2/6 bg-blue-500 h-96">A</div>
        <div className="w-4/6 bg-gray-500 h-96 flex flex-col justify-end">
          <div className="bg-red-300 flex justify-end p-2">
            <button className="bg-white p-1 rounded-md">Send</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
