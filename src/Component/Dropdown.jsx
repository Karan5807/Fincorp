import React from 'react';
import { Currencies } from '../Component/Currency_List';


const CurrencySelector = ({ selectedCurrency, onCurrencyChange }) => {
  return (
    <div className='container'>
      <select className=' max-w-64 text-red-950 p-2 text-lg rounded-md focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500' value={selectedCurrency} onChange={(e) => onCurrencyChange(e.target.value)}>
        {Currencies.map((currency) => (
          <option className='max-w-30 bg-pink-50 text-red-950 p-2 text-lg scroll-smooth' key={currency.value} value={currency.value}>
            {`${currency.value} - ${currency.label}`}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CurrencySelector;
