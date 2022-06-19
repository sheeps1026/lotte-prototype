import React, { memo } from "react";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset}
  /* other styles */
  a{
    text-decoration:none;
  }
`;

const App = memo(() => {
  return (
    <>
      <GlobalStyle />
      롯월 첫 페이지~~~
    </>
  );
});

export default App;
