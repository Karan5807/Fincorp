import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Exchange from "./Pages/Exchange";
import Emi from "./Pages/Emi";
import Home from "./Pages/Home";
import Mutalfund from "./Pages/Mutalfund";
import Providentfund from "./Pages/Providentfund";
import Deposit from "./Pages/Deposit";
import Gst from "./Pages/Gst";
import LoginButton from "./Pages/Login";
import './App.css'

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Exchange" element={<Exchange/>} />
          <Route path="/ProvidentFund" element={<Providentfund />} />
          <Route path="/Deposit" element={<Deposit />} />
          <Route path="/MutualFund" element={<Mutalfund />} />
          <Route path="/EMI" element={<Emi />} />
          <Route path="/GST" element={<Gst/>} />
          <Route path="/Login" element={<LoginButton/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
