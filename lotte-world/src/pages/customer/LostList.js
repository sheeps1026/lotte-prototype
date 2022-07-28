import React, { memo, useState, useEffect, useRef } from "react";
import axios from "axios";

import DatePicker from "react-datepicker";
import { ko } from "date-fns/esm/locale";
import moment from "moment";

import styled from "styled-components";

import placeIcon from "../../assets/images/place-icon.png";
import NoResultWrap from "../../components/NoResultsFound";
import LostNotice from "../../components/LostNotice";

import btn from "../../assets/images/srch-icon.png";
import selectIcon from "../../assets/images/select-icon2.png";
import calendarIcon from "../../assets/images/calendar-icon.png";

import popupIcon from "../../assets/images/lostguid-icon.png";

const FlexBox = styled.div`
  width: 100%;
  margin: 25vh auto 30px;
  padding: 0 5% 0 5%;
  min-height: 1200px;

  .ulList {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;

    li {
      position: relative;
      padding: 40px;
      border: 1px solid #ccc;
      box-sizing: border-box;
      width: calc(50% - 10px);
      p {
        color: #222;
      }
      h3 {
        font-weight: bold;
        font-size: 20px;
        line-height: 1.5;
        padding: 10px 0;
      }
      h4 {
        margin: 20px 0;
        span {
          color: green;
        }
        &:before {
          content: "";
          padding: 10px;
          background: url(${placeIcon}) left center no-repeat;
        }
      }
      h5 {
        color: #777;
        font-size: 18px;
      }
    }
  }
`;

const HowFind = styled.div`
  background: #f8f8f8;
  width: 72px;
  padding: 10px 5px;
  text-align: center;
  position: absolute;
  right: 0;
  top: 0;
  &:before {
    content: "${({ how }) => (how === "A" ? "보관중" : "방문수령")}";
    color: ${({ how }) => (how === "A" ? "#000" : "#ccc")};
    word-break: keep-all;
  }
`;

const LostListWrap = styled.div`
  width: 50%;
  position: relative;
  right: calc(-50%);
  top: -210px;
  .CountWrap {
    display: flex;
    justify-content: space-between;
    margin: 10px 0;
    .popupIcon {
      padding: 0 0 0 20px;
      color: green;
      background: url(${popupIcon}) no-repeat left center;
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

// 날짜 검색 한 것
let newArray = [];

const LostList = memo(() => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  // 날짜 변환
  const startTime = moment(startDate).format("YYYY.MM.DD");
  const endTime = moment(endDate).format("YYYY.MM.DD");
  let startDateArray = startTime.split(".");
  let endDateArray = endTime.split(".");

  // input ref
  const keywordInput = useRef();

  // 키워드
  let [openLost, setOpenLost] = useState(false);
  // 모달창 열기
  let [openLostModal, setOpenLostModal] = useState(false);

  // 리스트 만드는 상태값
  const [lostList, setLostList] = useState([]);
  // 리스트 개수 상태값
  const [count, setCount] = useState(0);

  const compareInt = (sd, ed, rd) => {
    if (sd <= rd && rd <= ed) {
      return 1;
    } else {
      return -1;
    }
  };

  // 날짜 비교하기
  const compareDate = (json) => {
    lostList == "" ? setCount(json.length) : setCount(openLost.length);
    // setCount(json.length);

    json.map((v, i) => {
      {
        // json 데이터를 분리해서 담음
        let regDateArray = v.L_reg_date.split(".");

        let year = compareInt(
          startDateArray[0],
          endDateArray[0],
          regDateArray[0]
        );

        let month = compareInt(
          startDateArray[1],
          endDateArray[1],
          regDateArray[1]
        );

        let day = compareInt(
          startDateArray[2],
          endDateArray[2],
          regDateArray[2]
        );

        // 선택한 날짜 기간에 저장된 데이터가 포함되어 있으면, 배열에 추가
        if (year == 1 && month == 1 && day == 1) {
          newArray.push(v);
        }
      }
    });
  };

  useEffect(() => {
    (async () => {
      let json = null;

      try {
        const response = await axios.get(`http://localhost:3001/bbs_lost`);

        // json에 리스트 담기
        json = response.data;
        setLostList(json);

        compareDate(json);
      } catch (e) {
        console.log(e);
      }
    })();
  }, [openLost]);

  const onFilterKeyword = () => {
    const searchKeyword = keywordInput.current.value;

    // 리스트에서 input창에 입력된 값이 json에 있으면
    let newFilter = lostList.filter((value) => {
      console.log(searchKeyword);

      return value.L_item.includes(searchKeyword);
    });

    if (searchKeyword == "") {
      console.log("검색어가 없음");
    }

    // 날짜 선택안하고, 검색어만 있을 때
    if (searchKeyword != "" && startDate == null && endDate == null) {
      // compareDate(newFilter);
      setOpenLost(newFilter);
      console.log("1111111");
    } else if (searchKeyword == "" && startDate != null && endDate != null) {
      // 날짜 선택하고, 검색어는 없을 때

      // 검색어가 없으면 전체 데이터를 compareDate함수에 넣고
      compareDate(lostList);
      setOpenLost(newArray);
      console.log("22222222");
    } else if (searchKeyword != "" && startDate != null && endDate != null) {
      // 날짜, 검색어 둘 다 있을 때
      compareDate(newFilter);
      setOpenLost(newArray);
      console.log("33333333");
    }

    // 중복으로 나오니 배열 초기화
    newArray = [];
    newFilter = [];

    console.log(searchKeyword);
  };

  console.log(count);

  return (
    <FlexBox>
      <SearchWrap>
        <h1>분실물 센터</h1>
        <div className="dateWrap">
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            locale={ko} // 한글로 변경
            dateFormat="yyyy.MM.dd" // 시간 포맷 변경
          />
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
              ref={keywordInput}
              placeholder="검색어 입력하세요."
            />
            <button onClick={onFilterKeyword}>검색</button>
          </div>
        </div>
      </SearchWrap>
      <LostListWrap>
        <div className="CountWrap">
          <div>
            총 <span>{count}</span>개
          </div>
          <button
            className="popupIcon"
            type="button"
            onClick={() => {
              setOpenLostModal(true);
            }}
          >
            분실물 처리절차 보기
          </button>
        </div>
        <ul className="ulList">
          {/* 리스트 개수가 0이면 결과없음 보여주고,
              입력된 값이 없으면, 원래 상태값
              입력된 값 있으면, 해당 키워드 포함해서
          */}
          {count == 0 ? (
            <NoResultWrap />
          ) : openLost == "" ? (
            lostList.map((v, i) => {
              return (
                <li key={i}>
                  <HowFind className="howFind" how={v.L_state}></HowFind>
                  <p>{v.L_division}</p>
                  <h3>{v.L_item}</h3>
                  <h4>
                    <span>{v.L_loc}</span>에서 습득
                  </h4>
                  <h5>{v.L_reg_date}</h5>
                </li>
              );
            })
          ) : (
            openLost.map((v, i) => {
              return (
                <li key={i}>
                  <HowFind className="howFind" how={v.L_state}></HowFind>
                  <p>{v.L_division}</p>
                  <h3>{v.L_item}</h3>
                  <h4>
                    <span>{v.L_loc}</span>에서 습득
                  </h4>
                  <h5>{v.L_reg_date}</h5>
                </li>
              );
            })
          )}
        </ul>
      </LostListWrap>

      {/* 모달창 */}
      {openLostModal && <LostNotice setOpenLostModal={setOpenLostModal} />}
    </FlexBox>
  );
});

export default LostList;
