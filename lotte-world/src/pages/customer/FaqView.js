import React, { memo } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Customer from "./Customer";
import q from "../../assets/images/faq-icon-q.png";
import a from "../../assets/images/faq-icon-a.png";
import toggle from "../../assets/images/toggle.png";

const FaqViewWrap = styled.div`
  /* background: #eee; */
  
  width: 50%;
  position: absolute;
  right: 0;
  ul {

    li {
      padding: 30px 0;
      border-top: 1px solid #ccc;
      border-bottom: 1px solid #ccc;
      .notice-description {
        padding: 20px 20px 20px 20px;
        color: #444;
        position:relative;
        left:30px;
        :before {
          content: "";
          background: url(${a}) 0 3px no-repeat;
          /* border:1px solid red; */
          display: inline-block;
          width: 30px;
          height: 20px;
          position: absolute;
          left:-10px;
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
          line-height:1.5;
          word-break: keep-all;
        }
        h4 {
          padding: 20px 20px 10px 20px;
          font-weight: bold;
        }
        h2 {
          padding: 10px 20px 10px 20px;
          font-weight: bold;
          font-size: 23px;
          line-height:1.5;
          word-break: keep-all;
          position: relative;
          left:30px;
          :before {
            content: "";
            background: url(${q}) 0 3px no-repeat;
            /* border:1px solid red; */
            display: inline-block;
            width: 30px;
            height: 20px;
            position: absolute;
            left:-10px;
          }
        }
        display: flex;
        justify-content: space-between;
        align-items: baseline;
        .toggle-btn {
          border: none;
          background: none;
          img.rotateBtn {
            transform: rotate(180deg);
            transition: all 0.4s;
          }
        }
      }
    }
  }
`;
const Atag = styled.div`
  cursor: pointer;
`;
const FaqView = memo(() => {
  let clicked = 0;
  const toggleEvent = (e) => {
    if (clicked) {
      //토글 버튼
      e.target.style.transform = "rotate(0deg)";
      e.target.style.transition = "all 0.4s";
      clicked = 0;
      // console.log(clicked);

      //타이틀 글자 색
      e.target.parentNode.parentNode.classList = "click-area";

      //배경색
      e.target.parentNode.parentNode.parentNode.style.backgroundColor = "#fff";
    } else {
      e.target.style.transform = "rotate(180deg)";
      clicked = 1;
      // console.log(clicked);

      //타이틀 글자 색
      e.target.parentNode.parentNode.classList = "click-area active";

      //배경색
      e.target.parentNode.parentNode.parentNode.style.backgroundColor = "#eee";
    }
  };
  return (
    <FaqViewWrap>
      <ul>
        <li>
          <Atag>
            <div className="click-area">
              <div>
                <h4>이용정보</h4>
                <h2>
                  질문 롯데월드 어드벤처 부산에는 어떤 티켓이 있으며, 티켓의
                  사용범위는 어디까지인가요?
                </h2>
                <div className="notice-description">
                  롯데월드 어드벤처 부산은 종합이용권을 통해 파크 입장 및
                  자유로운 어트랙션 이용이 가능합니다. 단, 게임, 물품보관소 등의
                  유료시설의 이용은 별도의 비용을 지불하셔야 합니다.
                </div>
              </div>
              <button className="toggle-btn" onClick={toggleEvent}>
                <img src={toggle} alt="토글버튼" />
              </button>
            </div>
          </Atag>
        </li>
      </ul>
    </FaqViewWrap>
  );
});

export default FaqView;
