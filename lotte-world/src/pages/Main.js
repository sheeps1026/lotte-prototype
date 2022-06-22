import React, { memo } from "react";
import styled from "styled-components";
import Slider from "react-slick";
import slide1 from "./../assets/images/slide1.jpg";
import slide2 from "./../assets/images/slide2.jpg";
import slide3 from "./../assets/images/slide3.jpg";
import show1 from "./../assets/images/show1.jpeg";

import arrow from "./../assets/images/arrow-right.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const MainContainer = styled.div`
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
  return (
    <MainContainer>
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
    </MainContainer>
  );
});

export default Main;
