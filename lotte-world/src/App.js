import React, { memo, useState } from "react";
import { Routes, Route, useParams, useLocation } from "react-router-dom";
import reset from "styled-reset";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

import ProductHeader from "./ProductHeader";
import EnjoyList from "./pages/enjoy/EnjoyList";
import EnjoyView from "./pages/enjoy/EnjoyView";
import Headers from "./Header";
import Footer from "./Footer";

import Main from "./pages/Main";
import SideTab from "./components/SideTab";

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

import TicketingMain from "./pages/product/TicketingMain";
import Ticketing from "./pages/product/Ticketing";

import PaymentResult from "./pages/myPages/PaymentResult";
import InfoChange from "./pages/myPages/InfoChange";

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
  // 박스 사이즈
  div {
    box-sizing: border-box;
  }
`;

const App = memo(() => {
  const location = useLocation();
  console.log(location.pathname.substring(0, 14));
  const path = location.pathname.substring(0, 14);

  // 이메일 모달
  let [openEmail, setOpenEmail] = useState(false);

  // PaymentChk 모달 (나중에 props로 전달해서 연결)
  // let [openPayment, setOpenPayment] = useState(false);

  return (
    <div>
      {path === "/TicketingPage" ? <ProductHeader /> : <Headers />}
      <GlobalStyle />
      {path === "/" ? (
        <Main />
      ) : (
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
          <Route path="/TicketingPage/InfoChange" element={<InfoChange />} />
          <Route path="/TicketingPage/paymentList" element={<PaymentList />} />
          <Route path="/TicketingPage/paymentView" element={<PaymentView />} />
          <Route
            path="/TicketingPage/paymentResult"
            element={<PaymentResult />}
          />

          {/*푸터 연결  */}
          <Route path="/Sitemap" element={<Sitemap />} />
          <Route path="/Introduce" element={<Introduce />} />
          <Route path="/AgreementHome" element={<AgreementHome />} />
          <Route path="/AgreementAdventure" element={<AgreementAdventure />} />
          <Route
            path="/AgreementMembership"
            element={<AgreementMembership />}
          />
          <Route path="/Email" element={<Email />} />
          {/* <Route path="/Login" element={<Login />} /> */}
          {/* <Route path="/HelpId" element={<HelpId />} /> */}
          {/* <Route path="/HelpIdConfirm" element={<HelpIdConfirm />} /> */}
          {/* <Route path="/HelpPwd" element={<HelpPwd />} /> */}
          {/* <Route path="/HelpPwdChange" element={<HelpPwdChange />} /> */}
          {/* <Route path="/HelpPwdConfirm" element={<HelpPwdConfirm />} /> */}
          {/* <Route path="/Signin" element={<Signin />} /> */}
          <Route path="/SigninConfirm" element={<SigninConfirm />} />
          <Route path="/PaymentChk1" element={<PaymentChk1 />} />
          <Route path="/PaymentChk2" element={<PaymentChk2 />} />
          <Route path="/PaymentChk3" element={<PaymentChk3 />} />
          <Route path="/PaymentChk4" element={<PaymentChk4 />} />
          {/* 예매 페이지 */}

          <Route path="/TicketingPage" element={<TicketingMain />} />
          <Route path="/TicketingPage/Ticketing" element={<Ticketing />} />
          {/* 결제완료 후 페이지 */}
          <Route
            path="/TicketingPage/PaymentResult"
            element={<PaymentResult />}
          />
          <Route path="/TicketingPage/Login" element={<Login />} />
          <Route path="/TicketingPage/HelpId" element={<HelpId />} />
          <Route
            path="/TicketingPage/HelpIdConfirm"
            element={<HelpIdConfirm />}
          />
          <Route path="/TicketingPage/HelpPwd" element={<HelpPwd />} />
          <Route
            path="/TicketingPage/HelpPwdConfirm"
            element={<HelpPwdConfirm />}
          />
          <Route
            path="/TicketingPage/HelpPwdChange"
            element={<HelpPwdChange />}
          />
          <Route path="/TicketingPage/Signin" element={<Signin />} />
          <Route
            path="/TicketingPage/SigninConfirm"
            element={<SigninConfirm />}
          />
        </Routes>
      )}
      <Footer />
    </div>
  );
});

export default App;
