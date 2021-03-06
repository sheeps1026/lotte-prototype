import React, { memo } from "react";
import { Link, useLocation,useNavigate } from "react-router-dom";
import styled from "styled-components";
import bg from "../../assets/images/bg_pc_visual.png";
import useAxios from "axios-hooks";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getPaymentInfo, deletePaymentInfo } from "../../slice/PaymentSlice";

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
  const { data, loading, error } = useSelector((state) => state.PaymentSlice);

  const dispatch = useDispatch();

  const navigate = useNavigate();
    
  React.useEffect(() => {
      dispatch(getPaymentInfo({ merchant_uid: state.data }));
    }, [dispatch]);

  

  const paymentDelete = React.useCallback(
    (e) => {
      e.preventDefault();
    console.log("????????????");
    const id = e.target.dataset.id;
      if (
        window.confirm(`?????? ?????? ?????????????????????????`)
      ) {
        dispatch(deletePaymentInfo({ id: id }));
      alert("??????????????? ?????????????????????.");
          navigate("/TicketingPage");
      }
    },
    [dispatch]
  );

  return(
    <>
  {data ? (
    <MypageContainer>
      <div className="pageContainer">
        <h3>?????? ????????????</h3>

        <h4>????????????</h4>
        <table className="PaymentListTable">
          <tbody>
            <tr>
              <th>?????????</th>
              <td>{data[0].name}</td>
            </tr>
            <tr>
              <th>????????????</th>
              <td>{data[0].merchant_uid}</td>
              {/* <td className="colorRed">1234-1234-1234-1234</td> */}
            </tr>
            <tr>
              <th>??????</th>
              <td>????????????</td>
            </tr>
            <tr>
              <th>????????????</th>
              {/* <td>2022.05.30(???)</td> */}

              <td>{data[0].paymentDay}</td>
            </tr>
            <tr>
              <th>????????????</th>
              <td>{data[0].paymentDate}</td>
              {/* <td>2022.06.04(???)</td> */}
            </tr>
            <tr>
              <th>????????????</th>
              <td>{data[0].pay_method}</td>
              {/* <td>????????????</td> */}
            </tr>
            <tr>
              <th>????????????</th>
              <td>{(data[0].amount).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}???</td>
              {/* <td className="colorRed">26,900???</td> */}
            </tr>
            {/* <tr>
            <th>??????</th>
            <td>????????? PC??????</td>
          </tr> 
            <tr>
              <th>????????????</th>
              <td>2022.06.04(???) 17:00:00</td>
            </tr>
            */}
          </tbody>
        </table>
        <h4>????????? ??????</h4>
        <table className="PaymentListTable">
          <tbody>
            <tr>
              <th>?????????</th>
              {/* <td>?????????</td> */}
              <td>{data[0].visit_name}</td>
            </tr>
            <tr>
              <th>?????????</th>
              <td>{data[0].visit_tel}</td>
            </tr>
            <tr>
              <th>?????????</th>
              <td>{data[0].visit_mail}</td>
            </tr>
          </tbody>
        </table>
        
        <button className="orderCancel" type="button" data-id={data[0].id} onClick={paymentDelete}>
          ????????????
        </button>
        {/* </Link> */}
      </div>
    </MypageContainer>
  ) : (
    <>????????? ??????</>
  )}
  </>
  )
  
});

export default PaymentView;
