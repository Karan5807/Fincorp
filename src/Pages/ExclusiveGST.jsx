import React, { useState } from "react";
import { Slider } from "../Services";

const ExclusiveGST = () => {
  const [taxAmount, setTaxAmount] = useState(25000);
  const [taxSlab, setTaxSlab] = useState(12);

  const Amount = parseInt(taxAmount);

  //  Section for Excluisve
  const excludedTax = Math.round(Amount - [Amount * (100 / (100 + taxSlab))]);
  const totalAmt = parseInt(Amount - excludedTax);

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center mb-6">
          Exclusive GST Tax
        </h2>
        {/* Section for Tax amount */}
        <Slider
          Label="Amount"
          Value={taxAmount}
          Sign="₹"
          Min={500}
          Max={500000}
          Step={10}
          SliderColor="bg-blue-300"
          OnChange={(e) => setTaxAmount(e.target.value)}
        />

        {/* Section for Tax Slab */}
        <Slider
          Label="Tax Slab"
          Value={taxSlab}
          Sign="%"
          Min={1}
          Max={50}
          Step={1}
          SliderColor="bg-green-300"
          OnChange={(e) => setTaxSlab(e.target.value)}
        />

        {/* Section for Output Result */}
        <div className="mt-6">
          <div className="flex justify-between text-lg">
            <span>GST Amount:</span>
            <span>₹ {excludedTax}</span>
          </div>
          <div className="flex justify-between text-lg font-semibold mt-2">
            <span>Total Amount:</span>
            <span>₹ {totalAmt}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExclusiveGST;
