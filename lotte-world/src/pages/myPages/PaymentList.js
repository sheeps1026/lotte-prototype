import React, { memo, useState } from "react";
import DatePicker from "react-datepicker";
import { ko } from "date-fns/esm/locale";
import "react-datepicker/dist/react-datepicker.css";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import bg from "../../assets/images/bg_pc_visual.png";
import dayjs from "dayjs";
import arrowRight from "../../assets/images/arrow-right.png";
import NoResultFound from "../../components/NoResultsFound";
import { getPaymentInfo } from "../../slice/PaymentSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const MypageContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background: url(${bg});
  padding: 20px 0 50px;
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
      margin:14px 0;
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
      align-items: center;
      padding: 20px;
      gap: 20px;

      > span {
        border-width: 1px;
        border-style: solid;
        /*
          //?????? ????????? ????????? .. 
        border-color: ${({ ticket }) => (ticket === "Yes" ? "red" : "blue")}; 
        */
        /* &:before {
          content: "${({ ticket }) =>
          ticket === "Yes" ? "????????????" : "????????????"}";
          color: ${({ ticket }) => (ticket === "Yes" ? "red" : "blue")};
        } */

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
          line-height: 2;
          span {
            color: red;
          }
        }
        p:last-child {
          &:before {
            /* content: "${({ adult }) =>
              adult === "1" ? "??????" : "?????????"}"; */
          }
        }
        d p {
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
  const dispatch = useDispatch();

  const { data, loading, error } = useSelector((state) => state.PaymentSlice);

  const datePicker1 = React.useRef();

  const [startDate, setStartDate] = useState(new Date());

  const prevBtn = React.useCallback(() => {
    // console.log("???????????? ??????");

    let selectDateYear = datePicker1.current.props.selected.getFullYear();
    let selectDateMonth = datePicker1.current.props.selected.getMonth();
    let selectDateDate = datePicker1.current.props.selected.getDate();

    let changeMonth =
      selectDateYear +
      "-" +
      selectDateMonth +
      "-" +
      selectDateDate +
      "T09:00:00";

    setStartDate(new Date(dayjs(changeMonth)));
    
    // ????????? ???
    dispatch(
      getPaymentInfo({ paymentMonth: dayjs(changeMonth).format("YYYY-MM") })
    );
  });

  const nextBtn = React.useCallback(() => {
    // console.log("???????????? ??????");

    let selectDateYear = datePicker1.current.props.selected.getFullYear();
    let selectDateMonth = datePicker1.current.props.selected.getMonth() + 2;
    let selectDateDate = datePicker1.current.props.selected.getDate();

    let changeMonth =
      selectDateYear +
      "-" +
      selectDateMonth +
      "-" +
      selectDateDate +
      "T09:00:00";
    console.log(changeMonth);
    setStartDate(new Date(dayjs(changeMonth)));

    // ????????? ???
    dispatch(
      getPaymentInfo({ paymentMonth: dayjs(changeMonth).format("YYYY-MM") })
    );
  });

  const fulldate = dayjs(startDate).format("YYYY-MM");

  const pickerChange =(e)=>{
    console.log("??? ?????????",dayjs(e).format("YYYY-MM"));
    setStartDate(e);

    const pick = dayjs(e).format("YYYY-MM");
    dispatch(getPaymentInfo({ paymentMonth: pick }));
  }
  React.useEffect(() => {
    // ????????? ???
    dispatch(getPaymentInfo({ paymentMonth: fulldate }));
    console.log(fulldate);
  }, [dispatch, setStartDate]);

  return (
    <>
      {data ? (
        <MypageContainer>
          <div className="pageContainer">
            <h3>???????????????</h3>
            <p className="mypageNotice">
              ???????????? ????????? ?????? ????????? ???????????? ??? ?????????
              <span> ??????????????? ??????????????? ??????</span> ?????? ??????????????? ????????????.
            </p>
            <div className="datePickerCon">
              <button onClick={prevBtn} type="button">
                &laquo; ?????????
              </button>
              <DatePicker
                ref={datePicker1}
                selected={startDate}
                // onChange={(date) => setStartDate(date)}
                locale={ko} // ????????? ??????
                dateFormat="yyyy-MM"
                onChange={pickerChange}
                showMonthYearPicker
                showFullMonthYearPicker
              />
              <button onClick={nextBtn} type="button">
                ????????? &raquo;
              </button>
            </div>

            {data[0] ? (
              <PaymentListWrap>
                <h2>
                  ??? <span>{data.length}</span>???
                </h2>

                <div className="topWrap">
                  <div>{dayjs(data[0]?.paymentMonth).format("YYYY-MM-DD")}</div>
                </div>
                <div className="paymentUl">
                  {/* <h5>????????? (AFTER4) ????????? ??????</h5> */}
                  <h5>{data[0]?.name}</h5>
                  <ul>
                    <li>
                      ???????????? <span>{data[0]?.merchant_uid}</span>
                    </li>
                    <li>
                      ????????????{" "}
                      <span>
                        {dayjs(data[0]?.startDate).format("YYYY-MM-DD")}
                      </span>
                    </li>
                    <li>
                      ???????????? <span>{data[0]?.paymentDate}</span>
                    </li>
                    <li>
                      ????????????{" "}
                      <span>
                        {(data[0]?.amount).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')} (
                        {data[0]?.numberA + data[0]?.numberY + data[0]?.numberC}
                        ???)
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="NumberList">
                  {data.map((v, i) => {
                    return (
                      <div className="badgeWrap" key={i}>
                        <span>?????? ??????</span>
                        <div className="numberList">
                          <p>
                            ???????????? :<span>{v.merchant_uid}</span>
                          </p>
                          <p>
                            ({v.numberA ? `??????` : <></>}
                            {v.numberY ? `, ?????????` : <></>}
                            {v.numberC ? `, ?????????` : <></>})
                          </p>
                        </div>
                        <div className="price">{(v.amount).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}???</div>
                        <Link
                          to="/TicketingPage/PaymentView"
                          state={{ data: v.merchant_uid }}
                        ></Link>
                      </div>
                    );
                  })}
                </div>
              </PaymentListWrap>
            ) : (
              <NoResultFound />
            )}
          </div>
        </MypageContainer>
      ) : (
        <>?????? ????????????</>
      )}
    </>
  );
});

export default PaymentList;
