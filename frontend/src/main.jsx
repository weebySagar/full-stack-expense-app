import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
