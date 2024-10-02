import { Link } from "react-router-dom";
import { GrLogin } from "react-icons/gr";

function Header() {
  return (
    <div className="container h-14 p-2 text-lg font-sans bg-pink-900 text-yellow-50 flex justify-between">
      {/* Company Title */}
      <div className="container mx-auto">
        <h6>Fincorp</h6>
      </div>

      {/* Navigation Option */}
      <div className="container max-w-auto flex  justify-around">
        <div className="container">
          <Link className="Link" to={"/"}>
            Home
          </Link>
        </div>
        <div className="container">
          <Link className="Link" to={"/Exchange"}>
            Xe
          </Link>
        </div>
        <div className="container">
          <Link className="Link" to={"/ProvidentFund"}>
            Funds
          </Link>
        </div>
        <div className="container">
          <Link className="Link" to={"/Deposit"}>
            Deposit
          </Link>
        </div>
        <div className="container space-x-3">
          <Link className="Link" to={"/MutualFund"}>
            Invest
          </Link>
        </div>
        <div className="container">
          <Link className="Link" to={"/EMI"}>
            EMI
          </Link>
        </div>
        <div className="container">
          <Link className="Link" to={"/GST"}>
            GST
          </Link>
        </div>

        <div className="container">
          <Link className="Link" to={"/Login"}>
            <button className="container">SignIn</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
