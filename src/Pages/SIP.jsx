import React, { useState } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

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
    <div className="container flex justify-center">
      <div
        className="container box-border rounded-md bg-blue-50 m-2 p-2"
        style={{ width: 740, height: 350 }}
      >
        <h2 className="container text-center font-sans font-medium text-lg">
          SIP
        </h2>
        {/* Section for Amount */}
        <div className="container">
          <div className="container flex justify-between">
            <h6 className="p-1 m-1 font-sans font-medium text-lg antialiased">
              Monthly Investment
            </h6>
            <h6 className="p-1 m-1 font-sans font-medium text-lg antialiased bg-orange-200 rounded-md">
              &#8377;{amount}
            </h6>
          </div>

          <div className="container text-center">
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

        {/* Section for Rate of Intrest */}
        <div className="container">
          <div className="container flex justify-between">
            <h6 className="p-1 m-1 font-sans font-medium text-lg antialiased">
              Interest Rate (%):
            </h6>
            <h6 className="p-1 m-1 font-sans font-medium text-lg antialiased bg-orange-200 rounded-md">
              {rate}
            </h6>
          </div>

          <div className="container text-centre">
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

        {/* Section for Years */}
        <div className="container">
          <div className="container flex justify-between">
            <h6 className="p-1 m-1 font-sans font-medium text-lg antialiased">
              Number of Years
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
              &#8377;{TotalInvest}
            </h6>
          </div>

          <div className="block">
            <h6 className="text-center p-1 m-1 font-sans font-medium text-lg antialiased">
              Est Return
            </h6>
            <h6 className="text-center bg-orange-200 p-1 m-1 font-sans font-medium text-lg antialiased  rounded-md">
              &#8377;{EstReturn}
            </h6>
          </div>

          <div className="block">
            <h6 className="text-center p-1 m-1 font-sans font-medium text-lg antialiased">
              Total Value
            </h6>
            <h6 className="text-center bg-orange-200 p-1 m-1 font-sans font-medium text-lg antialiased  rounded-md">
              &#8377;{ReturnAmt}
            </h6>
          </div>
        </div>
      </div>
      {/* Section for Graph */}
      <div className="container-md">
        <Doughnut style={{ width: 300, height: 300 }} data={data} />
      </div>
    </div>
  );
};

export default SIP;
