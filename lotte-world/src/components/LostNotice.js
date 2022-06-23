import React, { memo } from "react";
import styled from "styled-components";

import CloseBtn from "../assets/images/components/Email/close.png";
import Img from "../assets/images/lost.png";

const Background = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left:0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 50;
`;

const EmailContainer = styled.div`
  width: 900px;
  height: 675px;
  padding: 0 40px;
  background-color: #fff;

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    h2 {
      padding: 39px 0;
      color: rgb(51, 51, 51);
      font-size: 26px;
      font-weight: 700;
      letter-spacing: -1.56px;
      line-height: 39px;
    }

    button {
      border: none;
      background: none;
      font-size: 30px;
      cursor: pointer;
      z-index: 20;

      img {
        width: 24px;
        height: 24px;
      }
    }
  }

  div.inner {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 40px;

    h3 {
      margin-top: 60px;
      color: rgb(51, 51, 51);
      font-size: 32px;
      font-weight: 600;
      letter-spacing: -0.36px;
      line-height: 48px;
    }
    img{
      width: 100%;
    }
  }
`;

const Email = memo(({ setOpenLost }) => {
  return (
    <Background>
      <EmailContainer>
        <header>
          <h2>분실물 처리 절차</h2>
          <button onClick={() => setOpenLost(false)}>
            <img src={CloseBtn} alt="" />
          </button>
        </header>
        <div className="inner">
          <img src={Img} alt="" />
         
        </div>
      </EmailContainer>
    </Background>
  );
});

export default Email;
