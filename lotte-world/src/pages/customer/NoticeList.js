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
  //검색 키워드 가져오기
  const [keyword, setKeyword] = useState("");

  const [filterKeyword, setFilterKeyword] = useState([]);

  //검색어 입력요소에 연결한 참조 변수
  const keywordInput = useRef();

  //검색 버튼을 누르면 실행되는 함수 , 성능 최적화를 위해 콜백함수 적용
  const onSearch = () => {
    setKeyword(keywordInput.current.value);
  };

  //마우스 오버시 부모에 class 추가
  const colorChange = useCallback((e) => {
    e.target.parentNode.classList.add("colorChange");
    // console.log("마우스 들어옴", e.target.parentNode);
  });
  //마우스 오버시 부모에 class 제거
  const colorReChange = useCallback((e) => {
    e.target.parentNode.classList.remove("colorChange");
    // console.log("마우스 나감", e.target.parentNode);
  });

  //공지사항 리스트 만드는 상태값
  const [notice, setNotice] = useState([]);
  //공지사항 리스트 갯수 상태값
  const [N_count, setN_count] = useState(0);

  useEffect(() => {
    (async () => {
      let json = null;

      try {
        // 검색 키워드가 없다면
        if (filterKeyword === "") {
          // 백엔드 get
          const response = await axios.get(`http://localhost:3001/bbs_notices`);
          //json에 리스트 담기
          json = response.data;

          console.log("키워드 없다");

          //뿌려줄 리스트에 json 담기
          setNotice(json);
          //json의 갯수에 따라 바뀌는 리스트 갯수
          setN_count(json.length);

          //키워드가 있을 경우
        } else {
          const response = await axios.get(`http://localhost:3001/bbs_notices`);

          console.log("키워드 있다", filterKeyword);
          json = response.data;

          //가져온 json으로 리스트를 바꿈
          setNotice(json);
        }
      } catch (e) {
        console.log(e);
      }
    })();
  }, [filterKeyword]);

  const onFilterKeyword = (e) => {
    const searchKeyword = e.target.value;

    const newFilter = notice.filter((value) => {
      return value.N_title.includes(searchKeyword);
    });

    setFilterKeyword(newFilter);
  };

  return (
    <FlexBox>
      {/* <TtitleArea title={title} /> */}
      <SearchWrap>
        <h1>공지사항</h1>
        <div className="search-border">
          <input
            type="search"
            ref={keywordInput}
            placeholder="검색어를 입력하세요"
            onChange={onFilterKeyword}
          />
          <button>검색</button>
        </div>
      </SearchWrap>
      <ul className="NoticeList">
        <li className="NoticeFirst">
          총 <span>{N_count}</span>개
        </li>
        {/* 리스트가 없을경우엔 검색 결과가 없는 페이지 나옴 */}
        {notice === "[]" ? (
          <NoResultsFound />
        ) : (
          //리스트가 있는 경우에 화면에 뿌려줌
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
