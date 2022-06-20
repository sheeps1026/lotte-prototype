/**
 * @filename: TicketingConfirm.js
 * @description: 예매할 날짜가 맞는지 재확인
 */
import React, { memo } from 'react';
import styled from 'styled-components';
import bg from '../../assets/images/pages/product/bg_notice.png';
import icon from '../../assets/images/pages/product/bg_popicon.png';

const ConfirmPop = styled.div`
display: block; //날짜 선택 후 등장하게
.pop_bg {
    position:fixed;
    width:100%;
    height:100%;
    top:0;
    left:0;
    background: #000;
    opacity: .8;
    z-index: 1000;
}
.pop_cont {
    display: block;
    width: 504px;
    border-radius: 15px;
    position: fixed;
    left: 50%;
    top: 25%;
    margin-left: -252px; 
    margin-top: 50px; 
    background: #fff;
    z-index: 10000;
    .pop_icon {
        display: block;
        width: 164px;
        height: 134px;
        position: absolute;
        top: -80px;
        left: 50%;
        margin-left: -82px;
        background: url(${icon}) no-repeat;
        background-size: 100% auto;
    }
    .pop_mid {
        padding-top: 15px;
        margin-top: 60px;
        line-height: 1.2;
        .question {
            font-size: 32px;
            text-align: center;
            margin: 0 20px;
        }
    }
    .notice {
        position: relative;
        margin-top: 15px;
        .bgTop {
            background: url(${bg}) repeat-x left bottom;
            background-size: 8px 6px;
            width: 100%;
            height: 5px;
            position: absolute;
            left: 0;

        }
        .notice_mid {
            padding: 17px 40px;
            background: #f1f1f1;
            line-height: 1.2;
            font-size: 14px;
            span {
                color: #E12F37;
            }
        }
    }
    .btnArea {
        width: 90%;
        margin: 0 auto;
        button {
            height: 60px;
            line-height: 60px;
            border: 1px solid #2b72c9;
            border-radius: 3px;
            background-color: #fff;
            margin: 18px 0;
            font-size: 16px;
            font-weight: 400;
            cursor: pointer;
        }
        .btn_empty {
            float: left;
            width: 30%;
            span {
                color: #2b72c9;
            }
        }
        .btn_fill {
            float: right;
            width: 67%;
            background: #2b72c9;
            span { color: #fff; }
        }
    }
}
`;
const TicketingConfirm = memo(() => {
    // 클릭 이벤트 아직 없음
    return (
        <ConfirmPop>
            <div className='pop_bg'></div>
            <div className='pop_cont'>
                <span className='pop_icon'></span>
                <div className='pop_mid'>
                    <p className='question'>
                        2022-07-15 <br/> 선택하신 방문일자로 예약을 진행하시겠습니까?
                    </p>
                </div>
                <div className='notice'>
                    <div className='bgTop'></div>
                    <div className='notice_mid'>
                        <p>예매하신 티켓<span className='txtColor'>사용</span>은
                        <span className='txtColor'> 이용당일</span>만 가능합니다.
                        </p>
                    </div>
                </div>
                <div className='btnArea'>
                    <button type='button' className='btn_empty'>
                        <span>취소</span>
                    </button>
                    <button type='button' className='btn_fill'>
                        <span>동의하고 결제하기</span>
                    </button>
                </div>
            </div>
        </ConfirmPop>
    );
});

export default TicketingConfirm;