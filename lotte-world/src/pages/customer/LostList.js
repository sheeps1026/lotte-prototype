import React, { memo } from "react";
import styled from "styled-components";
import TtitleArea from "../../components/title_area/TitleArea";
import placeIcon from "../../assets/images/place-icon.png";
import NoResultWrap from "../../components/NoResultsFound";
import LostNotice from "../../components/LostNotice";
import axios from "axios";

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
  top: -382px;
  .CountWrap {
    display: flex;
    justify-content: space-between;
  }
`;
const title = "분실물 센터";

const LostList = memo(() => {
  // 분실물 모달
  let [openLost, setOpenLost] = React.useState(false);

  // console.log(openLost);
  const [lostList, setLostList] = React.useState([]);
  const [count,setCount] = React.useState(0);
  React.useEffect(() => {
    (async () => {
      let json = null;
      try {
        const response = await axios.get(`http://localhost:3001/bbs_lost`);
        json = response.data;
      } catch (e) {
        console.log(e);
      }
      if (json != null) {
        setLostList(json);
        setCount(json.length);
      }
    })();
  }, []);
  return (
    <FlexBox>
      <TtitleArea title={title} />
      <LostListWrap>
        <div className="CountWrap">
          <div>
            총 <span>{count}</span>개
          </div>
          <button
            type="button"
            onClick={() => {
              setOpenLost(true);
            }}
          >
            분실물 처리절차 보기
          </button>
        </div>
        <ul className="ulList">
          {lostList? (
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
            <NoResultWrap />
          )}
        </ul>
      </LostListWrap>
      {openLost && <LostNotice setOpenLost={setOpenLost} />}
      {/* <LostNotice/> */}
    </FlexBox>
  );
});

export default LostList;
