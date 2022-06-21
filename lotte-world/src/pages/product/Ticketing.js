/**
 * @filename: Ticketing.js
 * @description: 예매할 날짜, 인원 선택
 */
import React, { memo, useState } from 'react';
import styled from 'styled-components';
import DatePicker from "react-datepicker";
import { ko } from "date-fns/esm/locale";
import "react-datepicker/dist/react-datepicker.css";

import bg from '../../assets/images/pages/product/bg_pc_visual_busan.png';
import shadow from '../../assets/images/pages/product/bg_con_shadow.png';

const weekArr = [
    {
        day: '월',
        date: 20
    },
    {
        day: '화',
        date: 21
    },
    {
        day: '수',
        date: 22
    },
    {
        day: '목',
        date: 23
    },
    {
        day: '금',
        date: 24
    },
    {
        day: '토',
        date: 25
    },
    {
        day: '일',
        date: 26
    },
];

const personnalArr = [
    {tit:'어른', txt:'만 19세 이상'},
    {tit:'청소년', txt:'13세 이상 ~ 만 18세'},
    {tit:'어린이', txt:'36개월 이상 ~ 만 12세'}
]
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
            }
        }
    }
}
`;

const Ticketing = memo(() => {
    const [startDate, setStartDate] = useState(new Date());
    return (
        <TicketingStyled>
            <div className='containerWrap'>
                <div className='container'>
                    <div className='titleWrap'>
                        <div className='title'>
                            <h1>티켓 예매</h1>
                        </div>
                    </div>
                    <div className='reserveWrap'>
                        <div className='reserve'>
                            <form className='form1'>
                                {/* input: hidden */}
                                <div className='res_cont'>
                                    <div className='visiting'>
                                        <div className='titWrap'>
                                            <p className='tit'>
                                                방문일자/인원 선택
                                            </p>
                                            <span className='today'>
                                                    {/* 오늘 날짜 */}
                                            </span>
                                            <button type='button' className='btnCal'>달력</button>
                                        </div>
                                        <div className='calWrap'>
                                            <ul>
                                                {weekArr? (
                                                    weekArr.map((v,i)=>{
                                                        return (
                                                            <li key={i}>
                                                                <button type='button'>
                                                                    <em className='day'>{v.day}</em>
                                                                    <em className='date'>{v.date}</em>
                                                                </button>
                                                            </li>
                                                        )
                                                    })
                                                ): (<></>)}
                                            </ul>
                                        </div>
                                        <div className='personnalWrap'>
                                            <ul>
                                                {personnalArr? (
                                                    personnalArr.map((v,i)=>{
                                                        return (
                                                            <li key={i}>
                                                                <div className='txtWrap'>
                                                                    <p className='tit'>{v.tit}</p>
                                                                    <p className='txt'>{v.txt}</p>
                                                                </div>
                                                            </li>
                                                        )
                                                    })
                                                ):(<></>)}
                                            </ul>
                                        </div>

                                        <hr className='division'/>

                                        <div className='eventWrap'>
                                            <ul className='event'>
                                                <li>
                                                    <div className='tit'>
                                                        {/* Main에서 선택한 ti_name */}
                                                        <p>일반 온라인 예매</p>
                                                        {/* personnal 바뀔 때마다 변하는 상태값 */}
                                                        <p>1매 할인</p>
                                                    </div>
                                                    <div className='cont'>
                                                        <div className='img'>
                                                            <p className='img_box'>
                                                                <img></img>
                                                            </p>
                                                            <div className='txt'>일반 온라인 예매 10%</div>
                                                        </div>
                                                    </div>
                                                    <div className='itemCont'>
                                                        <ul className='salePrice'>
                                                            <li>
                                                                <div>어른 X 1</div>
                                                                <div className='ticketPrice'>
                                                                    <span>47,000</span>
                                                                    <strong className='discount'><strong>42,300</strong> 원</strong>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                        <div className='finalPrice'>
                                                            <div className='ticketCount'>최종결제금액</div>
                                                            <div className='price'><span>42,300</span> 원</div>
                                                        </div>
                                                        <div className='ticketingBtn'>
                                                            <button type='button' className='btn_fill'>
                                                                <span>예매하기</span>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>

                                        <hr className='division'/>

                                        <div className='noticeAcco'>
                                            
                                        </div>
{/* 
                                        <div className='popup'>
                                            <div className="datePick">
                                                <DatePicker selected={startDate}  locale={ko} onChange={(date) => setStartDate(date)}/>
                                            </div>
                                            <div className='dateBtn'>
                                                <button type='button' className='btn_cancel'>취소</button>
                                                <button type='button' className='btn_complete'>적용</button>
                                            </div>
                                            <button type='button'>닫기</button>
                                        </div> */}
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </TicketingStyled>
    );
});

export default Ticketing;