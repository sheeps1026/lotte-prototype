import React, { memo } from "react";
import styled from "styled-components";
import TtitleArea from "../../components/title_area/TitleArea";
import FaqView from "../customer/FaqView";
import { Routes, Route, NavLink } from "react-router-dom";

const FlexBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90%;
  margin: 25vh auto 30px;
  min-height: 1200px;
  nav{
    width:50%;

    a{
      color:#999;
      font-size:20px;
      font-weight:600;
      padding: 10px 0px;
      display: inline-block;
      margin:20px 0;
      &:after{
        content:"|";
        padding:10px;
      }
      &.active{
        color: #2f7c4e;
        &:after{
          color:#999;
        }
      }
      &:last-of-type{
        
        &:after{
          color:#fff;
        }
      }
    }
  }
`;

const FAQ = memo(({ match }) => {
  const title = "자주묻는 질문";
  return (
    <FlexBox>
      <TtitleArea title={title} />
      <nav>
        <NavLink to="/customer/FAQ/all">전체</NavLink> 
        <NavLink to="/customer/FAQ/yeon">연간이용</NavLink>
        <NavLink to="/customer/FAQ/1">우대정보</NavLink>
        <NavLink to="/customer/FAQ/2">온라인예매</NavLink>
        <NavLink to="/customer/FAQ/4">기타</NavLink>
        <Routes>
          <Route path="all" element={<FaqView />} />
          <Route path="yeon" element={<FaqView />} />
        </Routes>
      </nav>
    </FlexBox>
  );
});

export default FAQ;
