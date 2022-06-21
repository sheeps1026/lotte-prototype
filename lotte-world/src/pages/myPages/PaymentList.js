import React, { memo, useState } from "react";
import DatePicker from "react-datepicker";
import { ko } from "date-fns/esm/locale";
import "react-datepicker/dist/react-datepicker.css";
import { Link } from "react-router-dom";
import styled from "styled-components";
import bg from "../../assets/images/bg_pc_visual.png";
import dayjs from "dayjs";
import arrowRight from "../../assets/images/arrow-right.png";
import NoResultFound from "../../components/NoResultsFound";

const MypageContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background: url(${bg});
  padding:20px 0 50px;
  .pageContainer {
    width: 900px;
    background: #fff;
    margin: 0 auto;
    h3 {
      text-align: center;
      font-weight: bold;
      font-size: 28px;
      box-shadow: 0 5px 5px rgba(0, 0, 0, 0.1);
      z-index: 1;
      padding: 20px 0;
    }
    .mypageNotice {
      background: rgba(0, 0, 0, 0.05);
      padding: 20px 0;
      color: #777;
      text-align: center;
      font-size: 13px;

      span {
        color: red;
      }
    }
    .datePickerCon {
      background: #ddd;
      display: flex;
      justify-content: center;
      padding: 10px 0;
      align-items: center;
      .react-datepicker-wrapper {
        width: 30%;

        input {
          text-align: center;
          padding: 10px 0;
          width: 100%;
          line-height: 1.2;
          font-size: 15px;
          border: none;
          border-top: 1px solid #ccc;
          border-bottom: 1px solid #ccc;
        }
      }
      > button[type="button"] {
        box-sizing: border-box;
        background: #fff;
        width: 30%;
        border: 1px solid #ccc;
        font-size: 15px;
        padding: 10px 0;
      }
    }
  }
`;
const PaymentListWrap = styled.div`
  h2 {
    margin: 20px 50px 0;
    border-bottom: 1px solid #ccc;
    line-height: 1.5;
    span {
      color: red;
    }
  }
  .topWrap {
    margin: 10px 50px 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .paymentUl {
    background: #f1f1f1;
    padding: 15px 30px;
    margin: 0 50px 0;
    h5 {
      font-size: 20px;
      border-bottom: 1px solid #ccc;
      line-height: 2;
    }
    ul {
      li {
        display: inline-block;
        width: 50%;
        padding: 5px 0;
        line-height: 1.5;
        font-size: 14px;
        span {
          color: red;
          display: inline-block;
          text-indent: 20px;
        }
      }
    }
  }
  .NumberList {
    margin: 0 50px;
    .badgeWrap {
      border-top: 1px solid #ccc;
      display: flex;
      align-items: start;
      justify-content: space-between;
      padding: 20px;
      gap: 20px;

      > span {
        border-width: 1px;
        border-style: solid;
        border-color: ${({ ticket }) => (ticket === "Yes" ? "red" : "blue")};
        &:before {
          content: "${({ ticket }) => (ticket === "Yes" ? "예약완료" : "취소완료")}";
          color: ${({ ticket }) => (ticket === "Yes" ? "red" : "blue")};
        }

        display: inline-block;
        color: red;
        border-radius: 20px;
        font-size: 13px;
        padding: 3px 8px;
      }
      > a {
        background: url(${arrowRight}) no-repeat 10px 10px / 10px 10px;
        padding: 20px;
      }
      .numberList {
        flex: 1;
        p:first-child {
          font-size: 14px;
          span {
            color: red;
          }
        }
        p:last-child {
          &:before {
            content: "${({ adult }) => (adult === "1" ? "어른" : "어린이")}";
          }
        }
        p {
          line-height: 1.5;
        }
      }
      .price {
        font-weight: bold;
        font-size: 14px;
        padding: 20px 0 0 0;
      }
    }
  }
`;

const PaymentList = memo(() => {
  const [startDate, setStartDate] = useState(new Date());
  const datePicker1 = React.useRef();
  const prevBtn = React.useCallback(() => {
    // const date = datePicker1.current.props.selected;
    // setStartDate(startDate+1)
    // new Date(
    //   new Date().getFullYear(),
    //   new Date().getMonth() - 1,
    //   new Date().getDate()
    // );
    console.log(
      //   new Date(
      //     new Date().getFullYear(),
      //     new Date().getMonth() - 1,
      //     new Date().getDate()
      //   )
      startDate.toISOString().substring(0, 7).replaceAll("-", ".")
      // startDate.getFullYear(),startDate.getMonth()-1,
    );
    // console.log("시간"+new Date());
    //console.log("스테이트"+startDate);
  });
  //   const nextBtn = React.useCallback(() => {});

  const OrderListJson = [
    {
      orderNum: 12345512,
      orderDate: "2022.05.30(월)",
      visitDate: "2022.06.04(월)",
      price: "55,800",
    },
  ];
  const OrderNumList = [
    {
      ticket: "Yes",
      paymentNum: "1234-12234-1223",
      adult: "1",
      paymentPrice: "29,700",
    },
    {
      ticket: "No",
      paymentNum: "0000-99999-1223",
      adult: "0",
      paymentPrice: "26,100",
    },
  ];
  return (
    <MypageContainer>
      <div className="pageContainer">
        <h3>마이페이지</h3>
        <p className="mypageNotice">
          예매하신 티켓은 방문 일자에 사용하실 수 있으며{" "}
          <span>사용후에는 예매취소가 불가</span> 하니 유의하시기 바랍니다.
        </p>
        <div className="datePickerCon">
          <button onClick={prevBtn} type="button">
            이전달
          </button>
          <DatePicker
            ref={datePicker1}
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            locale={ko} // 한글로 변경
            dateFormat="yyyy.MM"
            showMonthYearPicker
            showFullMonthYearPicker
          />
          <button type="button">다음달</button>
        </div>

        {!OrderNumList ? (
          <PaymentListWrap>
            <h2>
              총 <span>1</span>건
            </h2>
            <div className="topWrap">
              <div>22-05-24</div>
              <button>결제취소</button>
            </div>
            <div className="paymentUl">
              <h5>오후권 (AFTER4) 온라인 할인</h5>
              <ul>
                <li>
                  주문번호 <span>12345</span>
                </li>
                <li>
                  예매일자 <span>22.05.30(월)</span>
                </li>
                <li>
                  방문일자 <span>22.06.04(토)</span>
                </li>
                <li>
                  결제내역 <span>55,800원 (2매)</span>
                </li>
              </ul>
            </div>
            <div className="NumberList">
              {OrderNumList.map((v, i) => {
                return (
                  <div className="badgeWrap" key={i}>
                    <span ticket={v.ticket}></span>
                    <div className="numberList">
                      <p>
                        예매번호 :<span>{v.paymentNum}</span>
                      </p>
                      <p adult={v.adult}></p>
                    </div>

                    <div className="price">{v.paymentPrice}원</div>
                    <Link to="/mypages/paymentView"></Link>
                  </div>
                );
              })}
            </div>
          </PaymentListWrap>
        ) : (
          <NoResultFound/>
        )}
      </div>
    </MypageContainer>
  );
});

export default PaymentList;
