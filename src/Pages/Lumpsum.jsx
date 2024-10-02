import React, { useState } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

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
    <div className="container flex justify-center">
      <div
        className="container box-border rounded-md bg-blue-50 m-2 p-2"
        style={{ width: 740, height: 350 }}
      >
        <h2 className="container text-center font-sans font-medium text-lg">
          Lumpsum Investment
        </h2>

        {/* Section For Amount */}
        <div className="container">
          <div className="container flex justify-between">
            <h6 className="p-1 m-1 font-sans font-medium text-lg antialiased">
              Monthly Investment
            </h6>
            <h6 className="p-1 m-1 font-sans font-medium text-lg antialiased bg-orange-200 rounded-md">
              &#8377;{amount}
            </h6>
          </div>

          <div container text-centre>
            <input
              type="range"
              min={500}
              max={1000000}
              step={1}
              value={amount}
              style={{ width: 700 }}
              onChange={(e) => setAmount(e.target.value)}
            />
          </div>
        </div>

        {/* Section for Intrest Rate */}
        <div className="container">
          <div className="container flex justify-between">
            <h6 className="p-1 m-1 font-sans font-medium text-lg antialiased">
              Interest Rate (%):
            </h6>
            <h6 className="p-1 m-1 font-sans font-medium text-lg antialiased bg-orange-200 rounded-md">
              {rate}
            </h6>
          </div>

          <div className="container text-center">
            <input
              type="range"
              min={1}
              max={30}
              step={1}
              value={rate}
              style={{ width: 700 }}
              onChange={(e) => setRate(e.target.value)}
            />
          </div>
        </div>

        {/* Section for Tenure Year */}
        <div className="container">
          <div className="container flex justify-between">
            <h6 className="p-1 m-1 font-sans font-medium text-lg antialiased">
              Year of Tenure:
            </h6>
            <h6 className="p-1 m-1 font-sans font-medium text-lg antialiased bg-orange-200 rounded-md">
              {year}
            </h6>
          </div>

          <div className="container text-center">
            <input
              type="range"
              min={1}
              max={30}
              step={1}
              value={year}
              style={{ width: 700 }}
              onChange={(e) => setYear(e.target.value)}
            />
          </div>
        </div>

        {/* Section for Display Result */}
        <div className="container flex justify-around">
          <div className="block">
            <h6 className="text-center p-1 m-1 font-sans font-medium text-lg antialiased">
              Invested Amount
            </h6>
            <h6 className="text-center bg-orange-200 p-1 m-1 font-sans font-medium text-lg antialiased  rounded-md">
              &#8377;{amount}
            </h6>
          </div>

          <div className="block">
            <h6 className="text-center p-1 m-1 font-sans font-medium text-lg antialiased">
              Est Return
            </h6>
            <h6 className="text-center bg-orange-200 p-1 m-1 font-sans font-medium text-lg antialiased  rounded-md">
              &#8377;{lumpsumIntrestAmt}
            </h6>
          </div>

          <div className="block">
            <h6 className="text-center p-1 m-1 font-sans font-medium text-lg antialiased">
              Total Value
            </h6>
            <h6 className="text-center bg-orange-200 p-1 m-1 font-sans font-medium text-lg antialiased  rounded-md">
              &#8377;{lumpsumReturnAmt}
            </h6>
          </div>
        </div>
      </div>

      {/* Section for Graph */}
      <div className="container-md">
        <Doughnut style={{ width: 300, height: 300 }} data={lumpSumData} />
      </div>
    </div>
  );
};

export default Lumpsum;
