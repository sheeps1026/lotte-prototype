import React, { memo } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Background = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 50;
`;

const DeleteContainer = styled.div`
  width: 504px;
  height: 300px;
  background-color: #fff;
  border-radius: 15px;

  header {
    position: relative;
    display: flex;
    justify-content: center;
    margin: 0 auto;
    padding: 20px 0;

    h1 {
      padding: 0 30px;
      color: #222;
      font-size: 22px;
      font-weight: 700;
    }

    button {
      position: absolute;
      top: 20px;
      right: 10px;
      border: none;
      background: none;
      cursor: pointer;

      img {
        width: 20px;
        height: 20px;
        opacity: 0.5;
      }
    }
  }

  .pop-mid {
    height: 135px;
    padding: 15px 40px;
    padding-top: 30px;
    border-top: 1px solid rgba(0, 0, 0, 0.2);

    p {
      color: crimson;

      &:last-child {
        margin-top: 20px;
        color: #333;
      }
    }
  }

  .pop-bottom {
    display: flex;
    justify-content: space-between;
    margin: 18px 25px;

    button {
      width: 222px;
      border: 1px solid #2b72c9;
      border-radius: 3px;
      background-color: #fff;
      color: #2b72c9;
      font-size: 16px;
      line-height: 60px;
      cursor: pointer;
    }

    .info-delete {
      background-color: #2b72c9;
      color: #fff;
    }
  }
`;

const InfoDelete = memo(({ setOpenDelete }) => {
  const history = useNavigate();

  const deleteData = (e) => {
    localStorage.removeItem("members");

    alert("회원탈퇴가 완료되었습니다.");

    history("/TicketingPage/Login");
  };

  return (
    <Background>
      <DeleteContainer>
        <header>
          <h1>회원탈퇴</h1>
        </header>
        <div className="pop-mid">
          <p>
            탈퇴 후에는 해당 아이디로 다시 가입할 수 없으며 <br /> 아이디와
            데이터는 복수할 수 없습니다.
          </p>
          <p>안내 사항을 모두 확인하였으며 이에 동의합니다.</p>
        </div>
        <div className="pop-bottom">
          <button onClick={() => setOpenDelete(false)}>취소</button>
          <button className="info-delete" onClick={deleteData}>
            확인
          </button>
        </div>
      </DeleteContainer>
    </Background>
  );
});

export default InfoDelete;
