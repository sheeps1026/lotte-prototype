import React, { memo } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const HelpPwdChangeContainer = styled.div`
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

    p {
      margin-bottom: 10px;
      font-size: 42px;
      font-weight: 100;
      letter-spacing: -2.1px;
      line-height: 54px;
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

      label {
        width: 150px;
      }

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

const HelpPwdChange = memo(() => {
  return (
    <HelpPwdChangeContainer>
      <form>
        <div className="top-area">
          <h2>비밀번호 찾기</h2>
          <p>비밀번호를 다시 설정하실 수 있습니다.</p>
        </div>
        <div className="bottom-area">
          <div className="find-info">
            <label htmlFor="">비밀번호</label>
            <input type="text" placeholder="새 비밀번호를 입력해주세요." />
          </div>
          <div className="find-info">
            <label htmlFor="">비밀번호 확인</label>
            <input type="text" placeholder="새 비밀번호를 확인해주세요." />
          </div>
        </div>
        {/* <button type="submit">확인</button> */}
        <Link to="/TicketingPage/Login">확인</Link>
      </form>
    </HelpPwdChangeContainer>
  );
});

export default HelpPwdChange;
