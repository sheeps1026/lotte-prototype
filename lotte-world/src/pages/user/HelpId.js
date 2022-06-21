// @filename    : HelpId.js
// @author      :
// @description : 등록되어 있는 회원 정보 중 택 1 확인 (전화번호, 이메일)

import React, { memo } from "react";
import styled from "styled-components";

const HelpIdContainer = styled.div`
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

    .ui-radio {
      input {
        margin-right: 5px;
        font-size: 15px;
        height: 14px;
      }

      label {
        font-size: 15px;
        letter-spacing: -0.75px;
        line-height: 18px;

        &:nth-child(2) {
          margin-right: 20px;
        }
      }
    }

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

const HelpId = memo(() => {
  return (
    <HelpIdContainer>
      <form>
        <div className="top-area">
          <h2>아이디 찾기</h2>
          <p>
            개인정보 확인 후<br />
            아이디를 확인하실 수 있습니다.
          </p>
        </div>
        <div className="bottom-area">
          <div className="ui-radio">
            <input type="radio" name="info" id="find-way-hp" />
            <label htmlFor="find-way-hp">전화번호</label>
            <input type="radio" name="info" id="find-way-email" />
            <label htmlFor="find-way-email">이메일</label>
          </div>
          <div className="find-info">
            <input
              type="text"
              placeholder="선택하신 개인정보를 입력해주세요."
            />
          </div>
        </div>
        <button type="submit">확인</button>
      </form>
    </HelpIdContainer>
  );
});

export default HelpId;
