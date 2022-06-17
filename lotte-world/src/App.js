import React, { memo } from "react";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

import { Routes, Route, Link } from "react-router-dom";

import Sitemap from "./pages/business/Sitemap";

const GlobalStyle = createGlobalStyle`
  ${reset}
  /* other styles */
  a{
    text-decoration:none;
  }
`;

const App = memo(() => {
  return (
    <div>
      <GlobalStyle />
      롯월 첫 페이지~~~
      {/* <Sitemap /> */}
      <Link to="/Sitemap">유틸리티</Link>
      <Routes>
        <Route path="/Sitemap" element={<Sitemap />}></Route>
      </Routes>
    </div>
  );
});

export default App;
