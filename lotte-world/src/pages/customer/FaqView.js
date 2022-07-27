import React, { memo, useEffect } from "react";
import axios from "axios";

import styled from "styled-components";

import NoResultsFound from "../../components/NoResultsFound";

import q from "../../assets/images/faq-icon-q.png";
import a from "../../assets/images/faq-icon-a.png";
import toggle from "../../assets/images/toggle.png";

import { useNavigate } from "react-router-dom";

const FaqViewWrap = styled.div`
  /* background: #eee; */

  width: 50%;
  position: absolute;
  right: 0;
  button {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    border: none;
    background: none;
    border-top: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
    position: relative;
    .notice-title {
      text-align: left;

      h4 {
        padding: 40px 20px 10px 20px;
        font-weight: bold;
      }
      h2 {
        width: calc(100% - 65px);
        padding: 10px 20px 30px 20px;
        font-weight: bold;
        font-size: 23px;
        line-height: 1.5;
        word-break: keep-all;
        position: relative;
        left: 30px;
        :before {
          content: "";
          background: url(${q}) 0 3px no-repeat;
          /* border:1px solid red; */
          display: inline-block;
          width: 30px;
          height: 20px;
          position: absolute;
          left: -10px;
        }
      }
      img {
        position: absolute;
        right: 30px;
        top: 50%;
      }
    }
    .notice-description {
      width: calc(100% - 120px);
      height: 0;
      overflow: hidden;
      /* padding: 20px 20px 20px 20px; */
      padding: 0;
      color: #444;
      position: relative;
      left: 20px;
      :before {
        content: "";
        background: url(${a}) 0 3px no-repeat;
        /* border:1px solid red; */
        display: inline-block;
        width: 30px;
        height: 20px;
        position: absolute;
        left: 0px;
      }
    }
    .click-area {
      transition: all 0.4s;

      &.active {
        h4,
        h2 {
          color: #2f7c4e;
        }
        .notice-description {
          display: block;
        }
      }
      .notice-description {
        display: none;
        line-height: 1.5;
        word-break: keep-all;
      }
      /* 
      img.rotateBtn {
        transform: rotate(180deg);
        transition: all 0.4s;
      } */
    }
  }
`;

const FaqView = memo(
  ({
    F_division,
    filterKeyword,
    setFilterKeyword,
    list,
    setList,
    count,
    setCount,
    keywordInput,
    onFilterKeyword,
  }) => {
    let clicked = 1;

    const toggleBtnHandle = (e) => {
      const mother = e.target.parentNode.parentNode;

      if (clicked) {
        clicked = 0;
        mother.lastChild.lastChild.style.transform = "rotate(180deg)";
        mother.lastChild.lastChild.style.transition = "all 0.4s";
        console.log();
        mother.lastChild.childNodes[2].style.padding = "20px 40px";
        mother.lastChild.childNodes[2].style.height = "auto";

        mother.style.backgroundColor = "#f1f1f1";
      } else {
        clicked = 1;
        mother.lastChild.lastChild.style.transform = "rotate(0deg)";
        mother.lastChild.childNodes[2].style.padding = "0";
        mother.lastChild.childNodes[2].style.height = "0";
        mother.style.background = "#fff";
      }
    };

    const navigate = useNavigate();

    useEffect(() => {
      (async () => {
        let json = null;

        try {
          if (F_division === "all") {
            const response = await axios.get(`http://localhost:3001/bbs_faq`);

            onFilterKeyword();
            // console.log("전체 카테고리로 바뀜");
            json = response.data;
          } else {
            const response = await axios.get(
              `http://localhost:3001/bbs_faq?F_division=${F_division}`
            );

            onFilterKeyword();
            json = response.data;

            console.log("카테고리 바뀜");

          }
        } catch (e) {
          console.log(e);
        }

        if (json != null) {
          setFilterKeyword(json);
        }
      })();
    }, [F_division]);

    return (
      <FaqViewWrap>
        {count == 0 ? (
          <NoResultsFound />
        ) : filterKeyword == "" ? (
          list.map((v, i) => {
            return (
              <button className="toggle-btn" key={i} onClick={toggleBtnHandle}>
                <div className="notice-title">
                  <h4>
                    {v.F_division === "y"
                      ? `연간이용`
                      : v.F_division === "a"
                      ? `기타`
                      : v.F_division === "u"
                      ? `우대정보`
                      : v.F_division === "o"
                      ? `온라인예매`
                      : F_division}
                  </h4>
                  <h2>{v.F_title}</h2>
                  <div className="notice-description">{v.F_content}</div>
                  <img src={toggle} alt="토글버튼" />
                </div>
              </button>
            );
          })
        ) : (
          filterKeyword.map((v, i) => {
            return (
              <button className="toggle-btn" key={i} onClick={toggleBtnHandle}>
                <div className="notice-title">
                  <h4>
                    {v.F_division === "y"
                      ? `연간이용`
                      : v.F_division === "a"
                      ? `기타`
                      : v.F_division === "u"
                      ? `우대정보`
                      : v.F_division === "o"
                      ? `온라인예매`
                      : F_division}
                  </h4>
                  <h2>{v.F_title}</h2>
                  <div className="notice-description">{v.F_content}</div>
                  <img src={toggle} alt="토글버튼" />
                </div>
              </button>
            );
          })
        )}
      </FaqViewWrap>
    );
  }
);

export default FaqView;
