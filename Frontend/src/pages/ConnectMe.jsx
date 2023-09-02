import React from "react";
import Navbar from "../components/Navbar";
import Card from "../components/Card";

const ConnectMe = () => {
  return (
    <div>
      <Navbar />
      <div className="m-8 mt-6">
        <div className="mb-8">Tutors near you.</div>
        <div className="flex flex-between space-x-12">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
};

export default ConnectMe;
