import React, { useState } from "react";
import { Slider } from "../Services";

const InclusiveGST = () => {
  const [taxAmount, setTaxAmount] = useState(25000);
  const [taxSlab, setTaxSlab] = useState(12);

  const Amount = parseInt(taxAmount);
  const taxPercent = parseFloat(taxSlab / 100);

  // Section for Inclusive
  const inclusiveTax = Math.round(Amount * taxPercent);
  const totalAmt = Amount + inclusiveTax;

  return (
    <div className="container">
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100 p-4">
        <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
          <h2 className="text-2xl font-semibold text-center mb-6">
            Exclusive GST Tax
          </h2>
          {/* Section for Tax amount */}
          <Slider
            Label="Amount"
            Value={taxAmount}
            SliderColor="bg-blue-300"
            Sign="₹"
            Min={500}
            Max={500000}
            Step={100}
            OnChange={(e) => setTaxAmount(e.target.value)}
          />

          {/* Section for Tax Slab */}
          <Slider
            Label="Tax Slab"
            Value={taxSlab}
            SliderColor="bg-green-300"
            Sign="%"
            Min={1}
            Max={50}
            Step={1}
            OnChange={(e) => setTaxSlab(e.target.value)}
          />

          {/* Section for Output Result */}
          <div className="mt-6">
            <div className="flex justify-between text-lg">
              <span>GST Amount:</span>
              <span>₹ {inclusiveTax}</span>
            </div>
            <div className="flex justify-between text-lg font-semibold mt-2">
              <span>Total Amount:</span>
              <span>₹ {totalAmt}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InclusiveGST;
