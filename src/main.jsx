import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { Auth0Provider } from "@auth0/auth0-react";
import "./index.css";

const Root = ReactDOM.createRoot(document.getElementById("root"));
Root.render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-uy6v383ai3eiedhd.us.auth0.com"
      clientId="t0IIreb2VZttkiSRL0QtoKoJ8IWkJNnJ"
      authorizationParams={{ redirect_uri: window.location.origin }}
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>
);
