import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import GlobalStyles from "./components/styledComponents/GlobalStyles";
import { Helmet } from "react-helmet";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <Helmet>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700&family=Roboto:ital,wght@0,400;1,300;1,400&display=swap"
        rel="stylesheet"
      />
    </Helmet>
    <GlobalStyles />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
