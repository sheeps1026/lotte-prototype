import React, { memo } from "react";
import styled from "styled-components";
import TtitleArea from "../../components/title_area/TitleArea";
import placeIcon from "../../assets/images/place-icon.png";
import NoResultWrap from "../../components/NoResultsFound";
import LostNotice from "../../components/LostNotice";

const FlexBox = styled.div`
  width: 100%;
  /* margin: 25vh auto 30px; */
  padding: 200px 5% 0 5%;
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
  }
`;
const LostListWrap = styled.div`
  width: 50%;
  position: relative;
  right: calc(-50%);
  top: -189px;
  .CountWrap {
    display: flex;
    justify-content: space-between;
  }
`;
const title = "분실물 센터";

const LostListArry = [
  {
    category: "안경",
    name: "검정 금테 안경",
    loc: "자이언트 스플래쉬 대기라인",
    date: "2022.06.17",
    how: "A",
  },
  {
    category: "지갑",
    name: "고야드 카드지갑 최*진님",
    loc: "팅커폴스 간판 앞",
    date: "2022.06.17",
    how: "B",
  },

  {
    category: "지갑",
    name: "고야드 카드지갑 최*진님",
    loc: "팅커폴스 간판 앞",
    date: "2022.06.17",
    how: "B",
  },
  {
    category: "안경",
    name: "검정 금테 안경",
    loc: "자이언트 스플래쉬 대기라인",
    date: "2022.06.17",
    how: "A",
  },
  {
    category: "지갑",
    name: "고야드 카드지갑 최*진님",
    loc: "팅커폴스 간판 앞",
    date: "2022.06.17",
    how: "B",
  },
  {
    category: "안경",
    name: "검정 금테 안경",
    loc: "자이언트 스플래쉬 대기라인",
    date: "2022.06.17",
    how: "A",
  },
  {
    category: "지갑",
    name: "고야드 카드지갑 최*진님",
    loc: "팅커폴스 간판 앞",
    date: "2022.06.17",
    how: "B",
  },
  {
    category: "안경",
    name: "검정 금테 안경",
    loc: "자이언트 스플래쉬 대기라인",
    date: "2022.06.17",
    how: "A",
  },
  {
    category: "안경",
    name: "검정 금테 안경",
    loc: "자이언트 스플래쉬 대기라인",
    date: "2022.06.17",
    how: "A",
  },
  {
    category: "지갑",
    name: "고야드 카드지갑 최*진님",
    loc: "팅커폴스 간판 앞",
    date: "2022.06.17",
    how: "B",
  },
  {
    category: "안경",
    name: "검정 금테 안경",
    loc: "자이언트 스플래쉬 대기라인",
    date: "2022.06.17",
    how: "A",
  },
];
const LostList = memo(() => {
  // 분실물 모달
  let [openLost, setOpenLost] = React.useState(false);
  console.log(openLost)
  return (
    <FlexBox>
      <TtitleArea title={title} />
      <LostListWrap>
        <div className="CountWrap">
          <div>
            총 <span>{}</span>개
          </div>
          <button type="button" onClick={() => {
              setOpenLost(true);
            }}>분실물 처리절차 보기</button>
        </div>
        <ul className="ulList">
          {LostListArry  ? (
            LostListArry.map((v, i) => {
              return (
                <li key={i}>
                  <HowFind className="howFind" how={v.how}></HowFind>
                  <p>{v.category}</p>
                  <h3>{v.name}</h3>
                  <h4>
                    <span>{v.loc}</span>에서 습득
                  </h4>
                  <h5>{v.date}</h5>
                </li>
              );
            })
          ) : (
            <NoResultWrap/>
          )}
        </ul>
      </LostListWrap>
      {openLost && <LostNotice setOpenLost={setOpenLost} />}
      {/* <LostNotice/> */}
    </FlexBox>
  );
});

export default LostList;
