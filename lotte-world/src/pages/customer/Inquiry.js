import React, { memo } from "react";
import styled from "styled-components";
import TtitleArea from "../../components/title_area/TitleArea";
import { NavLink } from "react-router-dom";
import inquiry1 from "../../assets/images/inquiry-icon1.png";
import inquiry1On from "../../assets/images/inquiry-icon1-on.png";
import inquiry2 from "../../assets/images/inquiry-icon2.png";
import inquiry2On from "../../assets/images/inquiry-icon2-on.png";
import arrowRight from "../../assets/images/arrow-right.png";

const FlexBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90%;
  margin: 25vh auto 30px;
  min-height: 1200px;
`;

const Category = styled(NavLink)`
  border: 1px solid #ddd;
  color: #333;
  display: flex;
  padding: 40px 60px;
  align-items: center;
  gap: 0 40px;
  .TitleList {
    h3 {
      font-weight: bold;
      font-size: 21px;
      color: #000;
      margin: 20px 0;
      letter-spacing: -1px;
    }
    p {
      line-height: 1.5;
    }
    &.active {
      h3,
      p {
        color: green;
      }
    }
  }
  .goList {
    background: url(${arrowRight}) no-repeat;
    border: none;
    padding: 10px;
  }
`;

const Inquiry = memo(() => {
  const mouseHoverEvent = React.useCallback((e) => {

  //  console.log(e.target.dataset.number);
  //  e.target.children[0].src= `${inquiry1On}`;
    if ((e.target.dataset.number == 0)) {
      
      const link = e.target.parentNode.children[0];
      link.children[0].src = `${inquiry1On}`;
      link.children[1].children[0].style.color = "green";
      link.children[1].children[1].style.color = "green";
    }  else {
      const link = e.target.parentNode.children[1];
      link.children[0].src = `${inquiry2On}`;
      link.children[1].children[0].style.color = "green";
      link.children[1].children[1].style.color = "green";
      
    }
  });

  const mouseLeaveEvent = React.useCallback((e) => {
    e.target.children[0].src= `${inquiry1}`;
    if ((e.target.dataset.number == 0)) {
      
      const link = e.target.parentNode.children[0];
      link.children[0].src = `${inquiry1}`;
      link.children[1].children[0].style.color = "#222";
      link.children[1].children[1].style.color = "#222";
    } 
    
    else{
    
      const link4 = e.target.parentNode.children[1];
      link4.children[0].src = `${inquiry2}`;
      link4.children[1].children[0].style.color = "#222";
      link4.children[1].children[1].style.color = "#222";
    }
  });
  const title = "문의사항";
  const Arr = [
    {
      src: `${inquiry1}`,
      title: "이용문의",
      to:"/customer/InquiryWrite"
    },
    {
      src: `${inquiry2}`,
      title: "분실물센터",
      to:"/customer/LostList"
    },
  ];
  return (
    <FlexBox>
      <TtitleArea title={title} />
     
      <div>
        {Arr.map((v, i) => {
          return (
            <Category
              to={v.to}
              onMouseEnter={mouseHoverEvent}
              onMouseLeave={mouseLeaveEvent}
              key={i}
              data-number={i}
            >
              <img src={v.src} alt="아이콘" />
              <div className="TitleList">
                <h3>{v.title}</h3>
                <p>
                  롯데월드 어드벤처 부산을 이용하기 전 궁금한 사항에 대한 문의를
                  남겨주세요.
                </p>
              </div>
              <button className="goList"></button>
            </Category>
          );
        })}
      </div>
    </FlexBox>
  );
});

export default Inquiry;
