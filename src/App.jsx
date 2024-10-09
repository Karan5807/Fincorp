import React from "react";
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import Exchange from "./Pages/Exchange";
import Emi from "./Pages/Emi";
import Home from "./Pages/Home";
import Mutalfund from "./Pages/Mutalfund";
import Providentfund from "./Pages/Providentfund";
import Deposit from "./Pages/Deposit";
import GST from "./Pages/GST";
import Layout from "./Component/Layout";
import About from "./Pages/About";
import { Notfound } from "./Services";

function App() {
  const RouterData = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <Notfound />,
      children: [
        { index: true, element: <Home /> },
        { path: "Xe", element: <Exchange /> },
        { path: "MutualFund", element: <Mutalfund /> },
        { path: "ProvidentFund", element: <Providentfund /> },
        { path: "Deposit", element: <Deposit /> },
        { path: "EMI", element: <Emi /> },
        { path: "GST", element: <GST /> },
        { path: "About", element: <About /> },
      ],
    },
  ]);
  return (
    <React.Fragment>
      <RouterProvider router={RouterData} />
    </React.Fragment>
  );
}

export default App;
