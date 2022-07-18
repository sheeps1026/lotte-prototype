import React, { memo } from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import bg from "../../assets/images/bg_pc_visual.png";

import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getPaymentInfo } from "../../slice/PaymentSlice";

const MypageContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background: url(${bg});
  padding: 20px 0 50px;

  .pageContainer {
    width: 900px;
    background: #fff;
    margin: 0 auto 0;
    padding: 0 0 40px 0;

    h3 {
      text-align: center;
      font-weight: 500;
      font-size: 28px;
      box-shadow: 0 5px 5px rgba(0, 0, 0, 0.1);
      z-index: 1;
      padding: 20px 0;
    }
    h4 {
      font-size: 20px;
      margin: 30px 50px 10px;
      font-weight: 500;
    }
    .orderCancel {
      display: block;
      background: #2b72c9;
      margin: 60px auto 0;
      color: #fff;
      line-height: 1.5;
      padding: 13px 0;
      font-size: 17px;
      width: 400px;
      border: none;
      border-radius: 3px;
    }
    .PaymentListTable {
      border-top: 2px solid #000;
      margin: 0 auto;
      width: 800px;
      border-bottom: 2px solid #ccc;
      tr {
        th,
        td {
          padding: 15px 10px;
          font-size: 15px;
          border-top: 1px solid #ccc;
        }
        th {
          background: #f1f1f1;
          border-right: 1px solid #ccc;
        }
        td {
          &.colorRed {
            color: red;
          }
        }
      }
    }
  }
`;

const PaymentView = memo(() => {
  const { state } = useLocation();
  console.log(state.data);
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.PaymentSlice);

  React.useEffect(() => {
    dispatch(getPaymentInfo({ merchant_uid: state.data }));
  }, [dispatch]);

  console.log(data);
  return data ? (
    <MypageContainer>
      <div className="pageContainer">
        <h3>티켓 등록내역</h3>

        <h4>예매내역</h4>
        <table className="PaymentListTable">
          <tbody>
            <tr>
              <th>상품명</th>
              <td>{data[0].name}</td>
            </tr>
            <tr>
              <th>예매번호</th>
              <td>{data[0].merchant_uid}</td>
              {/* <td className="colorRed">1234-1234-1234-1234</td> */}
            </tr>
            <tr>
              <th>상태</th>
              <td>예매완료</td>
            </tr>
            <tr>
              <th>결제일자</th>
              {/* <td>2022.05.30(월)</td> */}
            </tr>
            <tr>
              <th>방문일자</th>
              <td>{data[0].paymentDate}</td>
              {/* <td>2022.06.04(토)</td> */}
            </tr>
            <tr>
              <th>결제정보</th>
              <td>{data[0].pay_method}</td>
              {/* <td>간편결제</td> */}
            </tr>
            <tr>
              <th>결재금액</th>
              <td>{data[0].amount}</td>
              {/* <td className="colorRed">26,900원</td> */}
            </tr>
            {/* <tr>
            <th>분류</th>
            <td>온라인 PC결제</td>
          </tr> 
            <tr>
              <th>구매일시</th>
              <td>2022.06.04(토) 17:00:00</td>
            </tr>
            */}
          </tbody>
        </table>
        <h4>방문자 정보</h4>
        <table className="PaymentListTable">
          <tbody>
            <tr>
              <th>방문자</th>
              {/* <td>홍길동</td> */}
              <td>{data[0].visit_name}</td>
            </tr>
            <tr>
              <th>휴대폰</th>
              <td>{data[0].visit_tel}</td>
            </tr>
            <tr>
              <th>이메일</th>
              <td>{data[0].visit_mail}</td>
            </tr>
          </tbody>
        </table>
        <Link to="/TicketingPage/PaymentList">
          <button className="orderCancel" type="button">
            예매취소
          </button>
        </Link>
      </div>
    </MypageContainer>
  ) : (
    <>데이터 없삼</>
  );
});

export default PaymentView;
