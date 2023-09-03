import React from 'react';
import Sidebar from '../components/Sidebar';
import Chat from '../components/Chat';
import Search from '../components/Search';


const ChatPage = () => {

    return (
        <div className='bg-indigo-300 flex items-center justify-center h-screen'>
            <div className='border-2 border-white border-solid rounded-s-lg w-3/5 h-4/5 flex overflow-hidden'>
                <Sidebar />
                <Chat />
            </div>
        </div>
    )
}

export default ChatPage;