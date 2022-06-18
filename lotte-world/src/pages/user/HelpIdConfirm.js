import React, { memo } from "react";
import styled from "styled-components";

const HelpIdConfirmContainer = styled.div`
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
      background-color: #fafafa;

      p {
        width: 600px;
        margin-right: 50px;
        padding: 0 10px;
        border: none;
        border-radius: 3px;
        background-color: #f0f0f0;
        font-size: 14px;
        line-height: 35px;
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

const HelpIdConfirm = memo(() => {
  return (
    <HelpIdConfirmContainer>
      <form>
        <div className="top-area">
          <h2>아이디 찾기</h2>
          <p>회원님의 아이디입니다.</p>
        </div>
        <div className="bottom-area">
          <div className="find-info">
            <p>*** 아이디 보여지는 칸</p>
          </div>
        </div>
        <button type="submit">로그인</button>
      </form>
    </HelpIdConfirmContainer>
  );
});

export default HelpIdConfirm;
