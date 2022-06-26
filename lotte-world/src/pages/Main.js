import React, { memo, useState } from "react";
import "animate.css";

import SideTab from "../components/SideTab";

import styled from "styled-components";
import Slider from "react-slick";
import slide1 from "./../assets/images/slide1.jpg";
import slide2 from "./../assets/images/slide2.jpg";
import slide3 from "./../assets/images/slide3.jpg";
import enjoy1 from "./../assets/images/enjoy1.jpeg";
import enjoy2 from "./../assets/images/enjoy2.jpeg";
import enjoy3 from "./../assets/images/enjoy3.jpeg";
import show1 from "./../assets/images/show1.jpeg";
import show2 from "./../assets/images/show2.png";
import show3 from "./../assets/images/show3.jpeg";
import plusIcon from "../assets/images/pages/main/plus-icon.png";

import arrow from "./../assets/images/arrow-right.png";
import enjoyBg from "./../assets/images/zone-mask-bg5.jpeg";
import showBg from "./../assets/images/main-parade-bg.png";
import wave from "./../assets/images/wave-bg5.png";
import wave2 from "./../assets/images/zone-wave3.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
const MainContainer = styled.div`
  .mainSlider {
    .slick-track {
      height: calc(1920 / 920 * 220px);
    }
    .slick-prev {
      background: url(${arrow}) no-repeat center center rgba(0, 0, 0, 0.6);
      left: 30px;
      width: 80px;
      height: 80px;
      border-radius: 50%;
      padding: 22px;
      display: block;
      z-index: 999;
      transform: rotate(180deg);
    }
    .slick-next {
      background: url(${arrow}) no-repeat center center rgba(0, 0, 0, 0.6);
      right: 20px;
      width: 80px;
      height: 80px;
      top: calc(1920 / 920 * 240px);
      border-radius: 50%;
      padding: 22px;
      display: block;
      z-index: 999;
      // transform: rotate(180deg);
    }
    .slick-prev:before,
    .slick-next:before {
      font-size: 0;
    }
    .slick-dots {
      bottom: 20px;
      li.slick-active {
        content: " " !important;
        button:before {
          /* opacity: 0.75; */
          content: " ";
          color: #fff;
          background: #fff;
          border: 1px solid #000;
          border-radius: 50%;
          overflow: hidden;
        }
      }
      li {
        button:before {
          background: #777;
          width: 13px;
          height: 13px;
          content: " ";
          border-radius: 50%;
          overflow: hidden;
          opacity: 1;
          border: 1px solid #fff;
          opacity: 0.5 !important;
        }
      }
    }
  }
  .animationWrap {
    padding: 200px 0 0;
    &.lastAnimation {
      padding: 0 0 200px;
    }
    p {
      font-size: 105px;
      font-weight: bold;
      color: #ccc;
      letter-spacing: -6px;
      &.active-txt {
        text-align: center;
        line-height: 1.2;
        &:nth-child(odd) {
          text-indent: 200px;
        }
        &:nth-child(even) {
          text-indent: -200px;
        }
      }
    }
  }
  .enjoywrap {
    background: url(${enjoyBg}) no-repeat 100% 0 / cover;
    padding: 450px 0 100px;
    position: relative;
    .enjoySlide {
      padding: 50px 0 300px;
    }
    .mask-bg {
      background: url(${wave}) repeat-x;
      width: 100%;
      height: 472px;
      position: absolute;
      top: 0;
    }
    .mask-bg-2 {
      background: url(${wave2}) repeat-x 0 bottom;
      width: 100%;
      height: 472px;
      position: absolute;
      bottom: 0;
    }
    h2 {
      padding: 150px 0 30px 0;
      font-size: 63px;
      letter-spacing: -4px;
      font-weight: bold;
      text-align: center;
      color: #fff;
      line-height: 1.5;
    }
    .badgesWrap {
      text-align: center;
      display: flex;
      justify-content: center;
      gap: 20px;
      padding: 20px 0 0 0;
      span {
        border: 1px solid #fff;
        padding: 20px;
        text-align: center;
        color: #fff;
        border-radius: 50px;
        display: inline-block;
        cursor: pointer;
      }
    }

    .slick-slide {
      /* &:nth-child(odd) {
        &.slick-center {
          border: 1px solid #000;
        }
      } */

      opacity: 0.75;
      outline: none !important;
      img {
        margin: 0 auto;
        border-radius: 15px;
        transform: scale(0.7);
      }

      &.slick-center {
        opacity: 1;
        .slide-description {
          transform: scale(1);
          top: 0;
          padding: 20px 0;
        }

        & img {
          transform: scale(1);
        }
      }
      .slide-description {
        text-align: center;
        color: #fff;
        transform: scale(0.7);
        top: -50px;
        position: relative;
        padding: 0;

        h3 {
          font-size: 30px;
          line-height: 1.5;
          font-weight: bold;
        }
        p {
          line-height: 2;
        }
      }
    }
    .slick-dots {
      z-index: 999;
      position: absolute;
      top: -100px;
      bottom: auto;
      ul {
        li {
          width: auto !important;
          height: auto !important;
          text-align: center;
          border: 1px solid #fff;
          padding: 15px 15px 12px 23px;
          text-align: center;
          color: #fff;
          border-radius: 50px;
          display: inline-block;
          cursor: pointer;
          div {
            &:before {
              color: #fff;
              font-size: 18px;
              font-weight: bold;
            }
          }
          &.slick-active {
            background-color: #fff !important;
            div {
              &:before {
                color: #000 !important;
              }
            }
          }
          &:nth-child(1) {
            div {
              &:before {
                content: "언더랜드 존";
              }
            }
          }
          &:nth-child(2) {
            div {
              &:before {
                content: "로얄가든 존";
              }
            }
          }
          &:nth-child(3) {
            div {
              &:before {
                content: "조이풀메도우 존";
              }
            }
          }
          &:nth-child(4) {
            div {
              &:before {
                content: "윈더우즈 존";
              }
            }
          }
        }
      }
    }
  }
  .showCon {
    background: url(${showBg}) no-repeat;
    padding: 100px 0;
    h1 {
      color: #fff;
      text-align: center;
      font-size: 62px;
      padding: 50px 0 120px 0;
      font-weight: bold;
      line-height: 1.5s;
    }
    .showWrap {
      display: flex;
      justify-content: center;
      .showImgWrap {
        opacity: 1;
      }
      &.active {
        .showImgWrap {
          opacity: 0.5;

          &.active {
            opacity: 1;
            transform: translate(0, -40px);
            transition: all 0.4s;
            p {
              opacity: 1;
            }
          }
        }
      }
      h4 {
        font-size: 28px;
        font-weight: bold;
        padding: 20px 0 0 0;
      }
      h4,
      p {
        color: #fff;
        text-align: center;
        line-height: 1.5;
      }
      p {
        opacity: 0;
      }
    }
  }
  .noticeWrap {
    h1 {
      padding: 100px 0 50px 0;
      font-size: 63px;
      color: #000;
      font-weight: bold;
      text-align: center;
    }
    .ListBtn {
      display: block;
      margin: 0 auto;
      text-align: center;
      cursor: pointer;
      /* height: 40px; */
      padding: 7px 28px;
      font-size: 21px;
      color: #333;
      line-height: 39px;
      width: 200px;
      border-radius: 40px;
      border: 1px solid #333;
      font-weight: 600;
      position: relative;
      overflow: hidden;

      &:after {
        left: -14px;
        content: "";
        display: block;
        width: 300px;
        border-radius: 50%;
        height: 200px;
        background: green;
        position: absolute;
        top: 62px;
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
    .noticeList {
      width: 90%;
      margin: 50px auto 100px;
      display: flex;
      justify-content: center;
      gap: 30px;
      a {
        * {
          color: #000;
        }
        h3 {
          font-weight: bold;
        }
        h4 {
          font-weight: bold;
          border-bottom: 1px solid;
          line-height: 1.5;
          font-size: 30px;
          padding: 30px 0;
          margin: 20px 0;
        }
        h5 {
          padding: 30px 0;
        }
      }
    }
  }

  .quick-btn {
    position: fixed;
    display: flex;
    flex-direction: column;
    align-items: center;
    bottom: 100px;
    right: 50px;
    z-index: 20;

    .quick-today {
      button {
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: start;
        align-items: center;
        width: 140px;
        height: 140px;
        padding: 40px 20px 20px;
        border-radius: 50%;
        background: linear-gradient(135deg, #e50019 0%, #e88522 75%);

        &::after {
          content: "";
          display: block;
          position: absolute;
          bottom: 20px;
          left: 50%;
          right: auto;
          width: 30px;
          height: 30px;
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 50%;
          background: url(${plusIcon}) no-repeat center;
          transform: translateX(-50%);
        }

        p {
          color: #fff;
          font-size: 13px;
          font-weight: 700;
          line-height: 1.5;
        }
      }
    }
  }
`;

const Main = memo(() => {
  // 인덱스 운휴정보 모달
  let [openSideTab, setOpenSideTab] = useState(false);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    cssEase: "linear",
    variableWidth: true,
    variableHeight: true,
  };
  const maskBg = React.useRef();

  const [position, setPosition] = React.useState(5);
  const dotClick = () => {
    setPosition(position + 5);
    console.log(parseInt(position));
    maskBg.current.style.backgroundPositionX = `${position}` + "%";
    maskBg.current.style.transition = "all .5s";
  };
  const enjoySettings = {
    infinite: true,
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    centerMode: true,
    // afterChange: (current, next) => setSlide({ activeSlide: next }),
    appendDots: (dots) => (
      <div onClick={dotClick} style={{ padding: "10px" }}>
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: (i) => <div style={{ color: "rgba(0,0,0,0)" }}>{i + 1}</div>,
  };
  const active1 = React.useRef();
  const active2 = React.useRef();
  const noticeList = React.useRef();
  // console.log(active.current.childNodes[0]);

  // console.log(active1);
  // active1.style.borer="1px solid red";
  // 스크롤이 50px 이상 내려올경우 true값을 넣어줄 useState

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll); //clean up
    };
  }, []);

  const handleScroll = () => {
    // 스크롤이 Top에서 50px 이상 내려오면 true값을 useState에 넣어줌
    if (window.scrollY >= 500) {
      //   setScroll(true);

      active1.current.childNodes[0].classList =
        "active-txt animate__animated animate__fadeInRight";
      active1.current.childNodes[1].classList =
        "active-txt animate__animated animate__fadeInLeft";
      active1.current.childNodes[2].classList =
        "active-txt animate__animated animate__fadeInRight";
    }
    if (window.scrollY >= 1466) {
      maskBg.current.style.backgroundPosition = "-500px";
      maskBg.current.style.transition = "all 1s";
      // console.log(maskBg.current);
    }

    if (window.scrollY >= 2898) {
      // console.log(scroll);

      active2.current.childNodes[0].classList =
        "active-txt animate__animated animate__fadeInRight";
      active2.current.childNodes[1].classList =
        "active-txt animate__animated animate__fadeInLeft";
      active2.current.childNodes[2].classList =
        "active-txt animate__animated animate__fadeInRight";
    }
    //
    if (window.scrollY >= 4972) {
      // noticeList.current
      noticeList.current.childNodes[0].classList =
        "animate__animated animate__fadeInUp";
      noticeList.current.childNodes[1].classList =
        "animate__animated animate__fadeInUp";
      noticeList.current.childNodes[2].classList =
        "animate__animated animate__fadeInUp";
    }

    // } else {
    // 스크롤이 50px 미만일경우 false를 넣어줌
    //   setScroll(false);
    // }
  };

  const mouseHandle = (e) => {
    e.target.parentNode.parentNode.classList.add("active");
    e.target.parentNode.classList.add("active");
  };

  const mouseRemove = (e) => {
    e.target.parentNode.parentNode.classList.remove("active");
    e.target.parentNode.classList.remove("active");
  };

  return (
    <MainContainer>
      {openSideTab && <SideTab setOpenSideTab={setOpenSideTab} />}

      <div className="mainSlider">
        <Slider {...settings}>
          <div className="slider-img">
            <img src={slide1} alt="슬라이드 이미지1" />
          </div>
          <div className="slider-img">
            <img src={slide2} alt="슬라이드 이미지2" />
          </div>
          <div className="slider-img">
            <img src={slide3} alt="슬라이드 이미지3" />
          </div>
        </Slider>
      </div>
      <div className="animationWrap" ref={active1}>
        <p className="active-txt">숲속의 청량함</p>
        <p className="active-txt">짜릿한 스릴감</p>
        <p className="active-txt">완벽하게 즐겨라</p>
      </div>
      <div className="enjoywrap">
        <div className="mask-bg" ref={maskBg}></div>
        <h2>신나고 즐거운 어트랙션</h2>
        <div className="badgesWrap">
          {/* <button type="button">언더랜드 존</button>
          <button type="button">로얄가든 존</button>
          <button type="button">조이풀메도우 존</button>
          <button type="button">팅커폴스 존</button>
          <button type="button">레인보우스프링스 존</button>
          <button type="button">원더우즈 존</button> */}
        </div>
        <div className="enjoySlide">
          <Slider {...enjoySettings}>
            <div className="slider-img">
              <img src={enjoy1} alt="슬라이드 이미지1" />
              <div className="slide-description">
                <h3>자이언트 스윙</h3>
                <p>
                  광산의 보석들을 가공하려면 이 무섭고 거대한 기계를 움직여야
                  한다구요!
                </p>
              </div>
            </div>
            <div className="slider-img">
              <img src={enjoy2} alt="슬라이드 이미지2" />
              <div className="slide-description">
                <h3>자이언트 스윙</h3>
                <p>
                  광산의 보석들을 가공하려면 이 무섭고 거대한 기계를 움직여야
                  한다구요!
                </p>
              </div>
            </div>
            <div className="slider-img">
              <img src={enjoy3} alt="슬라이드 이미지3" />
              <div className="slide-description">
                <h3>자이언트 스윙</h3>
                <p>
                  광산의 보석들을 가공하려면 이 무섭고 거대한 기계를 움직여야
                  한다구요!
                </p>
              </div>
            </div>
            <div className="slider-img">
              <img src={enjoy2} alt="슬라이드 이미지2" />
              <div className="slide-description">
                <h3>자이언트 스윙</h3>
                <p>
                  광산의 보석들을 가공하려면 이 무섭고 거대한 기계를 움직여야
                  한다구요!
                </p>
              </div>
            </div>
          </Slider>
        </div>
        <div className="mask-bg-2"></div>
      </div>
      <div className="animationWrap lastAnimation" ref={active2}>
        <p className="active-txt">언제나 즐겁고</p>
        <p className="active-txt">신나는 공연과</p>
        <p className="active-txt">퍼레이드를 경험하라</p>
      </div>
      <div className="showCon">
        <h1>즐거운 공연과 퍼레이드</h1>
        <div className="showWrap">
          <div
            className="showImgWrap"
            onMouseEnter={mouseHandle}
            onMouseLeave={mouseRemove}
            data-show="first-show"
          >
            <img src={show1} alt="공연 사진" />
            <h4>로티스 매직포레스트 퍼레이드</h4>
            <p>마법에 걸린 매직 포레스트를 구한 용감한 기사 로티를 위한 축제</p>
          </div>
          <div
            className="showImgWrap"
            onMouseEnter={mouseHandle}
            onMouseLeave={mouseRemove}
            data-show="second-show"
          >
            <img src={show2} alt="공연 사진" />
            <h4>로티스 매직포레스트 퍼레이드</h4>
            <p>마법에 걸린 매직 포레스트를 구한 용감한 기사 로티를 위한 축제</p>
          </div>
          <div
            className="showImgWrap"
            onMouseEnter={mouseHandle}
            onMouseLeave={mouseRemove}
            data-show="last-show"
          >
            <img src={show3} alt="공연 사진" />
            <h4>로티스 매직포레스트 퍼레이드</h4>
            <p>마법에 걸린 매직 포레스트를 구한 용감한 기사 로티를 위한 축제</p>
          </div>
        </div>
      </div>
      <div className="noticeWrap">
        <h1>매직포레스트의 새 소식</h1>
        <Link className="ListBtn" to="/customer">
          더 많은 소식보기
        </Link>
        <div className="noticeList" ref={noticeList}>
          <Link to="/customer/notice-list">
            <h3>공지</h3>
            <h4>코로나19 예방을 위한 롯데월드 어드벤처 부산 종합안내</h4>
            <h5>2022.02.20</h5>
          </Link>
          <Link to="/customer/notice-list">
            <h3>공지</h3>
            <h4>코로나19 예방을 위한 롯데월드 어드벤처 부산 종합안내</h4>
            <h5>2022.02.20</h5>
          </Link>
          <Link to="/customer/notice-list">
            <h3>공지</h3>
            <h4>코로나19 예방을 위한 롯데월드 어드벤처 부산 종합안내</h4>
            <h5>2022.02.20</h5>
          </Link>
        </div>
      </div>
      <div className="quick-btn">
        <div className="quick-today" onClick={() => setOpenSideTab(true)}>
          <button>
            <p>오늘의 운영시간</p>
            <p>10:00 - 21:00</p>
          </button>
        </div>
      </div>
    </MainContainer>
  );
});

export default Main;
