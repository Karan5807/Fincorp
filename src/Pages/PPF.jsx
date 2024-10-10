import React, { useState } from "react";
import { Slider } from "../Services";

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
    <div className="flex items-center justify-center h-screen">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center mb-6">
          Public Provident Fund Calculator
        </h2>

        {/* Section for Amount */}
        <Slider
          Label="Monthly Investment"
          Sign="₹"
          Value={amount}
          SliderColor="bg-blue-300"
          Min={10000}
          Max={5000000}
          Step={1000}
          OnChange={(e) => setAmount(e.target.value)}
        />

        {/* Section for Rate of Intrest */}
        <Slider
          Label="Interest Rate"
          Sign="%"
          Value={rate}
          Min={1}
          Max={15}
          SliderColor="bg-green-300"
          OnChange={(e) => setRate(e.target.value)}
        />

        {/* Section for Years */}
        <Slider
          Label={`Number of ${toggle ? "Months" : "Year"}`}
          Value={year}
          SliderColor="bg-red-300"
          Min={15}
          Max={50}
          OnChange={(e) => setYear(e.target.value)}
        />
        <button className="text-orange-600" onClick={handleToggle}>
          {toggle ? "Months" : "Year"}
        </button>

        <div className="mt-6">
          <div className="flex justify-between text-lg font-semibold mt-2">
            <span>Maturity Amount:</span>
            <span>₹ {ReturnAmt}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PPF;
