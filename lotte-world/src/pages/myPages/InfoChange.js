import React, { memo } from "react";
import styled from "styled-components";

const InfoContainer = styled.form`
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

  .info-bottom {
    display: flex;
    justify-content: space-between;

    button {
      width: 230px;
      padding: 15px 0;
      border: none;
      background-color: #000;
      color: #fff;
      font-size: 18px;
      font-weight: 700;
      cursor: pointer;
    }
  }
`;

const InfoChange = memo(() => {
  return (
    <InfoContainer>
      <h2>회원정보 변경</h2>
      <div className="info">
        <label htmlFor="">아이디</label>
        <input type="text" disabled />
        <label htmlFor="">비밀번호</label>
        <input type="password" />
        <label htmlFor="">비밀번호 확인</label>
        <input type="password" />
        <label htmlFor="">이름</label>
        <input type="text" disabled />
        <div className="info-rrn">
          <label htmlFor="">주민번호</label>
          <div>
            <input type="text" disabled />
            <p>-</p>
            <input type="text" disabled />
          </div>
        </div>
        <label htmlFor="">전화번호</label>
        <input type="number" />
        <label htmlFor="">이메일</label>
        <input type="email" />
      </div>
      <div className="info-bottom">
        <button type="button">회원탈퇴</button>
        <button type="submit">정보수정</button>
      </div>
    </InfoContainer>
  );
});

export default InfoChange;
