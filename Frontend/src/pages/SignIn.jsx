import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase";

const SignIn = () => {
  const [err, setErr] = useState(null);
  const navigate = useNavigate();
  const [found, setFound] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/home");
    } catch (err) {
      setErr(err.message);
      setTimeout(() => {
        return setFound(false)
      }, 3000);
      setFound(true);
    }
  };


  return (
    <div className="flex h-screen justify-center items-center ">
      <div className="space-y-2">
        <form onSubmit={handleSubmit} className="flex flex-col space-y-2">
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

          <button className="bg-blue-500 rounded-md text-white">Sign in</button>
          {/* {err && <span>Something went wrong {err} </span>} */}
        </form>
        <Link
          to="/signup"
          className="flex justify-center bg-blue-500 rounded-md text-white"
        >
          Sign Up
        </Link>
        {found ? <div>Please make a new account.</div> : null}
      </div>
    </div>
  );
};

export default SignIn;
