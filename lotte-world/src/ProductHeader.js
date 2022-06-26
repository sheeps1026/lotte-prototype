/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable react-hooks/exhaustive-deps */
/**
 * @filename: Header.js
 * @description: 예매 페이지 상단 메뉴
 */
import React, { memo, useCallback, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const ProHeaderWrap = styled.div`
  position: relative;
  z-index: 200;
  width: 100%;
  background: #fff;
  overflow: hidden;
  transition: all 0.4s ease;
  max-height: 60px;
  box-shadow: 0px 3px 2px -2px rgb(0 0 0 / 40%);
  &.open {
    max-height: 400px;
  }
  &::after {
    content: "";
    position: absolute;
    top: 60px;
    left: 0;
    right: auto;
    width: 100%;
    display: block;
    border-top: 1px solid #ddd;
  }

  a.logo-btn {
    position: absolute;
    top: 0;
    left: 520px;
    z-index: 30;

    h1 {
      display: block;
      background: url(https://adventurebusan.lotteworld.com/common/images/logo.png)
        no-repeat center;
      background-size: auto 100%;
      width: 205px;
      height: 58px;
    }
  }

  nav {
    position: relative;
    z-index: 25;
    &:before {
      content: "";
      display: block;
      position: absolute;
      z-index: -1;
      background: #f5f5f5;
      box-shadow: 0px 3px 2px -2px rgb(0 0 0 / 40%);
      width: 100%;
      height: 95%;
      top: 61px;
    }
    .gnb {
      width: 670px;
      margin: 0 auto;
      display: flex;
      justify-content: center;
      &::after {
        content: "";
        clear: both;
        display: block;
      }
      .gnbList {
        position: relative;
        float: left;
        width: 30%;
        text-align: center;
        &:last-child {
          margin-right: 0;
        }
        .onedepth {
          cursor: pointer;
          position: relative;
          display: block;
          padding: 18px 0;
          font-size: 16px;
          font-weight: 700;
          line-height: 1.5;
          color: #222;
          &:hover {
            color: #e12f36;
          }
          &::after {
            content: "";
            position: absolute;
            top: auto;
            bottom: 0;
            left: 0;
            right: auto;
            width: 0;
            display: block;
            background: #2f7d4e;
            height: 3px;
            transition: width 0.4s ease;
            overflow: hidden;
          }
        }
        .twodepth {
          padding: 20px 0 40px;
          text-align: center;
          li {
            a {
              padding: 5px 0;
              display: block;
              font-size: 14px;
              color: #505050;
              line-height: 1.5;
              text-align: center;
              &:hover {
                color: #e12f36;
              }
            }
          }
        }
      }
    }
    .btn_close {
      width: 17px;
      height: 17px;
      z-index: 100;
      background: url(https://mticket.lotteworld.com/images/adventure/btn_mega_close.png)
        no-repeat 50% 50%;
      position: absolute;
      bottom: 15px;
      right: 500px;
    }
    .util {
      position: absolute;
      top: 0;
      left: auto;
      right: 500px;
      font-size: 14px;
      font-weight: 700;
      .user_info {
        display: inline-block;
        color: #3e3e4d;
      }
      a {
        display: inline-block;
        padding: 18px 9px;
        line-height: 1.5;
        color: #505050;
      }
    }
  }
`;

const ProductHeader = memo(() => {
  const [isLogin, setIsLogin] = useState(false);
  const [openList, setOpenList] = useState(false);

  const openMenu = useCallback(() => {
    setOpenList(true);
  });
  const closeMenu = useCallback(() => {
    setOpenList(false);
  });

  return (
    <ProHeaderWrap className={`${openList ? "open" : ""}`}>
      <Link to="/" className="logo-btn">
        <h1></h1>
      </Link>

      <nav>
        <ul className="gnb">
          <li className="gnbList">
            <a className="onedepth" onClick={openMenu}>
              예매
            </a>
            <ul className="twodepth">
              <li>
                <Link to="/TicketingPage">티켓 예매</Link>
              </li>
            </ul>
          </li>
          <li className="gnbList">
            <a className="onedepth" onClick={openMenu}>
              마이페이지
            </a>
            <ul className="twodepth">
              <li>
                <Link to="/TicketingPage/PaymentList">결제 내역</Link>
                <Link to="/TicketingPage/HelpPwdConfirm">회원정보 변경</Link>
              </li>
            </ul>
          </li>
          <button className="btn_close" onClick={closeMenu}></button>
        </ul>

        <div className="util">
          {isLogin ? (
            <>
              <p className="user_info">
                <strong>ㅇㅇㅇ</strong> 님
              </p>
              <a>로그아웃</a>
            </>
          ) : (
            <Link to="/TicketingPage/Login">로그인</Link>
          )}
        </div>
      </nav>
    </ProHeaderWrap>
  );
});

export default ProductHeader;
