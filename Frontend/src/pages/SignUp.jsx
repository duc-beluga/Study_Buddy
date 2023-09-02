import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db, storage } from "../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";

const SignIn = () => {
  const [short, setShort] = useState(false);
  const [err, setError] = useState(null);
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);

      const storageRef = ref(storage, displayName);

      const uploadTask = uploadBytesResumable(storageRef, file);

      // Register three observer
      uploadTask.on(
        (error) => {
          setError(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            await updateProfile(res.user, {
              displayName,
              photoURL: downloadURL,
            });
            await setDoc(doc(db, "users", res.user.uid), {
              uid: res.user.uid,
              displayName,
              email,
              photoURL: downloadURL,
            });
            await setDoc(doc(db, "userChats", res.user.uid), {});

            navigate("/home");
          });
        }
      );
    } catch (e) {
      setError(e.message);
      setTimeout(() => {
        return setShort(false)
      }, 1500);
      setShort(true);

    }
  };

  return (
    <div className="flex h-screen justify-center items-center ">
      <div className="space-y-2">
        <form onSubmit={handleSubmit} className="flex flex-col space-y-2">
          <input
            type="text"
            placeholder="display name"
            className="focus:outline-none border-2 border-slate-500 rounded-md p-1"
          />
          <input
            type="email"
            placeholder="email"
            className="focus:outline-none border-2 border-slate-500 rounded-md p-1"
          />
          <input
            type="password"
            placeholder="password"
            className="focus:outline-none border-2 border-slate-500 rounded-md p-1"
          />

          <input type="file" />
          <button className="bg-blue-500 rounded-md text-white">Sign up</button>
          {/* {err && <span>Something went wrong {err} </span>} */}
        </form>
        <Link
          to="/signin"
          className="flex justify-center bg-blue-500 rounded-md text-white"
        >
          Login
        </Link>
        {short ? <div>Password must be atleast 6 characters.</div> : null}
      </div>
    </div>
  );
};

export default SignIn;
