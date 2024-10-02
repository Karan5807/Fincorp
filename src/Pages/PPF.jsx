import React, { useState } from "react";

const PPF = () => {
  const [amount, setAmount] = useState(50000);
  const [rate, setRate] = useState(8.1);
  const [year, setYear] = useState(30);
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const intrest = rate / 100;
  const ReturnAmt = Math.ceil(
    (amount * (Math.pow(1 + intrest, year) - 1)) / intrest
  );

  return (
    <div className="container flex justify-center">
      <div
        className="container box-border rounded-md bg-blue-50 m-2 p-2"
        style={{ width: 740, height: 350 }}
      >
        <h2 className="container text-center font-sans font-medium text-lg">
          PPF Calculator
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

          <div className="container text-centre">
            <input
              type="range"
              min={10000}
              max={5000000}
              step={1000}
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
              Number of :
              {
                <button className="text-orange-600" onClick={handleToggle}>
                  {toggle ? "Months" : "Year"}
                </button>
              }
            </h6>
            <h6 className="p-1 m-1 font-sans font-medium text-lg antialiased bg-orange-200 rounded-md">
              {year}
            </h6>
          </div>
          <div className="container text-center">
            <input
              type="range"
              min={15}
              max={50}
              step={1}
              value={year}
              style={{ width: 700 }}
              onChange={(e) => setYear(e.target.value)}
            />
          </div>
        </div>

        <div className="m-2 p-2">
          <h3 className="container block text-center font-sans font-medium text-lg bg-orange-200">
            Maturity Amount: ₹{ReturnAmt}
          </h3>
        </div>

      </div>
    </div>
  );
};

export default PPF;
