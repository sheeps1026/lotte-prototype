import React, { memo } from "react";
import styled from "styled-components";
import btn from "../../assets/images/srch-icon.png";
import DatePicker from "react-datepicker";

import { ko } from "date-fns/esm/locale";
import "react-datepicker/dist/react-datepicker.css";

import selectIcon from "../../assets/images/select-icon2.png";
import calendarIcon from "../../assets/images/calendar-icon.png";


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
    select {
      background: url(${selectIcon}) right center no-repeat;
      border: none;
      border-bottom: 2px solid #000;
      justify-content: space-between;
      font-size: 19px;
      /* gap: 10px; */
    }
  }
  .dateWrap {
    border-bottom: 2px solid #000;
    display: flex;
    align-items: center;
    width: 350px;
    justify-content: space-between;
    input {
      /* border:1px solid red; */
      width: calc(100% - 10px);
      padding: 10px 0;

      display: inline-block;
      border: none !important;
      background: url(${calendarIcon}) right center no-repeat;
      color: #777;
      font-size: 18px;
      &:focus {
        outline: none;
      }
      &.dateLastPicker {
        margin: 0 0 0 10px;
        border: 1px solid red;
      }
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
  .FAQ-notice {
    line-height: 1.5;
    margin: 70px 0 0 0;
    color: #333;
  }
  .titleAreaList {
    margin: 70px 0 0 0;
    li {
      line-height: 2;
      color: #888;

      font-weight: bold;
      &:before {
        content: "·";
        padding: 0 5px 0 0;
        font-weight: bold;
      }

      span {
        color: #777;
        font-weight: normal;
      }
    }
  }
`;

const TitleArea = memo(({ title }) => {
  const [startDate, setStartDate] = React.useState("");
  const [endDate, setEndDate] = React.useState("");

  //검색 키워드 가져오기
  const [keyword, setKeyword] = React.useState("");

  //검색어 입력요소에 연결한 참조 변수
  const keywordInput = React.useRef();

  //검색 버튼을 누르면 실행되는 함수 , 성능 최적화를 위해 콜백함수 적용
  const onSearch =(() => {

    setKeyword(keywordInput.current.value);
    // console.log(keyword);
  });

  return (
    <SearchWrap>
      <h1>{title}</h1>

      {title === "문의사항" ? (
        <>
          <p className="FAQ-notice">
            상담분야를 선택하신 후 문의 주시면
            <br />
            빠른 시일내에 답변해드리겠습니다.
          </p>
        </>
      ) : title === "분실물 센터" ? (
        <>
          <div className="dateWrap">
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              locale={ko} // 한글로 변경
              dateFormat="yyyy.MM.dd" // 시간 포맷 변경
              // showPopperArrow={false} // 화살표 변경
            />{" "}
            ~
            <DatePicker
              className="dateLastPicker"
              selected={endDate}
              onChange={(date) => setEndDate(date)}
              locale={ko} // 한글로 변경
              dateFormat="yyyy.MM.dd" // 시간 포맷 변경
              showPopperArrow={false} // 화살표 변경
              maxDate={new Date()} // 오늘 날짜 전은 선택 못하게
            />
          </div>
          <div className="selectSearchWrap">
            <select>
              <option>전체</option>
            </select>
            <div className="search-border">
              <input
                type="search"
                name=""
                id=""
                placeholder="검색어 입력하세요."
                // value={keyword}
                // ref={keywordInput}
              />
              {/* <button onClick={onSearch}>검색</button> */}
            </div>
          </div>
        </>
      ) : (
        <>
          {" "}
          <div className="search-border">
            <input type="search" ref={keywordInput} placeholder="검색어를 입력하세요"/>
            <button onClick={onSearch} >검색</button>
          </div>
        </>
      )}
      {title === "분실물 센터" ? (
        <ul className="titleAreaList">
          <li>
            운영시간 <span>10:00~21:00</span>
          </li>
          <li>
            전화번호 <span>123-1234-1234</span>
          </li>
          <li>
            위취정보 <span>정문입구 게이트 옆 손님상담실</span>
          </li>
        </ul>
      ) : (
        <></>
      )}
      {title === "자주묻는 질문" ? (
        <>
          <p className="FAQ-notice">
            원하는 내용이 없는 경우 온라인 문의를 통해
            <br />
            문의하시면 빠른 답변을 받아 보실 수 있습니다.
          </p>
        </>
      ) : (
        <></>
      )}
    </SearchWrap>
  );
});

export default TitleArea;
