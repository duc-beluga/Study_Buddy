import React from "react";
import Sidebar from "../components/Sidebar";
import Chat from "../components/Chat";
import Search from "../components/Search";
import Navbar from "../components/Navbar";

const ChatPage = () => {
  return (
    <>
      <Navbar active="chat" />
      <div className="flex items-center justify-center h-screen">
        <div className="border-2  border-solid rounded-s-lg w-4/5 h-4/5 flex overflow-hidden">
          <Sidebar />
          <Chat />
        </div>
      </div>
    </>
  );
};

export default ChatPage;
