// @filename    : Login.js
// @description : 로그인 폼 (아이디&비밀번호 찾기, 회원가입 버튼이 있음)

import React, { memo } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const LoginContainer = styled.div`
  width: 460px;
  margin: 0 auto;
  padding-bottom: 100px;

  h2 {
    text-align: center;
    padding: 60px 0 20px 0;
    font-size: 44px;
    font-weight: 700;
  }

  form {
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
    }

    button {
      width: 100%;
      padding: 15px 0;
      border: none;
    border-radius: 3px;
      background-color: #000;
      color: #fff;
      font-size: 18px;
      font-weight: 700;
      cursor: pointer;
    }

    .login-keep {
      margin-bottom: 30px;

      input {
        margin-left: 0;
        margin-right: 5px;
      }
    }
  }

  ul {
    display: flex;
    justify-content: space-around;
    margin-top: 30px;

    l
  }
`;

const Login = memo(() => {
  return (
    <LoginContainer>
      <h2>로그인</h2>
      <form>
        <div className="info">
          <label htmlFor="">아이디</label>
          <input type="text" />
          <label htmlFor="">비밀번호</label>
          <input type="password" />
        </div>
        <div className="login-keep">
          <input type="checkbox" />
          <label htmlFor="">아이디저장</label>
        </div>
        <Link to="/TicketingPage">
          <button type="submit">로그인</button>
        </Link>
      </form>
      <ul>
        <li>
          <Link to="/TicketingPage/HelpId">아이디 찾기</Link>
        </li>
        <li>
          <Link to="/TicketingPage/HelpPwd">비밀번호 찾기</Link>
        </li>
        <li>
          <Link to="/TicketingPage/Signin">회원가입</Link>
        </li>
      </ul>
    </LoginContainer>
  );
});

export default Login;
