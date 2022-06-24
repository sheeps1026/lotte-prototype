import React, { memo, useState, useCallback } from "react";
import styled from "styled-components";

import arrow from "../../assets/images/pages/product/bg_accordion_arrow.png";
import bg from "../../assets/images/pages/product/bg_pc_visual_busan.png";
import shadow from "../../assets/images/pages/product/bg_con_shadow.png";

const TicketingStyled = styled.div`
  width: 100%;
  min-height: calc(100% + 50px);
  background-color: #fff9e4;
  padding: 50px 0;
  background: url(${bg}) no-repeat 50% 0;
  .containerWrap {
    margin: 0 auto;
    position: relative;
    width: 900px;
    min-height: 100%;
    margin-top: -62px;
    margin-bottom: -191px;
    .container {
      position: relative;
      padding: 65px 0 271px;
      width: 100%;
      height: 100%;
      .titleWrap {
        position: static;
        width: 100%;
        height: 80px;
        background: #fff;
        &::after {
          content: "";
          display: block;
          clear: both;
          position: relative;
          bottom: -29px;
          z-index: 5;
          height: 8px;
          background: url(${shadow}) repeat-x 0 0;
        }
        h1 {
          font-size: 26px;
          font-weight: 500;
          padding-top: 25px;
          text-align: center;
        }
      }
      .reserveWrap {
        background: #fff;
        .reserve {
          box-sizing: border-box;
          width: 100%;
          height: 100%;
        }
      }
    }
  }
  /* hr 구분선 */
  .division {
    display: block;
    height: 10px;
    margin: 0;
    border-width: 1px 0 0 0;
    border-top: 1px solid #aaa;
    background-color: #ccc;
  }
`;
// 제목 섹션 스타일
const TitleArea = styled.div`
  .accordion {
    &.open {
      max-height: 500px;
      padding-bottom: 50px;
    }
    transition: all 0.4s ease;
    max-height: 61px;
    overflow: hidden;
    .acco_title {
      padding: 20px 60px;
      border-bottom: 1px solid #e4e4e4;
      background: url(${arrow}) no-repeat 94% 50%;
      background-size: 12px 7px;
      background-color: #fafafa;
      &:after {
        content: "";
        display: block;
        clear: both;
      }
      .tit {
        font-size: 20px;
        color: #222;
        font-weight: 500;
        float: left;
      }
    }
    .normal_title {
      padding: 20px 60px;
      border-bottom: 1px solid #e4e4e4;
      background-color: #fafafa;
      &:after {
        content: "";
        display: block;
        clear: both;
      }
      .tit {
        font-size: 20px;
        color: #222;
        font-weight: 500;
        float: left;
      }
    }
    .acco_contents {
      background: #fff;
      font-size: 14px;
      font-weight: 500;
      line-height: 1.2;
      span {
        color: #ff0000;
      }
    }
  }
  .btnArea {
  }
`;

const Payment = memo(() => {
  function onClickPayment(e) {
    e.preventDefault();

    /* 1. 가맹점 식별하기 */
    const { IMP } = window;
    IMP.init("imp70078593");

    /* 2. 결제 데이터 정의하기 */
    const data = {
      pg: "html5_inicis", // PG사
      pay_method: "card", // 결제수단
      merchant_uid: `mid_${new Date().getTime()}`, // 주문번호
      amount: 14000, // 결제금액
      name: "아임포트 결제 데이터 분석", // 주문명
      buyer_name: "홍길동", // 구매자 이름
      buyer_tel: "01012341234", // 구매자 전화번호
      buyer_email: "example@example", // 구매자 이메일
      buyer_addr: "신사동 661-16", // 구매자 주소
      buyer_postcode: "06018", // 구매자 우편번호
    };

    /* 4. 결제 창 호출하기 */
    IMP.request_pay(data, callback);
  }

  /* 3. 콜백 함수 정의하기 */
  function callback(response) {
    const { success, merchant_uid, error_msg } = response;

    if (success) {
      alert("결제 성공");
    } else {
      alert(`결제 실패: ${error_msg}`);
    }
  }

  const [select, setSelect] = useState([]);
  const toggle = useCallback((e) => {
    const item = e.currentTarget.id;
    !select.includes(item)
      ? setSelect((select) => [...select, item])
      : setSelect(select.filter((e) => e !== item));
    console.log(select);

    // setToggleOn(!toggleOn);
  });
  return (
    <TicketingStyled>
      <div className="containerWrap">
        <div className="container">
          <div className="titleWrap">
            <div className="title">
              <h1>이용권 결제</h1>
            </div>
          </div>
          <div className="reserveWrap">
            <TitleArea>
              <ul
                id={0}
                className={
                  select.includes("0") ? "accordion" : "accordion open"
                }
                onClick={toggle}
              >
                <li>
                  <div className="acco_title">
                    <div className="tit">구매자 정보</div>
                  </div>
                  <div className="acco_contents"></div>
                </li>
              </ul>
              <hr className="division" />
              <ul
                id={1}
                className={
                  select.includes("1") ? "accordion" : "accordion open"
                }
                onClick={toggle}
              >
                <li>
                  <div className="acco_title">
                    <div className="tit">방문자 정보</div>
                  </div>
                  <div className="acco_contents"></div>
                </li>
              </ul>
              <hr className="division" />
              <ul
                id={2}
                className={
                  select.includes("2") ? "accordion" : "accordion open"
                }
                onClick={toggle}>
                <li>
                  <div className="acco_title">
                    <div className="tit">추가 할인</div>
                  </div>
                  <div className="acco_contents"></div>
                </li>
              </ul>
              <hr className="division" />
              <ul
                id={3}
                className={
                  select.includes("3") ? "accordion" : "accordion open"
                }
                onClick={toggle}>
                <li>
                  <div className="acco_title">
                    <div className="tit">결제 수단</div>
                  </div>
                  <div className="acco_contents"></div>
                </li>
              </ul>
              <hr className="division" />
              <ul>
                <li>
                  {/* 이 부분은 결제 예정 금액 */}
                  {/* <div className="acco_title">
                    <div className="tit">결제 수단</div>
                  </div>
                  <div className="acco_contents"></div> */}
                </li>
              </ul>

              <hr className="division" />
              <ul className="accordion">
                <li>
                  <div className="normal_title">
                    <div className="tit">약관 동의</div>
                  </div>
                  <div className="acco_contents"></div>
                </li>
              </ul>
              <div className="btnArea">
                <button onClick={onClickPayment}>결제하기</button>
              </div>
            </TitleArea>
          </div>
        </div>
      </div>
    </TicketingStyled>
  );
});

export default Payment;
