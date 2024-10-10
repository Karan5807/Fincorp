import React from "react";
import axios from "axios";
import { FaArrowRightArrowLeft } from "react-icons/fa6";
import { useState, useEffect } from "react";
import AmtInput from "../Component/AmtInput";
import AmtOutput from "../Component/AmtOutput";
import Dropdown from "../Component/Dropdown";

function Exchange() {
  const [countries, setCountries] = useState([]);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("INR");
  const [amount, setAmount] = useState(1);
  const [convertAmt, setConvertedAmt] = useState("");
  const [updateTime, setUpdateTime] = useState("");
  const [isLoading, setLoading] = useState(false);
  const ExchangeAPI = import.meta.env.VITE_EXCHANGE_RATE;

  const Amount = parseInt(amount);
  
  useEffect(() => {
    const fetchExRate = async () => {
      try {
        const checkData = (
          await axios.get(
            `${ExchangeAPI}${fromCurrency}/${toCurrency}/${Amount}`
          )
        ).data.result;
        setLoading(checkData);
        
        const result = (
          await axios.get(
            `${ExchangeAPI}${fromCurrency}/${toCurrency}/${Amount}`
          )
        ).data.conversion_result;
        setConvertedAmt(result);

        const time = (
          await axios.get(
            `${ExchangeAPI}${fromCurrency}/${toCurrency}/${Amount}`
          )
        ).data.time_last_update_unix;

        const date = new Date(time * 1000).toUTCString();
        setUpdateTime(date);

      } catch (error) {
        console.error("Error in fetching API");
      }
    };
    fetchExRate();
  }, [Amount, toCurrency, fromCurrency]);

  const swapCountries = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
  };

  const Nodata = () =>{
    return(<h2 className="container text-yellow-950 text-center text-2xl font-sans font-bold ">Network Issue</h2>)
  }

  return (
    <div className="container">
      <div className="container text-red-950 flex flex-col items-center justify-center h-screen bg-gray-100 p-4">
        {/* Section for Heading  */}
        <div className="container">
          <h2 className="text-2xl font-semibold text-center mb-6">
            Fincorp Currency convertor
          </h2>
          <h2 className="text-2xl font-semibold text-center mb-6">
            Trusted Global Currency Converter
          </h2>
        </div>

        {/* Section for Result */}
        <div className="Exchange mt-20 border-2 p-2 border-yellow-500">
        <div className="flex justify-evenly bg-pink-100 border-2 rounded-lg border-white text-red-900">
          {/* Section for From Amount */}
          <div className=" flex justify-around m-2 p-2">
            <h6 className=" text-lg font-medium font-sans m-2">From</h6>
            <Dropdown
              countries={countries}
              selectedCurrency={fromCurrency}
              onCurrencyChange={setFromCurrency}
            />
          </div>

          {/* Section for button */}
          <button className="">
            <FaArrowRightArrowLeft
              className="bg-white text-black hover:bg-sky-500"
              onClick={swapCountries}
            />
          </button>

          {/* Section for To Country */}
          <div className="flex justify-around m-2 p-2">
            <h6 className=" text-lg font-medium font-sans m-2">To</h6>
            <Dropdown
              countries={countries}
              selectedCurrency={toCurrency}
              onCurrencyChange={setToCurrency}
            />
          </div>
        </div>

        <div className="container">
          <AmtInput amount={Amount} onAmountChange={setAmount} />
        </div>

        <div className="container">
          <AmtOutput
            amount={Amount}
            fromCurrency={fromCurrency}
            value={convertAmt}
            toCurrency={toCurrency}
          />
          <h4 className="text-lg text-right font-sans font-medium">{updateTime}</h4>
        </div>

        </div>

      </div>
    </div>
  );
}

export default Exchange;
