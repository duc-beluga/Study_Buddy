import { onSnapshot } from 'firebase/firestore';
import React, { useEffect, useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import {doc, onSnapshot} from "firebase/firestore";

const Chats = () =>{
    const [chats, setChats] = useState( [] );
    const {currentUser} = useContext(AuthContext);
    useEffect(()=>{
        const getChats = () =>{
            const unsub = onSnapshot(doc(db, "userChats", currentUser.uid), (doc) =>{
                setChats(doc.data());
            });
            return ()=>{
                unsub();
            };
        };

        currentUser.uid && getChats();
    }, [currentUser.uid]);

    console.log(Object.entries(chats));
    return(
        <div className="chats">Chat</div>
    )
}

export default Chats;