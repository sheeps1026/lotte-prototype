import React, { memo } from "react";
import "animate.css";

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

import arrow from "./../assets/images/arrow-right.png";
import enjoyBg from "./../assets/images/zone-mask-bg5.jpeg";
import showBg from "./../assets/images/main-parade-bg.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
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
    padding: 200px 0 200px;
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
    background: url(${enjoyBg}) no-repeat;
    padding: 40px 0 30px;
    h2 {
      font-weight: bold;
      text-align: center;
      font-size: 40px;
      color: #fff;
      line-height: 1.5;
    }
    .badgesWrap {
      text-align: center;
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
      opacity: 0.75;
      img {
        margin: 0 auto;
        border-radius: 15px;
        transform: scale(0.7);
      }
      &.slick-center {
        opacity: 1;
        & img {
          transform: scale(1);
        }
      }
      .slide-description {
        text-align: center;
        color: #fff;
        h3 {
          font-size: 30px;
          line-height: 1.5;
          font-weight: bold;
        }
      }
    }
  }
  .showWrap{
    background: url(${showBg}) no-repeat;
    display: flex;
    justify-content: center;

  }
`;

const Main = memo(() => {
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

  const enjoySettings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    centerMode: true,
  };
  const active1 = React.useRef();
  const active2 = React.useRef();
  // console.log(active.current.childNodes[0]);

  // console.log(active1);
  // active1.style.borer="1px solid red";
  // 스크롤이 50px 이상 내려올경우 true값을 넣어줄 useState
  const [scroll, setScroll] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll); //clean up
    };
  }, []);

  const handleScroll = () => {
    // console.log(window.scrollY);
    // 스크롤이 Top에서 50px 이상 내려오면 true값을 useState에 넣어줌
    if (window.scrollY >= 220) {
      //   setScroll(true);

      active1.current.childNodes[0].classList =
        "active-txt animate__animated animate__fadeInRight";
      active1.current.childNodes[1].classList =
        "active-txt animate__animated animate__fadeInLeft";
      active1.current.childNodes[2].classList =
        "active-txt animate__animated animate__fadeInRight";
    }
    if (window.scrollY >= 600) {
      console.log(scroll);
      active2.current.childNodes[0].classList =
        "active-txt animate__animated animate__fadeInRight";
      active2.current.childNodes[1].classList =
        "active-txt animate__animated animate__fadeInLeft";
      active2.current.childNodes[2].classList =
        "active-txt animate__animated animate__fadeInRight";
    }
    // } else {
    // 스크롤이 50px 미만일경우 false를 넣어줌
    //   setScroll(false);
    // }
  };

  return (
    <MainContainer>
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
        <h2>신나고 즐거운 어트랙션</h2>
        <div className="badgesWrap">
          <span>언더랜드 존</span>
          <span>로얄가든 존</span>
          <span>조이풀메도우 존</span>
          <span>팅커폴스 존</span>
          <span>레인보우스프링스 존</span>
          <span>원더우즈 존</span>
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
      </div>
      <div className="animationWrap" ref={active2}>
        <p className="active-txt">언제나 즐겁고</p>
        <p className="active-txt">신나는 공연과</p>
        <p className="active-txt">퍼레이드를 경험하라</p>
      </div>
      <div className="showWrap">
        <div className="showImgWrap">
          <img src={show1} alt="공연 사진" />
          <h4>로티스 매직포레스트 퍼레이드</h4>
          <p>마법에 걸린 매직 포레스트를 구한 용감한 기사 로티를 위한 축제</p>
        </div>
        <div className="showImgWrap">
          <img src={show2} alt="공연 사진" />
          <h4>로티스 매직포레스트 퍼레이드</h4>
          <p>마법에 걸린 매직 포레스트를 구한 용감한 기사 로티를 위한 축제</p>
        </div>
        <div className="showImgWrap">
          <img src={show3} alt="공연 사진" />
          <h4>로티스 매직포레스트 퍼레이드</h4>
          <p>마법에 걸린 매직 포레스트를 구한 용감한 기사 로티를 위한 축제</p>
        </div>
      </div>
    </MainContainer>
  );
});

export default Main;
