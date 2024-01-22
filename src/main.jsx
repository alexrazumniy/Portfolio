import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./i18n";
import { ThemeProvider } from "./components/context/ThemeProvider";
import "./styles/styles.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
        <App />
    </ThemeProvider >
  </React.StrictMode>
);
