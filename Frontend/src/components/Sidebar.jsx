import React from 'react';
import ChatNavbar from './ChatNavbar';
import Search from './Search';
import Chats from './Chats';

const Sidebar = () =>{
    return(
        <div className="flex-1 bg-indigo-700">
            <ChatNavbar />
            <Search />
            <Chats />
        </div>
    )
}

export default Sidebar;