import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { Provider } from "react-redux";
import store from "./store/store";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Counter } from "./views/Counter/Counter";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <Provider store={store}>
      <Routes>
        <Route path="/app" element={<Counter />} />
        {/* Define more routes here if needed */}
        <Route path="/" element={<App />} />
      </Routes>
    </Provider>
  </Router>
);

reportWebVitals();
