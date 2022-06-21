/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
/**
 * @filename: Header.js
 * @description: 메인 페이지 상단 메뉴
 */
import React, { memo, useCallback, useState } from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";

//  import logo from '../assets/img/logo.png';
const HeaderWrap = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  background: #fff;
  overflow: hidden;
  transition: all 0.4s ease;
  max-height: 120px;
  z-index: 20;
  &.open {
    max-height: 400px;
  }
  &::after {
    content: "";
    position: absolute;
    top: 118px;
    left: 0;
    right: auto;
    width: 100%;
    display: block;
    border-top: 1px solid #ddd;
  }
  h1 {
    position: absolute;
    top: 0;
    left: 120px;
    z-index: 2;
    a {
      display: block;
      background: url(https://adventurebusan.lotteworld.com/common/images/logo.png)
        no-repeat center;
      background-size: 100% auto;
      width: 110px;
      height: 120px;
    }
  }
  nav {
    position: relative;
    z-index: 25;
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
        margin-right: 20px;
        &:last-child {
          margin-right: 0;
        }
        .onedepth {
          position: relative;
          display: block;
          padding: 50px 20px 35px;
          font-size: 22px;
          font-weight: 700;
          color: #333;
          line-height: 1.5;
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
          padding: 50px 0;
          text-align: center;
          li {
            margin-top: 10px;
            display: block;
            a {
              display: block;
              font-size: 16px;
              font-weight: 400;
              color: #666;
              line-height: 1.5;
              text-align: center;
              &:hover {
                color: #2f7d4e;
              }
            }
          }
        }
      }
    }
    .util {
      position: absolute;
      top: 0;
      left: auto;
      right: 120px;
      a {
        position: relative;
        display: block;
        padding: 60px 0 35px;
        margin: 0 10px;
        font-size: 16px;
        font-weight: 500;
        color: #333;
        line-height: 1.5;
      }
    }
  }
  /* .dimd {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 3;
    background-color: rgba(0, 0, 0, 0.5);
    &.opendimd {
      display: block;
      animation: menu .3s;
    }
   } */
  @keyframes menu {
    from {
      opacity: 0;
      margin-top: -50px;
    }
    to {
      opacity: 1;
      margin-top: 0;
    }
  }
  @keyframes hover {
    from {
      width: 0;
    }
    to {
      width: 100%;
    }
  }
`;
const Header = memo(() => {
  const [openList, setOpenList] = useState(false);

  const openMenu = useCallback(() => {
    setOpenList(true);
  });
  const closeMenu = useCallback(() => {
    setOpenList(false);
  });
  return (
    <HeaderWrap onMouseEnter={openMenu} className={`${openList ? "open" : ""}`}>
      <h1>
        <a href="/" />
      </h1>

      <nav onMouseLeave={closeMenu}>
        <ul className="gnb">
          <li className="gnbList">
            <a className="onedepth">즐길거리</a>
            <ul className="twodepth">
              <li>
                <Link to="/enjoyList">어트랙션</Link>
              </li>
            </ul>
          </li>
          <li className="gnbList">
            <a className="onedepth">이용가이드</a>
            <ul className="twodepth">
              <li>
                <Link to="/enjoyList/guide">가이드맵</Link>
              </li>
            </ul>
          </li>
          <li className="gnbList">
            <a className="onedepth">소통공간</a>
            <ul className="twodepth">
              <li>
                <Link to="/customer/">공지사항</Link>
              </li>
              <li>
              <Link to="/customer/FAQ/all">자주묻는질문</Link>
              </li>
              <li>
              <Link to="/customer/inquiry/">문의사항</Link>
              </li>
            </ul>
          </li>
        </ul>

        <div className="util">
          <a>온라인예매</a>
        </div>
      </nav>
      {/* <div className={openList ? 'dimd opendimd' : 'dimd'}/>  */}
    </HeaderWrap>
  );
});

export default Header;
