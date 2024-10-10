import React, { useState } from "react";
import Header from "../Component/Header";
import Fixed_deposit from "./Fixed_deposit";
import Recuring_Deposit from "./Recuring_Deposit";

function Deposit() {
  const [activeTab, setActiveTab] = useState("Fixed_Deposit");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="container mx-auto">
      <div className="flex flex-col sm:flex-row border-b border-gray-300">
        <button
          className={`py-2 px-4 text-sm font-medium ${
            activeTab === "Fixed_Deposit"
              ? "border-b-2 border-blue-500 text-blue-500"
              : "text-gray-500 hover:text-blue-500"
          } md:text-base lg:text-lg`}
          onClick={() => handleTabClick("Fixed_Deposit")}
        >
          <p className="text-sm sm:text-lg font-semibold p-2 sm:p-4 border-b-2 border-blue-500 text-blue-500 border-transparent">
            Fixed Deposit
          </p>
        </button>
        <button
          className={`py-2 px-4 text-sm font-medium ${
            activeTab === "Recurring_Deposit"
              ? "border-b-2 border-blue-500 text-blue-500"
              : "text-gray-500 hover:text-blue-500"
          } md:text-base lg:text-lg`}
          onClick={() => handleTabClick("Recurring_Deposit")}
        >
          <p className="text-sm sm:text-lg font-semibold p-2 sm:p-4 border-b-2 border-blue-500 text-blue-500 border-transparent">
            Recuring Deposit
          </p>
        </button>
      </div>

      {/* Content Section */}
      <div>
        {activeTab === "Fixed_Deposit" && <Fixed_deposit />}
        {activeTab === "Recurring_Deposit" && <Recuring_Deposit />}
      </div>
    </div>
  );
}

export default Deposit;
