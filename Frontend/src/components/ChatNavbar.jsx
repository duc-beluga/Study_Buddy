import React from 'react';

const ChatNavbar = () => {
    return (
        <div className='flex items-center bg-indigo-900 h-12 p-10 justify-between text-white'>
            <span className="font-bold">StuddyBuddy Chat</span>
            <div>
                <img src="" alt=""  className="h-6 bg-white w-6 rounded-full object-cover" />
                <span className='flex gap-2.5'>John</span>
                <button>Logout</button>
            </div>
        </div>
    )
}

export default ChatNavbar;