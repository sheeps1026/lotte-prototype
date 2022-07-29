import React, { memo, useCallback, useState, useRef, useEffect } from "react";
import btn from "../../assets/images/srch-icon.png";
import { Link } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import NoResultsFound from "../../components/NoResultsFound";

const FlexBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90%;
  margin: 25vh auto 30px;
  min-height: 1200px;
  .colorChange {
    h3 {
      color: #2f7c4e !important;
    }
    .title-wrap {
      p {
        color: #2f7c4e !important;
      }
    }
  }
  .NoticeFirst {
    font-size: 15px;
    border-top: none !important;
    span {
      color: #2f7c4e !important;
      font-weight: bold;
    }
  }
  .NoticeList {
    width: 50%;
    li {
      min-width: 500px;
      border-top: 1px solid #ccc;
      padding: 20px 0;
      &:last-child {
        border-bottom: 1px solid #ccc;
      }
    }
    h3 {
      font-weight: bold;
      font-size: 18px;
      color: #000;
      line-height: 3;
    }
    .title-wrap {
      font-weight: bold;
      font-size: 20px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      line-height: 2;
      p {
        color: #000;
      }
      span {
        font-size: 15px;
        color: #aaa;
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
    .search-border {
      width: 275px;
      margin: 0 0 0 20px;
    }
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

const NoticeList = memo(() => {
  const [filterKeyword, setFilterKeyword] = useState([]);

  // input ref
  const keywordInput = useRef();

  // 공지사항 리스트 만드는 상태값
  const [notice, setNotice] = useState([]);
  // 공지사항 리스트 갯수 상태값
  const [N_count, setN_count] = useState(0);

  // 검색
  const onFilterKeyword = (e) => {
    const searchKeyword = keywordInput.current.value;

    const newFilter = notice.filter((value) => {
      return value.N_title.includes(searchKeyword);
    });

    setFilterKeyword(newFilter);
  };

  useEffect(() => {
    (async () => {
      let json = null;

      try {
        const response = await axios.get(
          "https://sheeps1026.github.io/backend/bbs_notices.json"
        );
        //json에 리스트 담기
        json = response.data;

        setNotice(json);

        notice == ""
          ? setN_count(json.length)
          : setN_count(filterKeyword.length);
      } catch (e) {
        console.log(e);
      }
    })();
  }, [filterKeyword]);

  const colorChange = useCallback((e) => {
    e.target.parentNode.classList.add("colorChange");
  });
  const colorReChange = useCallback((e) => {
    e.target.parentNode.classList.remove("colorChange");
  });

  return (
    <FlexBox>
      <SearchWrap>
        <h1>공지사항</h1>
        <div className="search-border">
          <input
            type="search"
            ref={keywordInput}
            placeholder="검색어를 입력하세요"
          />
          <button onClick={onFilterKeyword}>검색</button>
        </div>
      </SearchWrap>
      <ul className="NoticeList">
        <li className="NoticeFirst">
          총 <span>{N_count}</span>개
        </li>
        {N_count == 0 ? (
          <NoResultsFound />
        ) : filterKeyword == "" ? (
          notice.map((v, i) => {
            return (
              <li key={i}>
                <Link
                  to={`/customer/notice-list/${v.N_id}`}
                  onMouseOver={colorChange}
                  onMouseLeave={colorReChange}
                >
                  <h3>{v.N_division === "1" ? `공지` : `안내`}</h3>
                  <div className="title-wrap">
                    <p>{v.N_title}</p>
                    <span>{v.N_reg_date}</span>
                  </div>
                </Link>
              </li>
            );
          })
        ) : (
          filterKeyword.map((v, i) => {
            return (
              <li key={i}>
                <Link
                  to={`/customer/notice-list/${v.N_id}`}
                  onMouseOver={colorChange}
                  onMouseLeave={colorReChange}
                >
                  <h3>{v.N_division === "1" ? `공지` : `안내`}</h3>
                  <div className="title-wrap">
                    <p>{v.N_title}</p>
                    <span>{v.N_reg_date}</span>
                  </div>
                </Link>
              </li>
            );
          })
        )}
      </ul>
    </FlexBox>
  );
});

export default NoticeList;
