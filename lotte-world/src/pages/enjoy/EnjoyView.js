import React, { memo, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
// 슬라이드
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// 달력
import DatePicker from "react-datepicker";
import { ko } from "date-fns/esm/locale";
import "react-datepicker/dist/react-datepicker.css";

import arrow from "../../assets/images/arrow-right.png";
import slide1 from "../../assets/images/pages/enjoy/202203240224396860_1519.jpg";
import slide2 from "../../assets/images/pages/enjoy/202203240224419361_1519.jpg";
// import slide1 from "../../assets/images/pages/enjoy/202202250148119610_1519.jpg";

import guideIcon2 from "../../assets/images/pages/enjoy/guide-list-icon2.png";
import guideIcon3 from "../../assets/images/pages/enjoy/guide-list-icon3.png";
import guideIcon4 from "../../assets/images/pages/enjoy/guide-list-icon4.png";
import guideIcon9 from "../../assets/images/pages/enjoy/guide-list-icon9.png";
import boardIcon1 from "../../assets/images/pages/enjoy/guide-board-icon1.png";
import boardIcon2 from "../../assets/images/pages/enjoy/guide-board-icon2.png";
import boardIcon3 from "../../assets/images/pages/enjoy/guide-board-icon3.png";
import boardIcon4 from "../../assets/images/pages/enjoy/guide-board-icon4.png";

import landmap from "../../assets/images/pages/enjoy/lotte_location_map.jpg";
import picker from "../../assets/images/pages/enjoy/map-picker.png";
import mapIcon from "../../assets/images/pages/enjoy/map-icon.png";

const EnjoyViewStyled = styled.div`
p {
    line-height: 1.3;
    color: #333;
    letter-spacing: -0.06em;
}
.guide_tit {
    font-size: 32px;
    margin-bottom: 35px !important;
    font-weight: 700;
}
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
        letter-spacing: -.06em;
        word-break: keep-all;
        margin-bottom: 50px;
    }
    .tag_list {
        p {
            display: inline-block;
            min-height: 32px;
            padding: 0 15px;
            margin: 0 2px 10px;
            font-size: 16px;
            font-weight: 400;
            color: #888;
            line-height: 30px;
            border-radius: 20px;
            border: 1px solid #ddd;
            &:last-child {
                margin-right: 0;
            }
        }
    }
    
  }
  .contents {
    .subwrap {
        width: 100%;
        padding: 100px 0 180px;
        .sub_visual {
            .slick-list {
                width: 100%;
            }
            .slick-slide {
                img {
                    width: 100%;
                    object-fit: cover;
                }
            }
            .slick-track {
            height: 800px;
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
            border-radius: 50%;
            padding: 22px;
            display: block;
            z-index: 999;
            }
            .slick-prev:before,
            .slick-next:before {
            display: none;
            }
            .slick-dots {
            bottom: 20px;
                li {
                    button:before {
                    background: #777;
                    width: 13px;
                    height: 13px;
                    content: " ";
                    border-radius: 50%;
                    overflow: hidden;
                    border: 1px solid black;
                    opacity: .5;
                    }
                }
                li.slick-active {
                    content: " ";
                    button:before {
                    content: " ";
                    color: #fff;
                    background: #fff;
                    border: 1px solid #aaa;
                    border-radius: 50%;
                    overflow: hidden;
                    }
                }
            }
        }
        .zone_info {
            .btnArea {
                text-align: center; 
                .listBtn {
                    margin-top: 60px;
                    height: 56px;
                    padding: 0 60px;
                    font-size: 20px;
                    line-height: 56px;
                    display: inline-block;
                    border-radius: 28px;
                    border: 1px solid #333;
                    font-weight: 600;
                    position: relative;
                    overflow:hidden;
                    a {color: #333;}
                  &:after {
                    left: -38px;
                    content: "";
                    display: block;
                    width: 240px;
                    border-radius: 50%;
                    height: 200px;
                    background: green;
                    position: absolute;
                    top: 56px;
                    -webkit-transition: all 0.4s;
                    transition: all 0.4s;
                    z-index: -1;
                  }
                  &:hover {
                    a {color: #fff;}
                    border: 1px solid green;
                    &:after {
                      top: -56px;
                    }
                  }
                }
            }
            .inner {
                width: 1380px;
                max-width: calc(100%-240px);
                margin: 0 auto;
            }
            .section {
                margin-top: 160px;
                &.txt {
                    .sub_txt {
                        width: 610px;
                        font-size: 42px;
                        font-weight: 500;
                        word-break: keep-all;
                    }
                }
                &:after {
                        clear:both;
                        content:'';
                        display:block;
                    }
                .half {
                    width: 50%;
                    float: left;
                    position: relative;
                    padding-right: 100px;
                    &:nth-child(2) {
                        padding-right: 0;
                        padding-left: 100px;
                        border-left: 1px solid #e5e5e5;
                    }
                    
                    ul.zone_guide {
                        li {
                            .tit {
                                display: table-cell;
                                font-size: 20px;
                                font-weight: 700;
                                width: 150px;
                                line-height: 40px;
                                .icon {
                                    vertical-align: middle;
                                    display: inline-block;
                                    margin-right: 10px;
                                    height: 40px;
                                } 
                            }
                            .txt {
                                padding: 8px 0; 
                                display: table-cell;
                                font-size: 18px;
                                line-height: 1.5;
                                font-weight: 400;
                                color: #666;
                                vertical-align: middle;
                                .num {
                                    font-size: 28px;
                                    font-weight: 700;
                                    line-height: 1.3;
                                    color: #333;
                                }
                                .icon_txt {
                                    color: #333;
                                    span {
                                        vertical-align: top;
                                        display: inline-block;
                                        margin-left: 10px;
                                    }
                                }
                            }
                        }
                    }
                    .info_box {
                        padding: 40px 45px;
                        background: #f8f8f8;
                        .info_list {
                            li {
                                color: #888;
                                line-height: 1.5;
                                padding-left: 11px;
                                position: relative;
                                &::before {
                                    content: "";
                                    display: block;
                                    position: absolute;
                                    top: 10px;
                                    left: 0;
                                    width: 3px;
                                    height: 3px;
                                    background: #aaa;
                                    }   
                                }
                            }
                        }
                    }
                    
                    &.map {  
                        .mapWrap {
                            .map_txt {
                                background: url(${mapIcon}) no-repeat 0 4px;
                                padding-left: 40px;
                                font-size: 26px;
                                font-weight: 700;
                                color: #2f7d4e;
                                line-height: 1.5;
                                box-sizing: border-box;
                            }
                            .map_area {
                                position: relative;
                                height: 618px;
                                margin-top: 40px;
                                text-align: center;
                                overflow: hidden;
                                background: #f8f8f8;
                                .map_more {
                                    float: left;
                                    left: 50%;
                                    margin-left: -690px;
                                    position: relative;
                                    .picker {
                                        position: absolute;
                                        left: 550px;
                                        top: 84px;
                                    }
                                }
                            }
                        }
                    }
                }
            }

        }
    }

`;

const Calendar = styled.div`
width: 390px;
margin: 15px auto 35px;
 .react-datepicker {
   width: 100%;
   border: none;
   .react-datepicker__navigation--previous {
     display: none;
   }
   .react-datepicker__navigation--next {
     display: none;
   }
 }
 .react-datepicker__month-container {
   width: 100%;
   .react-datepicker__header {
     background: #fff;
     font-size: 15px;
     border: none;
     .react-datepicker__current-month {
       margin-bottom: 15px;
       font-size: 22px;
     }
     .react-datepicker__day-name {
       width: 36px;
       height: 36px;
     }
   }
   .react-datepicker__day-names {
     width: 100%;
     display: flex;
     justify-content: space-evenly;
   }
   .react-datepicker__month {
     width: 100%;
     margin: 0;
     .react-datepicker__week {
       display: flex;
       justify-content: space-evenly;
       .react-datepicker__day--today {
        font-weight: normal;
       }
       .react-datepicker__day {
        padding: 9px 0;
         font-weight: bold;
         width: 36px;
         height: 36px;
         font-size: 18px;
         &:hover {
            background: none;
         }
       }
       .react-datepicker__day--keyboard-selected {
         width: 36px;
         height: 36px;
         border-radius: 50%;
         background: none;
         color: #000;
       }
     }
   }
 }
`;
const EnjoyView = memo(() => {
    // 슬라이드 설정
    const settings = {
        // autoplay: true,
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        cssEase: "linear",
        centerPadding: '0px',
      };
    return (
        <EnjoyViewStyled>
            <div className='title'>
                <h2>쿠키열차</h2>
                <div className='tag_list'>
                    <p>#패밀리</p>
                    <p>#매직패스</p>
                    <p>#롤러코스터</p>
                </div>
            </div>
            <div className='contents'>
                <div className='subwrap'>
                    <div className='sub_visual'>
                    <Slider {...settings}>
                        <div>
                            <img src={slide1} alt="slide1" />
                        </div>
                        <div>
                            <img src={slide2} alt="slide2" />
                        </div>
                    </Slider>
                    </div>

                    <div className='zone_info'>
                        <div className='inner'>
                            <div className='section txt'>
                                <p className='sub_txt'>우리에게 용기를 주는 신비한 쿠키를 찾으러 열차를 타고 쿠키공장으로 떠나요!</p>
                            </div>
                            <div className='section txt'>
                                <div className='half'>
                                    <p className='guide_tit'>이용정보</p>
                                    <ul className='zone_guide'>
                                        {/* 어트랙션마다 내용이 바뀜 */}
                                        <li>
                                            <div className='tit'>
                                                <span className='icon'>
                                                    <img src={guideIcon2} alt='icon'/>
                                                </span>
                                                탑승인원
                                            </div>
                                            <div className='txt'>
                                                <span className='num'>20</span>
                                                명
                                            </div>
                                        </li>
                                        <li>
                                            <div className='tit'>
                                                <span className='icon'>
                                                    <img src={guideIcon3} alt='icon'/>
                                                </span>
                                                탑승제한
                                            </div>
                                            <div className='txt'>
                                                <div className='icon_txt'>
                                                    <img src={boardIcon1} alt='icon'/>
                                                    <span>음주</span>
                                                </div>
                                                <div className='icon_txt'>
                                                    <img src={boardIcon2} alt='icon'/>
                                                    <span>임산부</span>
                                                </div>
                                                <div className='icon_txt'>
                                                    <img src={boardIcon3} alt='icon'/>
                                                    <span>심/혈관계 질환자</span>
                                                </div>
                                                <div className='icon_txt'>
                                                    <img src={boardIcon4} alt='icon'/>
                                                    <span>디스크환자</span>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className='tit'>
                                                <span className='icon'>
                                                    <img src={guideIcon4} alt='icon'/>
                                                </span>
                                                이용안내
                                            </div>
                                            <div className='txt'>
                                                135cm 이상 탑승 가능 <br/>
                                                105cm 이상 ~ 135cm 미만 보호자 동반 시 탑승 가능
                                            </div>
                                        </li>
                                        <li>
                                            <div className='tit'>
                                                <span className='icon'>
                                                    <img src={guideIcon9} alt='icon'/>
                                                </span>
                                                플러스 팁
                                            </div>
                                            <div className='txt'>
                                                남녀노소 즐길 수 있는 롤러코스터!
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div className='half'>
                                    <p className='guide_tit'>운휴정보</p>
                                    <Calendar>
                                        <DatePicker inline locale={ko} showDisabledMonthNavigation/>
                                    </Calendar>
                                    <div className='info_box'>
                                        <ul className='info_list'>
                                            <li>
                                                한 달 동안의 운휴정보입니다.
                                            </li>
                                            <li>
                                                한 달 동안의 운휴정보입니다.
                                            </li>
                                            <li>
                                                한 달 동안의 운휴정보입니다.
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='section map'>
                            <p className='guide_tit inner'>위치정보</p>
                            <div className='mapWrap'>
                                <p className='map_txt inner'>
                                    <span>조이풀메도우존 동물농장</span>
                                </p>
                                <div className='map_area'>
                                    <div className='map_more'>
                                        <img src={landmap} alt='map'/>
                                        <div className='picker'>
                                            <img src={picker} alt='picker'/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='btnArea inner'>
                            <div className='listBtn'>
                                <Link to="/enjoyList">목록</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </EnjoyViewStyled>
    );
});

export default EnjoyView;