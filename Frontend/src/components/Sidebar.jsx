import React from "react";
import ChatNavbar from "./ChatNavbar";
import Search from "./Search";
import Chats from "./Chats";

const Sidebar = () => {
  return (
    <div className="w-2/5 border-slate-400 bg-slate-300">
      <ChatNavbar />
      <Search />
      <Chats />
    </div>
  );
};

export default Sidebar;
