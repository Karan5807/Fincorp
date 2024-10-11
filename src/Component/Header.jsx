import React, { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header className="text-lg font-sans bg-pink-900 text-yellow-50 p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link className="Link" to={"/"}>
          <h6 className="font-semibold text-xl">Finance Corp</h6>
        </Link>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-6">
        <Link className="Link" to={"/Xe"}>
            Xe
          </Link>
          <Link className="Link" to={"/MutualFund"}>
            Mutual Funds
          </Link>
          <Link className="Link" to={"/Deposit"}>
            Deposit
          </Link>
          <Link className="Link" to={"/ProvidentFund"}>
            Provident Funds
          </Link>
          <Link className="Link" to={"/EMI"}>
            EMI
          </Link>
          <Link className="Link" to={"/GST"}>
            GST
          </Link>
          <Link className="Link" to={"/About"}>
            About
          </Link>
        </nav>

        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <nav className="md:hidden bg-pink-900">
          <ul className="flex flex-col items-center space-y-4 py-4">
          <Link className="Link" to={"/Xe"}>
            Xe
          </Link>
          <Link className="Link" to={"/MutualFund"}>
            Mutual Funds
          </Link>
          <Link className="Link" to={"/Deposit"}>
            Deposit
          </Link>
          <Link className="Link" to={"/ProvidentFund"}>
            Provident Funds
          </Link>
          <Link className="Link" to={"/EMI"}>
            EMI
          </Link>
          <Link className="Link" to={"/GST"}>
            GST
          </Link>
          <Link className="Link" to={"/About"}>
            About
          </Link>
          </ul>
        </nav>
      )}
    </header>
  );
}

export default Header;
