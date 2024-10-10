import React, { useState } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { Slider } from "../Services";

const SIP = () => {
  ChartJS.register(ArcElement, Tooltip, Legend);

  const [amount, setAmount] = useState(25000);
  const [rate, setRate] = useState(12);
  const [year, setYear] = useState(10);

  const intrest = rate / 12 / 100;
  const month = year * 12;
  const ReturnAmt = Math.ceil(
    amount * ([Math.pow(1 + intrest, month) - 1] / intrest) * (1 + intrest)
  );

  const TotalInvest = amount * month;
  const EstReturn = ReturnAmt - TotalInvest;

  const data = {
    labels: ["Principal Amount", "Intrest Amount"],
    datasets: [
      {
        label: "EMI Chart",
        data: [TotalInvest, EstReturn],
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
          text: "Mutual Fund Return",
        },
      },
    },
  };

  return (
    <div className="container">
      <div className="flex justify-center items-center h-screen gap-6">
        <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-lg">
          <h2 className="text-2xl font-semibold text-center mb-6">
            Systematic Investment Plan
          </h2>
          {/* Section for Amount */}
          <Slider
            Label="Monthly Investment"
            Sign=" ₹"
            SliderColor="bg-blue-300"
            Value={amount}
            Min={500}
            Max={1000000}
            Step={1}
            OnChange={(e) => setAmount(e.target.value)}
          />

          {/* Section for Rate of Intrest */}
          <Slider
            Label="Inrest Rate"
            Sign="%"
            SliderColor="bg-green-300"
            Value={rate}
            Min={1}
            Max={30}
            OnChange={(e) => setRate(e.target.value)}
          />

          {/* Section for Years */}
          <Slider
            Label="Number of Years"
            Value={year}
            SliderColor="bg-purple-300"
            Min={1}
            Max={30}
            Step={1}
            OnChange={(e) => setYear(e.target.value)}
          />

          {/* Section for Display Result */}
          <div className="mt-6">
            <div className="flex justify-between text-lg font-semibold">
              <span>Invested Amount:</span>
              <span>₹ {TotalInvest}</span>
            </div>

            <div className="flex justify-between text-lg font-semibold">
              <span>Estimated Return Amount:</span>
              <span>₹ {EstReturn}</span>
            </div>

            <div className="flex justify-between text-lg font-semibold">
              <span>Total Value:</span>
              <span>₹ {ReturnAmt}</span>
            </div>
          </div>
        </div>
        {/* Section for Graph */}
        <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
          <h2 className="text-2xl font-semibold text-center mb-6">
            Systematic Investment Plan Return Graph
          </h2>
          <Doughnut style={{ width: 300, height: 300 }} data={data} />
        </div>
      </div>
    </div>
  );
};

export default SIP;
