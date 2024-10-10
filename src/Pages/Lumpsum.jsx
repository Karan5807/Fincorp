import React, { useState } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { Slider } from "../Services";

const Lumpsum = () => {
  ChartJS.register(ArcElement, Tooltip, Legend);

  const [amount, setAmount] = useState(25000);
  const [rate, setRate] = useState(12);
  const [year, setYear] = useState(10);

  const r = rate / 100;

  //  Calculation for Lumpsum Ammount
  const lumpsumReturnAmt = Math.ceil(amount * Math.pow(1 + r, year));
  const lumpsumIntrestAmt = Math.ceil(lumpsumReturnAmt - amount);

  const lumpSumData = {
    labels: ["Principal Amount", "Intrest Amount"],
    datasets: [
      {
        label: "EMI Chart",
        data: [amount, lumpsumIntrestAmt],
        backgroundColor: ["rgb(255, 99, 132)", "rgb(54, 162, 235)"],
        hoverOffset: 4,
      },
    ],
  };

  const lumpsumconfig = {
    type: "doughnut",
    data: lumpSumData,
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
      <div className="flex justify-center items-center h-screen gap-6 ">
        {/* Section for Calculation */}

        <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
          <h2 className="text-2xl font-semibold text-center mb-6">
            Lumpsum Investment
          </h2>

          {/* Section For Amount */}
          <Slider
            Label="Monthly Investment"
            Value={amount}
            Sign=" ₹"
            SliderColor="bg-blue-300"
            Min={500}
            Max={1000000}
            Step={1000}
            OnChange={(e) => setAmount(e.target.value)}
          />

          {/* Section for Intrest Rate */}
          <Slider
            Label="Intrest Rate"
            Value={rate}
            Sign=" %"
            SliderColor="bg-green-300"
            Min={1}
            Max={30}
            Step={1}
            OnChange={(e) => setRate(e.target.value)}
          />

          {/* Section for Tenure Year */}
          <Slider
            Label="Year of Tenure"
            Value={year}
            SliderColor="bg-purple-300"
            Min={1}
            Max={30}
            OnChange={(e) => setYear(e.target.value)}
          />

          {/* Section for Display Result */}
          <div className="mt-6">
            <div className="flex justify-between text-lg font-semibold">
              <span>Invested Amount:</span>
              <span>₹ {amount}</span>
            </div>

            <div className="flex justify-between text-lg font-semibold">
              <span>Estimated Return Amount:</span>
              <span>₹ {lumpsumIntrestAmt}</span>
            </div>

            <div className="flex justify-between text-lg font-semibold">
              <span>Total Value:</span>
              <span>₹ {lumpsumReturnAmt}</span>
            </div>
          </div>
        </div>

        {/* Section for Graph */}
        <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
          <h2 className="text-2xl font-semibold text-center mb-6">
            Lumpsum Calculator Graph
          </h2>
          <Doughnut style={{ width: 300, height: 300 }} data={lumpSumData} />
        </div>
      </div>
    </div>
  );
};

export default Lumpsum;
