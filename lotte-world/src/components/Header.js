import React, { memo } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const NavCon = styled.nav`
  border: 1px solid #000;
  position: relative;
  padding: 10px;
  background-color: #fff;
`;

const header = memo(() => {
  return (
    <div>
      <NavCon>
        <NavLink to="/enjoyList">어트랙션</NavLink>
        <br />
        <NavLink to="/customer">공지사항</NavLink>
        <br />
        <NavLink to="/customer/FAQ/all">자주묻는 질문</NavLink>
        <br />
        <NavLink to="/customer/inquiry">문의사항</NavLink>
        <br />
        <NavLink to="/mypage">마이 페이지</NavLink>
        <br />
      </NavCon>
    </div>
  );
});

export default header;
