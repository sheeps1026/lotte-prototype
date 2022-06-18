import React, { memo } from "react";
import styled from "styled-components";

import CheckIcon from "../../assets/images/user/SigninConfirm/check.png";

const SigninConfirmContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 460px;
  margin: 0 auto;

  h2 {
    margin-bottom: 50px;
    padding: 60px 0 20px 0;
    font-size: 44px;
    font-weight: 700;
  }

  img {
    width: 100px;
    height: 100px;
    color: red;
    opacity: 0.3;
  }

  p {
    text-align: center;
    margin-bottom: 10px;
    font-size: 42px;
    font-weight: 100;
    letter-spacing: -2.1px;
    line-height: 54px;

    &:nth-child(4) {
      margin-bottom: 50px;
      color: #b48d83;
      font-size: 20px;
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

const SigninConfirm = memo(() => {
  return (
    <SigninConfirmContainer>
      <h2>롯데월드 회원가입</h2>
      <img src={CheckIcon} alt="" />
      <p>
        회원가입이
        <br />
        완료되었습니다.
      </p>
      <p>회원가입을 축하합니다.</p>
      <button type="submit">로그인</button>
    </SigninConfirmContainer>
  );
});

export default SigninConfirm;
