import React, { memo } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const AgreementContainer = styled.div`
  width: 1540px;
  margin: 0 auto;

  h2 {
    margin-top: 120px;
    font-size: 60px;
    font-weight: 700;
    letter-spacing: -3.6px;
    line-height: 60px;
  }

  .document-tab {
    display: flex;
    margin-top: 100px;

    li {
      color: rgb(170, 170, 170);

      &:nth-child(2) {
        display: flex;
        align-items: center;
      }

      &:nth-child(2)::after,
      &:nth-child(2)::before {
        display: block;
        content: "";
        width: 1px;
        height: 16px;
        margin: 0 15px;
        background-color: rgb(229, 229, 229);
      }

      a {
        color: rgb(102, 102, 102);
        font-size: 20px;
        letter-spacing: -0.36px;
        line-height: 30px;
        text-decoration: none;

        &.active {
          color: rgb(47, 125, 78);
          font-weight: 700;
        }
      }
    }
  }

  .document-list {
    margin-top: 80px;
    margin-bottom: 180px;

    .document {
      margin: 40px 0 20px 0;

      h3 {
        margin-bottom: 20px;
        color: #333;
        font-size: 18px;
        font-weight: 700;
        line-height: 1.5;
      }

      p {
        color: #666;
        font-size: 18px;
        letter-spacing: -0.02em;
        line-height: 1.5;
      }

      ol {
        margin-top: 20px;
        list-style: decimal;

        &.hangul {
          list-style-type: hangul;
        }

        > li {
          margin-top: 13px;
          margin-left: 17px;
          color: #666;
          font-size: 18px;
          letter-spacing: -0.02em;
          line-height: 1.5;

          &:first-child {
            margin-top: 0;
          }

          > ol {
            margin-top: 10px;

            > li {
              margin-top: 10px;
              margin-left: 27px;
            }
          }
        }
      }
    }
  }
`;

const AgreementAdventure = memo(() => {
  return (
    <AgreementContainer>
      <h2>이용약관</h2>
      <ul className="document-tab">
        <li>
          <Link to="/AgreementHome">홈페이지</Link>
        </li>
        <li>
          <Link to="/AgreementAdventure" className="active">
            롯데월드 어드벤처 부산
          </Link>
        </li>
        <li>
          <Link to="/AgreementMembership">연간이용</Link>
        </li>
      </ul>
      <div className="document-list">
        <div className="document">
          <h3>제 1조 약관에 적용</h3>
          <p>
            롯데월드 어드벤처 부산(이하 “회사”라 한다)의 입장과 시설물의 이용에
            관한 제반사항은 본 약관에 정하는 바에 따르고 본 약관에 규정되지 않은
            사항에 관하여는 법령 또는 상관습에 의하는 것으로 합니다.
          </p>
        </div>
        <div className="document">
          <h3>제 2조 영업일 및 영업시간</h3>
          <ol>
            <li>운영시간은 별도로 게시하여 운영하되 변경할 수 있습니다.</li>
            <li>
              특별한 경우(천재지변, 불가항력, 예측하지 못한 기상변화, 사업자의
              경영사정, 영업정책 등)에는 일정기간 휴장할 수 있습니다.
            </li>
          </ol>
        </div>
        <div className="document">
          <h3>제 3조 이용요금</h3>
          <ol>
            <li>
              개인 요금 적용
              <ol className="hangul">
                <li>어 른 : 만 19세 이상</li>
                <li>청소년 : 만 13세부터 18세</li>
                <li>어린이 : 만 3세부터 12세</li>
                <li>베이비 : 만 36개월 미만</li>
              </ol>
            </li>
            <li>
              단체 요금 적용
              <ol className="hangul">
                <li>개인 단체 : 15명이상 적용</li>
                <li>
                  약관의 취지, 법령 또는 상관습에 위배되지 않는 범위 내에서 별도
                  요금을 적용할 수 있습니다.
                </li>
              </ol>
            </li>
            <li>
              장애자 및 경로자에 대한 우대요금은 회사의 영업 환경 등에 따라
              변경될 수 있으며, 이에대한 구체적 내용은 매표소등에 게시하여
              시행합니다. 우대요금 적용시, 이를 확인할 수 있는 증명(경로우대증
              또는 장애인등록증등)을 제시하여야 합니다.
            </li>
            <li>
              티켓종류 별 적용
              <ol className="hangul">
                <li>
                  종합이용권 : 입장 및 가동중인 놀이시설을 이용할 수 있는 티켓
                  (이용불가 시설은 별도 표기 및 고지)
                </li>
                <li>
                  연간이용권(골드/그린) : 회원에 가입한 날로부터 약정한 기간
                  동안 입장 및 가동중인 놀이시설을 이용할 수 있는 티켓(이용불가
                  시설은 별도 표기 및 고지)
                </li>
                <li>
                  기타 : 각 티켓의 적용내용은 조정될 수 있으며 이용객의 특성에
                  맞는 티켓 제도를 실시할 수 있습니다.
                </li>
              </ol>
            </li>
            <li>
              티켓요금 및 시설이용료는 별도 게시하며 회사의 경영환경 및 영업정책
              등에 따라 변경될 수 있습니다.
            </li>
            <li>
              이 약관에 명시되지 않은 사항이 국내 관계법령에 규정되어 있을
              경우에는 관련 법령 규정에 따릅니다.
            </li>
          </ol>
        </div>
        <div className="document">
          <h3>제 4조 요금의 환불</h3>
          <p>입장 후에는 원칙적으로 요금의 환불은 되지 않습니다.</p>
          <ol>
            <li>
              단, 입장 후 1시간 내에 고객의 사정상 회사시설의 이용이 불가하다고
              인정되는 사유가 발생한 경우 사업자는 여러 상황을 고려하여 환불
              등의 조치를 할 수 있으며, 이 경우 입장객은 입장을 증명할 수 있는
              증표(티켓, 영수증 등)를 제시하여야 합니다. 환불과 관련한 구체적인
              조건 및 내용은 회사의 별도규정을 적용합니다.
            </li>
            <li>
              기상변화 및 일반적인 개인적 사정으로 인한 티켓의 환불 요청은
              불가합니다.
            </li>
          </ol>
        </div>
        <div className="document">
          <h3>제 5조 입장의 제한</h3>
          <ol>
            <li>
              적정 수용인원을 초과하여 안전유지가 곤란하다고 판단되는 경우
              회사는 일정 기간 동안 고객의 입장을 제한하거나 매표를 중단 할 수
              있습니다.
            </li>
            <li>
              입장이나 개별시설의 이용시 예매권을 소지하신 고객을 일반고객에
              우선하여 입장시킬 수 있습니다.
            </li>
          </ol>
        </div>
        <div className="document">
          <h3>제 6조 시설물 이용의 제한 (탑승 및 관람)</h3>
          <ol>
            <li>
              시설물 이용시 고객의 안전을 위하여 나이, 신장 등의 신체조건을
              고려, 해당 시설물 이용을 제한할 수 있습니다.
            </li>
            <li>
              영업기간 중 안전을 위한 시설물 점검시 해당시설물의 이용을 제한할
              수 있습니다.
            </li>
            <li>
              고객은 신체질환 등이 있는 경우 시설이용시 무리가 있을 수 있으므로
              이용전에 자신의 증상을 설명하고 이용 가능여부를 직원에게 확인토록
              합니다.
            </li>
            <li>각 시설물 이용규칙과 주의사항은 시설별로 게시합니다.</li>
          </ol>
        </div>
        <div className="document">
          <h3>제 7조 이용고객 안전 및 시설물 보호</h3>
          <ol>
            <li>
              회사는 거동 수상자 및 범죄 혐의자에 대해 입장을 거부할 수
              있습니다.
            </li>
            <li>
              다른 사람에게 혐오감을 주는 복장이나 고성방가, 폭력행사 등 이용중
              다른 사람에게 해가 될 우려가 있는 행동을 하는 자는 입장을
              제한하거나 강제 퇴장 조치할 수 있습니다.
            </li>
          </ol>
        </div>
        <div className="document">
          <h3>제 8조 재입장</h3>
          <p>
            입장객이 퇴장한 후 재입장은 원칙적으로 불가합니다. 단 회사가 인정한
            긴급한 경우 및 회사가 퇴장 전에 확인하고 인정하는 경우는 재입장이
            가능합니다.
          </p>
        </div>
        <div className="document">
          <h3>제 9조 이용수칙</h3>
          <p>
            회사는 시설의 안전을 확보하고 질서를 유지하기 위하여 아래의 사항을
            준수하고 이용수칙을 위반하는 고객은 입장 및 시설물 이용을 제한할 수
            있습니다.
          </p>
          <ol>
            <li>
              쾌적하고 깨끗한 환경유지를 위하여 입장시 조리기구 및 음식물(반찬류
              등)의 지참을 제한할 수 있습니다.
            </li>
            <li>개, 고양이등 애완동물을 데리고 입장하실 수 없습니다.</li>
            <li>
              위험한 물건을 지니고 입장하실 수 없으며, 남에게 혐오감을 주는
              행위를 제한할 수 있습니다.
            </li>
            <li>10세 이하 어린이는 항상 보호자가 동반하셔야 합니다.</li>
            <li>
              다음의 행위는 금지됩니다.
              <ol className="hangul">
                <li>위험물의 반입</li>
                <li>물품의 판매 및 진열</li>
                <li>전단배포</li>
                <li>집회 및 연설</li>
                <li>상업목적의 촬영</li>
                <li>각종 시설물 및 대여시설의 반출</li>
                <li>파크 및 관련시설의 운영을 방해하는 일체의 행위</li>
              </ol>
            </li>
            <li>
              흡연구역(재떨이가 설치된 지정된 장소)을 제외한 모든 놀이시설 및
              대기라인, 공연장소, 식음점, 상품점, 화장실 등에서의 흡연을
              금합니다.
            </li>
            <li>
              각종 공연 및 쇼를 보기 위한 장소를 확보하기 위하여 개인 소지품 및
              물건을 놓은 채로 자리를 떠날 수 없습니다. 방치된 물건은 그
              자리에서 치워질 수 있습니다.
            </li>
            <li>8. 각 시설물별 이용규칙은 별도 게시되어 있습니다.</li>
          </ol>
        </div>
        <div className="document">
          <h3>제 10조 미아발생시 조치</h3>
          <ol>
            <li>
              운영시간 중
              <ol className="hangul">
                <li>
                  파크 시설 내에 미아보호소를 운영하여 미아를 보호자에게
                  인계하기 위한 제반 조치를 취해 드립니다.
                </li>
                <li>
                  미아의 인수 인계시 상호확인을 위하여 회사는 미아발생 대장을
                  기록, 유지합니다.
                </li>
              </ol>
            </li>
            <li>
              운영종료 시
              <ol className="hangul">
                <li>
                  당일 미 인계 미아는 해당 미아발생 기록과 함께 관할 경찰서에
                  인계합니다.
                </li>
              </ol>
            </li>
          </ol>
        </div>
        <div className="document">
          <h3>제 11조 분실물 처리</h3>
          <ol>
            <li>
              회사내에 분실물 센터를 운영하며 홈페이지 게시 등 물품의 인계를
              위한 제반 조치를 취합니다.
            </li>
            <li>
              분실물 접수 및 인계인수 사항을 분실물 처리 대장에 기록,
              유지합니다.
            </li>
            <li>
              분실물 처리 접수된 물품 소지자가 일정 기간 동안 찾아가지 않을시
              관할 경찰서에 신고 및 인계합니다.
            </li>
            <li>부패성 식품류는 당사에서 임의 처분 할 수 있습니다.</li>
            <li>
              기타 분실물 처리에 관한 제반 사항은 유실물법 및 관행 등에
              따릅니다.
            </li>
          </ol>
        </div>
        <div className="document">
          <h3>제 12조 손해배상 등</h3>
          <ol>
            <li>
              회사 또는 과실로 시설물 관리를 소홀히하여 고객에게 손해가 발생한
              경우 민법이나 기타 법률에 따른 배상책임을 부담합니다.
            </li>
            <li>
              고객의 귀책사유로 인하여 회사나 제3자에게 손해가 발생한 경우에는
              민법이나 기타 관련법규에 따라 처리합니다.
            </li>
          </ol>
        </div>
      </div>
    </AgreementContainer>
  );
});

export default AgreementAdventure;
