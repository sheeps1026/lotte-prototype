import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import { BrowserRouter } from "react-router-dom";
import ProductHeader from './ProductHeader';
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <ProductHeader/>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
