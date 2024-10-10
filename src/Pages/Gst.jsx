import React, { useState } from "react";
import InclusiveGST from "./InclusiveGST";
import ExclusiveGST from "./ExclusiveGST";

const calculateGST = () => {
  const [activeTab, setActiveTab] = useState("Inclusive");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    // Section for Tabs
    <div className="container mx-auto">
      {/* Section for Tab */}
      <div className="flex flex-col sm:flex-row border-b border-gray-300">
        <button
          className={`py-2 px-4 text-sm font-medium ${
            activeTab === "Exclusive"
              ? "border-b-2 border-blue-500 text-blue-500"
              : "text-gray-500 hover:text-blue-500"
          } md:text-base lg:text-lg`}
          onClick={() => handleTabClick("Exclusive")}
        >
          <p className="text-sm sm:text-lg font-semibold p-2 sm:p-4 border-b-2 border-blue-500 text-blue-500 border-transparent">
            Exclusive GST
          </p>
        </button>
        <button
          className={`py-2 px-4 text-sm font-medium ${
            activeTab === "Inclusive"
              ? "border-b-2 border-blue-500 text-blue-500"
              : "text-gray-500 hover:text-blue-500"
          } md:text-base lg:text-lg`}
          onClick={() => handleTabClick("Inclusive")}
        >
          <p className="text-sm sm:text-lg font-semibold p-2 sm:p-4 border-b-2 border-blue-500 text-blue-500 border-transparent">
            Inclusive GST
          </p>
        </button>
      </div>

      {/* Section for Tab Contents */}
      <div>
        {activeTab === "Exclusive" && <InclusiveGST />}
        {activeTab === "Inclusive" && <ExclusiveGST />}
      </div>
    </div>
  );
};

export default calculateGST;
