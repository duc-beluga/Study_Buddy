import React from 'react';
import Messages from './Messages';
import Input from './Input';

const Chat = () =>{
    return(
        <div className="flex-1 bg-slate-400">
            <Messages />
            <Input />
        </div>

    )
}

export default Chat;