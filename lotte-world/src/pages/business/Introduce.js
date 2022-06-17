import React, { memo } from "react";
import styled from "styled-components";

import bg1 from "../../assets/images/pages/business/Introduce/bg1.jpg";
import bg1Img1 from "../../assets/images/pages/business/Introduce/bg1-img1.png";
import bg1Img2 from "../../assets/images/pages/business/Introduce/bg1-img2.png";
import bg1Img3 from "../../assets/images/pages/business/Introduce/bg1-img3.png";
import bg2 from "../../assets/images/pages/business/Introduce/bg2.jpg";
import bg2Img1 from "../../assets/images/pages/business/Introduce/bg2-img1.png";
import bg2Img2 from "../../assets/images/pages/business/Introduce/bg2-img2.png";

const IntroduceContainer = styled.div`
  h2 {
    width: 1540px;
    margin: 0 auto;
    margin-top: 175px;
    color: #333333;
    font-size: 60px;
    font-weight: 700;
    letter-spacing: -3.6px;
    line-height: 60px;
  }

  .bg1 {
    position: relative;
    margin-top: 100px;
    background: url(${bg1}) no-repeat center / cover;

    .about {
      position: relative;
      width: 1540px;
      height: 1452px;
      margin: 0 auto;

      p {
        position: absolute;
        top: 235px;
        color: #fff;
        font-size: 40px;
        font-weight: 600;
        letter-spacing: -3px;
        line-height: 52px;
        z-index: 2;

        &:nth-child(2) {
          top: 495px;
          left: calc(50% + 140px);
          font-size: 24px;
          font-weight: 400;
          letter-spacing: -1.8px;
          line-height: 34px;
        }
      }
    }

    .bg1-img1 {
      position: absolute;
      top: 16%;
      width: 100%;
      z-index: 1;
    }

    .bg1-img2 {
      position: absolute;
      top: 55%;
      width: 100%;
    }

    .bg1-img3 {
      position: absolute;
      top: 80%;
      width: 100%;
    }

    .ent {
      position: relative;
      width: 1540px;
      height: 2667px;
      margin: 0 auto;

      h2 {
        position: absolute;
        top: 393px;
        color: #fff;
        font-size: 140px;
        letter-spacing: -4px;
        line-height: 140px;
      }

      div {
        position: absolute;

        &.ent-item1 {
          top: 1400px;
          right: 0;
          text-align: right;
        }

        &.ent-item2 {
          top: 1850px;
          left: 0;
        }

        h3 {
          font-size: 60px;
          font-weight: 900;
          letter-spacing: -3px;
          line-height: 90px;
        }

        p {
          margin-top: 35px;
          font-size: 20px;
          font-weight: 400;
          letter-spacing: -1px;
          line-height: 32px;
        }
      }
    }
  }

  .bg2 {
    background: url(${bg2}) no-repeat center / cover;
    padding-top: 602px;
    padding-bottom: 350px;
    color: #fff;

    .ent {
      width: 1540px;
      margin: 0 auto;
      display: flex;
      justify-content: space-evenly;

      div {
        text-align: center;

        h3 {
          margin-top: 45px;
          font-size: 36px;
          font-weight: 700;
          letter-spacing: -0.36px;
          line-height: 43.2px;
        }

        p {
          margin-top: 20px;
          font-size: 20px;
          font-weight: 400;
          letter-spacing: -0.36px;
          line-height: 30px;
        }

        &:last-child {
          margin-top: 216px;
        }
      }
    }
  }
`;

const Introduce = memo(() => {
  return (
    <IntroduceContainer>
      <h2>롯데월드 어드벤처 부산소개</h2>
      <div className="bg1">
        <div className="about">
          <p>
            롯데월드 어드벤처 부산은
            <br />
            '동화 속 왕국'이라는 테마로
            <br /> 다양한 어트랙션과 공연들이 펼쳐지는
            <br /> 마법과 환상의 세계입니다.
          </p>
          <p>
            국내 최초로 도입하는
            <br /> 2종 어트랙션을 포함한 다양한 어트랙션 및<br /> 국내 수준급의
            공연 컨텐츠,
            <br /> 국내 최초로 도입하는 롤러코스터 레스토랑 등<br /> 손님
            여러분께 다채로운 볼거리와
            <br /> 즐길거리를 제공하는
            <br /> 오시리아 관광단지의 핵심 랜드마크 공간입니다.
          </p>
        </div>
        <img className="bg1-img1" src={bg1Img1} alt="" />
        <img className="bg1-img2" src={bg1Img2} alt="" />
        <img className="bg1-img3" src={bg1Img3} alt="" />
        <div className="ent">
          <h2>ENTERTAINMENT</h2>
          <div className="ent-item1">
            <h3>자이언트디거</h3>
            <p>
              국내 최초 도입되는 기종으로
              <br /> 1,000m가 넘는 트랙 위를 100km/h 이상의 속도로 질주하며
              <br /> 수차례 360도 회전하는 어트랙션
            </p>
          </div>
          <div className="ent-item2">
            <h3>자이언트스플래쉬</h3>
            <p>
              세계에서 네 번째로 설치되는 기종으로
              <br /> 높이가 약 40m에 달하는 ‘U’자 모양의 트랙을
              <br /> 시속 100km/h 속도로 여러 차례 왕복하는
              <br /> 초대형 어트랙션
            </p>
          </div>
        </div>
      </div>
      <div className="bg2">
        <div className="ent">
          <div>
            <img src={bg2Img1} alt="" />
            <h3>
              로티스
              <br /> 매직 포레스트
            </h3>
            <p>
              마녀의 마법에서 풀려난 매직 포레스트
              <br /> 용감한 기사로티를 위한
              <br /> 축제 퍼레이드
            </p>
          </div>
          <div>
            <img src={bg2Img2} alt="" />
            <h3>
              푸드드롭
              <br /> 레스토랑
            </h3>
            <p>
              국내 최초로 도입되는
              <br /> 트랙을 이용하여 서빙하는 레스토랑
            </p>
          </div>
        </div>
      </div>
    </IntroduceContainer>
  );
});

export default Introduce;
