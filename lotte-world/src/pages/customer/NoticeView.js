import React, { memo, useState, useEffect } from "react";
import { Routes, Route, Link, useParams } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";

const FlexBox = styled.div`
  position: relative;
  /* display: flex; */
  justify-content: space-between;
  width: 90%;
  margin: 25vh auto 30px;
  min-height: 1200px;
  .con {
    display: flex;
    justify-content: space-between;
  }
  .left-wrap {
    height: fit-content;
    position: sticky;
    top: 20px;
    width: 300px;
    word-break: keep-all;
    line-height: 1.2;
    letter-spacing: -2px;
    h4 {
      font-size: 18px;
      font-weight: bold;
      margin: 20px 0;
    }
    h2 {
      font-weight: bold;
      font-size: 40px;
    }
    h5 {
      margin: 50px 0 0;
      color: #aaa;
    }
  }
  .right-wrap {
    max-width: 50%;
    min-width: 50%;
    .rightNoticeView {
      border: 10px solid #ddd;
      padding: 80px 40px;
      h2 {
        font-weight: bold;
        font-size: 50px;
      }
      p {
        font-size: 18px;
        color: #000;
        line-height: 2;
        padding: 50px 0 0 0;
      }
    }
  }
  .submitBtn {
    display: block;
    width: 100px;
    text-align: center;
    background: none;
    font-size: 20px;
    font-weight: bold;
    color: #000;
    border: 1px solid #000;
    padding: 15px 30px;
    border-radius: 50px;
    bottom: 0px;
    position: relative;
    overflow: hidden;
    z-index: 1;
    margin: 50px auto;
    &:after {
      left: 0;
      content: "";
      display: block;
      width: 160px;
      border-radius: 50%;
      height: 160px;
      background: green;
      position: absolute;
      /* bottom: 20px; */
      top: 55px;
      transition: all 0.4s;
      z-index: -1;
    }
    &:hover {
      color: #fff;
      border: 1px solid green;
      &:after {
        top: -50px;
      }
    }
  }
`;
const NoticeView = memo(() => {
  const { N_id } = useParams();
  console.log(N_id);
  const [notice, setNotice] = useState([]);

  useEffect(() => {
    (async () => {
      let json = null;
      try {
        const response = await axios.get(
          `https://sheeps1026.github.io/backend/bbs_notices.json?N_id=${N_id}`
        );
        json = response.data;
        // console.log(json);
      } catch (e) {
        console.log(e);
      }
      if (json != null) {
        setNotice(json);
      }
    })();
  }, []);

  return (
    <FlexBox>
      {notice.map((v, i) => {
        return (
          <div className="con" key={i}>
            <div className="left-wrap">
              <h4>{v.N_division === "1" ? `공지` : `안내`}</h4>
              <h2>{v.N_title}</h2>
              <h5>{v.N_reg_date}</h5>
            </div>
            <div className="right-wrap">
              <div>
                <div className="rightNoticeView">
                  <h2>{v.N_title}</h2>
                  <p>{v.N_content}</p>
                </div>
              </div>
              <Link to="/customer" className="submitBtn">
                목록으로
              </Link>
            </div>
          </div>
        );
      })}
    </FlexBox>
  );
});

export default NoticeView;
