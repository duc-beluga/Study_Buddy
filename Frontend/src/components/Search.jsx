//Handle Select from Chats

import React, { useContext, useState } from "react";
import {
  collection,
  query,
  where,
  getDocs,
  setDoc,
  doc,
  updateDoc,
  serverTimestamp,
  getDoc,
} from "firebase/firestore";
import { db } from "../firebase";
import { AuthContext } from "../context/AuthContext";

const Search = () => {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);
  const [err, setErr] = useState(null);

  const currentUser = useContext(AuthContext);

  const handleSearch = async () => {
    const q = query(
      collection(db, "users"),
      where("displayName", "==", username)
    );

    try {
      const querySnapshot = await getDocs(q);
      console.log(querySnapshot);
      if (querySnapshot.docs.length === 0) {
        setUser(null);
      }
      querySnapshot.forEach((doc) => {
        setUser(doc.data());
      });
      console.log(user);
    } catch (err) {
      console.log("asdsad");
      console.log(err.message);
      setErr(err.message);
    }
  };

  const handleKey = (e) => {
    e.code === "Enter" && handleSearch();
  };

  const handleSelect = async () => {
    console.log(currentUser);
    console.log(user);
    const combinedId =
      currentUser.uid > user.uid
        ? currentUser.uid + user.uid
        : user.uid + currentUser.uid;
    try {
      const res = await getDoc(doc(db, "chats", combinedId));

      if (!res.exists()) {
        //create a chat in chats collection
        await setDoc(doc(db, "chats", combinedId), { messages: [] });

        //create user chats
        await updateDoc(doc(db, "userChats", currentUser.uid), {
          [combinedId + ".userInfo"]: {
            uid: user.uid,
            displayName: user.displayName,
            photoURL: user.photoURL,
          },
          [combinedId + ".date"]: serverTimestamp(),
        });

        await updateDoc(doc(db, "userChats", user.uid), {
          [combinedId + ".userInfo"]: {
            uid: currentUser.uid,
            displayName: currentUser.displayName,
            photoURL: currentUser.photoURL,
          },
          [combinedId + ".date"]: serverTimestamp(),
        });
      }
      setUser(null);
      setUsername("");
      console.log("1144");
    } catch (err) {}
    console.log(err.message);
    setErr(err.message);
    setUser(null);
    setUsername("");
  };
  console.log("asdsa", user);
  return (
    <div className="flex flex-col">
      <div className="">
        <input
          type="text"
          placeholder="Find a user..."
          onKeyDown={handleKey}
          onChange={(e) => setUsername(e.target.value)}
          value={username}
          className="w-full px-3 py-1 text-slate-400 focus:outline-none bg-slate-300"
        />
      </div>
      {err && <span>User not found!</span>}
      {user && (
        <div className="userChat" onClick={handleSelect}>
          <div className="flex p-3">
            <img
              src={user.photoURL}
              alt=""
              className="rounded-full h-12 w-12 object-contain"
            />
            <div className="flex flex-grow  items-center justify-start pl-4">
              {user.displayName}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Search;
