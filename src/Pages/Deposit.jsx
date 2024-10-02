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
    <div className="container box-content">
      <Header />
      <div className="container flex justify-evenly">
        <button
          className={activeTab === "Fixed_Deposit" ? "active" : ""}
          onClick={() => handleTabClick("Fixed_Deposit")}
        >
          <p className=" p-2 m-2 rounded-md bg-black text-white font-sans text-lg font-medium">Fixed Deposit</p>
        </button>
        <button
          className={activeTab === "Recurring_Deposit" ? "active" : ""}
          onClick={() => handleTabClick("Recurring_Deposit")}
        >
         <p className=" p-1 m-1 rounded-md bg-black text-white font-sans text-lg font-medium">Recuring Deposit</p> 
        </button>
      </div>

      {/* Content Section */}
      <div className="tab-content">
        {activeTab === "Fixed_Deposit" && <Fixed_deposit />}
        {activeTab === "Recurring_Deposit" && <Recuring_Deposit />}
      </div>


    </div>
  );
}

export default Deposit;
