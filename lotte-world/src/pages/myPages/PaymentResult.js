import React, { memo } from "react";
import styled from "styled-components";
import bg from "../../assets/images/bg_pc_visual.png";
import resultimg from "../../assets/images/paymentresult.jpg";
import { NavLink } from "react-router-dom";

const MypageContainer = styled.div`
  width: 100vw;
  height: auto;
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
    .result-p {
      text-align: center;
      font-weight: bold;
      font-size: 20px;
    }
    img.resultImg {
      display: block;
      margin: 16px auto;
    }
    h4 {
      font-size: 20px;
      margin: 30px 50px 10px;
      font-weight: 500;
    }
    .paymentList {
      display: block;
      background: #2b72c9;
      margin: 20px auto;
      color: #fff;
      line-height: 1.5;
      padding: 13px 0;
      font-size: 17px;
      width: 400px;
      border: none;
      border-radius: 3px;
      text-align: center;
    }
    .PaymentListTable {
      border-top: 2px solid #000;
      margin: 0 auto 30px;
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
          p {
            line-height: 1.5;
          }
        }
      }
    }
    .paymentFooter {
      background: #f1f1f1;
      padding: 0 0 40px 0;
      .paymentFooterTitle {
        width: 800px;
        margin: 0 auto;
        padding: 20px 0 0 0;
        line-height: 1.5;
        font-size: 18px;
      }
      ul {
        width: 800px;
        margin: 5px auto;
        li {
          font-size: 16px;
          color: #222;
          line-height: 2;
          &:before {
            content: "·";
            padding: 0 5px 0 0;
          }
          ul {
            li {
              color: #666;
              &:before {
                color: #f1f1f1;
              }
            }
          }
        }
      }
    }
  }
`;
const PaymentResult = memo(() => {
  return (
    <MypageContainer>
      <div className="pageContainer">
        <h3>결제 완료</h3>
        <img className="resultImg" src={resultimg} alt="결제완룡" />
        <p className="result-p">예매가 완료되었습니다.</p>
        <NavLink
          to="/TicketingPage/PaymentView"
          className="paymentList"
          type="button"
        >
          결제 내역
        </NavLink>
        <table className="PaymentListTable">
          <tr>
            <th>주문번호</th>
            <td>12345678</td>
          </tr>
          <tr>
            <th>예매상품</th>
            <td>오후권 온라인 할인 - 어린이</td>
          </tr>
          <tr>
            <th>수량</th>
            <td>총 2매 (어른)</td>
          </tr>
          <tr>
            <th>예매번호</th>
            <td>
              <p>1234-1234-1234-1234</p>
              <p>1234-1234-1234-1234</p>
            </td>
          </tr>
          <tr>
            <th>이용예정</th>
            <td>2022.06.04(토)</td>
          </tr>
          <tr>
            <th>총티켓금액</th>
            <td className="colorRed">55,800원</td>
          </tr>
          <tr>
            <th>결제수단</th>
            <td>간편결제</td>
          </tr>
          <tr>
            <th>결재금액</th>
            <td className="colorRed">26,900원</td>
          </tr>
        </table>
        <div className="paymentFooter">
          <p className="paymentFooterTitle">예매취소 및 변경</p>
          <ul>
            <li>
              방문일자를 변경하시려면 예매취소 후 다시 예매하여 주십시오.{" "}
            </li>

            <li>
              예매내역의 부분취소는 [마이페이지 &#62;결제내역]에서 처리
              가능합니다.
            </li>
            <li>입장 이후에는 예매취소가 불가합니다.</li>
            <li>
              방문예정일이 지나면 예약은 자동취소 됩니다. 단, 행사기간 종료
              시에도 예약은 자동취소 됩니다.
            </li>
          </ul>
          <p className="paymentFooterTitle">티켓 사용안내</p>
          <ul>
            <li>지정하신 방문당일에 티켓을 사용하실 수 있습니다.</li>
            <li>
              사용방법
              <ul>
                <li> 1. 카카오 알림톡 또는 문자메세지의 웹티켓 URL 확인</li>
                <li> 2.웹티켓을 게이트에 제시 후 빠른 입장</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </MypageContainer>
  );
});

export default PaymentResult;
