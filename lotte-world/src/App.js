import React, { memo } from "react";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

import { Routes, Route, Link } from "react-router-dom";

import Introduce from "./pages/business/Introduce";
import AgreementHome from "./pages/business/AgreementHome";
import AgreementAdventure from "./pages/business/AgreementAdventure";
import AgreementMembership from "./pages/business/AgreementMembership";
import HelpId from "./pages/user/HelpId";
import HelpIdConfirm from "./pages/user/HelpIdConfirm";
import HelpPwd from "./pages/user/HelpPwd";
import HelpPwdChange from "./pages/user/HelpPwdChange";
import HelpPwdConfirm from "./pages/user/HelpPwdConfirm";
import Login from "./pages/user/Login";
import Signin from "./pages/user/Signin";
import SigninConfirm from "./pages/user/SigninConfirm";

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
      <Link to="/Introduce">Introduce</Link>&nbsp;&nbsp;
      <Link to="/AgreementHome">AgreementHome</Link>&nbsp;&nbsp;
      <Link to="/AgreementAdventure">AgreementAdventure</Link>&nbsp;&nbsp;
      <Link to="/AgreementMembership">AgreementMembership</Link>&nbsp;&nbsp;
      <Link to="/Login">Login</Link>&nbsp;&nbsp;
      <Link to="/HelpId">HelpId</Link>&nbsp;&nbsp;
      <Link to="/HelpIdConfirm">HelpIdConfirm</Link>&nbsp;&nbsp;
      <Link to="/HelpPwd">HelpPwd</Link>&nbsp;&nbsp;
      <Link to="/HelpPwdChange">HelpPwdChange</Link>&nbsp;&nbsp;
      <Link to="/HelpPwdConfirm">HelpPwdConfirm</Link>&nbsp;&nbsp;
      <Link to="/Signin">Signin</Link>&nbsp;&nbsp;
      <Link to="/SigninConfirm">SigninConfirm</Link>
      <Routes>
        <Route path="/Introduce" element={<Introduce />} />
        <Route path="/AgreementHome" element={<AgreementHome />} />
        <Route path="/AgreementAdventure" element={<AgreementAdventure />} />
        <Route path="/AgreementMembership" element={<AgreementMembership />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/HelpId" element={<HelpId />} />
        <Route path="/HelpIdConfirm" element={<HelpIdConfirm />} />
        <Route path="/HelpPwd" element={<HelpPwd />} />
        <Route path="/HelpPwdChange" element={<HelpPwdChange />} />
        <Route path="/HelpPwdConfirm" element={<HelpPwdConfirm />} />
        <Route path="/Signin" element={<Signin />} />
        <Route path="/SigninConfirm" element={<SigninConfirm />} />
      </Routes>
    </>
  );
});

export default App;
