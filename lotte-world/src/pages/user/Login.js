// @filename    : Login.js
// @description : 로그인 폼 (아이디&비밀번호 찾기, 회원가입 버튼이 있음)

import React, { memo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

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
  }
`;

const Login = memo((setIsLogin) => {
  const history = useNavigate();
  const [login, setLogin] = useState();
  // const [userId, setUserId] = useState("");
  // const [userPwd, setUserPwd] = useState("");
  // const [check, setCheck] = useState(false);

  // const saveData = () => {
  //   const userInfo = [{ id: userId }, { pwd: userPwd }];

  //   window.localStorage.setItem("userName", JSON.stringify(userInfo));
  // };

  // const callData = () => {
  //   setCheck(true);
  // };

  // const onChange = (e) => {
  //   setUserName(e.target.value);
  //   setCheck(false);
  // };

  const [inpval, setInpval] = useState({
    id: "",
    pwd: "",
  });

  const getData = (e) => {
    // console.log(e.target.value);

    // value, name 고정인듯
    const { value, name } = e.target;
    // console.log(value, name);

    setInpval(() => {
      return {
        ...inpval,
        [name]: value,
      };
    });
  };

  //로그인 버튼 클릭시
  const addData = (e) => {
    e.preventDefault();
    console.log(e);

    // const getUserArr = localStorage.getItem("members");
    // console.log(getUserArr);

    // const { id, pwd } = inpval;

    // if (id === "") {
    //   alert("아이디를 입력하세요");
    // } else if (pwd === "") {
    //   alert("비밀번호를 입력하세요");
    // } else {
    //   if (getUserArr && getUserArr.length) {
    //     const userData = JSON.parse(getUserArr);
    //     // console.log(userData);

    //     const userLogin = userData.filter((v, i) => {
    //       return (v.id === id && v.pwd) === pwd;
    //     });

    //     // console.log(userLogin);

    //     if (userLogin.length === 0) {
    //       alert("아이디 또는 비밀번호를 잘못 입력했습니다.");
    //     } else {
    //       alert("로그인 되었습니다.");

    //       localStorage.setItem("members_login", JSON.stringify(getUserArr));

    //       history("/TicketingPage");
    //     }
    //   }
    // }
  };

  const loginClick = (e) => {
    e.preventDefault(e);

    if (e.target.id.value === "" || e.target.pwd.value === "") {
      alert("아이디와 비밀번호를 입력하세요");
    } else if (e.target.id.value == "test" && e.target.pwd.value == "1234") {
      alert("로그인 되었습니다.");
      history("/TicketingPage");
      setIsLogin("로그아웃");
    }
  };
  return (
    <LoginContainer>
      <h2>로그인</h2>
      <form onSubmit={loginClick}>
        <div className="info">
          <label htmlFor="">아이디</label>
          <input type="text" name="id" onChange={getData} />

          <label htmlFor="">비밀번호</label>
          <input type="text" name="pwd" onChange={getData} />
        </div>
        <div className="login-keep">
          <input type="checkbox" />
          <label htmlFor="">아이디저장</label>
        </div>
        {/* <Link to="/TicketingPage"> */}
        {/* <button type="submit" onClick={addData}>
          로그인
        </button> */}
        <button type="submit">로그인</button>
        {/* </Link> */}
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
