import React, { useState } from "react";
import SIP from "./SIP";
import Lumpsum from "./Lumpsum";

function Mutalfund() {
  const [activeTab, setActiveTab] = useState("SIP");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="container mx-auto">
      <div className="flex flex-col sm:flex-row border-b border-gray-300">
        <button
          className={`py-2 px-4 text-sm font-medium ${
            activeTab === "SIP"
              ? "border-b-2 border-blue-500 text-blue-500"
              : "text-gray-500 hover:text-blue-500"
          } md:text-base lg:text-lg`}
          onClick={() => handleTabClick("SIP")}
        >
          <p className="text-sm sm:text-lg font-semibold p-2 sm:p-4 border-b-2 border-blue-500 text-blue-500 border-transparent">
            Systematic Investment Plan
          </p>
        </button>

        <button
          className={`py-2 px-4 text-sm font-medium ${
            activeTab === "Lumpsum"
              ? "border-b-2 border-blue-500 text-blue-500"
              : "text-gray-500 hover:text-blue-500"
          } md:text-base lg:text-lg`}
          onClick={() => handleTabClick("Lumpsum")}
        >
          <p className="text-sm sm:text-lg font-semibold p-2 sm:p-4 border-b-2 border-blue-500 text-blue-500 border-transparent">
            Lumpsum
          </p>
        </button>
      </div>

      <div>
        {activeTab === "SIP" && <SIP />}
        {activeTab === "Lumpsum" && <Lumpsum />}
      </div>
    </div>
  );
}

export default Mutalfund;
