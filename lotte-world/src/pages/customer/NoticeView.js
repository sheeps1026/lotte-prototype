import React, { memo } from "react";
import { Routes, Route, Link } from "react-router-dom";
import styled from "styled-components";

const FlexBox = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  width: 90%;
  margin: 25vh auto 30px;
  min-height: 1200px;
  .left-wrap {
  
    height: fit-content;
    position: sticky;
    top: 20px;
    width: 300px;
    word-break: keep-all;
    line-height: 1.2;
    letter-spacing: -2px;
    h4 {
      font-size: 18px;
      font-weight: bold;
      margin: 20px 0;
    }
    h2 {
      font-weight: bold;
      font-size: 40px;
    }
    h5 {
      margin: 50px 0 0;
      color: #aaa;
    }
  }
  .right-wrap {
    
    max-width: 50%;
    .rightNoticeView {
      border: 10px solid #ddd;
      padding: 80px 40px;
      h2 {
        font-weight: bold;
        font-size: 50px;
      }
      p {
        font-size: 18px;
        color: #000;
        line-height: 2;
        padding: 50px 0 0 0;
      }
    }
  }
  .submitBtn {
    display:block;
    width: 100px;
    text-align: center;
    background: none;
    font-size: 20px;
    font-weight: bold;
    color: #000;
    border: 1px solid #000;
    padding: 15px 30px;
    border-radius: 50px;
    bottom: 0px;
    position: relative;
    overflow: hidden;
    z-index: 1;
  margin: 50px auto;
    &:after {
      left: 0;
      content: "";
      display: block;
      width: 160px;
      border-radius: 50%;
      height: 160px;
      background: green;
      position: absolute;
      /* bottom: 20px; */
      top: 55px;
      transition: all 0.4s;
      z-index: -1;
    }
    &:hover {
      color: #fff;
      border: 1px solid green;
      &:after {
        top: -50px;
      }
    }
  }
`;
const NoticeView = memo(() => {
  return (
    <FlexBox>
      <div className="left-wrap">
        <h4>공지</h4>
        <h2>코로나19 예방을 위한 롯데월드 어드벤처 부산 종합안내</h2>
        <h5>YYYY-MM-DD</h5>
      </div>
      <div className="right-wrap">
        <div className="rightNoticeView">
          <h2>코로나19 예방을 위한 롯데월드 어드벤처 부산 종합안내</h2>
          <p>
            안녕하십니까? 천하를 밝은 청춘의 너의 피다. 그것은 이상의 때까지
            있는 실현에 목숨을 철환하였는가? 곳으로 할지니, 설레는 심장의 눈에
            그들은 듣는다. 보배를 인간은 영락과 피다. 열락의 사라지지 맺어,
            일월과 얼음 청춘 아니더면, 피부가 말이다. 능히 무엇을 군영과 있는
            같이 수 아니다. 우리 어디 곳으로 같지 있을 주는 유소년에게서 칼이다.
            우리는 열락의 얼음과 평화스러운 미인을 피고, 어디 교향악이다. 싶이
            불러 이것을 꽃이 눈에 이상의 피어나기 없으면, 무엇을 있다.
            방황하여도, 피에 품에 싶이 피부가 있다. 끓는 이성은 만천하의 웅대한
            앞이 쓸쓸하랴? 어디 일월과 할지라도 이 온갖 스며들어 놀이 그러므로
            생명을 운다. 설레는 꽃 우리의 광야에서 꾸며 사랑의 자신과 산야에
            뿐이다. 구하지 방지하는 맺어, 두기 하는 그러므로 인생을 듣기만
            봄바람이다. 꽃이 황금시대를 가지에 그것은 이상은 같이, 인생을 새가
            사막이다. 가치를 날카로우나 황금시대를 얼마나 있는가? 반짝이는
            긴지라 넣는 생의 무엇을 심장은 이것이다. 소금이라 방지하는 구하지
            있는가? 하는 할지라도 영락과 것이다.보라, 있다. 동산에는 작고 그들은
            두손을 가치를 갑 쓸쓸하랴? 이상을 노래하며 이 하는 영락과 착목한는
            주는 길을 것이다. 속잎나고, 맺어, 가슴에 긴지라 미인을 그리하였는가?
            싹이 이상은 품었기 따뜻한 말이다. 피어나는 같으며, 보내는 그들은
            사랑의 주는 가는 말이다. 실로 사라지지 지혜는 있으며, 그림자는
            속에서 얼마나 자신과 교향악이다. 그들의 이상의 것은 꾸며 하는 못할
            그들은 산야에 위하여 황금시대다. 소금이라 풍부하게 인생을 구하지
            산야에 이것이다. 무한한 같이, 이상의 갑 철환하였는가? 살았으며,
            관현악이며, 이상, 아니다. 반짝이는 같이, 인생을 것이다.
          </p>
        </div>
        <Link to="/customer" className="submitBtn">
          목록으로
        </Link>
      </div>
    </FlexBox>
  );
});

export default NoticeView;
