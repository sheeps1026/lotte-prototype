import React, { memo, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import styled from "styled-components";

import bg1 from "../../assets/images/pages/business/Introduce/bg1.jpg";
import bg1Img1 from "../../assets/images/pages/business/Introduce/bg1-img1.png";
import trainTop from "../../assets/images/pages/business/Introduce/bg1-img2.png";
import trainBottom from "../../assets/images/pages/business/Introduce/bg1-img3.png";
import clouds from "../../assets/images/pages/business/Introduce/clouds.png";
import water1 from "../../assets/images/pages/business/Introduce/water1.png";
import water2 from "../../assets/images/pages/business/Introduce/water2.png";
import bg2 from "../../assets/images/pages/business/Introduce/bg2.jpg";
import bg2Img1 from "../../assets/images/pages/business/Introduce/bg2-img1.png";
import bg2Img2 from "../../assets/images/pages/business/Introduce/bg2-img2.png";
import leaf1 from "../../assets/images/pages/business/Introduce/leaf1.png";
import leaf2 from "../../assets/images/pages/business/Introduce/leaf2.png";
import leaf3 from "../../assets/images/pages/business/Introduce/leaf3.png";

const IntroduceContainer = styled.div`
  .title {
    width: 1380px;
    margin: 0 auto;
    margin-top: 293px; // 175px + 118px(헤더)
    margin-bottom: 100px;

    h2 {
      color: #333;
      font-size: 60px;
      font-weight: 700;
      letter-spacing: -3.6px;
      line-height: 60px;
    }
  }

  .bg1 {
    background: url(${bg1}) no-repeat center / cover;
    position: relative;
    height: 4119px;
    z-index: 2;

    .about {
      position: relative;
      height: 1452px;
      margin: 0 auto;

      p {
        position: absolute;
        top: 235px;
        left: calc(50% - 770px);
        color: #fff;
        font-size: 40px;
        font-weight: 600;
        line-height: 52px;
        letter-spacing: -3px;
        z-index: 10;

        &:nth-child(2) {
          top: 495px;
          left: calc(50% + 140px);
          font-size: 24px;
          line-height: 34px;
          letter-spacing: -1.8px;
          z-index: 10;
        }
      }

      .bg-text {
        position: absolute;
        // bottom: 50px;
        bottom: 425px;
        right: calc(50% - 22px);
        width: 1000px;
        color: rgba(0, 0, 0, 0.1);
        font-size: 170px;
        line-height: 0.94;
      }

      .bg1-img1 {
        background: url(${bg1Img1}) no-repeat center bottom;
        background-size: 100% auto;
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 792px;
        z-index: 1;
      }
    }

    .clouds {
      position: absolute;
      top: 2%;
      width: 100%;
    }

    .ent {
      position: relative;
      height: 2667px;
      margin: 0 auto;

      h2 {
        position: absolute;
        top: 393px;
        left: calc(50% - 710px);
        color: #fff;
        font-size: 140px;
        line-height: 1;
        letter-spacing: -4px;
      }

      div {
        position: absolute;
        z-index: 2;

        &.ent-item1 {
          top: 1180px;
          left: calc(50% + 140px);
          text-align: right;
        }

        &.ent-item2 {
          top: 1783px;
          left: calc(50% - 770px);
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

      .bg-text {
        position: absolute;
        bottom: 50px;
        right: calc(50% - 70px);
        width: 800px;
        color: rgba(0, 0, 0, 0.06);
        font-size: 240px;
        line-height: 0.94;
        z-index: 2;
      }

      .water1 {
        background: url(${water1}) no-repeat left top;
        background-size: 100% auto;
        position: absolute;
        bottom: -100px;
        right: calc(50% - 10px);
        width: 565px;
        height: 549px;
        z-index: 2;
      }

      .water2 {
        background: url(${water2}) no-repeat left top;
        background-size: 100% auto;
        position: absolute;
        bottom: -150px;
        right: calc(50% + 500px);
        width: 466px;
        height: 396px;
        z-index: 4;
      }

      .train-top {
        // background: url(${trainTop}) no-repeat center top;
        background-size: 100% auto;
        position: absolute;
        top: 675px;
        left: 0;
        width: 100%;
        min-width: 1920px;
        height: 1993px;
        transition: all 1s ease-in-out;
        z-index: 1;
      }

      .train-bottom {
        background: url(${trainBottom}) no-repeat center top;
        background-size: 100% auto;
        position: absolute;
        bottom: -340px;
        left: 0;
        width: 100%;
        height: calc(1920 / 1202 * 100%);
        z-index: 3;
      }
    }
  }

  .bg2 {
    background: url(${bg2}) no-repeat center top;
    background-size: cover;
    position: relative;
    height: calc(1920 / 1800 * 100%);
    color: #fff;
    z-index: 1;

    .leaf1 {
      background-image: url(${leaf1});
      background-repeat: no-repeat;
      position: absolute;
      top: 563px;
      right: calc(50% - 34px);
      width: 225px;
      height: 199px;
      z-index: 10;
    }

    .leaf2 {
      background-image: url(${leaf3});
      background-repeat: no-repeat;
      position: absolute;
      top: 857px;
      right: calc(50% - 757px);
      width: 174px;
      height: 120px;
      z-index: 10;
    }

    .leaf3 {
      background-image: url(${leaf2});
      background-repeat: no-repeat;
      position: absolute;
      top: 1124px;
      left: calc(50% + 445px);
      width: 137px;
      height: 124px;
      left: 13%;
      z-index: 10;
    }

    .ent {
      width: 1540px;
      margin: 0 auto;
      padding-top: 602px;
      display: flex;
      justify-content: space-evenly;

      div {
        position: relative;
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
  useEffect(() => {
    AOS.init();
  });

  return (
    <IntroduceContainer>
      <div class="title">
        <h2>롯데월드 어드벤처 부산소개</h2>
      </div>
      <div className="bg1">
        <img className="clouds" src={clouds} alt="" />
        <div className="about">
          <p data-aos="fade-up">
            롯데월드 어드벤처 부산은
            <br />
            '동화 속 왕국'이라는 테마로
            <br /> 다양한 어트랙션과 공연들이 펼쳐지는
            <br /> 마법과 환상의 세계입니다.
          </p>
          <p data-aos="fade-up" data-aos-delay="250">
            국내 최초로 도입하는
            <br /> 2종 어트랙션을 포함한 다양한 어트랙션 및<br /> 국내 수준급의
            공연 컨텐츠,
            <br /> 국내 최초로 도입하는 롤러코스터 레스토랑 등<br /> 손님
            여러분께 다채로운 볼거리와
            <br /> 즐길거리를 제공하는
            <br /> 오시리아 관광단지의 핵심 랜드마크 공간입니다.
          </p>
          <div className="bg-text">
            FAIRY TALE <br />
            KINGDOM
          </div>
          <div
            className="bg1-img1"
            data-aos="fade-up"
            data-aos-delay="750"
          ></div>
        </div>
        <div className="ent">
          <h2 data-aos="fade-up">ENTERTAINMENT</h2>
          <div data-aos="fade-left" className="ent-item1">
            <h3>자이언트디거</h3>
            <p>
              국내 최초 도입되는 기종으로
              <br /> 1,000m가 넘는 트랙 위를 100km/h 이상의 속도로 질주하며
              <br /> 수차례 360도 회전하는 어트랙션
            </p>
          </div>
          <div data-aos="fade-right" className="ent-item2">
            <h3>자이언트스플래쉬</h3>
            <p>
              세계에서 네 번째로 설치되는 기종으로
              <br /> 높이가 약 40m에 달하는 ‘U’자 모양의 트랙을
              <br /> 시속 100km/h 속도로 여러 차례 왕복하는
              <br /> 초대형 어트랙션
            </p>
          </div>
          <div className="bg-text">
            GIANT <br />
            SPLASH
          </div>
          <div className="water1"></div>
          <div className="water2"></div>
          <div className="train-top" data-aos="fade-down"></div>
          <div className="train-bottom" data-aos="fade-down"></div>
        </div>
      </div>
      <div className="bg2">
        <div className="leaf1" data-aos="fade-up" data-aos-delay="900"></div>
        <div className="leaf2" data-aos="fade-up" data-aos-delay="500"></div>
        <div className="leaf3" data-aos="fade-up" data-aos-delay="1100"></div>
        <div className="ent">
          <div data-aos="fade-up">
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
          <div data-aos="fade-up">
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
