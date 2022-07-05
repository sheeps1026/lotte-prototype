// @filename    : Signin.js
// @description : 이름, 아이디, 비밀번호, 비밀번호 확인, 주민번호,
//                성별, 휴대전화, 이메일 정보를 입력하여 가입

import React, { memo } from "react";
import { Link } from "react-router-dom";
import useAxios from "axios-hooks";

import regexHelper from "../../libs/RegexHelper";

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
  // 백엔드에 데이터 저장을 위한 Ajax 요청 객체 생성
  const [{ loading }, refetch] = useAxios(
    {
      url: "http://localhost:3001/info",
      method: "POST",
    },
    { manual: true }
  );

  const onSubmit = (e) => {
    e.preventDefault();

    // 이벤트가 발생한 폼 객체
    const current = e.target;

    // 입력값에 대한 유효성 검사
    try {
      // 아이디 검사
      regexHelper.value(current.id, "필수 정보입니다. (아이디)");
      regexHelper.idCheck(
        current.id,
        5,
        20,
        "5~20자의 영문 소문자, 숫자와 특수기호(_),(-)만 사용 가능합니다."
      );

      // 비밀번호 검사
      regexHelper.value(current.pwd, "필수 정보입니다. (비밀번호)");
      regexHelper.pwdCheck(
        current.pwd,
        8,
        16,
        "8~16자 영문 대 소문자, 숫자, 특수문자를 사용하세요."
      );
      regexHelper.pwdCompareTo(
        current.pwd,
        current.pwdCheck,
        "비밀번호가 일치하지 않습니다."
      );

      // 이름 검사
      regexHelper.value(current.name, "필수 정보입니다. (이름)");
      regexHelper.nameCheck(
        current.name,
        "한글과 영문 대 소문자를 사용하세요. (특수기호, 공백 사용 불가)"
      );

      // 생년월일 검사
      // regexHelper.yearCheck(
      //   current.year,
      //   "태어난 년도 4자리를 정확하게 입력하세요."
      // );

      // 이메일 검사
      regexHelper.emailCheck(current.email, "이메일 주소를 다시 확인해주세요.");

      // 휴대전화 검사
      regexHelper.value(current.tel, "필수 정보입니다. (휴대전화)");
      regexHelper.phoneCheck(current.tel, "형식에 맞지 않는 번호입니다.");
    } catch (e) {
      window.alert(e.message);
      e.field.focus();
      return;
    }

    let json = null;

    // 입력받은 값 취득
    const id = current.id.value; // 아이디
    const pwd = current.pwd.value; // 비밀번호
    const name = current.name.value; // 이름
    const tel = current.tel.value; // 휴대전화
    const email = current.email.value; // 이메일

    (async () => {
      try {
        const response = await refetch({
          data: {
            id: id,
            pwd: pwd,
            name: name,
            tel: tel,
            email: email,
          },
        });

        json = response.data;
      } catch (e) {
        console.error(e);
        window.alert(
          `[${e.response.status} ${e.response.statusText}\n${e.message}]`
        );
      }

      if (json != null) {
        window.alert("저장되었습니다.");
      }
    })();
  };

  return (
    <SigninContainer onSubmit={onSubmit}>
      <h2>회원가입</h2>
      <div className="info">
        <label htmlFor="id">아이디</label>
        <input type="text" name="id" placeholder="아이디" />

        <label htmlFor="pwd">비밀번호</label>
        <input type="password" name="pwd" placeholder="비밀번호" />
        <label htmlFor="pwdCheck" placeholder="비밀번호 확인">
          비밀번호 확인
        </label>
        <input type="password" name="pwdCheck" />

        <label htmlFor="name">이름</label>
        <input type="text" name="name" placeholder="이름" />

        <div className="info-rrn">
          <label htmlFor="">주민번호</label>
          <div>
            <input type="text" />
            <p>-</p>
            <input type="text" />
          </div>
        </div>
        <label htmlFor="tel">전화번호</label>
        <input type="text" name="tel" placeholder="전화번호" />

        <label htmlFor="email">이메일</label>
        <input type="email" name="email" placeholder="이메일" />
      </div>
      {/* <Link to="/TicketingPage/SigninConfirm"> */}
      <button type="submit">확인</button>
      {/* </Link> */}
    </SigninContainer>
  );
});

export default Signin;
