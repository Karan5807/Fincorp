import React from "react";

const AmtOutput = ({ amount, fromCurrency, toCurrency, value }) => {
  return (
    <h6 className="p-2 m-2 border-2 rounded-md font-semibold block text-3xl text-center text-red-950">
      {amount} {fromCurrency} = {value} {toCurrency}
    </h6>
  );
};

export default AmtOutput;
