/**
 * @filename: Header.js
 * @description: 하단 메뉴
 */
import React, { memo } from 'react';
import styled from 'styled-components';
import logo from '../assets/images/footer-logo.png';

const FooterArea = styled.footer`
position: relative;
width: 100%;
padding: 100px 120px;
border-top: 1px solid #e5e5e5;
background: #fff;
font-size: 16px;
font-weight: 400;
color: #666;
&:after {
    content: "";
    display: block;
    clear: both;
}
.logo {
    float: left;
    margin-right: 400px;
}
.footerdiv {
    float: left;
    
    .links {
    margin-bottom: 50px;
    a {
        display: inline-block;
        color: #666;
        line-height: 1.5;
        &::after {
            content: "";
            display: inline-block;
            width: 1px;
            height: 14px;
            margin: 0 7px 0 10px;
            background: #e5e5e5;
        }
        &:last-child:after {
            display: none;
        }
    }
}
.address {
    line-height: 2;
    strong {
        &::after {
            content: "";
        display: inline-block;
        width: 1px;
        height: 14px;
        margin: 0 7px 0 10px;
        background: #e5e5e5;
        }
        &:last-child:after{
                display:none;
            }
        
    }
}
.copy {
    margin-top: 40px;
    font-weight: normal;
    color: #aaa;
    line-height: 1;
}
}
`;
const Footer = memo(() => {
    return (
        <FooterArea>
            <p className='logo'>
                <img src={logo} alt="롯데월드 어드벤처 로고"/>
            </p>          
            <div className='footerdiv'>
                <div className='links'>
                    <a href='/pages' target="_blank">
                        롯데월드 어드벤처 부산 소개
                    </a>
                    <a href='/pages' target="_blank">
                        이용약관
                    </a>
                    <a href='/pages' target="_blank">
                        사이트맵
                    </a>
                    <a href='/pages' target="_blank">
                        이메일무단수집거부
                    </a>
                </div>
                <div className='address'>
                    <p>
                        <strong>부산광역시 기장군 기장읍 동부산관광로 42</strong>
                        <strong>통신판매업신고번호 : 제 2021-부산기장-****호</strong>
                    </p>
                    <p>
                        <strong>대표자 : 최홍훈</strong>
                        <strong>전화 : 1661-1234</strong>
                        <strong>사업자등록번호 : 123-45-67890</strong>
                    </p>
                </div>
                <p className='copy'>
                    COPYRIGHT 2021 LOTTEWORLD ADVENTURE BUSAN. ALL RIGHT RESERVED.
                </p>
            </div>
        </FooterArea>
    );
});

export default Footer;