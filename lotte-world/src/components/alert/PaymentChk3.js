import React, { memo } from "react";
import styled from "styled-components";

import CloseBtn from "../../assets/images/components/Email/close.png";

const Background = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 50;
`;

const PaymentChkContainer = styled.div`
  width: 504px;
  height: 516px;
  background-color: #fff;
  border: 1px solid #000;
  border-radius: 15px;

  header {
    position: relative;
    display: flex;
    justify-content: center;
    margin: 0 auto;
    padding: 20px 0;

    h1 {
      padding: 0 30px;
      color: #222;
      font-size: 22px;
      font-weight: 700;
    }

    button {
      position: absolute;
      top: 20px;
      right: 10px;
      border: none;
      background: none;
      cursor: pointer;

      img {
        width: 20px;
        height: 20px;
        opacity: 0.5;
      }
    }
  }

  .pop-mid {
    height: 320px;
    padding: 15px 40px;
    border-top: 1px solid rgba(0, 0, 0, 0.2);
    overflow-y: scroll;

    ul {
      line-height: 1.5;

      li {
        margin-top: 20px;
        font-size: 15px;
      }
    }
  }

  .pop-bottom {
    display: flex;
    justify-content: space-between;
    margin: 18px 25px;

    button {
      width: 222px;
      border: 1px solid #2b72c9;
      border-radius: 3px;
      background-color: #fff;
      color: #2b72c9;
      font-size: 16px;
      line-height: 60px;
      cursor: pointer;

      &:nth-child(2) {
        background-color: #2b72c9;
        color: #fff;
      }
    }
  }
`;

const PaymentChk3 = memo(({ setPaymentChk3 }) => {
  return (
    <Background>
      <PaymentChkContainer>
        <header>
          <h1>마케팅 정보 활용 및 관련 정보 수신 동의</h1>
          <button onClick={() => setPaymentChk3(false)}>
            <img src={CloseBtn} alt="" />
          </button>
        </header>
        <div className="pop-mid">
          <ul>
            <li>
              1.개인정보 수집 목적: 이벤트 및 할인 정보 안내, 쿠폰 발송, 마케팅
              정보 분석
            </li>
            <li>
              2.수집 항목: (회원) 성명, 연락처, E-mail, 주소, 성별, 생년월일,
              엘포인트회원번호, 내외국인정보, E-mail수신여부, SMS수신여부 <br />
              <span>(비회원) 성명, 연락처</span>
            </li>
            <li>
              3.보유 및 이용기간:
              <br /> <span>(회원) 수집일로부터 회원탈퇴 시 까지</span>
              <br /> <span>(비회원) 수집일로부터 2년</span>
            </li>
            <p>
              ※마케팅 정보 수신 동의 시, 이벤트 및 할인 정보 안내, 쿠폰 발송 등
              프로모션 혜택을 받으실 수 있습니다.
            </p>
            <p>
              ※귀하는 개인정보 수집ㆍ이용에 동의하지 않을 권리가 있습니다 .다만,
              거부하실 경우 정보활용동의 손님 대상 이벤트 및 우대혜택 제공이
              불가능합니다.
            </p>
          </ul>
        </div>
        <div className="pop-bottom">
          <button onClick={() => setPaymentChk3(false)}>취소</button>
          <button>확인</button>
        </div>
      </PaymentChkContainer>
    </Background>
  );
});

export default PaymentChk3;
