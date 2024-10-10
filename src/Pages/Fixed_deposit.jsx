import React, { useState } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { Slider } from "../Services";

const Fixed_deposit = () => {
  ChartJS.register(ArcElement, Tooltip, Legend);
  const [amount, setAmount] = useState(100000);
  const [rate, setRate] = useState(6.5);
  const [year, setYear] = useState(5);
  const [tenure, setTenure] = useState(false);

  const ReturnAmt = Math.ceil(amount + amount * rate * (year / 100));
  const EstReturn = ReturnAmt - amount;

  const ReturnAmtMonth = Math.ceil(amount + amount * rate * (year / 12 / 100));
  const EstReturnMonthly = ReturnAmtMonth - amount;

  const fixedDataYears = {
    labels: ["Principal Amount", "Intrest Amount"],
    datasets: [
      {
        label: "Fixed Deposit",
        data: [amount, EstReturn],
        backgroundColor: ["rgb(255, 99, 132)", "rgb(54, 162, 235)"],
        hoverOffset: 4,
      },
    ],
  };

  const DataConfig = {
    type: "doughnut",
    data: fixedDataYears,
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

  const fixedDataMonths = {
    labels: ["Principal Amount", "Intrest Amount"],
    datasets: [
      {
        label: "Fixed Deposit",
        data: [amount, EstReturnMonthly],
        backgroundColor: ["rgb(255, 99, 132)", "rgb(54, 162, 235)"],
        hoverOffset: 4,
      },
    ],
  };

  const DataConfigMonths = {
    type: "doughnut",
    data: fixedDataMonths,
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

  const handleTenure = () => {
    setTenure(!tenure);
  };

  return (
    <div className="container">
      <div className="flex justify-center items-center h-screen gap-6">
        {/* Section for Calculating*/}
        <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
          <h2 className="text-2xl font-semibold text-center mb-6">
            Fixed Deposit
          </h2>

          {/* Section for Amount */}
          <Slider
            Label="Total Investment"
            Value={amount}
            Sign=" ₹"
            Min={10000}
            Max={5000000}
            Step={1000}
            SliderColor="bg-blue-300"
            OnChange={(e) => setAmount(e.target.value)}
          />

          {/* Section for Rate of Intrest */}
          <Slider
            Label="Intrest Rate"
            Value={rate}
            Sign="%"
            Min={1}
            Max={15}
            Step={1}
            OnChange={(e) => setRate(e.target.value)}
            SliderColor="bg-green-300"
          />

          {/* Section for Years */}
          <Slider
            Label={`Number of ${tenure ? "Months" : "Years"}`}
            Value={year}
            Min={1}
            Max={25}
            Step={1}
            SliderColor="bg-purple-300"
            OnChange={(e) => setYear(e.target.value)}
          />

          <button className="text-orange-600" onClick={handleTenure}>
            {tenure ? " Months " : " Years "}
          </button>

          {/* Display Result */}
          {tenure && (
            <div className="mt-6">
              <div className="flex justify-between text-lg font-semibold">
                <span>Invested Amount:</span>
                <span>₹ {amount}</span>
              </div>

              <div className="flex justify-between text-lg font-semibold">
                <span>Estimated Return Amount:</span>
                <span>₹ {EstReturnMonthly}</span>
              </div>

              <div className="flex justify-between text-lg font-semibold">
                <span>Total Value:</span>
                <span>₹ {ReturnAmtMonth}</span>
              </div>
            </div>
          )}
          {!tenure && (
            <div className="mt-6">
              <div className="flex justify-between text-lg font-semibold">
                <span>Invested Amount:</span>
                <span>₹ {amount}</span>
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
          )}
        </div>

        {/* Section for Graph */}
        {tenure && (
          <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
            <h2 className="text-2xl font-semibold text-center mb-6">
              Fixed Deposit Calculator Graph Monthly
            </h2>
            <Doughnut
              style={{ width: 300, height: 300 }}
              data={fixedDataMonths}
            />
          </div>
        )}

        {!tenure && (
          <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
            <h2 className="text-2xl font-semibold text-center mb-6">
              Fixed Deposit Calculator Graph Yearly
            </h2>
            <Doughnut
              style={{ width: 300, height: 300 }}
              data={fixedDataYears}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Fixed_deposit;
