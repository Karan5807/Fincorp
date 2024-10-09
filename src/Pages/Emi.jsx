import React, { useState } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";


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
      <div className="flex justify-center">
        <div
          className="container box-border rounded-md bg-blue-50 m-2 p-2"
          style={{ width: 740, height: 350 }}
        >

          {/* Section for demo */}
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

            <div className="container text-centre">
              <input
                type="range"
                min={100000}
                max={5000000}
                step={1}
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                style={{ width: 700 }}
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

            <div className="container text-center">
              <input
                type="range"
                min={1}
                max={15}
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
                Number of Year
              </h6>
              <h6 className="p-1 m-1 font-sans font-medium text-lg antialiased bg-orange-200 rounded-md">
                {year}
              </h6>
            </div>
            <div className="container text-center">
              <input
                type="range"
                min={1}
                max={25}
                step={1}
                value={year}
                style={{ width: 700 }}
                onChange={(e) => setYear(e.target.value)}
              />
            </div>
          </div>

          {/* Display Result */}
          <div className="container flex justify-around">
            <div className="block">
              <h6 className="text-center p-1 m-1 font-sans font-medium text-lg antialiased">
                EMI Amount
              </h6>
              <h6 className="text-center bg-orange-200 p-1 m-1 font-sans font-medium text-lg antialiased  rounded-md">
                &#8377;{EMI}
              </h6>
            </div>

            <div className="block">
              <h6 className="text-center p-1 m-1 font-sans font-medium text-lg antialiased">
                Loan Amount
              </h6>
              <h6 className="text-center bg-orange-200 p-1 m-1 font-sans font-medium text-lg antialiased  rounded-md">
                &#8377;{amount}
              </h6>
            </div>

            <div className="block">
              <h6 className="text-center p-1 m-1 font-sans font-medium text-lg antialiased">
                Total Intrest
              </h6>
              <h6 className="text-center bg-orange-200 p-1 m-1 font-sans font-medium text-lg antialiased  rounded-md">
                &#8377;{totalIntrest}
              </h6>
            </div>

            <div className="block">
              <h6 className="text-center p-1 m-1 font-sans font-medium text-lg antialiased">
                Total Amount
              </h6>
              <h6 className="text-center bg-orange-200 p-1 m-1 font-sans font-medium text-lg antialiased  rounded-md">
                &#8377;{totalAmt}
              </h6>
            </div>
          </div>
        </div>
        {/* Section for Graph */}
        <div className="container-md">
          <Doughnut style={{ width: 300, height: 300 }} data={data} />
        </div>
      </div>
    </div>
  );
}

export default Emi;
