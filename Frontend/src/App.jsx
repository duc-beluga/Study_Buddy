import { useState } from "react";
import Navbar from "./components/Navbar";
import MyProfile from "./pages/MyProfile";
import "./index.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="">
      <Navbar />
      <div className="flex flex-col justify-center items-center">
        <div className="font-semibold text-2xl mt-8 p-2">
          Welcome to StudyBuddy
        </div>
        <div className="p-2"> this is a mission statement</div>
        <div className="p-2"> of words and words and words</div>
        <button className="bg-blue-500 rounded-md  shadow-lg p-2 text-white mt-3">
          Get started
        </button>
        <hr className="w-96 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700" />
        <div className="text-sm flex flex-col justify-center items-center">
          <p className="text-gray-500 dark:text-gray-400">
            Sign up for an account and make your profile
          </p>
          <p className="text-gray-500 dark:text-gray-400">
            Including what subjects you'd like to receive help or tutor in.
          </p>
          <p className="text-gray-500 dark:text-gray-400">
            Look at tutors or students near you.
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
