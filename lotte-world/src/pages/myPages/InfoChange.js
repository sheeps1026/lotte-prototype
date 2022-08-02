import React, { memo, useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

import InfoDelete from "../../components/alert/InfoDelete";

const InfoContainer = styled.form`
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

  .info-bottom {
    display: flex;
    justify-content: space-between;

    a {
      button {
        width: 270px;
        padding: 15px 0;
        border: none;
        background-color: #000;
        color: #fff;
        font-size: 18px;
        font-weight: 700;
        cursor: pointer;
      }

      &.info-delete {
        button {
          width: 130px;
        }
      }
    }

    > button {
      width: 270px;
      padding: 15px 0;
      border: none;
      background-color: #2b72c9;
      color: #fff;
      font-size: 18px;
      font-weight: 700;
      cursor: pointer;
    }
  }
`;

const InfoChange = memo(() => {
  const history = useNavigate();

  // 회원탈퇴 모달
  let [openDelete, setOpenDelete] = useState(false);

  const [inpval, setInpval] = useState({
    id: "",
    pwd: "",
    name: "",
    tel: "",
    email: "",
  });

  const [data, setData] = useState([]);

  const getData = (e) => {
    // console.log(e.target.value);

    const { value, name } = e.target;
    // 입력값 확인
    console.log(value, name);

    setInpval(() => {
      return {
        ...inpval,
        [name]: value,
      };
    });
  };

  const getUserArr = localStorage.getItem("members");
  // console.log(getUserArr);
  const userData = JSON.parse(getUserArr);
  // console.log(userData);
  // console.log(userData[0]);
  // console.log(userData[0].id);

  const addData = (e) => {
    e.preventDefault();

    localStorage.setItem("members", JSON.stringify([...data, inpval]));

    history("/TicketingPage/Login");
  };

  return (
    <InfoContainer>
      {openDelete && <InfoDelete setOpenDelete={setOpenDelete} />}

      <h2>회원정보 변경</h2>
      <div className="info">
        <label htmlFor="">아이디</label>
        <input type="text" name="id" disabled />

        <label htmlFor="">비밀번호</label>
        <input
          type="text"
          name="pwd"
          onChange={getData}
          placeholder={userData[0].pwd}
        />

        <label htmlFor="">이름</label>
        <input type="text" name="name" disabled />

        <label htmlFor="">전화번호</label>
        <input type="text" name="tel" onChange={getData} />

        <label htmlFor="">이메일</label>
        <input type="text" name="email" onChange={getData} />
      </div>
      <div className="info-bottom">
        <Link
          to="/TicketingPage/InfoChange"
          className="info-delete"
          onClick={() => {
            setOpenDelete(true);
          }}
        >
          <button type="button">회원탈퇴</button>
        </Link>
        <button type="submit" onClick={addData}>
          정보수정
        </button>
      </div>
    </InfoContainer>
  );
});

export default InfoChange;
