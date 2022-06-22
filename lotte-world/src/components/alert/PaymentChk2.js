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

const PaymentChk2 = memo(({ setOpenPayment }) => {
  return (
    <Background>
      <PaymentChkContainer>
        <header>
          <h1>개인정보 수집·이용</h1>
          <button onClick={() => setOpenPayment(false)}>
            <img src={CloseBtn} alt="" />
          </button>
        </header>
        <div className="pop-mid">
          <ul>
            <li>
              1. 수집항목
              <br /> (L.POINT 통합회원)성명, 연락처, 이메일
              <br /> (비회원)성명, 연락처
            </li>
            <li>
              2. 수집·이용목적
              <br /> 롯데월드 이용권 예매를 위한 본인 확인·식별, 부정이용방지,
              고지사항 전달
            </li>
            <li>
              3. 보유·이용기간 <br /> 전자상거래 등에서의 소비자보호에 관한 법률
              시행령 제6조 의거, 5년(계약 또는 청약철회 등에 관한 기록, 대금결제
              및 재화 등의 공급에 관한 기록)
            </li>
            <li>
              ※ 귀하께서는 귀하의 개인정보 수집·이용에 대한 동의를 거부하실
              권리가 있으며, 동의를 거부하실 경우 롯데월드 이용권 예매를 하실 수
              없습니다.
            </li>
          </ul>
        </div>
        <div className="pop-bottom">
          <button onClick={() => setOpenPayment(false)}>취소</button>
          <button>확인</button>
        </div>
      </PaymentChkContainer>
    </Background>
  );
});

export default PaymentChk2;
