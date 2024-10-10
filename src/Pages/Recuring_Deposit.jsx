import React, { useState } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { Slider } from "../Services";

const Recuring_Deposit = () => {
  ChartJS.register(ArcElement, Tooltip, Legend);
  const [amount, setAmount] = useState(50000);
  const [rate, setRate] = useState(6.5);
  const [year, setYear] = useState(5);
  const [toggle, setToggle] = useState(false);

  // Calculation based on Months
  const intrest = rate / 100;
  const n = 12;

  const ReturnAmt = Math.ceil(
    amount *
      ((Math.pow(1 + intrest / n, n * year) - 1) /
        (1 - Math.pow(1 + intrest / n, -1)))
  );
  const TotalInvest = amount * year * 12;
  const EstReturn = ReturnAmt - TotalInvest;

  const RecuringData = {
    labels: ["Principal Amount", "Intrest Amount"],
    datasets: [
      {
        label: "Fixed Deposit",
        data: [TotalInvest, EstReturn],
        backgroundColor: ["rgb(255, 99, 132)", "rgb(54, 162, 235)"],
        hoverOffset: 4,
      },
    ],
  };

  const DataConfig = {
    type: "doughnut",
    data: RecuringData,
    options: {
      responsive: true,
      aspectratio: 1,
      plugins: {
        legend: {
          position: "top",
        },
        title: {
          display: true,
          text: "Fixed Deposit Retur",
        },
      },
    },
  };

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <div className="container">
      <div className="flex justify-center items-center h-screen gap-6">
        {/* Section for Calculating */}
        <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
          <h2 className="text-2xl font-semibold text-center mb-6">
            Recurring Deposit
          </h2>

          {/* Section for Amount */}
          <Slider
            Label="Monthly Investment"
            Value={amount}
            Min={10000}
            Max={500000}
            Sign=" ₹"
            SliderColor="bg-blue-300"
            Step={1000}
            OnChange={(e) => setAmount(e.target.value)}
          />

          {/* Section for Rate of Intrest */}
          <Slider
            Label="Interest Ratet"
            Value={rate}
            Min={1}
            Max={15}
            Sign=" %"
            SliderColor="bg-green-300"
            Step={1}
            OnChange={(e) => setRate(e.target.value)}
          />

          {/* Section for Years */}
          <Slider
            Label={`Number of ${toggle ? "Months" : "Year"}`}
            Value={year}
            Min={1}
            Max={25}
            SliderColor="bg-purple-300"
            Step={1}
            OnChange={(e) => setYear(e.target.value)}
          />
          <button className="text-orange-600" onClick={handleToggle}>
            {toggle ? "Months" : "Year"}
          </button>

          {/* Display Result */}
          <div className="mt-6">
            <div className="flex justify-between text-lg">
              <span>Invested Amount:</span>
              <span>₹ {TotalInvest}</span>
            </div>
            <div className="flex justify-between text-lg font-semibold mt-2">
              <span>Estimated Return:</span>
              <span>₹ {EstReturn}</span>
            </div>
            <div className="flex justify-between text-lg font-semibold mt-2">
              <span>Total Amount:</span>
              <span>₹ {ReturnAmt}</span>
            </div>
          </div>
        </div>
        {/* Section for Graph */}
        <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
          <h2 className="text-2xl font-semibold text-center mb-6">
            Recurring Deposit Calculator Graph
          </h2>
          <Doughnut style={{ width: 300, height: 300 }} data={RecuringData} />
        </div>
      </div>
    </div>
  );
};

export default Recuring_Deposit;
