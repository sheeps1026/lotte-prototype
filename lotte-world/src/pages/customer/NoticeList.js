import React, { memo, useCallback } from "react";
import TtitleArea from "../../components/title_area/TitleArea";
import NoticeView from "./NoticeView";
import { Routes, Route, Link ,useParams} from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
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

const NoticeList = memo(() => {
  const title = "공지사항";

  const colorChange = useCallback((e) => {
    e.target.parentNode.classList.add("colorChange");
    // console.log("마우스 들어옴", e.target.parentNode);
  });

  const colorReChange = useCallback((e) => {
    e.target.parentNode.classList.remove("colorChange");
    // console.log("마우스 나감", e.target.parentNode);
  });

  const [notice,setNotice] = React.useState([]);
  React.useEffect(() => {
    (async () => {
      let json = null;
      try {
        const response = await axios.get(`http://localhost:3001/bbs_notices`);
        json = response.data;
        // console.log(json);
      } catch (e) {
        console.log(e);
      }
      if(json != null){
        setNotice(json);
      }
    })();
    
  },[]);
  return (
    <FlexBox>
      <TtitleArea title={title} />

      <ul className="NoticeList">
        <li className="NoticeFirst">
          총 <span>2</span>개
        </li>
        {notice.map((v, i) => {
          return (
            <li key={i}>
              <Link
                to="/customer/notice-list"
                onMouseOver={colorChange}
                onMouseLeave={colorReChange}
              >
                <h3>{v.N_division}</h3>
                <div className="title-wrap">
                  <p>{v.N_title}</p>
                  <span>{v.N_reg_date}</span>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </FlexBox>
  );
});

export default NoticeList;
