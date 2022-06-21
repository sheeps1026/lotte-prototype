import React, { memo } from "react";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import styled from 'styled-components';
import {Routes,Route} from "react-router-dom";

import ProductHeader from './ProductHeader';
import Ticketing from "./pages/product/Ticketing";
import EnjoyList from "./pages/enjoy/EnjoyList";
import EnjoyView from "./pages/enjoy/EnjoyView";
import Headers from "./Header";
import Footer from "./Footer";


import NoticeList from "./pages/customer/NoticeList";
import NoticeView from "./pages/customer/NoticeView";
import FAQ from "./pages/customer/FAQ";
import Inquiry from "./pages/customer/Inquiry";
import InquiryWrite from "./pages/customer/InquiryWrite";
import LostList from "./pages/customer/LostList";
import PaymentList from "./pages/myPages/PaymentList";
import PaymentView from "./pages/myPages/PaymentView";

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

import Guide from "./pages/enjoy/Guide";




// const Wrap = styled.div`
// padding-top: 120px;
// `;
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
    <div>
      {/* 티켓팅 해더 <ProductHeader/> */}
      <Headers/>
      <GlobalStyle/>
      {/* <EnjoyList/> */}
      <Routes>
        <Route path="/enjoyList" exact={true} element={<EnjoyList />} />
        <Route path="/enjoyList/*" exact={true} element={<EnjoyView />} />
        <Route path="/enjoyList/guide" exact={true} element={<Guide />} />
        <Route path="/customer/*" exact={true} element={<NoticeList />} />
        <Route path="/customer/notice-list" element={<NoticeView />} />
        <Route path="/customer/FAQ/*" element={<FAQ />} />
        <Route path="/customer/inquiry/" element={<Inquiry />} />
        <Route path="/customer/InquiryWrite" element={<InquiryWrite />} />
        <Route path="/customer/LostList" element={<LostList />} />

        {/* 마이페이지 */}
        <Route path="/myPage" element={<PaymentList />} />
        <Route path="/mypages/paymentView" element={<PaymentView />} />
        
        {/*푸터 연결  */}
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
      <Footer/>
    </div>
  );
});

export default App;
