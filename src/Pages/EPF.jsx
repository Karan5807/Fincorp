import React, { useState } from "react";
import { Slider } from "../Services";

const EPFCalculator = () => {
  const [basicSalary, setBasicSalary] = useState(50000);
  const [employeeContribution, setEmployeeContribution] = useState(12); // default EPF contribution by employee in %
  const [employerContribution, setEmployerContribution] = useState(3.67); // default EPF contribution by employer in %
  const [years, setYears] = useState(30); // default number of years
  const [rate, setRate] = useState(8.1); // current EPF interest rate

  let salary = parseFloat(basicSalary);
  let employeeMonthlyContribution = (salary * employeeContribution) / 100;
  let employerMonthlyContribution = (salary * employerContribution) / 100;
  let annualContribution =
    (employeeMonthlyContribution + employerMonthlyContribution) * 12;
  let r = parseFloat(rate) / 100;
  let n = parseInt(years);

  // The formula to calculate EPF maturity amount
  // A = P * (1 + r/n)^(n*t)
  let ReturnAmt = Math.round(
    annualContribution * ((Math.pow(1 + r, n) - 1) / r) * (1 + r)
  );

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
        <h2 className="container text-center font-sans font-medium text-lg">
          Emplyoee Provident Fund Calculator
        </h2>

        {/* Section for the Salary */}
        <Slider
          Label="Basic Monthly Salary"
          SliderColor="bg-blue-300"
          Value={basicSalary}
          Sign="₹"
          Min={10000}
          Max={5000000}
          Step={1000}
          OnChange={(e) => setBasicSalary(e.target.value)}
        />

        {/* Section for the Employee Contribution */}
        <Slider
          Label="Employee Contribution"
          Value={employeeContribution}
          Sign="%"
          Min={1}
          Max={20}
          Step={1}
          SliderColor="bg-green-300"
          OnChange={(e) => setEmployeeContribution(e.target.value)}
        />

        {/* Section for Employer Contribution */}
        <Slider
          Label="Employer Contribution"
          Value={employerContribution}
          SliderColor="bg-purple-300"
          Sign="%"
          Min={1}
          Max={10}
          OnChange={(e) => setEmployerContribution(e.target.value)}
        />

        {/* Section for Number of Years  */}
        <Slider
          Label="Number of Years"
          Value={years}
          SliderColor="bg-orange-300"
          Min={15}
          Max={58}
          Step={1}
          OnChange={(e) => setYears(e.target.value)}
        />

        {/* Section for Intrest Intrest rate  */}
        <Slider
          Label="Intrest Rate"
          Value={rate}
          SliderColor="bg-cyan-300"
          Min={1}
          Max={15}
          Step={0.1}
          OnChange={(e) => setRate(e.target.value)}
          disabled
        />

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

export default EPFCalculator;
