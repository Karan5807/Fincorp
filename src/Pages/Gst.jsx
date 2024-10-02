import React, { useState } from "react";
import Header from "../Component/Header";
import InclusiveGST from "./InclusiveGST";
import ExclusiveGST from "./ExclusiveGST";

const calculateGST = () => {
  const [activeTab, setActiveTab] = useState("Inclusive");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    // Section for Tabs
    <div className="container box-content">
      <Header />
      {/* Section for Tab */}
      <div className="container flex justify-evenly">
        <button
          className={activeTab === "Inclusive" ? "active" : ""}
          onClick={() => handleTabClick("Inclusive")}
        >
          <p className=" p-2 m-2 rounded-md bg-black text-white font-sans text-lg font-medium"> Inclusive GST </p>
        </button>
        <button
          className={activeTab === "Exclusive" ? "active" : ""}
          onClick={() => handleTabClick("Exclusive")}
        >
         <p className=" p-1 m-1 rounded-md bg-black text-white font-sans text-lg font-medium">Exclusive GST</p> 
        </button>
      </div>

      {/* Section for Tab Contents */}
      <div className="container flex justify-center">
        {activeTab === "Inclusive" && <InclusiveGST />}
        {activeTab === "Exclusive" && <ExclusiveGST />}
      </div>
    </div>
  );
};

export default calculateGST;
