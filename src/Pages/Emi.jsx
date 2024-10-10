import React, { useState } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { Slider } from "../Services";

function Emi() {
  ChartJS.register(ArcElement, Tooltip, Legend);

  const [amount, setAmount] = useState(1000000);
  const [rate, setRate] = useState(6.5);
  const [year, setYear] = useState(5);

  // Conversion of Rate and Time to Per Month
  const intrest = rate / 12 / 100;
  const tenure = year * 12;

  const EMI = Math.ceil(
    [amount * intrest * Math.pow(1 + intrest, tenure)] /
      [Math.pow(1 + intrest, tenure) - 1]
  );
  const totalAmt = Math.ceil(EMI * tenure);
  const totalIntrest = Math.ceil(totalAmt - amount);

  const data = {
    labels: ["Principal Amount", "Intrest Amount"],
    datasets: [
      {
        label: "EMI Chart",
        data: [amount, totalIntrest],
        backgroundColor: ["rgb(255, 99, 132)", "rgb(54, 162, 235)"],
        hoverOffset: 4,
      },
    ],
  };

  const config = {
    type: "doughnut",
    data: data,
    options: {
      responsive: true,
      aspectratio: 1,
      plugins: {
        legend: {
          position: "top",
        },
        title: {
          display: true,
          text: "Chart.js Doughnut Chart",
        },
      },
    },
  };

  return (
    <div className="container">
      <div className="flex justify-center items-center h-screen gap-6">
        {/* Section for Calculating EMI */}
        <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
          <h2 className="text-2xl font-semibold text-center mb-6">
            EMI Calculator
          </h2>
          {/* Section for Amount */}
          <Slider
            Label="Monthly Investment"
            Value={amount}
            SliderColor="bg-blue-300"
            Sign=" ₹"
            Min={100000}
            Max={5000000}
            Step={10}
            OnChange={(e) => setAmount(e.target.value)}
          />

          {/* Section for Rate of Intrest */}
          <Slider
            Label="Interest Rate"
            Value={rate}
            SliderColor="bg-green-300"
            Sign=" %"
            Min={1}
            Max={15}
            OnChange={(e) => setRate(e.target.value)}
          />

          {/* Section for Years */}
          <Slider
            Label="Number of Year"
            Value={year}
            SliderColor="bg-purple-300"
            Min={1}
            Max={25}
            OnChange={(e) => setYear(e.target.value)}
          />

          {/* Display Result */}
          <div className="mt-6">
            <div className="flex justify-between text-lg font-semibold mt-2">
              <span>EMI Amount:</span>
              <span>₹ {EMI}</span>
            </div>
            <div className="flex justify-between text-lg font-semibold mt-2">
              <span>Loan Amount:</span>
              <span>₹ {amount}</span>
            </div>
            <div className="flex justify-between text-lg font-semibold mt-2">
              <span>Total Intrest:</span>
              <span>₹ {totalIntrest}</span>
            </div>
            <div className="flex justify-between text-lg font-semibold mt-2">
              <span>Total Amount:</span>
              <span>₹ {totalAmt}</span>
            </div>
          </div>
          <p className="text-center font-medium">EMI per month</p>
        </div>
        {/* Section for Graph */}
        <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
          <h2 className="text-2xl font-semibold text-center mb-6">
            EMI Calculator Graph
          </h2>
          <Doughnut style={{ width: 300, height: 300 }} data={data} />
        </div>
      </div>
    </div>
  );
}

export default Emi;
