/**
 * @filename: Ticketing.js
 * @description: 예매할 날짜, 인원 선택
 */
import React, { memo, useCallback, useState } from "react";
import styled from "styled-components";
import DatePicker from "react-datepicker";
import { ko } from "date-fns/esm/locale";
import "react-datepicker/dist/react-datepicker.css";

import bg from "../../assets/images/pages/product/bg_pc_visual_busan.png";
import shadow from "../../assets/images/pages/product/bg_con_shadow.png";
import btnCal from "../../assets/images/pages/product/btn_cal.png";
import minus from "../../assets/images/pages/product/btn_minus_on.png";
import plus from "../../assets/images/pages/product/btn_plus_on.png";
import thumbnail from "../../assets/images/pages/product/thumbnail.jpg";
import arrow from "../../assets/images/pages/product/bg_accordion_arrow.png";

import confirmBg from '../../assets/images/pages/product/bg_notice.png';
import icon from '../../assets/images/pages/product/bg_popicon.png';

const weekArr = [
  { day: "월", date: 20 },
  { day: "화", date: 21 },
  { day: "수", date: 22 },
  { day: "목", date: 23 },
  { day: "금", date: 24 },
  { day: "토", date: 25 },
  { day: "일", date: 26 },
];

const personnalArr = [
  { tit: "어른", txt: "만 19세 이상" },
  { tit: "청소년", txt: "13세 이상 ~ 만 18세" },
  { tit: "어린이", txt: "36개월 이상 ~ 만 12세" },
];

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
            &:nth-child(2) {
              background-color: #2b72c9;
              border-radius: 3px;
              .btnDate {
                color: white;
              }
            }
          }
          .btnDate {
            padding: 9px 15px;
            color: #505050;
            /* 임시설정 */

            .date {
              font-size: 14px;
            }
            .day {
              font-size: 22px;
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
            width: 36%;
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
        background: #fff;
        font-size: 14px;
        font-weight: 500;
        line-height: 1.2;
        span {
          color: #FF0000;
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
display: block; //날짜 선택 후 등장하게
.pop_bg {
    position:fixed;
    width:100%;
    height:100%;
    top:0;
    left:0;
    background: #000;
    opacity: .8;
    z-index: 1000;
}
.pop_cont {
    display: block;
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
                color: #E12F37;
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
            span { color: #fff; }
        }
    }
}
`;
const Ticketing = memo(() => {
  const [startDate, setStartDate] = useState(new Date());
  const [selectDate, setSelectDate] = useState();
  const [Open, setOpen] = useState(false);
  const [toggleOn, setToggleOn] = useState(false);

  const confirmOpen = useCallback(()=>{
    setOpen(true);
    document.body.style.overflow = "hidden"; // 스크롤 불가능
  });
  const confirmClose = useCallback(()=>{
    setOpen(false);
    document.body.style.overflow = "unset"; // 스크롤 가능
  });
  const toggle = useCallback((e)=>{
    setToggleOn(!toggleOn);
  });

  const calendar = useCallback(()=>{

  })

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
                      <span className="today">01.21 화</span>
                      <button type="button" className="btnCal">
                        달력
                      </button>
                    </div>
                  </TitleArea>
                  <div className="calWrap">
                    <div className="inner">
                      <ul>
                        {weekArr ? (
                          weekArr.map((v, i) => {
                            return (
                              <li key={i}>
                                <button type="button" className="btnDate">
                                  <em className="date">{v.date}</em>
                                  <em className="day">{v.day}</em>
                                </button>
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
                      {personnalArr ? (
                        personnalArr.map((v, i) => {
                          return (
                            <li key={i}>
                              <div className="txtWrap">
                                <p className="tit">{v.tit}</p>
                                <p className="txt">{v.txt}</p>
                              </div>
                              <div className="countWrap">
                                {/* .count : 버튼 조작에 따라 달라지는 상태값 */}
                                <em className="count">1</em>
                                <span className="btnWrap">
                                  <button type="button" className="minus">
                                    인원수 제거
                                  </button>
                                  <button type="button" className="plus">
                                    인원수 추가
                                  </button>
                                </span>
                              </div>
                            </li>
                          );
                        })
                      ) : (
                        <></>
                      )}
                    </ul>
                  </div>
                </div>

                <hr className="division" />

                <div className="eventWrap">
                  <ul className="event">
                    <li>
                      <div className="event_tit">
                        {/* Main에서 선택한 ti_name */}
                        <p className="tit_l">일반 온라인 예매</p>
                        {/* personnal 바뀔 때마다 변하는 상태값 */}
                        <p className="tit_r">1매 할인</p>
                      </div>
                      <div className="cont">
                        <div className="img">
                          <p className="img_box">
                            <img src={thumbnail} alt='ticket'/>
                          </p>
                        </div>
                        <div className="txt">일반 온라인 예매 10%</div>
                      </div>
                      <div className="itemCont">
                        <ul className="salePrice">
                          <li>
                            <div>어른 X 1</div>
                            <div className="ticketPrice">
                              <span>47,000</span>
                              <strong className="discount">
                                <strong>42,300</strong> 원
                              </strong>
                            </div>
                          </li>
                        </ul>
                        <div className="finalPrice">
                          <div className="ticketCount">최종결제금액</div>
                          <div className="price">
                            <span>42,300</span> 원
                          </div>
                        </div>
                        <div className="ticketingBtn">
                          <button type="button" onClick={confirmOpen}>
                            <span>예매하기</span>
                          </button>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>

                <hr className="division" />

                <ul className={toggleOn?'accordion open':'accordion'} onClick={toggle}>
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
                      &nbsp;&nbsp;&nbsp;유아 어트랙션에 대하여 베이비이용권(베이비권종합/베이비권(1회)/
                        <br />
                        &nbsp;&nbsp;&nbsp;키즈토리아이용권) 구매 후 이용 가능
                      </span>
                      <br />
                    </div>
                  </li>
                </ul>

                <div className='popup'>
                    <div className="datePick">
                        <DatePicker selected={startDate}  locale={ko} onChange={(date) => setStartDate(date)}/>
                    </div>
                    <div className='dateBtn'>
                        <button type='button' className='btn_cancel'>취소</button>
                        <button type='button' className='btn_complete'>적용</button>
                    </div>
                    <button type='button'>닫기</button>
                </div>
              </TicketForm>
            </div>
          </div>
        </div>
      </div>
      {Open && <ConfirmPop>
            <div className='pop_bg'></div>
            <div className='pop_cont'>
                <span className='pop_icon'></span>
                <div className='pop_mid'>
                  {/* 선택한 날짜로 나타나야 함 */}
                    <p className='question'>
                        2022-07-15 <br/> 선택하신 방문일자로 예약을 진행하시겠습니까?
                    </p>
                </div>
                <div className='notice'>
                    <div className='bgTop'></div>
                    <div className='notice_mid'>
                        <p>예매하신 티켓<span className='txtColor'>사용</span>은
                        <span className='txtColor'> 이용당일</span>만 가능합니다.
                        </p>
                    </div>
                </div>
                <div className='btnArea'>
                    <button type='button' className='btn_empty' onClick={confirmClose}>
                        <span>취소</span>
                    </button>
                    <button type='button' className='btn_fill'>
                        <span>동의하고 결제하기</span>
                    </button>
                </div>
            </div>
        </ConfirmPop>}
      
    </TicketingStyled>
  );
});

export default Ticketing;
