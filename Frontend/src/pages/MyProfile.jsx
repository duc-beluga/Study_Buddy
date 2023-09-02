import React from "react";
import Navbar from "../components/Navbar";

const MyProfile = () => {
  return (
    <div>
      <Navbar />
      <div className="m-7 mt-4 border-slate-400  border-2 rounded-lg shadow-lg flex flex-col">
        <div className="m-5">STUDENT ACCOUNT</div>
        <div className="flex flex-grow">
          <div className="rounded-md bg-slate-400 w-1/5 m-5 mt-0 mb-8"></div>
          <div className="w-4/5 flex flex-col ">
            <div className="grid grid-cols-2 m-4 gap-4">
              <div className="flex justify-between pr-10">
                <label htmlFor="">Name </label>
                <input type="text" className="rounded-md bg-slate-200" />
              </div>
              <div className="flex justify-between pr-10">
                <label htmlFor="">Email </label>
                <input type="text" className="rounded-md bg-slate-200" />
              </div>
              <div className="flex justify-between pr-10">
                <label htmlFor="">Username </label>
                <input type="text" className="rounded-md bg-slate-200" />
              </div>
              <div className="flex justify-between pr-10">
                <label htmlFor="">Password </label>
                <input type="password" className="rounded-md bg-slate-200" />
              </div>
            </div>
            <hr className="w-11/12 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-900" />
            <div className="grid grid-cols-2 m-4 gap-4">
              <div className="flex justify-between pr-10">
                <label htmlFor="">School </label>
                <input type="text" className="rounded-md bg-slate-200" />
              </div>
              <div className="flex justify-between pr-10">
                <label htmlFor="">Level </label>
                <input type="text" className="rounded-md bg-slate-200" />
              </div>
              <div className="flex justify-between pr-10">
                <label htmlFor="">Year </label>
                <input type="text" className="rounded-md bg-slate-200" />
              </div>
              <div className="flex justify-between pr-10">
                <label htmlFor="">Zip Code </label>
                <input type="password" className="rounded-md bg-slate-200" />
              </div>
              <div className="flex justify-between pr-10">
                <label htmlFor="">Subject </label>
                <input type="password" className="rounded-md bg-slate-200" />
              </div>
            </div>
            <div className="flex justify-end font-bold m-8 mr-20">
              <button>edit profile</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
