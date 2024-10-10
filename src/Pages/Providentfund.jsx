import React, { useState } from "react";
import EPFCalculator from "./EPF";
import PPF from "./PPF";

function Providentfund() {
  const [activeTab, setActiveTab] = useState("EPF");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="container mx-auto">
      {/* Section for Tab */}
      <div className="flex flex-col sm:flex-row border-b border-gray-300">
        <button
          className={`py-2 px-4 text-sm font-medium ${
            activeTab === "EPF"
              ? "border-b-2 border-blue-500 text-blue-500"
              : "text-gray-500 hover:text-blue-500"
          } md:text-base lg:text-lg`}
          onClick={() => handleTabClick("EPF")}
        >
          <p className="text-sm sm:text-lg font-semibold p-2 sm:p-4 border-b-2 border-blue-500 text-blue-500 border-transparent">
            Employee Provident Fund
          </p>
        </button>
        <button
          className={`py-2 px-4 text-sm font-medium ${
            activeTab === "PPF"
              ? "border-b-2 border-blue-500 text-blue-500"
              : "text-gray-500 hover:text-blue-500"
          } md:text-base lg:text-lg`}
          onClick={() => handleTabClick("PPF")}
        >
          <p className="text-sm sm:text-lg font-semibold p-2 sm:p-4 border-b-2 border-blue-500 text-blue-500 border-transparent">
            Public Provident Fund
          </p>
        </button>
      </div>

      {/* Section for Tab Contents */}
      <div>
        {activeTab === "EPF" && <EPFCalculator />}
        {activeTab === "PPF" && <PPF />}
      </div>
    </div>
  );
}

export default Providentfund;
