/**
 * @filename: Guide.js
 * @description: 가이드맵 다운
 */
import React, { memo } from "react";
import styled from "styled-components";

import bg from "../../assets/images/pages/enjoy/guidemap-bg.jpg";
import wave from "../../assets/images/pages/enjoy/guidemap-wave.png";
import icon from "../../assets/images/pages/enjoy/guide-map-icon.png";
import map from "../../assets/images/pages/enjoy/guide-map.jpg";

const GuideStyled = styled.div`
  position: relative;
  width: 100%;
  .title {
    width: 1380px;
    max-width: calc(100%-240px);
    margin: 0 auto;
    margin-top: 175px;
    h2 {
      color: #000;
      font-size: 60px;
      font-weight: 700;
      line-height: 1;
      letter-spacing: -0.06em;
      word-break: keep-all;
    }
  }
  .contents {
    .guideWrap {
      position: relative;
      padding: 90px 0 245px;
      overflow: hidden;
      .bg {
        position: absolute;
        top: 0;
        left: 0;
        right: auto;
        width: 100%;
        height: 100%;
        background: url(${bg}) no-repeat center bottom;
        background-size: cover;
        z-index: -1;
        .wave {
          position: absolute;
          top: 0;
          left: 0;
          right: auto;
          width: 100%;
          height: calc(100% - 160px);
          background: url(${wave}) repeat-x 0 bottom;
          background-size: auto calc(100% + 1px);
          -webkit-transition: all 2s ease;
          transition: all 2s ease;
        }
      }
      .inner {
        width: 1380px;
        max-width: calc(100%-240px);
        margin: 0 auto;
        .left_info {
          float: left;
          width: calc(50%-100px);
          padding-top: 120px;
          .txt {
            margin: 20px 0 30px;
            font-size: 32px;
            font-weight: 700;
            color: #333;
            line-height: 1.3;
            letter-spacing: -0.06em;
          }
          p {
            color: #666;
            font-size: 18px;
            line-height: 1.5;
          }
          .download {
            margin-top: 40px;
            .downBtn {
              cursor: pointer;
              height: 40px;
              padding: 0 30px;
              font-size: 16px;
              color: #333;
              line-height: 39px;
              display: inline-block;
              border-radius: 28px;
              border: 1px solid #333;
              font-weight: 600;
              position: relative;
              overflow: hidden;

              &:after {
                left: -14px;
                content: "";
                display: block;
                width: 240px;
                border-radius: 50%;
                height: 200px;
                background: green;
                position: absolute;
                top: 40px;
                -webkit-transition: all 0.4s;
                transition: all 0.4s;
                z-index: -1;
              }
              &:hover {
                color: #fff;
                border: 1px solid green;
                &:after {
                  top: -40px;
                }
              }
            }
          }
        }
        .right_img {
          float: right;
          width: calc(50% + 100px);
          box-shadow: 0 15px 30px rgb(0 0 0 / 30%);
          img {
            width: 100%;
          }
        }
      }
    }
  }
`;

const Guide = memo(() => {
  const pdfDownload = () => {};

  return (
    <GuideStyled>
      <div className="title">
        <h2>가이드맵</h2>
      </div>
      <div className="contents">
        <div className="guideWrap">
          <div className="bg">
            <div className="wave"></div>
          </div>
          <div className="inner">
            <div className="left_info">
              <p className="icon">
                <img alt="" src={icon} />
              </p>
              <p className="txt">
                지금 바로 롯데월드 어드벤처 부산 <br />
                가이드 맵을 다운받으세요!
              </p>
              <p>
                어트랙션, 식음&상품점을 <br />한 눈에 확인할 수 있습니다.
              </p>
              <div className="download">
                <a className="downBtn" href="/public/2022_Guidemap.pdf" download="2022_Guidemap.pdf">
                  <button type="submit">전체 가이드맵 다운로드</button>
                </a>
              </div>
            </div>
            <div className="right_img">
              <div className="map">
                <img alt="" src={map} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </GuideStyled>
  );
});

export default Guide;
