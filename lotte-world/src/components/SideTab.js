import React, { memo } from "react";
import styled from "styled-components";

import Img from "../assets/images/components/enjoy.jpg";
import CloseBtn from "../assets/images/components/close.png";

const Background = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 50;
`;

const SideTabContainer = styled.div`
  position: fixed;
  bottom: 0;
  right: 0;
  width: 1220px;
  height: 620px;
  padding: 43px 0 37px 60px;
  background-color: #fff;
  z-index: 60;

  header {
    display: flex;
    align-items: center;
    margin-bottom: 30px;

    p {
      height: 36px;
      padding-right: 15px;
      color: rgb(47, 125, 78);
      font-size: 24px;
      font-weight: 700;
      letter-spacing: -0.36px;
      line-height: 36px;
      cursor: pointer;

      &:nth-child(2) {
        display: flex;
        align-items: center;
        padding-right: 15px;
      }

      &:nth-child(2)::before {
        content: "";
        display: block;
        width: 1px;
        height: 16px;
        margin-right: 15px;
        background-color: rgb(229, 229, 229);
      }
    }

    button {
      position: absolute;
      top: 0;
      right: 0;
      width: 85px;
      height: 85px;
      background: none;
      cursor: pointer;
    }
  }

  div.sidetab-mid {
    &::after {
      content: "";
      display: block;
      width: 100%;
      height: 1px;
      margin-top: 35px;
      margin-bottom: 37px;
      background-color: rgb(229, 229, 229);
    }

    img {
      width: 240px;
      height: 282px;
    }

    p {
      margin-top: 24px;
      padding-bottom: 30px;
      color: rgb(51, 51, 51);
      font-size: 20px;
      font-weight: 700;
      letter-spacing: -0.36px;
      line-height: 30px;
    }
  }

  div.sidetab-bottom {
    p {
      color: rgb(51, 51, 51);
      font-size: 24px;
      letter-spacing: -0.36px;
      line-height: 36px;

      span {
        font-weight: 700;
      }
    }
  }
`;

const SideTab = memo(() => {
  return (
    <Background>
      <SideTabContainer>
        <header>
          <p class="active">운휴 어트랙션</p>
          <p>운휴 공연</p>
          <button>
            <img src={CloseBtn} alt="" />
          </button>
        </header>
        <div className="sidetab-mid">
          <img src={Img} alt="" />
          <p>오거스후룸</p>
        </div>
        <div className="sidetab-bottom">
          <p>
            오늘의 운영시간 : <span>10:00 - 21:00</span>
          </p>
        </div>
      </SideTabContainer>
    </Background>
  );
});

export default SideTab;