import React, { useState } from "react";

const InclusiveGST = () => {
  const [taxAmount, setTaxAmount] = useState(25000);
  const [taxSlab, setTaxSlab] = useState(12);

  const Amount = parseInt(taxAmount);
  const taxPercent = parseFloat(taxSlab / 100);

  // Section for Inclusive
  const inclusiveTax = Math.round(Amount * taxPercent);
  const afterInclusiveTax = Amount + inclusiveTax;

  return (
    <div
      className="container box-border  rounded-md bg-blue-50"
      style={{ maxWidth: 720 }}
    >
      <h4 className="text-balance text-center font-sans font-medium text-lg antialiased">Inclusive Tax</h4>
      {/* Section for Tax amount */}
      <div className="container">
        <div className="container flex justify-between">
          <h6 className="p-1 m-1 font-sans font-medium text-lg antialiased">
            Tax Amount
          </h6>
          <p className="p-1 m-1 font-sans font-medium text-lg antialiased bg-orange-200 rounded-md">
            &#8377;{taxAmount}
          </p>
        </div>

        <div className="text-center">
          <input
            type="range"
            min={500}
            max={500000}
            step={100}
            value={taxAmount}
            onChange={(e) => setTaxAmount(e.target.value)}
            style={{ width: 700, height: 40 }}
          />
        </div>
      </div>
      {/* Section for Tax Slab */}
      <div className="container">
        <div className="container flex justify-between">
          <h6 className=" p-1 m-1 font-sans font-medium text-lg antialiased">
            Tax Slab
          </h6>
          <h6 className=" bg-orange-200 p-1 m-1 font-sans font-medium text-lg antialiased  rounded-md">
            {taxSlab}%
          </h6>
        </div>

        <div className="container text-center ">
          <input
            type="range"
            min={1}
            max={30}
            step={1}
            value={taxSlab}
            onChange={(e) => setTaxSlab(e.target.value)}
            style={{ width: 700, height: 40 }}
          />
        </div>
      </div>

      {/* Display Result */}
      <div className="container flex justify-around">
        <div className="block">
          <h6 className="text-center p-1 m-1 font-sans font-medium text-lg antialiased">
            Total GST
          </h6>
          <h6 className="text-center bg-orange-200 p-1 m-1 font-sans font-medium text-lg antialiased  rounded-md">
            &#8377;{inclusiveTax}
          </h6>
        </div>

        <div className="block">
          <h6 className="text-center p-1 m-1 font-sans font-medium text-lg antialiased">
            Post-GST Amount
          </h6>
          <h6 className="text-center bg-orange-200 p-1 m-1 font-sans font-medium text-lg antialiased  rounded-md">
            &#8377;{afterInclusiveTax}
          </h6>
        </div>
      </div>
    </div>
  );
};

export default InclusiveGST;
