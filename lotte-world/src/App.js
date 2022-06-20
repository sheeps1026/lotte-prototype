import React, { memo } from "react";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

import { Routes, Route, Link } from "react-router-dom";

import Sitemap from "./pages/business/Sitemap";
import Introduce from "./pages/business/Introduce";
import AgreementHome from "./pages/business/AgreementHome";
import AgreementAdventure from "./pages/business/AgreementAdventure";
import AgreementMembership from "./pages/business/AgreementMembership";
import Email from "./components/Email";
import HelpId from "./pages/user/HelpId";
import HelpIdConfirm from "./pages/user/HelpIdConfirm";
import HelpPwd from "./pages/user/HelpPwd";
import HelpPwdChange from "./pages/user/HelpPwdChange";
import HelpPwdConfirm from "./pages/user/HelpPwdConfirm";
import Login from "./pages/user/Login";
import Signin from "./pages/user/Signin";
import SigninConfirm from "./pages/user/SigninConfirm";
import PaymentChk1 from "./components/alert/PaymentChk1";
import PaymentChk2 from "./components/alert/PaymentChk2";
import PaymentChk3 from "./components/alert/PaymentChk3";
import PaymentChk4 from "./components/alert/PaymentChk4";

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
      <Link to="/Sitemap">Sitemap</Link>&nbsp;&nbsp;
      <Link to="/Introduce">Introduce</Link>&nbsp;&nbsp;
      <Link to="/AgreementHome">AgreementHome</Link>&nbsp;&nbsp;
      <Link to="/AgreementAdventure">AgreementAdventure</Link>&nbsp;&nbsp;
      <Link to="/AgreementMembership">AgreementMembership</Link>&nbsp;&nbsp;
      <Link to="/Login">Login</Link>&nbsp;&nbsp;
      <Link to="/Email">Email</Link>&nbsp;&nbsp;
      <Link to="/HelpId">HelpId</Link>&nbsp;&nbsp;
      <Link to="/HelpIdConfirm">HelpIdConfirm</Link>&nbsp;&nbsp;
      <Link to="/HelpPwd">HelpPwd</Link>&nbsp;&nbsp;
      <Link to="/HelpPwdChange">HelpPwdChange</Link>&nbsp;&nbsp;
      <Link to="/HelpPwdConfirm">HelpPwdConfirm</Link>&nbsp;&nbsp;
      <Link to="/Signin">Signin</Link>&nbsp;&nbsp;
      <Link to="/SigninConfirm">SigninConfirm</Link>&nbsp;&nbsp;
      <Link to="/PaymentChk1">PaymentChk1</Link>&nbsp;&nbsp;
      <Link to="/PaymentChk2">PaymentChk2</Link>&nbsp;&nbsp;
      <Link to="/PaymentChk3">PaymentChk3</Link>&nbsp;&nbsp;
      <Link to="/PaymentChk4">PaymentChk4</Link>
      <Routes>
        <Route path="/Sitemap" element={<Sitemap />} />
        <Route path="/Introduce" element={<Introduce />} />
        <Route path="/AgreementHome" element={<AgreementHome />} />
        <Route path="/AgreementAdventure" element={<AgreementAdventure />} />
        <Route path="/AgreementMembership" element={<AgreementMembership />} />
        <Route path="/Email" element={<Email />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/HelpId" element={<HelpId />} />
        <Route path="/HelpIdConfirm" element={<HelpIdConfirm />} />
        <Route path="/HelpPwd" element={<HelpPwd />} />
        <Route path="/HelpPwdChange" element={<HelpPwdChange />} />
        <Route path="/HelpPwdConfirm" element={<HelpPwdConfirm />} />
        <Route path="/Signin" element={<Signin />} />
        <Route path="/SigninConfirm" element={<SigninConfirm />} />
        <Route path="/PaymentChk1" element={<PaymentChk1 />} />
        <Route path="/PaymentChk2" element={<PaymentChk2 />} />
        <Route path="/PaymentChk3" element={<PaymentChk3 />} />
        <Route path="/PaymentChk4" element={<PaymentChk4 />} />
      </Routes>
    </>
  );
});

export default App;
