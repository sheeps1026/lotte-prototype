import React, { memo, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Spinner from "../../components/Spinner";
import PaymentChk1 from "../../components/alert/PaymentChk1";
import PaymentChk2 from "../../components/alert/PaymentChk2";
import PaymentChk3 from "../../components/alert/PaymentChk3";
import PaymentChk4 from "../../components/alert/PaymentChk4";

import arrow from "../../assets/images/pages/product/bg_accordion_arrow.png";
import bg from "../../assets/images/pages/product/bg_pc_visual_busan.png";
import shadow from "../../assets/images/pages/product/bg_con_shadow.png";

import { useDispatch, useSelector } from "react-redux";
import { getPayment } from "../../slice/PaymentSlice";
const TicketingStyled = styled.div`
  width: 100%;
  min-height: calc(100% + 50px);
  padding: 50px 0;
  background: #fff9e4 url(${bg}) no-repeat left top;

  .containerWrap {
    margin: 0 auto;
    position: relative;
    width: 900px;
    // min-height: 100%;
    // margin-top: -62px;
    margin-bottom: -191px;

    .container {
      position: relative;
      padding: 0 0 271px;
      width: 100%;

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
    transition: all 0.4s ease;
    max-height: 61px;
    overflow: hidden;

    &.open {
      max-height: 500px;
      padding-bottom: 50px;
    }

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

        &.agree {
          display: flex;
          justify-content: space-between;
          width: 100%;

          h3 {
            color: rgb(34, 34, 34);
            font-size: 20px;
            font-weight: 500;
          }

          div {
            display: flex;
            align-items: center;

            input {
              width: 20px;
              height: 20px;
              margin-right: 10px;
            }

            label {
              color: rgb(80, 80, 80);
              font-size: 15px;
              font-weight: 200;
              line-height: 22px;
            }
          }
        }
      }
    }

    .acco_contents {
      &.buy {
        padding: 25px 60px;
        padding-bottom: 0;

        div {
          display: flex;
          margin-bottom: 10px;

          p {
            width: 229px;
            color: rgb(51, 51, 51);
            font-size: 16px;

            &:last-child {
              color: rgb(80, 80, 80);
              font-size: 14px;
            }
          }
        }
      }

      &.kakao {
        padding: 25px 60px;
        padding-bottom: 0;

        button {
          width: 150px;
          height: 48px;
          font-size: 16px;
        }
      }

      &.info {
        padding: 25px 60px;
        padding-bottom: 0;

        .info-top {
          display: flex;
          align-items: center;
          margin-bottom: 10px;

          input {
            width: 20px;
            height: 20px;
            margin-right: 10px;
            margin-left: 0;
          }
        }

        .info-mid {
          .info-input {
            display: flex;
            flex-direction: column;
            margin-bottom: 15px;
            input[type="number"]::-webkit-inner-spin-button,
            input[type="number"]::-webkit-outer-spin-button {
              -webkit-appearance: none;
              -moz-appearance: none;
              appearance: none;
            }
            &:last-child {
              margin-bottom: 0;
            }

            label {
              margin-bottom: 7px;
            }

            input {
              -webkit-appearance: none;
              -moz-appearance: none;
              appearance: none;
              width: 28%;
              border: 1px solid rgb(207, 207, 207);
              color: #222;
              font-size: 14px;
              line-height: 37px;
              padding-left: 20px;
              &::placeholder {
                color: rgb(204, 204, 204);
              }
            }

            div {
              span {
                margin: 0 10px;
                color: rgb(119, 119, 119);
                font-size: 14px;
              }

              select {
                width: 28%;
                height: 41px;
                margin-left: 20px;
                padding-left: 5px;
                border: 1px solid rgb(207, 207, 207);
              }
            }

            &.phone {
              div {
                select {
                  margin-left: 0;
                  margin-right: 20px;
                }

                input {
                  &:first-child {
                    margin-right: 20px;
                  }
                }
              }
            }
          }
        }
      }
    }
  }

  .terms-agree {
    padding: 25px 0;
    background-color: #fff;

    header {
      display: flex;
      justify-content: space-between;
      padding: 0 60px;

      h3 {
        color: rgb(34, 34, 34);
        font-size: 20px;
        font-weight: 500;
      }

      > div {
        display: flex;
        align-items: center;

        input {
          width: 20px;
          height: 20px;
          margin-right: 10px;
        }

        p {
          color: rgb(80, 80, 80);
          font-size: 15px;
          font-weight: 200;
          line-height: 22px;
        }
      }
    }

    hr {
      margin-top: 20px;
      opacity: 0.3;
    }

    .agree-mid {
      padding: 20px 60px;

      .mid-item {
        display: flex;
        justify-content: space-between;
        margin-top: 13px;

        &:first-child {
          margin-top: 0;
        }

        div.agree-btn {
          display: flex;
          justify-content: space-between;

          input {
            width: 20px;
            height: 20px;
            margin-right: 10px;
          }

          label {
            color: rgb(80, 80, 80);
            font-size: 15px;
            font-weight: 200;
            line-height: 22px;
          }
        }
      }

      p {
        margin-top: 15px;
        color: rgb(80, 80, 80);
        font-size: 14px;

        &::before {
          content: "·";
          width: 2px;
          height: 2px;
          margin-left: 5px;
          margin-right: 9px;
          color: rgb(80, 80, 80);
        }
      }
    }

    .agree-bottom {
      text-align: center;
      margin-bottom: 60px;

      button {
        width: 390px;
        height: 48px;
        background-color: #2b72c9;
        color: #fff;
        font-size: 16px;
      }
    }
  }

  .detail {
    padding-top: 25px;
    background-color: #fff;

    ul {
      padding: 0 140px;
      padding-bottom: 25px;

      li {
        display: flex;
        justify-content: space-between;
        font-size: 16px;

        &:first-child {
          color: rgb(255, 91, 98);
          font-weight: 600;
        }

        &:last-child {
          color: rgb(80, 80, 80);
        }
      }

      hr {
        margin: 10px 0;
        opacity: 0.5;
      }
    }

    p {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 18px 140px;
      background-color: #61656a;
      color: #fff;
      font-size: 14px;

      span {
        color: rgb(255, 91, 98);
        font-size: 23px;
        font-weight: 700;
      }
    }
  }
`;

const Payment = memo(() => {
  // 약관 동의 모달창들
  let [paymentChk1, setPaymentChk1] = useState(false);
  let [paymentChk2, setPaymentChk2] = useState(false);
  let [paymentChk3, setPaymentChk3] = useState(false);
  let [paymentChk4, setPaymentChk4] = useState(false);

  // 전체 동의
  const [allCheck, setAllCheck] = useState(false);
  const [check1, setCheck1] = useState(false);
  const [check2, setCheck2] = useState(false);
  const [check3, setCheck3] = useState(false);
  const [check4, setCheck4] = useState(false);

  const dispatch = useDispatch();

  const { data, loading, error } = useSelector((state) => state.PaymentSlice);
  // const {userData} = data;
  // console.log(data[0].name);

  React.useEffect(() => {
    dispatch(getPayment({ id: "1" }));
  }, [dispatch]);

  // 결제 구현
  function onClickPayment(e) {
    e.preventDefault();

    /* 1. 가맹점 식별하기 */
    const { IMP } = window;
    IMP.init("imp70078593");

    /* 2. 결제 데이터 정의하기 */
    const paymentData = {
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
    IMP.request_pay(paymentData, callback);
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

  const [openSelect, setOpenSelect] = useState([]);
  const toggle = useCallback((e) => {
    const item = e.currentTarget.id;

    !openSelect.includes(item)
      ? setOpenSelect((openSelect) => [...openSelect, item])
      : setOpenSelect(openSelect.filter((e) => e !== item));
  });

  const notToggle = (e) => {
    e.stopPropagation();
  };

  // const [userName, setUserName] = useState("");
  // const [userMail, setUserMail] = useState("");
  // const [userNum, setUserNum] = useState("");

  const AllcheckedBtn = React.useRef();
  const userNameRef = React.useRef();
  const userMailRef = React.useRef();
  const userNumRef = React.useRef();

  const Allchecked = (e) => {
    console.log(AllcheckedBtn.current.checked);

    const  AllcheckedClick = AllcheckedBtn.current.checked; 

    if (AllcheckedClick) {
      userNameRef.current.value = data[0].name;
      userMailRef.current.value = data[0].mail;
      userNumRef.current.value = data[0].tel;
    }else{
      userNameRef.current.value = "";
      userMailRef.current.value = "";
      userNumRef.current.value = "";
    }
  };
  return (
    <>
      <Spinner loading={loading} />
      {data && (
        <TicketingStyled>
          <Spinner loading={loading} />

          {paymentChk1 && <PaymentChk1 setPaymentChk1={setPaymentChk1} />}
          {paymentChk2 && <PaymentChk2 setPaymentChk2={setPaymentChk2} />}
          {paymentChk3 && <PaymentChk3 setPaymentChk3={setPaymentChk3} />}
          {paymentChk4 && <PaymentChk4 setPaymentChk4={setPaymentChk4} />}

          <div className="containerWrap">
            <div className="container">
              <div className="titleWrap">
                <div>
                  <h1>이용권 결제</h1>
                </div>
              </div>
              <div className="reserveWrap">
                <TitleArea>
                  <form onSubmit={onClickPayment}>
                    {/* 구매자 정보 */}
                    <ul
                      id={0}
                      className={
                        openSelect.includes("0")
                          ? "accordion"
                          : "accordion open"
                      }
                      onClick={toggle}
                    >
                      <li>
                        <div className="acco_title">
                          <div className="tit">구매자 정보</div>
                        </div>
                        <div className="acco_contents buy" onClick={notToggle}>
                          <div>
                            <p>이름</p>
                            <p>{data[0].name}</p>
                          </div>
                          <div>
                            <p>이메일</p>
                            <p>{data[0].email}</p>
                          </div>
                          <div>
                            <p>휴대폰</p>
                            <p>{data[0].tel}</p>
                          </div>
                        </div>
                      </li>
                    </ul>
                    <hr className="division" />
                    {/* 방문자 정보 */}
                    <ul
                      id={1}
                      className={
                        openSelect.includes("1")
                          ? "accordion"
                          : "accordion open"
                      }
                      onClick={toggle}
                    >
                      <li>
                        <div className="acco_title">
                          <div className="tit">방문자 정보</div>
                        </div>
                        <div className="acco_contents info" onClick={notToggle}>
                          <div className="info-top">
                            <input type="checkbox" onChange={Allchecked} ref={AllcheckedBtn}/>
                            <label htmlFor="">구매자 정보와 동일</label>
                          </div>

                          <div className="info-mid">
                            <div className="info-input">
                              <label htmlFor="">
                                이름 <span>*</span>
                              </label>
                              <input
                                type="text"
                                placeholder="홍길동"
                                ref={userNameRef}
                              />
                            </div>
                            <div className="info-input">
                              <label htmlFor="">
                                이메일 <span>*</span>
                              </label>
                              <div>
                                <input
                                  // value={userMail}
                                  type="email"
                                  placeholder="userEmail@naver.com"
                                  ref={userMailRef}
                                />
                              </div>
                            </div>
                            <div className="info-input phone">
                              <label htmlFor="">
                                휴대폰 <span>*</span>
                              </label>
                              <div>
                                <input
                                  type="number"
                                  placeholder="01012341234"
                                  ref={userNumRef}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                    <hr className="division" />
                    {/* 결제 수단 */}
                    <ul
                      id={3}
                      className={
                        openSelect.includes("3")
                          ? "accordion"
                          : "accordion open"
                      }
                      onClick={toggle}
                    >
                      <li>
                        <div className="acco_title">
                          <div className="tit">결제 수단</div>
                        </div>
                        <div
                          className="acco_contents kakao"
                          onClick={notToggle}
                        >
                          <button>카카오페이</button>
                        </div>
                      </li>
                    </ul>
                    <hr className="division" />
                    {/* 결제 예정 금액 */}
                    <div className="detail">
                      <ul>
                        <li>카카오페이 - 선택한 날짜</li>
                        <hr />
                        <li>
                          어른 x 1 <span>16,500원</span>
                        </li>
                      </ul>
                      <p>
                        결제예정금액 <span>16,500원</span>
                      </p>
                    </div>
                    <hr className="division" />
                    {/* 약관 동의 */}
                    <div className="terms-agree">
                      <header>
                        <h3>약관 동의</h3>
                        <div>
                          <input type="checkbox" />
                          <label htmlFor="">전체동의</label>
                        </div>
                      </header>
                      <hr />
                      <div className="agree-mid">
                        <div className="mid-item">
                          <div className="agree-btn">
                            <input type="checkbox" />
                            <label htmlFor="">
                              전자상거래 이용약관<span>필수</span>
                            </label>
                          </div>
                          <button
                            type="button"
                            onClick={() => {
                              setPaymentChk1(true);
                            }}
                          >
                            전문보기
                          </button>
                        </div>
                        <div className="mid-item">
                          <div className="agree-btn">
                            <input type="checkbox" />
                            <label htmlFor="">
                              개인정보 수집·이용<span>필수</span>
                            </label>
                          </div>
                          <button
                            type="button"
                            onClick={() => {
                              setPaymentChk2(true);
                            }}
                          >
                            전문보기
                          </button>
                        </div>
                        <div className="mid-item">
                          <div className="agree-btn">
                            <input type="checkbox" />
                            <label htmlFor="">
                              마케팅 정보 활용 및 관련 정보 수신 동의
                              <span>선택</span>
                            </label>
                          </div>
                          <button
                            type="button"
                            onClick={() => {
                              setPaymentChk3(true);
                            }}
                          >
                            전문보기
                          </button>
                        </div>
                        <div className="mid-item">
                          <div className="agree-btn">
                            <input type="checkbox" />
                            <label htmlFor="">
                              개인정보 제3자 제공 동의<span>선택</span>
                            </label>
                          </div>
                          <button
                            type="button"
                            onClick={() => {
                              setPaymentChk4(true);
                            }}
                          >
                            전문보기
                          </button>
                        </div>
                        <p>
                          필수 항목에 모두 동의하셔야 서비스를 이용하실 수
                          있습니다.
                        </p>
                      </div>
                      <div className="agree-bottom">
                        {/* <button type="submit" onClick={onClickPayment}>결제하기</button> */}
                        <button type="submit">결제하기</button>
                      </div>
                    </div>
                  </form>
                </TitleArea>
              </div>
            </div>
          </div>
        </TicketingStyled>
      )}
    </>
  );
});

export default Payment;
