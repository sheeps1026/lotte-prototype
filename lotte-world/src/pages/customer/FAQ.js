import React, { memo } from "react";
import styled from "styled-components";
import TtitleArea from "../../components/title_area/TitleArea";
import FaqView from "../customer/FaqView";
import { Routes, Route, NavLink, useParams } from "react-router-dom";
import axios from "axios";
const FlexBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90%;
  margin: 25vh auto 30px;
  min-height: 1200px;
  nav {
    width: 50%;

    a {
      color: #999;
      font-size: 20px;
      font-weight: 600;
      padding: 10px 0px;
      display: inline-block;
      margin: 20px 0;
      &:after {
        content: "|";
        padding: 10px;
      }
      &.active {
        color: #2f7c4e;
        &:after {
          color: #999;
        }
      }
      &:last-of-type {
        &:after {
          color: #fff;
        }
      }
    }
  }
`;

const FAQ = memo(({ match }) => {
  const { F_division } = useParams();
  // console.log(F_id);
  // console.log(N_id);
  const title = "자주묻는 질문";

  const [faqList, setFaq] = React.useState([]);
  React.useEffect(() => {
    (async () => {
      let json = null;
      try {
        const response = await axios.get(`http://localhost:3001/bbs_faq`);
        json = response.data;
      } catch (e) {
        console.error(e);
      }

      if (json != null) {
        setFaq(json);
      }
    })();
  }, []);
  return (
    <FlexBox>
      <TtitleArea title={title} />
      <nav>
        <NavLink to="/customer/FAQ/all">전체</NavLink>
        <NavLink to="/customer/FAQ/y">연간이용</NavLink>
        <NavLink to="/customer/FAQ/u">우대정보</NavLink>
        <NavLink to="/customer/FAQ/o">온라인예매</NavLink>
        <NavLink to="/customer/FAQ/a">기타</NavLink>
        <Routes>
          <Route path="" element={<FaqView props={F_division} />} />
        </Routes>
      </nav>
    </FlexBox>
  );
});

export default FAQ;
