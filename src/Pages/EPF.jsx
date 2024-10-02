import React, { useState } from "react";

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
    <div className="container flex justify-center">
      <div
        className=" container box-border rounded-md bg-blue-50 m-2 p-2"
        style={{ width: 740, height: 450 }}
      >
        <h2 className="container text-center font-sans font-medium text-lg">
          EPF Calculator
        </h2>

        {/* Section for the Salary */}
        <div className="container">
          <div className="container flex justify-between">
            <h6 className="p-1 m-1 font-sans font-medium text-lg antialiased">
              Basic Monthly Salary:
            </h6>
            <h6 className="p-1 m-1 font-sans font-medium text-lg antialiased bg-orange-200 rounded-md">
              &#8377;{basicSalary}
            </h6>
          </div>
          <div className="container text-centre">
            <input
              type="range"
              min={10000}
              max={5000000}
              step={1000}
              value={basicSalary}
              style={{ width: 700 }}
              onChange={(e) => setBasicSalary(e.target.value)}
            />
          </div>
        </div>

        {/* Section for the Employee Contribution */}
        <div className="container">
          <div className="container flex justify-between">
            <h6 className="p-1 m-1 font-sans font-medium text-lg antialiased">
              Employee Contribution (%):
            </h6>
            <p className="p-1 m-1 font-sans font-medium text-lg antialiased bg-orange-200 rounded-md">
              {employeeContribution}
            </p>
          </div>
          <div className="container text-center">
            <input
              type="range"
              min={1}
              max={20}
              step={1}
              value={employeeContribution}
              style={{ width: 700 }}
              onChange={(e) => setEmployeeContribution(e.target.value)}
            />
          </div>
        </div>

        {/* Section for Employer Contribution */}
        <div className="container">
          <div className="container flex justify-between">
            <h6 className="p-1 m-1 font-sans font-medium text-lg antialiased">
              Employer Contribution (%):
            </h6>
            <p className="p-1 m-1 font-sans font-medium text-lg antialiased bg-orange-200 rounded-md">
              {employerContribution}
            </p>
          </div>
          <div className="container text-center">
            <input
              type="range"
              min={1}
              max={10}
              step={1}
              value={employerContribution}
              style={{ width: 700 }}
              onChange={(e) => setEmployerContribution(e.target.value)}
            />
          </div>
        </div>

        {/* Section for Number of Years  */}
        <div className="container">
          <div className="container flex justify-between">
            <h6 className="p-1 m-1 font-sans font-medium text-lg antialiased">
              Number of Years:
            </h6>
            <p className="p-1 m-1 font-sans font-medium text-lg antialiased bg-orange-200 rounded-md">
              {years}
            </p>
          </div>
          <div className="container text-center">
            <input
              type="range"
              min={15}
              max={58}
              step={1}
              value={years}
              style={{ width: 700 }}
              onChange={(e) => setYears(e.target.value)}
            />
          </div>
        </div>

        {/* Section for Intrest Intrest rate  */}

        <div className="container">
          <div className="container flex justify-between">
            <h6 className="p-1 m-1 font-sans font-medium text-lg antialiased">
              Interest Rate (%):
            </h6>
            <p className="p-1 m-1 font-sans font-medium text-lg antialiased bg-orange-200 rounded-md">
              {rate}
            </p>
          </div>
          <div className="container text-center">
            <input
              type="range"
              disabled
              value={rate}
              onChange={(e) => setRate(e.target.value)}
              style={{ width: 700 }}
              step={0.1}
            />
          </div>
        </div>

        <div className="m-2 p-2">
          <h3 className="container antialiased  text-center font-sans font-medium text-lg bg-orange-200">
            Maturity Amount: ₹{ReturnAmt}
          </h3>
        </div>

      </div>
    </div>
  );
};

export default EPFCalculator;
