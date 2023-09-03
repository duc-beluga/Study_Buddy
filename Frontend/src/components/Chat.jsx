import React from "react";

const Chat = () => {
  return (
    <div className="flex-1 flex flex-col">
      <div className="h-12 bg-slate-200"></div>
      <div className="flex-1 bg-slate-100"></div>
      <div className="flex">
        <input
          type="text"
          placeholder="Type something..."
          className="w-11/12 p-3 focus:outline-none"
        />
        <div className="flex justify-center items-center mx-3">
          <button className="p-1 px-2 bg-blue-400 rounded-md">Send</button>
        </div>
      </div>
    </div>
  );
};

export default Chat;
