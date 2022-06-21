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
      </Routes>
      <Footer/>
    </div>
  );
});

export default App;
