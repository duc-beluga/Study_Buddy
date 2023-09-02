import React, { useCallback, useContext, useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { AuthContext } from "../context/AuthContext";
import { RoleContext } from "../context/RoleContext";

const MyProfile = () => {
  const currentUser = useContext(AuthContext);
  const { role } = useContext(RoleContext);

  const [userInfo, setUserInfo] = useState({
    displayName: "",
    phoneNumber: "",
    email: "",
    school: "",
    level: "",
    year: "",
    zipCode: "",
    subject: "",
    accountType: "",
  });

  useEffect(() => {
    setUserInfo((prev) => ({
      ...prev,
      displayName: currentUser.displayName,
      email: currentUser.email,
      accountType: role,
    }));
  }, []);

  console.log(currentUser.displayName);
  console.log(role);
  const handleProfileSubmit = (e) => {
    e.preventDefault();
    console.log(userInfo);
    // console.log(e.target[0].value);
    // console.log(e.target[1].value);
    // console.log(e.target[2].value);
    // console.log(e.target[3].value);
    // console.log(e.target[4].value);
    // console.log(e.target[5].value);
    // console.log(e.target[6].value);
    // console.log(e.target[7].value);
  };
  return (
    <div>
      <Navbar active="profile" />
      <div className="m-7 mt-4 border-slate-400  border-2 rounded-lg shadow-lg flex flex-col">
        <div className="m-5">STUDENT ACCOUNT</div>
        <div className="flex flex-grow">
          <div className="rounded-md bg-slate-400 w-1/5 m-5 mt-0 mb-8"></div>
          <form className="w-4/5 flex flex-col" onSubmit={handleProfileSubmit}>
            <div className="grid grid-cols-2 m-4 gap-4">
              <div className="flex justify-between pr-10">
                <label htmlFor="">Display Name </label>
                <input
                  type="text"
                  className="rounded-md bg-slate-200 focus:outline-none p-1 pl-2"
                  value={userInfo.displayName}
                  onChange={(e) =>
                    setUserInfo((prev) => ({
                      ...prev,
                      displayName: e.target.value,
                    }))
                  }
                />
              </div>
              {/* <div className="flex justify-between pr-10">
                <label htmlFor="">Last Name </label>
                <input
                  type="text"
                  className="rounded-md bg-slate-200 focus:outline-none p-1 pl-2"
                />
              </div> */}
              <div className="flex justify-between pr-10">
                <label htmlFor="">Phone </label>
                <input
                  type="text"
                  className="rounded-md bg-slate-200 focus:outline-none p-1 pl-2"
                  value={userInfo.phoneNumber}
                  onChange={(e) =>
                    setUserInfo((prev) => ({
                      ...prev,
                      phoneNumber: e.target.value,
                    }))
                  }
                />
              </div>
              <div className="flex justify-between pr-10">
                <label htmlFor="">Email </label>
                <input
                  type="email"
                  className="rounded-md bg-slate-200 focus:outline-none p-1 pl-2"
                  value={userInfo.email}
                  onChange={(e) =>
                    setUserInfo((prev) => ({
                      ...prev,
                      email: e.target.value,
                    }))
                  }
                />
              </div>
            </div>
            <hr className="w-11/12 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-900" />
            <div className="grid grid-cols-2 m-4 gap-4">
              <div className="flex justify-between pr-10">
                <label htmlFor="">School </label>
                <input
                  type="text"
                  className="rounded-md bg-slate-200 focus:outline-none p-1 pl-2"
                  value={userInfo.school}
                  onChange={(e) =>
                    setUserInfo((prev) => ({
                      ...prev,
                      school: e.target.value,
                    }))
                  }
                />
              </div>
              <div className="flex justify-between pr-10">
                <label htmlFor="">Level </label>
                <input
                  type="text"
                  className="rounded-md bg-slate-200 focus:outline-none p-1 pl-2"
                  value={userInfo.level}
                  onChange={(e) =>
                    setUserInfo((prev) => ({
                      ...prev,
                      level: e.target.value,
                    }))
                  }
                />
              </div>
              <div className="flex justify-between pr-10">
                <label htmlFor="">Year </label>
                <input
                  type="text"
                  className="rounded-md bg-slate-200 focus:outline-none p-1 pl-2"
                  value={userInfo.year}
                  onChange={(e) =>
                    setUserInfo((prev) => ({
                      ...prev,
                      year: e.target.value,
                    }))
                  }
                />
              </div>
              <div className="flex justify-between pr-10">
                <label htmlFor="">Zip Code </label>
                <input
                  type="text"
                  className="rounded-md bg-slate-200 focus:outline-none p-1 pl-2"
                  value={userInfo.zipCode}
                  onChange={(e) =>
                    setUserInfo((prev) => ({
                      ...prev,
                      zipCode: e.target.value,
                    }))
                  }
                />
              </div>
              <div className="flex justify-between pr-10">
                <label htmlFor="">Subject </label>
                <input
                  type="text"
                  className="rounded-md bg-slate-200 focus:outline-none p-1 pl-2"
                  value={userInfo.subject}
                  onChange={(e) =>
                    setUserInfo((prev) => ({
                      ...prev,
                      subject: e.target.value,
                    }))
                  }
                />
              </div>
            </div>
            <div className="flex justify-end font-bold m-8 mr-20">
              <button>edit profile</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
