/* eslint-disable react-hooks/exhaustive-deps */
/**
 * @filename: Ticketing.js
 * @description: 예매할 날짜, 인원 선택
 */
import React, { memo, useCallback, useState } from "react";
import { Link, useParams, useLocation, useNavigate } from "react-router-dom";
import { useQueryString } from "../../hooks/useQueryString";
import styled from "styled-components";
import DatePicker from "react-datepicker";
import { ko } from "date-fns/esm/locale";
import dayjs from "dayjs";
import "react-datepicker/dist/react-datepicker.css";
import { createBrowserHistory } from "history";

import bg from "../../assets/images/pages/product/bg_pc_visual_busan.png";
import shadow from "../../assets/images/pages/product/bg_con_shadow.png";
import btnCal from "../../assets/images/pages/product/btn_cal.png";
import minus from "../../assets/images/pages/product/btn_minus_on.png";
import plus from "../../assets/images/pages/product/btn_plus_on.png";
import thumbnail from "../../assets/images/pages/product/thumbnail.jpg";
import arrow from "../../assets/images/pages/product/bg_accordion_arrow.png";
import close from "../../assets/images/pages/product/btn_pop_close.png";
import nodata from "../../assets/images/pages/product/nodata.png";

import { useDispatch, useSelector } from "react-redux";
import { getPayment } from "../../slice/PaymentSlice";
import confirmBg from "../../assets/images/pages/product/bg_notice.png";
import icon from "../../assets/images/pages/product/bg_popicon.png";

 // redux counter
 import { plus1, minus1 } from '../../slice/adultCountSlice';
 import { plus2, minus2 } from '../../slice/youthCountSlice';
 import { plus3, minus3 } from '../../slice/childCountSlice';
 
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
`;
// 제목 섹션 스타일
const TitleArea = styled.div`
  padding: 32px 15px 15px;
  margin: 0 60px;
  &:after {
    content: "";
    display: block;
    clear: both;
  }
  .tit {
    font-size: 22px;
    color: #222;
    font-weight: 500;
    float: left;
  }
`;
// 예매창 전체 블록 스타일
const TicketForm = styled.form`
  width: 100%;
  button {
    background: none;
  }
  /* 방문일자/인원선택 블록 */
  .res_cont {
    position: relative;
    .titRight {
      float: right;
      .today {
        color: #2b72c9;
        margin-right: 20px;
        font-size: 20px;
        vertical-align: middle;
      }
      .btnCal {
        vertical-align: middle;
        width: 24px;
        height: 22px;
        background-size: 100%;
        margin-top: 4px;
        margin-left: 11px;
        display: inline-block;
        background: url(${btnCal}) no-repeat 0 0;
        background-size: 100%;
        font-size: 0;
        line-height: 0;
      }
    }

    .calWrap {
      border-top: 1px solid #ccc;
      border-bottom: 1px solid #ccc;
      width: 100%;
      position: relative;
      overflow: hidden;
      white-space: nowrap;
      .inner {
        margin: 14px 60px;
        ul {
          display: flex;
          justify-content: space-around;
          /* 선택한 날짜 배경색*/
          .current {
            background-color: #2b72c9;
            border-radius: 3px;
          }
          /* 임시 */
          li {
            .active {
              background-color: #2b72c9;
              border-radius: 3px;
              &:before {
                color: #fff;
              }
              &:after {
                color: #fff;
              }
            }
          }
          .btnDate {
            padding: 9px 15px;
            color: #505050;
            /* 임시설정 */
            &:before {
              content: attr(date);
              font-size: 14px;
              /* color: #fff; */
            }
            &:after {
              content: attr(day);
              font-size: 22px;
              /* color: #fff; */
              display: block;
            }
          }
        }
      }
    }
    .personnalWrap {
      text-align: left;
      padding: 25px 60px;
      li {
        display: inline-block;
        width: 32%;
        &:nth-child(2),
        &:nth-child(3) {
          margin-left: 1.5%;
        }
        &:after {
          content: "";
          display: block;
          clear: both;
        }
        .txtWrap {
          float: left;
          width: 55%;
          line-height: 1.2;
          .tit {
            font-size: 16px;
            color: #505050;
          }
          .txt {
            font-size: 13px;
            color: #aaa;
          }
        }
        .countWrap {
          float: right;
          .count {
            font-weight: bold;
            line-height: 1.5;
            margin-right: 15px;
            font-size: 22px;
            float: left;
          }
          .btnWrap {
            vertical-align: middle;
            &:after {
              content: "";
              display: block;
              clear: both;
            }
            button {
              width: 37px;
              height: 37px;
              border: 1px solid #505050;
              float: left;
              font-size: 0;
              line-height: 0;
              background-size: 11px 11px !important;
              &:first-child {
                border-radius: 3px 0 0 3px;
                background: url(${minus}) no-repeat 50% 50%;
              }
              &:last-child {
                border-radius: 0 3px 3px 0;
                background: url(${plus}) no-repeat 50% 50%;
                margin-left: -1px;
              }
            }
          }
        }
      }
    }
  }
  /* 티켓정보 블록 */
  .eventWrap {
    /* 인원 선택 중 */
    .event {
      display: block;
      padding: 30px 60px;
      li {
        width: 100%;
        overflow: hidden;
        .event_tit {
          float: left;
          width: 100%;
          margin-bottom: 20px;
          p {
            height: 51px;
            line-height: 51px;
          }
          .tit_l {
            float: left;
            width: 60%;
            padding-left: 2%;
            background-color: #f7f7f7;
            border: 1px solid #e5e5e5;
            box-sizing: border-box;
            font-size: 18px;
          }
          .tit_r {
            float: left;
            width: 38%;
            padding-right: 2%;
            background: #eee;
            text-align: right;
          }
        }
        .cont {
          float: left;
          width: 60%;
          margin-bottom: 20px;
          border-right: 1px solid #e5e5e5;
          box-sizing: border-box;
          .img {
            float: left;
            width: 35%;
            .img_box {
              position: relative;
              height: 196px;
              border: 1px solid #e5e5e5;
              box-sizing: border-box;
              img {
                position: absolute;
                top: 0;
                bottom: 0;
                left: 0;
                right: 0;
                height: 60%;
                margin: auto;
              }
            }
          }
          .txt {
            float: left;
            width: 55%;
            padding: 0 5%;
          }
        }
        .itemCont {
          float: left;
          width: 40%;
          padding: 0 2%;
          margin-top: 20px;
          margin-bottom: 6px;
          .salePrice {
            margin-bottom: 10px;
            padding-bottom: 10px;
            border-bottom: 1px solid #d9d9d9;
            li {
              width: 100%;
              div {
                float: left;
              }
              .ticketPrice {
                float: right;
                span {
                  margin-right: 25px;
                  font-size: 13px;
                  color: #aaa;
                  text-decoration: line-through;
                  text-align: right;
                }
              }
            }
          }
          .finalPrice {
            line-height: 25px;
            .ticketCount {
              float: left;
            }
            .price {
              float: right;
              span {
                font-size: 25px;
                font-weight: 700;
                color: #e12f36;
              }
            }
          }
          .ticketingBtn {
            width: 100% !important;
            float: right;
            button {
              float: right;
              background-color: #2b72c9;
              border-radius: 3px;
              width: 49%;
              height: 48px;
              line-height: 48px;
              margin: 4% 0;
              span {
                font-size: 16px;
                color: white;
                font-weight: bold;
              }
            }
          }
        }
      }
    }
    /* 인원 없음 */
    .noData {
      position: relative;
      padding: 30px 0;
      text-align: center;
      img {
        display: block;
        margin: 0 auto;
        width: 288px;
        max-width: 288px;
      }
      span {
        display: block;
        width: 70%;
        height: 65px;
        position: absolute;
        top: 119px;
        left: 50%;
        margin-left: -35%;
        font-size: 15px;
        font-weight: 500;
        color: #757575;
        line-height: 65px;
      }
    }
  }
  /* 상품안내 블록 */
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
    .acco_contents {
      padding-left: 60px;
       padding-top: 30px;
       background: #fff;
       font-size: 14px;
       font-weight: 500;
       line-height: 1.2;

      span {
        color: #ff0000;
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
// 정보 재확인 모달창 스타일
const ConfirmPop = styled.div`
  display: block;
  .pop_bg {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: #000;
    opacity: 0.8;
    z-index: 1000;
  }
  .pop_cont {
    width: 504px;
    border-radius: 15px;
    position: fixed;
    left: 50%;
    top: 25%;
    margin-left: -252px;
    margin-top: 50px;
    background: #fff;
    z-index: 10000;
    .pop_icon {
      display: block;
      width: 164px;
      height: 134px;
      position: absolute;
      top: -80px;
      left: 50%;
      margin-left: -82px;
      background: url(${icon}) no-repeat;
      background-size: 100% auto;
    }
    .pop_mid {
      padding-top: 15px;
      margin-top: 60px;
      line-height: 1.2;
      .question {
        font-size: 32px;
        text-align: center;
        margin: 0 20px;
      }
    }
    .notice {
      position: relative;
      margin-top: 15px;
      .bgTop {
        background: url(${confirmBg}) repeat-x left bottom;
        background-size: 8px 6px;
        width: 100%;
        height: 5px;
        position: absolute;
        left: 0;
      }
      .notice_mid {
        padding: 17px 40px;
        background: #f1f1f1;
        line-height: 1.2;
        font-size: 14px;
        span {
          color: #e12f37;
        }
      }
    }
    .btnArea {
      width: 90%;
      margin: 0 auto;
      button {
        height: 60px;
        line-height: 60px;
        border: 1px solid #2b72c9;
        border-radius: 3px;
        background-color: #fff;
        margin: 18px 0;
        font-size: 16px;
        font-weight: 400;
        cursor: pointer;
      }
      .btn_empty {
        float: left;
        width: 30%;
        span {
          color: #2b72c9;
        }
      }
      .btn_fill {
        float: right;
        width: 67%;
        background: #2b72c9;
        span {
          color: #fff;
        }
      }
    }
  }
`;
// 방문일자 선택 스타일
const DatePopup = styled.div`
  .pop_bg {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: #000;
    opacity: 0.8;
    z-index: 1000;
  }
  .dateWrap {
    width: 504px;
    border-radius: 15px;
    position: fixed;
    left: 50%;
    top: 25%;
    margin-left: -252px;
    background: #fff;
    z-index: 10000;
    .dateTitle {
      line-height: 1.5;
      padding: 12px 0;
      border-bottom: 1px solid #ddd;
      text-align: center;
      font-size: 24px;
      font-weight: bold;
    }
    .datePick {
      padding: 23px 60px 30px;
      .react-datepicker {
        width: 100%;
        border: none;
        .react-datepicker__navigation--previous {
          left: 100px;
        }
        .react-datepicker__navigation--next {
          right: 100px;
        }
      }
      .react-datepicker__month-container {
        width: 100%;
        .react-datepicker__header {
          background: #fff;
          font-size: 15px;
          border: none;
          .react-datepicker__current-month {
            margin-bottom: 15px;
            font-size: 22px;
          }
          .react-datepicker__day-name {
            width: 36px;
            height: 36px;
          }
        }
        .react-datepicker__day-names {
          width: 100%;
          display: flex;
          justify-content: space-evenly;
        }
        .react-datepicker__month {
          width: 100%;
          margin: 0;
          .react-datepicker__week {
            display: flex;
            justify-content: space-evenly;
            .react-datepicker__day {
              width: 36px;
              height: 36px;
              font-size: 16px;
            }
            .react-datepicker__day--keyboard-selected {
              width: 36px;
              height: 36px;
              border-radius: 50%;
              background: #2b72c9;
              color: #fff;
            }
          }
        }
      }
      .infoWrap {
        text-align: center;
        margin-top: 15px;
        font-size: 14px;
        .selectIcon {
          width: 6px;
          height: 6px;
          margin-bottom: 2px;
          margin-left: 20px;
          text-align: center;
          border-radius: 50%;
          display: inline-block;
          font-size: 14px;
          color: #777;
          &.type1 {
            background: #505050;
            margin-left: 0;
          }
          &.type2 {
            background: #cfcfcf;
          }
          &.type3 {
            background: #2b72c9;
          }
        }
      }
    }
    .dateBtn {
      font-size: 0;
      line-height: 0;
      border-radius: 0 0 4px 4px;
      border-top: 1px solid #2b72c9;
      overflow: hidden;
      button {
        height: 60px;
        font-size: 16px;
        width: 50%;
        display: inline-block;
      }
      .btn_cancel {
        color: #2b72c9;
      }
      .btn_complete {
        color: white;
        background-color: #2b72c9;
        border-radius: 0 0 15px 0;
      }
    }
    .dateClose {
      position: absolute;
      top: 20px;
      right: 20px;
      width: 20px;
      height: 20px;
      background-size: 100% !important;
      background: url(${close});
      font-size: 0;
      line-height: 0;
    }
  }
`;
const Ticketing = memo(({}) => {
  // redux counter 
  const { data, loading, error } = useSelector((state) => state.PaymentSlice);
  const { numberA, colorA } = useSelector((state) => state.adultCount);
  const { numberY, colorY } = useSelector((state) => state.youthCount);
  const { numberC, colorC } = useSelector((state) => state.childCount);
  // redux 결제금액 상태값
  const [priceA, setPriceA] = useState(30000);
  const [priceY, setPriceY] = useState(20000);
  const [priceC, setPriceC] = useState(10000);
  // Date picker 날짜 선택 상태값
  const [startDate, setStartDate] = useState(dayjs());
  // 재확인 모달창 상태값
  const [confOpen, setConfOpen] = useState(false);
  //  달력 모달창 상태값
  const [dateOpen, setDateOpen] = useState(false);
  // 공지사항 토글 상태값
  const [select, setSelect] = useState([]);

 
  const ListActive = React.useRef([]);

  //  재확인 모달창 이벤트
  const confirmOpen = useCallback(() => {
    setConfOpen(true);
    // document.body.style.overflow = "hidden";
  });
  const confirmClose = useCallback(() => {
    setConfOpen(false);
    document.body.style.overflow = "unset";
  });
  //  달력 모달창 이벤트
  const calenderOpen = useCallback(() => {
    setDateOpen(true);
    // console.log("창열기");
  });
  const calenderClose = useCallback(() => {
    setDateOpen(false);
    setStartDate(dayjs());
  });

  const calenderSelect = useCallback(() => {
    setDateOpen(false);
    // console.log("창닫기");
  });
  // 메뉴 토글
  const toggle = useCallback((e) => {
    const item = e.currentTarget.id;
    !select.includes(item)
      ? setSelect((select) => [...select, item])
      : setSelect(select.filter((e) => e !== item));
    // console.log(select);

    // setToggleOn(!toggleOn);
  });
  


  const selectDay = (e) => {
    setStartDate(dayjs(e));

    const weekofday = dayjs(e).format("d");

    for (let i = 0; i < 7; i++) {
      const currentActive = ListActive.current[i].dataset.key;

      ListActive.current[i].childNodes[0].classList.remove("active");
      if (currentActive == weekofday) {
        ListActive.current[i].childNodes[0].classList.add("active");
      }
    }
  };

  var now = new Date();

  let theYear = startDate.year();
  let theMonth = startDate.month();
  let theDate = startDate.date();
  let theDayOfWeek = startDate.day();

  let thisWeek = [];
  let thisYear = [];
  let thisMonth = [];
  let dayArr = [
    { day: "일" },
    { day: "월" },
    { day: "화" },
    { day: "수" },
    { day: "목" },
    { day: "금" },
    { day: "토" },
  ];

  for (let i = 0; i < 7; i++) {
    let resultDay = new Date(theYear, theMonth, theDate + (i - theDayOfWeek));
    let yyyy = resultDay.getFullYear();
    let mm = Number(resultDay.getMonth()) + 1;
    let dd = resultDay.getDate();

    mm = String(mm).length == 1 ? "0" + mm : mm;
    dd = String(dd).length == 1 ? "0" + dd : dd;
    yyyy = String(yyyy);

    thisWeek[i] = dd;
    thisMonth[i] = mm;
    thisYear[i] = yyyy;

    dayArr[i].date = thisWeek[i];
    dayArr[i].month = thisMonth[i];
    dayArr[i].year = thisYear[i];
  }

  const navigate = useNavigate();

  const btnSelectDate = (e) => {
    const selectDay =
      e.target.dataset.year +
      "-" +
      e.target.dataset.month +
      "-" +
      e.target.dataset.date;
    setStartDate(dayjs(selectDay));

    for (let i = 0; i < 7; i++) {
      e.target.parentNode.parentNode.children[i].firstChild.classList.remove(
        "active"
      );
    }

    e.target.classList.add("active");
    // console.log("날짜 바껐엉");
  };
  const history = createBrowserHistory();

  const dispatch = useDispatch();

  


  const location = useLocation();

  const searchAll = location.search;

  let params = new URLSearchParams(searchAll);
  let T_id = params.get("T_id");
  let amount = (numberA*priceA)+(numberY*priceY)+(numberC*priceC)

  React.useEffect(()=>{
    navigate(`/TicketingPage/Ticketing?T_id=${T_id}&date=${dayjs(startDate).format("YYYY-MM-DD")}&amount=${amount}`)
      dispatch(getPayment({ id: "1" }));
    console.log("실행됨");

    let unlisten = history.listen((location) => {

      if (history.action === 'POP') {

        navigate("/TicketingPage");
      }
    });

    return () => {
      unlisten();
    };
  },[dispatch]);

  return (
    <TicketingStyled>
      <div className="containerWrap">
        <div className="container">
          <div className="titleWrap">
            <div className="title">
              <h1>티켓 예매</h1>
            </div>
          </div>
          <div className="reserveWrap">
            <div className="reserve">
              <TicketForm>
                {/* input: hidden */}
                <div className="res_cont">
                  <TitleArea>
                    <p className="tit">방문일자/인원 선택</p>
                    <div className="titRight">
                      {/* <span className="today">{startDate}</span> */}
                      <span className="today">
                        {dayjs(startDate).format("MM-DD")}
                      </span>
                      {/* <span className="today">{startDate.get("day")}</span> */}
                      <span className="today">
                        {dayjs(startDate).format("d") === "0"
                          ? `일`
                          : dayjs(startDate).format("d") === "1"
                          ? `월`
                          : dayjs(startDate).format("d") === "2"
                          ? `화`
                          : dayjs(startDate).format("d") === "3"
                          ? `수`
                          : dayjs(startDate).format("d") === "4"
                          ? `목`
                          : dayjs(startDate).format("d") === "5"
                          ? `금`
                          : `토`}
                      </span>
                      <button
                        onClick={calenderOpen}
                        type="button"
                        className="btnCal"
                      >
                        달력
                      </button>
                    </div>
                  </TitleArea>
                  <div className="calWrap">
                    <div className="inner">
                      <ul>
                        {dayArr ? (
                          dayArr.map((v, i) => {
                            return (
                              <li
                                key={i}
                                data-key={i}
                                ref={(el) => (ListActive.current[i] = el)}
                              >
                                <button
                                  type="button"
                                  className={
                                    v.date == startDate.format("DD")
                                      ? "btnDate active"
                                      : "btnDate"
                                  }
                                  date={v.date}
                                  day={v.day}
                                  data-year={v.year}
                                  data-month={v.month}
                                  data-date={v.date}
                                  data-day={v.day}
                                  onClick={btnSelectDate}
                                />
                              </li>
                            );
                          })
                        ) : (
                          <></>
                        )}
                      </ul>
                    </div>
                  </div>
                  <div className="personnalWrap">
                     <ul>
                       <li>
                         <div className="txtWrap">
                           <p className="tit">어른</p>
                           <p className="txt">만 19세 이상</p>
                         </div>
                         <div className="countWrap">
                           {/*  onChange={setPriceA(numberA * 30000) */}
                           <em className="count" style={{color: colorA}}>{numberA}</em>
                           <span className="btnWrap">
                             <button type="button" className="minus" onClick={(e)=>{dispatch(minus1(1));}}>
                               인원수 제거
                             </button>
                             <button type="button" className="plus" onClick={(e)=>{dispatch(plus1(1));}}>
                               인원수 추가
                             </button>
                           </span>
                         </div>
                       </li>
                       <li>
                         <div className="txtWrap">
                           <p className="tit">청소년</p>
                           <p className="txt">만 19세 이상</p>
                         </div>
                         <div className="countWrap">
                         {/* onChange={setPriceY(numberY * 20000) */}
                           <em className="count" style={{color: colorY}}>{numberY}</em>
                           <span className="btnWrap">
                             <button type="button" className="minus" onClick={(e)=>{dispatch(minus2(1));}}>
                               인원수 제거
                             </button>
                             <button type="button" className="plus" onClick={(e)=>{dispatch(plus2(1));}}>
                               인원수 추가
                             </button>
                           </span>
                         </div>
                       </li>
                       <li>
                         <div className="txtWrap">
                           <p className="tit">어린이</p>
                           <p className="txt">만 19세 이상</p>
                         </div>
                         <div className="countWrap">
                           {/*  onChange={setPriceC(numberC * 10000) */}
                           <em className="count" style={{color: colorC}}>{numberC}</em>
                           <span className="btnWrap">
                             <button type="button" className="minus" onClick={(e)=>{dispatch(minus3(1));}}>
                               인원수 제거
                             </button>
                             <button type="button" className="plus" onClick={(e)=>{dispatch(plus3(1));}}>
                               인원수 추가
                             </button>
                           </span>
                         </div>
                       </li>
                     </ul>
                   </div>
                </div>

                <hr className="division" />

                <div className="eventWrap">
                   {/* .event -> 인원 선택 중 */}
                   { numberA+numberY+numberC !== 0 ?
                     <ul className="event">
                     <li>
                       <div className="event_tit">
                         {/* Main에서 선택한 ti_name */}
                         <p className="tit_l">일반 온라인 예매</p>
                         {/* personnal 바뀔 때마다 변하는 상태값 */}
                         <p className="tit_r">{numberA + numberY + numberC}매 할인</p>
                       </div>
                       <div className="cont">
                         <div className="img">
                           <p className="img_box">
                             <img src={thumbnail} alt="ticket" />
                           </p>
                         </div>
                         <div className="txt">일반 온라인 예매 10%</div>
                       </div>
                       <div className="itemCont">
                         <ul className="salePrice">
                             {/* 어른/청소년/어린이 선택 따라 바뀌어야 함 */}
                           { numberA>0 &&
                             <li className="ticketGroup">
                               <div className="ticketAge">어른 X {numberA}</div>
                               <div className="ticketPrice">
                                 {/* 가격 db에서 불러오기? */}
                                 <span>{numberA * 33000}</span>
                                 <strong className="discount">
                                   <strong>{numberA*priceA}</strong> 원
                                 </strong>
                               </div>
                             </li>
                           }
                           { numberY>0 &&
                             <li className="ticketGroup">
                               <div className="ticketAge">청소년 X {numberY}</div>
                               <div className="ticketPrice">
                                 {/* 가격 db에서 불러오기? */}
                                 <span>{numberY * 22000}</span>
                                 <strong className="discount">
                                   <strong>{numberY*priceY}</strong> 원
                                 </strong>
                               </div>
                             </li>
                           }
                           { numberC>0 &&
                             <li className="ticketGroup">
                               <div className="ticketAge">어린이 X {numberC}</div>
                               <div className="ticketPrice">
                                 {/* 가격 db에서 불러오기? */}
                                 <span>{numberC * 11000}</span>
                                 <strong className="discount">
                                   <strong>{numberC*priceC}</strong> 원
                                 </strong>
                               </div>
                             </li>
                           }
                         </ul>
                         <div className="finalPrice">
                           <div className="ticketCount">최종결제금액</div>
                           <div className="price">
                             <span>{amount}</span> 원
                           </div>
                         </div>
                         <div className="ticketingBtn">
                           <button type="button" onClick={confirmOpen}>
                             <span>예매하기</span>
                           </button>
                         </div>
                       </div>
                     </li>
                     </ul> : 
                      <p className="noData">
                      <img src={nodata} alt="" />
                      <span>예약인원을 선택해 주세요.</span>
                    </p>
                   }
                 </div>

                <hr className="division" />
                {/* 토글 */}
                <ul
                  id={0}
                  className={
                    select.includes("0") ? "accordion open" : "accordion"
                  }
                  onClick={toggle}
                >
                  <li>
                    <div className="acco_title">
                      <div className="tit">상품 안내</div>
                    </div>
                    <div className="acco_contents">
                      롯데월드 어드벤처 부산 입장 및 놀이시설 이용을 위한
                      티켓입니다.
                      <br />
                      • 종일권 (1-Day)
                      <br />
                      - 어 른 : 47,000원
                      <br />
                      - 청소년 : 39,000원
                      <br />
                      - 어린이/경로 : 33,000원
                      <br />
                      - 베이비 : 12,000원
                      <br />
                      <br />
                      • 오후권 (After 4)
                      <br />
                      - 어 른 : 33,000원
                      <br />
                      - 청소년 : 31,000원
                      <br />
                      - 어린이/경로 : 29,000원
                      <br />
                      - 베이비 : 12,000원
                      <br />
                      <br />
                      ※ 연령 기준
                      <br />
                      (나이 확인이 가능한 신분증 또는 서류를 제시해주세요)
                      <br />
                      - 경로 : 만 65세 이상 (기타 우대 적용 불가)
                      <br />
                      - 어른 : 만 19세 이상
                      <br />
                      - 청소년 : 만 13세 ~ 만 18세 (학교 및 학년 무관)
                      <br />
                      - 어린이 : 만 36개월 이상 ~ 만 12세
                      <br />
                      - 베이비
                      <br />
                      1) 0~12개월 미만 - 파크 입장 및 유아 놀이시설에 대하여
                      <br />
                      &nbsp;&nbsp;&nbsp;무료 이용
                      <br />
                      2) 12개월 이상 ~ 36개월 미만 - 파크 입장 무료
                      <br />
                      <span>
                        &nbsp;&nbsp;&nbsp;유아 어트랙션에 대하여
                        베이비이용권(베이비권종합/베이비권(1회)/
                        <br />
                        &nbsp;&nbsp;&nbsp;키즈토리아이용권) 구매 후 이용 가능
                      </span>
                      <br />
                    </div>
                  </li>
                </ul>
                <ul
                  id={1}
                  className={
                    select.includes("1") ? "accordion open" : "accordion"
                  }
                  onClick={toggle}
                >
                  <li>
                    <div className="acco_title">
                      <div className="tit">이용안내</div>
                    </div>
                    <div className="acco_contents">
                      롯데월드 어드벤처 부산 입장 및 놀이시설 이용을 위한
                      티켓입니다.
                      <br />
                      • 종일권 (1-Day)
                      <br />
                      - 어 른 : 47,000원
                      <br />
                      - 청소년 : 39,000원
                      <br />
                      - 어린이/경로 : 33,000원
                      <br />
                      - 베이비 : 12,000원
                      <br />
                      <br />
                      • 오후권 (After 4)
                      <br />
                      - 어 른 : 33,000원
                      <br />
                      - 청소년 : 31,000원
                      <br />
                      - 어린이/경로 : 29,000원
                      <br />
                      - 베이비 : 12,000원
                      <br />
                      <br />
                      ※ 연령 기준
                      <br />
                      (나이 확인이 가능한 신분증 또는 서류를 제시해주세요)
                      <br />
                      - 경로 : 만 65세 이상 (기타 우대 적용 불가)
                      <br />
                      - 어른 : 만 19세 이상
                      <br />
                      - 청소년 : 만 13세 ~ 만 18세 (학교 및 학년 무관)
                      <br />
                      - 어린이 : 만 36개월 이상 ~ 만 12세
                      <br />
                      - 베이비
                      <br />
                      1) 0~12개월 미만 - 파크 입장 및 유아 놀이시설에 대하여
                      <br />
                      &nbsp;&nbsp;&nbsp;무료 이용
                      <br />
                      2) 12개월 이상 ~ 36개월 미만 - 파크 입장 무료
                      <br />
                      <span>
                        &nbsp;&nbsp;&nbsp;유아 어트랙션에 대하여
                        베이비이용권(베이비권종합/베이비권(1회)/
                        <br />
                        &nbsp;&nbsp;&nbsp;키즈토리아이용권) 구매 후 이용 가능
                      </span>
                      <br />
                    </div>
                  </li>
                </ul>

                <ul
                  id={2}
                  className={
                    select.includes("2") ? "accordion open" : "accordion"
                  }
                  onClick={toggle}
                >
                  <li>
                    <div className="acco_title">
                      <div className="tit">취소/환불</div>
                    </div>
                    <div className="acco_contents">
                      롯데월드 어드벤처 부산 입장 및 놀이시설 이용을 위한
                      티켓입니다.
                      <br />
                      • 종일권 (1-Day)
                      <br />
                      - 어 른 : 47,000원
                      <br />
                      - 청소년 : 39,000원
                      <br />
                      - 어린이/경로 : 33,000원
                      <br />
                      - 베이비 : 12,000원
                      <br />
                      <br />
                      • 오후권 (After 4)
                      <br />
                      - 어 른 : 33,000원
                      <br />
                      - 청소년 : 31,000원
                      <br />
                      - 어린이/경로 : 29,000원
                      <br />
                      - 베이비 : 12,000원
                      <br />
                      <br />
                      ※ 연령 기준
                      <br />
                      (나이 확인이 가능한 신분증 또는 서류를 제시해주세요)
                      <br />
                      - 경로 : 만 65세 이상 (기타 우대 적용 불가)
                      <br />
                      - 어른 : 만 19세 이상
                      <br />
                      - 청소년 : 만 13세 ~ 만 18세 (학교 및 학년 무관)
                      <br />
                      - 어린이 : 만 36개월 이상 ~ 만 12세
                      <br />
                      - 베이비
                      <br />
                      1) 0~12개월 미만 - 파크 입장 및 유아 놀이시설에 대하여
                      <br />
                      &nbsp;&nbsp;&nbsp;무료 이용
                      <br />
                      2) 12개월 이상 ~ 36개월 미만 - 파크 입장 무료
                      <br />
                      <span>
                        &nbsp;&nbsp;&nbsp;유아 어트랙션에 대하여
                        베이비이용권(베이비권종합/베이비권(1회)/
                        <br />
                        &nbsp;&nbsp;&nbsp;키즈토리아이용권) 구매 후 이용 가능
                      </span>
                      <br />
                    </div>
                  </li>
                </ul>

                {dateOpen && (
                  <DatePopup>
                    <div className="dateWrap">
                      <div className="dateTitle">방문일자 선택</div>
                      <div className="datePick">
                        <DatePicker
                          inline
                          locale={ko}
                          minDate={now}
                          onChange={selectDay}
                        />
                        <div className="infoWrap">
                          <span>
                            <em className="selectIcon type1" /> 선택가능
                          </span>
                          <span>
                            <em className="selectIcon type2" /> 선택불가
                          </span>
                          <span>
                            <em className="selectIcon type3" /> 선택완료
                          </span>
                        </div>
                      </div>
                      <div className="dateBtn">
                        <button
                          onClick={calenderClose}
                          type="button"
                          className="btn_cancel"
                        >
                          취소
                        </button>
                        <button
                          type="button"
                          className="btn_complete"
                          onClick={calenderSelect}
                        >
                          적용
                        </button>
                      </div>
                      <button
                        onClick={calenderClose}
                        type="button"
                        className="dateClose"
                      >
                        닫기
                      </button>
                    </div>
                    <div className="pop_bg"></div>
                  </DatePopup>
                )}
              </TicketForm>
            </div>
          </div>
        </div>
      </div>
      {confOpen && (
        <ConfirmPop>
          <div className="pop_bg"></div>
          <div className="pop_cont">
            <span className="pop_icon"></span>
            <div className="pop_mid">
              {/* 선택한 날짜로 나타나야 함 */}
              <p className="question">
                {startDate.format("YYYY-MM-DD")} <br /> 선택하신 방문일자로
                예약을 진행하시겠습니까?
              </p>
            </div>
            <div className="notice">
              <div className="bgTop"></div>
              <div className="notice_mid">
                <p>
                  예매하신 티켓<span className="txtColor">사용</span>은
                  <span className="txtColor"> 이용당일</span>만 가능합니다.
                </p>
              </div>
            </div>
            <div className="btnArea">
              <button
                type="button"
                className="btn_empty"
                onClick={confirmClose}
              >
                <span>취소</span>
              </button>
              <Link to="/TicketingPage/Ticketing/Payment">
                <button type="button" className="btn_fill">
                  <span>동의하고 결제하기</span>
                </button>
              </Link>
            </div>
          </div>
        </ConfirmPop>
      )}
    </TicketingStyled>
  );
});

export default Ticketing;
