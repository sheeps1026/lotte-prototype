/**
 * @filename: TicketingMain.js
 * @description: 구매할 티켓 종류 선택
 */
import React, { memo } from 'react';
import styled from 'styled-components';

import bg from '../../assets/images/pages/product/bg_pc_visual_busan.png';
import ticketArrow from '../../assets/images/pages/product/btn_arrow_top.png';
import shadow from '../../assets/images/pages/product/bg_con_shadow.png';
import ticket1 from '../../assets/images/pages/product/20220429e7d429ced57f4b3fade2664dcc548166.jpg';
import ticket2 from '../../assets/images/pages/product/2022040881a5dac487b340fea27436f7c816f6cc.jpg';

const TicketingStyled = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #fff9e4;
    background-image: url(${bg});
.containerWrap {
    margin: 0 auto;
    position: relative;
    width: 900px;
    min-height: 100%;
    margin-top: -62px;
    margin-bottom: -191px;
    .container {
        position: relative;
        padding: 65px 0 271px;
        width: 100%;
        height: 100%;
        .titleWrap {
            position: static;
            width: 100%;
            height: 80px;
            /* margin-bottom: -48px; */
            background: #fff;
            &::after {
                content: '';
                display: block;
                clear:both;
                position: relative;
                bottom: -29px;
                z-index: 5;
                height: 8px;
                background: url(${shadow}) repeat-x 0 0;
            }
            h1 {
                font-size: 26px;
                font-weight: 500;
                padding-top: 25px;
                text-align: center;
            }
        }
        .reserveWrap {
            background: #fff;
            .reserve {
                background-color: #efefef;
                box-sizing: border-box;
                width: 100%;
                height: 100%;
                padding: 48px 0;
                font-size: 28px !important;
                /* 위치 잡기 */
                display: flex;
                padding: 30px 20px;
                }
                .ticketList {
                    position: relative;
                    box-sizing: border-box;
                    padding-right: 15px;
                    &:last-child {padding-right:0;}
                    .ticketItem {
                        text-align: center;
                        max-width: 360px;
                        display: inline-block;
                        position: relative;
                        .content {
                            position: absolute;
                            z-index: 500;
                            bottom: 0;
                            padding-bottom: 36px;
                            .ti_info {
                                position: relative;
                                z-index: 600;
                                padding-bottom: 15px;
                                dl {
                                    text-shadow: 2px 1px 3px rgb(0 0 0 / 40%);
                                    color: #fff;
                                    line-height: 1.25em;
                                    width: 100%;
                                    word-break: keep-all;
                                    text-align: center;
                                    .ti_title {       
                                        font-weight: 700;
                                    }
                                    .ti_name {
                                        font-size: 16px;
                                    }
                                }
                            }
                            .ti_btn {
                                a {
                                    padding: 13px 0;
                                    display: block;
                                    font-weight: 700;
                                    .arrow {
                                        margin-bottom: 10px;
                                        font-size: 0;
                                        img {
                                            width: 15px;
                                            display: inline-block;
                                        }
                                    }
                                    .ti_btn_txt {
                                        font-size: 16px;
                                        color: #fff;
                                    }
                                }
                            }
                        }
                        .ti_bg {
                            img {
                                width: 100%;
                            }
                        }
                    }
                }
            }
        }
    }
`;

const TicketingMain = memo(() => {
    return (
        <TicketingStyled>
            <div className='containerWrap'>
                <div className='container'>
                    <div className='titleWrap'>
                        <div className='title'>
                            <h1>예매</h1>
                        </div>
                    </div>
                    <div className='reserveWrap'>
                        <div className='reserve'>
                            <div className='ticketList after4'> 
                                <div className='ticketItem'>
                                    <div className='content'>
                                        <div className='ti_info'>
                                            <dl>
                                                <dt className='ti_title'>오후권(AFTER4) 온라인 할인</dt>
                                                <dd className='ti_name'>오후권 온라인 예매</dd>
                                                <dd className='ti_price'>29,700 ~</dd>
                                            </dl>
                                        </div>
                                        <div className='ti_btn'>
                                            <a>
                                                <div className='arrow'>
                                                    <img src={ticketArrow} alt=""/>
                                                </div>
                                                <p className='ti_btn_txt'>예매하기</p>
                                            </a>
                                        </div>
                                    </div>
                                    <div className='ti_bg'>
                                        <img src={ticket2} alt="오후권"/>
                                    </div>
                                </div>
                            </div>
                            <div className='ticketList allday'> 
                                <div className='ticketItem'>
                                    <div className='content'>
                                        <div className='ti_info'>
                                            <dl>
                                                <dt className='ti_title'>종일권(1-DAY) 온라인 할인</dt>
                                                <dd className='ti_name'>일반 온라인 예매</dd>
                                                <dd className='ti_price'>42,300 ~</dd>
                                            </dl>
                                        </div>
                                        <div className='ti_btn'>
                                            <a>
                                                <div className='arrow'>
                                                    <img src={ticketArrow} alt=""/>
                                                </div>
                                                <p className='ti_btn_txt'>예매하기</p>
                                            </a>
                                        </div>
                                    </div>
                                    <div className='ti_bg'>
                                        <img src={ticket1} alt="종일권"/>
                                    </div>
                                </div>
                            </div>
                            <div className='ticketList uniform'> 
                                <div className='ticketItem'>
                                    <div className='content'>
                                        <div className='ti_info'>
                                            <dl>
                                                <dt className='ti_title'>종일권 + 감성교복 패키지</dt>
                                                <dd className='ti_name'>종일권 + 감성교복 패키지</dd>
                                                <dd className='ti_price'>60,000 ~</dd>
                                            </dl>
                                        </div>
                                        <div className='ti_btn'>
                                            <a>
                                                <div className='arrow'>
                                                    <img src={ticketArrow} alt=""/>
                                                </div>
                                                <p className='ti_btn_txt'>예매하기</p>
                                            </a>
                                        </div>
                                    </div>
                                    <div className='ti_bg'>
                                        <img src={ticket2} alt="교복패키지"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </TicketingStyled>
    );
});

export default TicketingMain;