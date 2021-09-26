import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Auth0Provider } from "@auth0/auth0-react";
import { BrowserRouter as Router } from 'react-router-dom'

ReactDOM.render(
  <React.StrictMode>
    <Router>
    <Auth0Provider
      domain="dev-96jkcqer.us.auth0.com"
      clientId="q7lLdtHenTYVhpf9dMUN6uGg2lhcSPw6"
      redirectUri={window.location.origin}
      audience={process.env.REACT_APP_SERVERURL}
    >
      <App />
    </Auth0Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();