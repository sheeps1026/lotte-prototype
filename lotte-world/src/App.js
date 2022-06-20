import React, { memo } from "react";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import styled from "styled-components";
import Customer from "./pages/customer/Customer";
import Ticketing from "./pages/product/Ticketing";

const Wrap = styled.div`
  padding-top: 120px;
`;
const GlobalStyle = createGlobalStyle`
  ${reset}
  /* other styles */
  a{
    text-decoration:none;
    cursor: pointer;
  }
  /* 사진배경 */
  .fixed_bg {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    z-index: -1;
    transition: all 1.8s ease;
  }
  /* button초기화 */
  button {
    cursor: pointer;
    outline: none;
    border: 0 none;
  }
`;

const App = memo(() => {
  return (
    <Wrap>
      <GlobalStyle />
      <Customer />
      <Ticketing />
    </Wrap>
  );
});

export default App;
