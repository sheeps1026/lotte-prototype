import React, { memo, useState, useEffect, useRef } from "react";
import { Routes, Route, NavLink, useParams } from "react-router-dom";
import axios from "axios";

import styled from "styled-components";

import FaqView from "../customer/FaqView";

import btn from "../../assets/images/srch-icon.png";
import { useNavigate } from "react-router-dom";

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

const SearchWrap = styled.div`
  position: sticky;
  position: -webkit-sticky; /* 사파리 브라우저 지원 */
  top: 50px;
  .selectSearchWrap {
    display: flex;
  }
  h1 {
    margin: 20px 0 40px 0;
    font-size: 60px;
    letter-spacing: -4px;
    font-weight: bold;
  }
  .search-border {
    border-bottom: 2px solid #000;
    width: 350px;
    display: flex;
    justify-content: space-between;
    align-items: top;
    input[type="search"] {
      border: none;
      font-size: 17px;
      width: 100%;
      /* margin: 20px 0 25px 0; */
      padding: 20px 0 25px 0;
      &:focus {
        outline: none;
      }
      &::placeholder {
        color: #aaa;
        font-size: 17px;
      }
    }
    button {
      background: url(${btn}) no-repeat;
      border: none;
      width: 35px;
      margin: 20px 0 0 0;
      display: inline-block;
      height: 35px;
      /* border: 1px solid red; */
      text-indent: -999px;
    }
  }
`;

const FAQ = memo(() => {
  const { F_division } = useParams();
  const keywordInput = useRef();

  const navigate = useNavigate();
  const [filterKeyword, setFilterKeyword] = useState([]);
  const [count, setCount] = useState(0);

  // 리스트 만드는 상태값
  const [list, setList] = useState([]);

  const onFilterKeyword = (e) => {
    const searchKeyword = keywordInput.current.value;
    console.log("------------------------");

    const newFilter = list.filter((value) => {
      return value.F_title.includes(searchKeyword);
    });

    setFilterKeyword(newFilter);
    console.log("---------된거임---------------");
  };

  useEffect(() => {
    (async () => {
      let json = null;

      try {
        //키워드 있을때 전체리스트에서 요청

        if (F_division === "all" && count > 0) {
          const response = await axios.get(`http://localhost:3001/bbs_faq`);
          //json에 리스트 담기
          json = response.data;
          setList(json);
        } else {
          const response = await axios.get(
            `http://localhost:3001/bbs_faq?F_division=${F_division}`
          );

          json = response.data;
          setList(json);
        }

        //뿌려줄 리스트에 json 담기
        list == "" ? setCount(json.length) : setCount(filterKeyword.length);

        //키워드 없을 때
      } catch (e) {
        console.log(e);
      }

      return () => {};
    })();
  }, [navigate, filterKeyword]);

  return (
    <FlexBox>
      <SearchWrap>
        <h1>자주묻는질문</h1>
        <div className="selectSearchWrap">
          <div className="search-border">
            <input
              type="search"
              ref={keywordInput}
              placeholder="검색어를 입력하세요."
            />
            <button onClick={onFilterKeyword}>검색</button>
          </div>
        </div>
      </SearchWrap>
      <nav>
        <NavLink to="/customer/FAQ/all">전체</NavLink>
        <NavLink to="/customer/FAQ/y">연간이용</NavLink>
        <NavLink to="/customer/FAQ/u">우대정보</NavLink>
        <NavLink to="/customer/FAQ/o">온라인예매</NavLink>
        <NavLink to="/customer/FAQ/a">기타</NavLink>
        <Routes>
          <Route
            path=""
            element={
              <FaqView
                F_division={F_division}
                filterKeyword={filterKeyword}
                setFilterKeyword={setFilterKeyword}
                list={list}
                setList={setList}
                count={count}
                setCount={setCount}
                keywordInput={keywordInput}
                onFilterKeyword={onFilterKeyword}
              />
            }
          />
        </Routes>
      </nav>
    </FlexBox>
  );
});

export default FAQ;
