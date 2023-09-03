import React, { useContext, useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import { AuthContext } from "../context/AuthContext";
import { IdContext } from "../context/IdContext";
import axios from "axios";

const ConnectMe = () => {
  const currentUser = useContext(AuthContext);
  const { id } = useContext(IdContext);
  const [inputValue, setInputValue] = useState("");
  const [radius, setRadius] = useState(0);
  const [nearTutors, setNearTutors] = useState([]);

  // useEffect(() => {
  //   console.log(`http://localhost:5001/api/search/${id}`, radius);

  // }, [radius]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleRadius = (e) => {
    e.preventDefault(); // Prevent form submission from refreshing the page
    setRadius(inputValue);
    console.log(`http://localhost:5001/api/search/${id}`);
    axios
      .get(`http://localhost:5001/api/search/${id}`, {
        params: { radius: inputValue },
      })
      .then((res) => setNearTutors(res.data.users));
  };

  return (
    <div>
      <Navbar active="connect" />
      <div className="m-8 mt-6">
        <div className="mb-8">Tutors near you.</div>
        <form onSubmit={handleRadius}>
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            placeholder="Enter radius..."
            className="border-2 border-slate-400 m-3 p-1 rounded-md"
          />
          <button>Find</button>
        </form>
        <div className="flex flex-between space-x-12">
          {nearTutors.length === 0 && radius != 0 && (
            <div>There is no Tutors near you</div>
          )}
          {nearTutors.map((tutor) => (
            <Card tutor={tutor} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ConnectMe;
