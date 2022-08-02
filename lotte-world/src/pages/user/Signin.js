// @filename    : Signin.js
// @description : 이름, 아이디, 비밀번호, 비밀번호 확인, 주민번호,
//                성별, 휴대전화, 이메일 정보를 입력하여 가입

import React, { memo, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const SigninContainer = styled.form`
  width: 460px;
  margin: 0 auto;
  padding-bottom: 100px;

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
    border-radius: 3px;
    background-color: #000;
    color: #fff;
    font-size: 18px;
    font-weight: 700;
    cursor: pointer;
  }
`;

const Signin = memo(() => {
  const history = useNavigate();

  const [inpval, setInpval] = useState({
    id: "",
    pwd: "",
    name: "",
    tel: "",
    email: "",
  });

  const [data, setData] = useState([]);
  console.log(inpval);

  const getData = (e) => {
    // console.log(e.target.value);

    // value, name 고정인듯
    const { value, name } = e.target;
    // 입력값 확인
    // console.log(value, name);

    setInpval(() => {
      return {
        ...inpval,
        [name]: value,
      };
    });
  };

  const addData = (e) => {
    e.preventDefault();

    const { id, pwd, name, tel, email } = inpval;

    if (id === "") {
      alert("아이디를 입력하세요");
    } else if (pwd === "") {
      alert("비밀번호를 입력하세요");
    } else if (name === "") {
      alert("이름을 입력하세요");
    } else if (tel === "") {
      alert("전화번호를 입력하세요");
    } else if (email === "") {
      alert("이메일을 입력하세요");
    } else if (!email.includes("@")) {
      alert("이메일 형식이 맞지 않습니다.");
    } else {
      alert("회원가입이 완료되었습니다");

      localStorage.setItem("members", JSON.stringify([...data, inpval]));

      history("/TicketingPage/Login");
    }
  };

  return (
    <SigninContainer>
      <h2>회원가입</h2>
      <div className="info">
        <label htmlFor="">아이디</label>
        <input type="text" name="id" onChange={getData} placeholder="아이디" />

        <label htmlFor="">비밀번호</label>
        <input
          type="text"
          name="pwd"
          onChange={getData}
          placeholder="비밀번호"
        />

        <label htmlFor="">이름</label>
        <input type="text" name="name" onChange={getData} placeholder="이름" />

        <label htmlFor="">전화번호</label>
        <input
          type="text"
          name="tel"
          onChange={getData}
          placeholder="전화번호"
        />

        <label htmlFor="">이메일</label>
        <input
          type="text"
          name="email"
          onChange={getData}
          placeholder="이메일"
        />
      </div>
      <button type="submit" onClick={addData}>
        확인
      </button>
      {/* </Link> */}
    </SigninContainer>
  );
});

export default Signin;
