import React, { useState } from "react";
import SIP from "./SIP";
import Lumpsum from "./Lumpsum";

function Mutalfund() {
  const [activeTab, setActiveTab] = useState("SIP");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="container mx-auto">

      <div className="flex flex-col sm:flex-row border-b border-gray-300">
        <button
            className={`py-2 px-4 text-sm font-medium ${
              activeTab === "SIP"
                ? "border-b-2 border-blue-500 text-blue-500"
                : "text-gray-500 hover:text-blue-500"
            } md:text-base lg:text-lg`}
          onClick={() => handleTabClick("SIP")}
        >
          <p className="text-sm sm:text-lg font-semibold p-2 sm:p-4 border-b-2 border-blue-500 text-blue-500 border-transparent">
            SIP
          </p>
        </button>

        <button
          className={`py-2 px-4 text-sm font-medium ${
    activeTab === "Lumpsum"
      ? "border-b-2 border-blue-500 text-blue-500"
      : "text-gray-500 hover:text-blue-500"
  } md:text-base lg:text-lg`}
          onClick={() => handleTabClick("Lumpsum")}
        >
          <p className="text-sm sm:text-lg font-semibold p-2 sm:p-4 border-b-2 border-blue-500 text-blue-500 border-transparent">
            Lumpsum
          </p>
        </button>
      </div>

      <div className="tab-content">
        {activeTab === "SIP" && <SIP />}
        {activeTab === "Lumpsum" && <Lumpsum />}
      </div>

      {/* Section for About */}
      <div className="container">
        <h6 className="container">
          Investments in Mutual Funds can be broadly classified into two types-
          lumpsum and SIP. A lumpsum investment is when the depositor invests a
          significant sum of money on a particular mutual fund scheme. SIP or
          Systematic Investment Plan, on the other hand, entails the investment
          of smaller amounts on a monthly basis.
        </h6>

        <h6 className="container">
          Both these type of mutual fund investment strategies have their fair
          share of benefits. Lumpsum investments are particularly preferred by a
          majority of investors, as there are lesser variables involved and
          returns are generally on the higher side. To find out the estimated
          returns on your lumpsum mutual fund investment, you may use a mutual
          fund lumpsum calculator available online.
        </h6>

        <h2 className="container font-bold">
          How can a Lump sum Calculator Help You?
        </h2>
        <h6 className="container">
          Mutual fund investors can use this calculator to figure out the
          estimated returns on their investments. Before getting into the
          benefits of using this calculator, one must know the types of return
          for a lumpsum investment.
        </h6>
        <li>Absolute return</li>
        <li>Total return</li>
        <li>Annualised return</li>
        <li>Point to point return</li>
        <li>Trailing return</li>
        <li>Rolling return</li>

        <h6 className="container font-bold">Formula to Calculate MF returns</h6>
        <h6 className="container">
          All lumpsum calculator mutual fund uses a specific method to compute
          the estimated return on investment. It is essentially a compound
          interest formula with one of the variables being the number of times
          the interest is compounded in a year.
        </h6>
        <h6>The Formula is as follows:</h6>
        <h6 className="container">A = P (1 + r/n) ^ nt</h6>
        <h6>The variables are mentioned in the table below.</h6>

        <div className="container">
          <h6>A: Estimated return</h6>
          <h6>P: Present Value</h6>
          <h6>r: Rate of Return</h6>
          <h6>t: Duration of Investment</h6>
          <h6>n: Number of Independent</h6>
        </div>

        <div className="container">
          <h6>
            You can use this formula to compute your mutual funds returns
            accurately.<br/>
             For example, imagine investing Rs. 15 Lakh in a fund
            with a 12% return for 5-year period compounding every 6 months. <br/>
             The
            estimated return in this scenario will be- A = Rs. 15, 00,000 (1 +
            12%) ^ 5 As you can surmise, it’s a complex equation which may be
            out of grasp for a majority of investors.
            <br/>A lumpsum MF calculator
            will calculate it instantly. In this case, your estimated return at
            the end of a 5-year period shall be Rs. 26, 43, 513.
          </h6>
        </div>

        <div className="container">
        <h6 className="container font-bold">How to use Fincorp lumpsum calculator?</h6>
        <h6 className="container ">The lumpsum calculator available on the Groww website is easily navigable. Follow the steps mentioned below to calculate your ROI on mutual funds:</h6>
        <li>Provide required variables at their designated slots. You may also use the slider to adjust values.</li>
        <li>The calculator will provide you with an estimated value in seconds.</li>
        </div>
      </div>
    </div>
  );
}

export default Mutalfund;
