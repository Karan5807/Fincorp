import React from 'react';

const CurrencyInput = ({ amount, onAmountChange }) => {
  return (
    <div className='flex justify-evenly text-red-950  font-medium font-sans'>
      <h6 className='p-2 m-2 text-lg text-red-950'>Amount</h6>
      <input
      className='mt-1 text-center block px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500'
        type="number"
        min={1}
        value={amount}
        onChange={(e) => onAmountChange(e.target.value)}
      />
    </div>
  );
};

export default CurrencyInput;
