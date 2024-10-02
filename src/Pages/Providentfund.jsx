import React, { useState } from "react";
import Header from "../Component/Header";
import EPFCalculator from "./EPF";
import PPF from "./PPF";

function Providentfund() {
  const [toggle, setToggle] = useState(false);
  const [activeTab, setActiveTab] = useState("EPF");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="container">
      <Header />
      {/* Section for Tab */}
      <div className="container flex justify-evenly">
        <button
          className={activeTab === "EPF" ? "active" : ""}
          onClick={() => handleTabClick("EPF")}
        >
          <p className=" p-2 m-2 rounded-md bg-black text-white font-sans text-lg font-medium">
            Employee Provident Fund
          </p>
        </button>
        <button
          className={activeTab === "PPF" ? "active" : ""}
          onClick={() => handleTabClick("PPF")}
        >
          <p className=" p-1 m-1 rounded-md bg-black text-white font-sans text-lg font-medium">
          Public Provident Fund
          </p>
        </button>
      </div>

      {/* Section for Tab Content */}
      <div className="tab-content">
        {activeTab === "EPF" && <EPFCalculator/>}
        {activeTab === "PPF" && (
          <div className="container">
            <PPF />
          </div>
        )}
      </div>
    </div>
  );
}

export default Providentfund;
