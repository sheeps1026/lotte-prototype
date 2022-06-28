import React, { memo } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

import NoticeList from "../customer/NoticeList";
import NoticeView from "../customer/NoticeView";
import FAQ from "../customer/FAQ";
import Inquiry from "../customer/Inquiry";
import InquiryWrite from "../customer/InquiryWrite";
import LostList from "../customer/LostList";
import PaymentList from "../myPages/PaymentList";
import PaymentView from "../myPages/PaymentView";
import EnjoyList from "../enjoy/EnjoyList";

const Customer = memo(() => {
  return (
    <div>
      <Header />

      <Routes>
        <Route path="/enjoyList" exact={true} element={<EnjoyList />} />
        <Route path="/customer/*" exact={true} element={<NoticeList />} />
        <Route path="/customer/notice-list/:id" element={<NoticeView />} />
        <Route path="/customer/FAQ/*" element={<FAQ />} />
        <Route path="/customer/inquiry/" element={<Inquiry />} />
        <Route path="/customer/InquiryWrite" element={<InquiryWrite />} />
        <Route path="/customer/LostList" element={<LostList />} />

        {/* 마이페이지 */}
        <Route path="/myPage" element={<PaymentList />} />
        <Route path="/mypages/paymentView" element={<PaymentView />} />
      </Routes>
      <Footer />
    </div>
  );
});

export default Customer;
