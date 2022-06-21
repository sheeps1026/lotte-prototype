// @filename    : Signin.js
// @author      :
// @description : 이름, 아이디, 비밀번호, 비밀번호 확인, 주민번호,
//                성별, 휴대전화, 이메일 정보를 입력하여 가입

import React, { memo } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const SigninContainer = styled.form`
  width: 460px;
  margin: 0 auto;

  h2 {
    text-align: center;
    padding: 60px 0 20px 0;
    font-size: 44px;
    font-weight: 700;
  }

  .info {
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;

    label {
      margin: 19px 0 8px 0;
      font-size: 14px;
      font-weight: 700;
    }

    input {
      padding: 10px 110px 10px 14px;
      border: 1px solid rgb(218, 218, 218);
    }

    .info-rrn {
      margin-top: 19px;
      margin-bottom: 8px;

      div {
        display: flex;
        align-items: center;
        margin-top: 8px;

        input {
          width: 100%;
        }

        p {
          margin: 0 20px;
        }
      }
    }
  }

  button {
    width: 100%;
    padding: 15px 0;
    border: none;
    background-color: #000;
    color: #fff;
    font-size: 18px;
    font-weight: 700;
    cursor: pointer;
  }
`;

const Signin = memo(() => {
  return (
    <SigninContainer>
      <h2>회원가입</h2>
      <div className="info">
        <label htmlFor="">아이디</label>
        <input type="text" />
        <label htmlFor="">비밀번호</label>
        <input type="password" />
        <label htmlFor="">비밀번호 확인</label>
        <input type="password" />
        <label htmlFor="">이름</label>
        <input type="text" />
        <div className="info-rrn">
          <label htmlFor="">주민번호</label>
          <div>
            <input type="text" />
            <p>-</p>
            <input type="text" />
          </div>
        </div>
        <label htmlFor="">전화번호</label>
        <input type="number" />
        <label htmlFor="">이메일</label>
        <input type="email" />
      </div>
      <Link to="/TicketingPage/SigninConfirm">회원가입</Link>
    </SigninContainer>
  );
});

export default Signin;
