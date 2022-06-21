import React, { memo } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const HelpPwdConfirmContainer = styled.form`
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 0 0 0;

  .top-area {
    margin-bottom: 65px;

    h2 {
      margin-bottom: 38px;
      padding: 8px 0;
      font-size: 28px;
      font-weight: 100;
      letter-spacing: -0.75px;
      line-height: 32px;
    }
  }

  .bottom-area {
    margin-bottom: 70px;

    .find-info {
      display: flex;
      align-items: center;
      width: 100%;
      margin: 20px 0;
      padding: 25px;
      border-top: 1px solid rgb(238, 238, 238);
      border-bottom: 1px solid rgb(238, 238, 238);
      background-color: #fafafa;

      input {
        width: 600px;
        margin-right: 50px;
        padding: 0 10px;
        border: none;
        border-radius: 3px;
        background-color: #f0f0f0;
        font-size: 14px;
        line-height: 35px;

        &:hover {
          border: #0092fa;
          background-color: #fff;
          color: #000;
        }
      }
    }
  }

  button {
    display: flex;
    justify-content: center;
    width: 140px;
    margin: 0 auto;
    padding: 10px;
    border: none;
    border-radius: 3px;
    background-color: #000;
    color: #fff;
    font-size: 15px;
    cursor: pointer;
  }
`;

const HelpPwdConfirm = memo(() => {
  // const location = React.useLocation();
  // console.log(location.pathname.substring(0, 14));

  // let navigateee = React.Navigate();
  // console.log(navigateee);

  return (
    <HelpPwdConfirmContainer>
      <div className="top-area">
        <h2>비밀번호 재확인</h2>
      </div>
      <div className="bottom-area">
        <div className="find-info">
          <input type="text" placeholder="비밀번호를 입력해주세요." />
        </div>
      </div>
      {/* <button type="submit">확인</button> */}
      {}
      <Link to="/TicketingPage/Login">확인</Link>
    </HelpPwdConfirmContainer>
  );
});

export default HelpPwdConfirm;
