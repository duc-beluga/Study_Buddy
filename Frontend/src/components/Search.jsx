import React, { useContext, useState } from 'react';
import { collection, query, where, getDocs, setDoc, doc, updateDoc, serverTimestamp, getDoc } from "firebase/firestore";
import db from '../firebase';
import { AuthContext } from '../context/AuthContext';

const Search = () => {
    const [username, setUsername] = useState("");
    const [user, setUser] = useState(null);
    const [err, setErr] = useState(false);

    const {currentUser} = useContext(AuthContext);
    const specificName = (e) => {
        e.target.value;
    }
    const handleSearch = async () => {

        try {
            const q = query(collection, where("displayName", "==", username));
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
                // doc.data() is never undefined for query doc snapshots
                setUser(doc.data());
            });
        }
        catch (error) {
            setErr(true);
        }

    }
    const handleKey = (e) => {
        e.code === 'Enter' && handleSearch();
    }

    const handleSelect = async () => {
        // check whether the group exists or not 
            // if it doesnt exist create a new one
        const combinedId = currentUser.uid > user.uid ? currentUser.uid + user.uid : user.uid + currentUser.uid;
        try{
            const res = await getDoc(db, "chats", combinedId);
            if(!res.exists()){
                // create chat in chats collections 
                await setDoc(doc, db, "chats", combinedId, {messages: []});

                // create user chats
                await updateDoc(doc, (db, "userChats", currentUser.uid), {
                    [combinedId + ".userInfo"]: {
                        uid: currentUser.uid,
                        displayName: currentUser.displayName,
                        photoURL: currentUser.photoURL
                    },
                    [combinedId + ".date"]: serverTimestamp()
                })
            }
        }
        catch(error){
            console.log(error);
        }

        setUser(null);
        setUsername("");

        // create user chats
    }
    return (
        <div>
            <div className="search">
                <input type='text' placeholder='Enter username here' onChange={specificName} onKeyDown={handleKey} value={username}>
                </input>
            </div>
            {err && <span>User not found</span>}
            {user && <div className=''onClick={handleSelect}>
                <img src={user.photoURL} alt="" />
                <div>
                    <span>{user.displayName} </span>
                </div>
            </div>}

        </div>
    )
}

export default Search;