import React, { memo } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const AgreementContainer = styled.div`
  width: 1540px;
  margin: 0 auto;

  h2 {
    margin-top: 240px;
    color: #333333;
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
          color: #2f7d4e;
          font-weight: 700;
        }
      }
    }
  }

  .document-list {
    margin-bottom: 180px;

    .document {
      padding-top: 80px;

      h3 {
        color: #333;
        font-size: 20px;
        font-weight: 700;
        line-height: 1.5;
      }

      h4 {
        margin: 40px 0 20px 0;
        color: #333;
        font-size: 18px;
        font-weight: 700;
        line-height: 1.5;

        &:nth-child(2) {
          margin-top: 32px;
        }
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

const AgreementHome = memo(() => {
  return (
    <AgreementContainer>
      <h2>이용약관</h2>
      <ul className="document-tab">
        <li>
          <Link to="/Agreement/Home" className="active">
            홈페이지
          </Link>
        </li>
        <li>
          <Link to="/Agreement/Adventure">롯데월드 어드벤처 부산</Link>
        </li>
        <li>
          <Link to="/Agreement/Membership">연간이용</Link>
        </li>
      </ul>
      <div className="document-list">
        <div className="document">
          <h3>[제 1장 총칙]</h3>
          <h4>제 1조 목적</h4>
          <p>
            이 약관은 ㈜호텔롯데 롯데월드(이하 "회사"라 합니다) 에서 제공하는
            롯데월드 어드벤처, 롯데 워터파크, 롯데월드 아쿠아리움, 언더씨킹덤,
            서울스카이, 롯데월드 어드벤처 부산 인터넷 정보 서비스 (이하
            "서비스"라 한다) 및 회사가 운영하는 사이버 몰(온라인 예매 및 모바일
            예매)의 이용 조건ㆍ절차, 이용자의 권리ㆍ의무 및 기타 필요한 사항을
            규정함을 목적으로 합니다.
          </p>
          <h4>제 2 조 약관의 효력과 변경</h4>
          <ol>
            <li>
              서비스는 본 약관에 규정된 조항을 변경 없이 이용자가 수락하는 것을
              조건으로 제공됩니다. 이용자께서 본 서비스를 사용하면 본 약관에
              대하여 이용자가 동의한다는 것을 의미합니다.
            </li>
            <li>
              회사는 약관의 규제 등에 관한 법률, 전자거래 기본법, 전자서명법,
              정보통신망 이용 촉진 등에 관한 법률, 방문판매 등에 관한 법률,
              소비자 보호법 등 관련법을 위배하지 않는 범위에서 이 약관을 개정할
              수 있습니다.
            </li>
            <li>
              회사는 전자상거래 등에서의 소비자보호에 관한 법률, 전자거래
              기본법, 전자서명법, 정보통신망 이용촉진 등에 관한 법률, 방문판매
              등에 관한 법률, 소비자보호법 등 관련법을 위해하지 않는 범위에서 이
              약관을 개정할 수 있습니다.
            </li>
            <li>
              회사가 약관을 개정할 경우에는 적용일자 및 개정사유를 명시하여 현행
              약관과 함께 "서비스"의 초기화면에 그 적용 일자 7일 이전부터 적용
              일자 전일까지 공지합니다. 다만, 이용자에게 불리하게 약관내용을
              변경하는 경우에는 최소한 30일 이상의 사전 유예기간을 두고
              공지합니다. 이 경우 회사는 개정 전 내용과 개정 후 내용을 명확하게
              비교하여 이용자가 알기 쉽도록 표시합니다.
            </li>
            <li>
              회사가 약관을 개정할 경우에는 그 개정약관은 그 적용일자 이후에
              체결되는 계약에만 적용되고 그 이전에 이미 체결된 계약에 대해서는
              개정전의 약관조항이 그대로 적용됩니다. 다만 이미 계약을 체결한
              이용자가 개정약관 조항의 적용을 받기를 원하는 뜻을 제4항에 의한
              개정 약관의 공지기간 내에 회사에 송신하여 회사의 동의를 받은
              경우에는 개정약관 조항이 적용됩니다
            </li>
          </ol>
          <h4>제 3 조 약관 외 준칙</h4>
          <p>
            이 약관에 명시되지 않은 사항이 국내 관계법령에 규정되어 있을
            경우에는 관련 법령 규정에 따릅니다.
          </p>
          <h4>제 4 조 용어의 정의</h4>
          <p>본 약관에서 사용하는 용어의 정의는 다음과 같습니다</p>
          <ol>
            <li>
              이용자 : "서비스"에 접속하여 본 약관에 따라 회사가 제공하는
              서비스를 받는 회원 및 비회원을 말합니다.
            </li>
            <li>
              아이디(ID) : 회원의 식별과 서비스를 이용을 위하여 회원이 등록하여
              회사의 승인을 얻은 것을 말합니다.
            </li>
            <li>
              비밀번호 : 회원이 등록한 아이디(ID)와 일치된 회원임을 확인하고
              회원 자신의 비밀을 보호하기 위하여 회원이 정한 문자와 숫자의
              조합을 말합니다.
            </li>
            <li>
              이용중지 : 회사의 약관에 의거하여 회원의 서비스 이용을 제한하는
              것을 말합니다.
            </li>
            <li>
              해지 : 회사 또는 회원이 서비스를 개통 후 이용계약을 해약하는 것을
              말합니다.
            </li>
            <li>
              L.POINT 회원사 : L.POINT 사이트를 운영하고 있는 롯데그룹의
              계열사를 의미합니다.
            </li>
          </ol>
        </div>
        <div className="document">
          <h3>[제 2장 서비스 이용]</h3>
          <h4>제 1 조 이용계약의 성립</h4>
          <ol>
            <li>
              서비스 이용신청 시에 회원이 동의함 버튼을 클릭하면 이 약관에
              동의하는 것으로 간주됩니다.
            </li>
            <li>
              이용계약의 성립시기는 서비스 이용희망자의 이용약관 동의 시점에
              바로 성립합니다.
            </li>
          </ol>
          <h4>제 2 조 이용신청 및 자격</h4>
          <ol>
            <li>
              회원은 개인에 한정되며 단체 및 법인은 회원으로 가입할 수 없습니다.
            </li>
            <li>
              본 서비스를 이용하기 위해서는 회사 소정의 가입신청 양식에서
              요구하는 모든 이용자 정보를 기록하여 신청합니다.
            </li>
            <li>
              가입신청 양식에 기재하는 모든 이용자 정보는 모두 실제 데이터인
              것으로 간주됩니다. 실명이나 실제 정보를 입력하지 않은 사용자는
              법적인 보호를 받을 수 없으며 서비스의 제한을 받을 수 있습니다.
            </li>
          </ol>
          <h4>제 3 조 이용신청의 승낙</h4>
          <ol>
            <li>
              회사는 다음에 해당하는 경우에 그 신청에 대한 승낙 제한사유가
              해소될 때까지 승낙을 유보할 수 있습니다.
              <ol className="hangul">
                <li>서비스 관련 설비에 여유가 없는 경우</li>
                <li>기술상 지장이 있는 경우</li>
                <li>기타 회사가 필요하다고 인정되는 경우</li>
              </ol>
            </li>
            <li>
              회사는 다음에 해당하는 경우에는 이를 승낙하지 아니 할 수 있습니다.
              <ol className="hangul">
                <li>가. 다른 사람의 명의를 사용하여 신청한 경우</li>
                <li>이용신청 시 이용자정보를 허위로 기재하여 신청한 경우</li>
                <li>
                  사회의 안녕질서 또는 미풍양속을 저해할 목적으로 신청한 경우
                </li>
                <li>
                  제3장 제1조 계약해지 및 이용제한에 의하여 회원자격을 상실한
                  적이 있는 사람이, 자격 상실 후 3년이 경과하지 않은 경우
                </li>
                <li>기타 회사 소정의 이용신청요건을 충족하지 못하는 경우</li>
              </ol>
            </li>
          </ol>
          <h4>제 4 조 서비스 이용 및 제한</h4>
          <ol>
            <li>
              서비스 이용은 회사의 업무상 또는 기술상 특별한 지장이 없는 한
              연중무휴, 1일 24시간을 원칙으로 합니다.
            </li>
            <li>
              회사에서 제공하는 서비스 중 일부는 회원에 가입하여 회사에서 인정한
              ID와 비밀번호를 통해서만 서비스를 받을 수 있습니다.
            </li>
            <li>
              아동(만 14세 미만인 자)은 법정대리인(부모)의 사전 동의를 받을
              경우에만 회원 가입이 가능하며, 전자상거래 등 계약에 관한 서비스는
              제한될 수 있습니다.
            </li>
          </ol>
        </div>
        <div className="document">
          <h3>[제 3장 회원의 계약해지 및 서비스 이용제한]</h3>
          <h4>제 1 조 계약 해지 및 이용 제한</h4>
          <ol>
            <li>
              회원이 이용 계약을 해지 하고자 하는 때에는 회원 본인이 직접 온라인
              상에서 회원 탈퇴를 할 수 있으며 회사는 즉시 탈퇴를 처리합니다.
            </li>
            <li>
              회사는 회원이 다음 사항에 해당하는 행위를 하였을 경우 사전 통지
              없이 이용 계약을 해지하거나 또는 기간을 정하여 서비스 이용을
              중지할 수 있습니다.
              <ol className="hangul">
                <li>공공 질서 및 미풍 양속에 반하는 경우</li>
                <li>범죄 행위에 관련되는 경우</li>
                <li>
                  국익 또는 사회적 공익을 저해할 목적으로 서비스 이용을 계획
                  또는 실행할 경우
                </li>
                <li>타인의 ID및 비밀번호를 도용한 경우</li>
                <li>타인의 명예를 손상시키거나 불이익을 주는 경우</li>
                <li>같은 이용자가 다른 ID로 이중 등록을 한 경우</li>
                <li>서비스에 위해를 가하는 등 건전한 이용을 저해하는 경우</li>
                <li>
                  다른 사람의 서비스이용을 방해하거나 그 정보를 도용하는 등 전자
                  거래질서를 위협하는 경우
                </li>
                <li>기타 관련법령이나 회사가 정한 이용조건에 위배되는 경우</li>
              </ol>
            </li>
            <li>
              회사가 회원자격을 제한ㆍ정지시킨 후 동일한 행위가 2회 이상
              반복하거나 30일 이내에 그 사유가 시정되지 아니하는 경우 회사는
              회원 자격을 상실시킬 수 있습니다.
            </li>
            <li>
              회사가 회원자격을 상실시키는 경우에는 회원등록을 말소합니다. 이
              경우 회원에게 이를 통지하고, 회원등록 말소 전에 소명할 기회를
              부여합니다.
            </li>
          </ol>
          <h4>제 2 조 이용 제한 절차</h4>
          <p>
            회사는 이용제한을 하고자 하는 경우에는 그 사유, 일시 및 기간을
            정하여 이용자의 전자우편 또는 전화 등의 방법에 의하여 해당 이용자
            또는 대리인에게 통지합니다. 다만, 회사가 급하게 이용을 정지할 필요가
            있다고 인정하는 경우에는 그러하지 아니할 수 있습니다.
          </p>
        </div>
        <div className="document">
          <h3>[제 4장 의무 및 혜택]</h3>
          <h4>제 1 조 회사의 의무</h4>
          <ol>
            <li>
              회사는 특별한 사정이 없는 한 회원이 신청한 서비스를 이용할 수
              있도록 합니다.
            </li>
            <li>
              회사는 이 약관에서 정한 바에 따라 계속적, 안정적으로 서비스를
              제공할 의무가 있습니다.
            </li>
            <li>
              회사는 회원으로부터 제기되는 의견이나 불만이 정당하다고 인정할
              경우에는 즉시 처리하여야 합니다.
            </li>
            <li>
              회사는 회원이 제공한 개인정보(신용정보 포함)를 보호할 의무가
              있습니다.
            </li>
            <li>
              수신거절 의사를 명백히 표시한 회원에 대해서는 영리목적의 광고성
              전자우편(이메일)을 발송하지 않습니다.
            </li>
          </ol>
          <h4>제 2 조 회원의 의무</h4>
          <ol>
            <li>ID와 비밀번호에 관한 모든 관리의 책임은 회원에게 있습니다.</li>
            <li>
              회원은 자신의 ID 및 비밀번호를 제3자에게 이용하게 해서는 안됩니다.
            </li>
            <li>
              회원이 자신의 ID 및 비밀번호를 도난 당하거나 제3자가 사용하고
              있음을 인지한 경우에는 바로 회사에 통보하고 회사의 안내가 있는
              경우에는 그에 따라야 합니다.
            </li>
            <li>
              회사는 회원이 상기 제1항, 제2항, 제3항을 위반하여 회원에게 발생한
              손해에 대하여 아무런 책임을 지지 않습니다.
            </li>
            <li>
              회원은 이 약관 및 관계법령에서 규정한 사항을 준수하여야 합니다.
            </li>
          </ol>
          <h4>제 3조 회원 준수 사항</h4>
          <p>회원은 다음의 행위를 하여서는 안됩니다.</p>
          <ol>
            <li>개인정보의 등록(변경의 경우를 포함함)시 허위내용을 등록</li>
            <li>회사가 홈페이지에 게시된 정보를 임의로 변경</li>
            <li>
              회사가 허락하지 않은 정보(컴퓨터 프로그램 등)의 송신 또는 게시
            </li>
            <li>4. 회사 기타 제3자의 저작권 등 지적재산권에 대한 침해</li>
            <li>회사 기타 제3자의 명예를 손상시키거나 업무를 방해하는 행위</li>
            <li>
              외설 또는 폭력적인 메시지/화상/음성 기타 공서양속에 반하는 정보를
              화면에 공개 또는 게시하는 행위
            </li>
          </ol>
          <h4>제 4 조 회원의 혜택</h4>
          <ol>
            <li>
              회원을 대상으로 한 서비스(이벤트 및 우대 혜택 등) 의 혜택을
              E-mail, SMS 등의 문자 메시지로 제공 받을 수 있습니다.
            </li>
            <li>
              회원은 회사에서 주관하는 각종 이벤트나 행사에 참여하여 여러 가지
              혜택을 받을 수 있습니다. 이와 동시에 발생하는 각종 권리 의무관계는
              회원 가입 시 동의한 것으로 갈음합니다.
            </li>
          </ol>
        </div>
        <div className="document">
          <h3>[제 5장 사이버 몰 이용]</h3>
          <h4>제 1조 서비스의 제공 및 변경</h4>
          <ol>
            <li>
              사이버 몰(이하 “몰”)은 다음과 같은 업무를 수행합니다.
              <ol className="hangul">
                <li>
                  롯데월드 어드벤처, 롯데 워터파크, 롯데월드 아쿠아리움,
                  언더씨킹덤, 서울스카이, 롯데월드 어드벤처 부산 이용
                  티켓(종합이용권, 파크이용권, 연간이용권 등)에 대한 정보 제공
                  및 구매계약의 체결
                </li>
                <li>구매계약이 체결된 티켓의 발권 및 배송</li>
                <li>체험 상품 및 기타 상품에 대한 구매 계약의 체결</li>
                <li>기타 사이버 몰이 정하는 업무</li>
              </ol>
            </li>
            <li>
              (몰)은 재화 또는 용역의 품절 또는 기술적 사양의 변경 등의 경우에는
              장차 체결되는 계약에 의해 제공할 재화 또는 용역의 내용을 변경 할
              수 있습니다. 이 경우에는 변경된 재화 또는 용역의 내용 및 제공
              일자를 명시하여 현재의 재화 또는 용역의 내용을 게시한 곳에 즉시
              공지합니다.
            </li>
            <li>
              (몰)이 제공하기로 이용자와 계약을 체결한 서비스의 내용을 재화 등의
              품절 또는 기술적 사양의 변경 등의 사유로 변경할 경우에는 그 사유를
              이용자에게 통지 가능한 전자메일 또는 유선으로 즉시 통지합니다.
            </li>
            <li>
              전항의 경우 회사는 이로 인하여 이용자가 입은 손해를 배상합니다.
              다만, 회사의 고의 또는 과실이 없음을 입증하는 경우에는 그러하지
              아니합니다.
            </li>
          </ol>
          <h4>제 2조 서비스의 중단</h4>
          <ol>
            <li>
              (몰)은 컴퓨터 등 정보통신설비의 보수점검 교체 및 고장, 통신의 두절
              등의 사유가 발생한 경우에는 서비스의 제공을 일시적으로 중단할 수
              있습니다.
            </li>
            <li>
              (몰)은 제1항의 사유로 서비스의 제공이 일시적으로 중단됨으로 인하여
              이용자 또는 제3자가 입은 손해에 대하여 배상합니다. 단, (몰)이 고의
              또는 과실이 없음을 입증하는 경우에는 그러하지 아니합니다.
            </li>
            <li>
              사업종목의 전환, 사업의 포기, 업체간의 통합 등의 이유로 서비스를
              제공할 수 없게 되는 경우에는 (몰)은 제 7장 통지의 방법에 정한
              방법으로 이용자에게 통지하고 당초 (몰)에서 제시한 조건에 따라
              소비자에게 보상합니다. 다만, (몰)이 보상기준 등을 고지하지 아니한
              경우에는 이용자들의 마일리지 또는 적립금 등을 (몰)에서 통용되는
              통화가치에 상응하는 현물 또는 현금으로 이용자에게 지급합니다.
            </li>
          </ol>
          <h4>제 3조 구매신청</h4>
          <p>
            (몰)이용자는 (몰)상에서 다음 또는 이와 유사한 방법에 의하여 구매를
            신청하며, (몰)은 이용자가 구매신청을 함에 있어서 다음의 각 내용을
            알기 쉽게 제공하여야 합니다.
          </p>
          <ol>
            <li>티켓 및 재화 등의 검색 및 선택</li>
            <li>성명, 이동전화 번호, 전자우편주소, 주소 등의 입력</li>
            <li>
              개인정보 수집 동의, 약관내용, 청약 철회권이 제한되는 서비스,
              배송료 등의 비용부담과 관련한 내용에 대한 확인
            </li>
            <li>
              이 약관에 동의하고 위 3호의 사항을 확인하거나 거부하는 표시 (예,
              마우스 클릭)
            </li>
            <li>
              재화 등의 구매신청 및 이에 관한 확인 또는 사이버 몰의 확인에 대한
              동의 (예, 마우스 클릭)
            </li>
            <li>6. 결제방법의 선택</li>
          </ol>
          <h4>제 4조 계약의 성립</h4>
          <ol>
            <li>
              (몰)은 제 3조와 같은 구매신청에 대하여 다음 각호에 해당하지 않는
              한 승낙합니다. 단, 미성년자와 계약을 체결하는 경우에는
              법정대리인의 동의를 얻지 못하면 미성년자 본인 또는 법정대리인이
              계약을 취소할 수 있다는 내용을 고지하여야 합니다.
              <ol>
                <li>가. 신청 내용에 허위, 기재누락, 오기가 있는 경우</li>
                <li>
                  나. 기타 구매신청에 승낙하는 것이 사이버 몰의 기술상 현저히
                  지장이 있다고 판단하는 경우
                </li>
              </ol>
            </li>
            <li>
              (몰)의 승낙이 제 6조 제1항의 수신확인통지형태로 이용자에게 도달한
              시점에 계약이 성립한 것으로 봅니다.
            </li>
            <li>
              (몰)의 승낙의 의사표시에는 이용자의 구매 신청에 대한 확인 및
              판매가능 여부, 구매신청의 정정/취소 등에 관한 정보 등을 포함하여야
              합니다.
            </li>
            <li>
              계약이 성립한 후 (몰)이 제 1항 각 호의 사유를 발견한 경우 회사는
              즉시 계약을 취소 할 수 있으며 계약 취소시 고객이 결제한 상품
              대금은 환불처리 됩니다. 이 경우 고객은 (회사)에 손해 배상을 요구할
              수 없습니다.
            </li>
          </ol>
          <h4>제 5조 지급 방법</h4>
          <p>
            (몰)에서 구매한 티켓 또는 용역에 대한 대금 지급방법은 다음 각호의
            방법 중 가용한 방법으로 할 수 있습니다.
          </p>
          <ol>
            <li>선불카드, 직불카드, 신용카드 등의 각종 카드 결제</li>
            <li>L.POINT 등 회사와 계약을 맺은 포인트에 의한 결제</li>
          </ol>
          <h4>제 6조 수신확인 통지 구매신청 변경 및 취소</h4>
          <ol>
            <li>
              (몰)은 이용자의 구매신청이 있는 경우 이용자에게 수신 확인 통지를
              합니다.
            </li>
            <li>
              수신 확인 통지를 받은 이용자는 의사 표시의 불일치 등이 있는
              경우에는 수신 확인 통지를 받은 후 즉시 구매 신청 변경 및 취소를
              요청할 수 있습니다.
            </li>
            <li>
              3. 회사는 티켓 및 회원권의 발급 전에 이용자의 구매신청 변경 및
              취소 요청이 있는 때에는 지체 없이 그 요청에 따라 처리 합니다.
            </li>
          </ol>
          <h4>제 7조 티켓 등의 공급</h4>
          <ol>
            <li>(몰)에서 구매한 티켓은 모바일 APP을 통해서 수령합니다.</li>
            <li>
              구매체결 후 이용자가 지정한 날짜가 지나서도 발권하지 않으면 구매
              계약은 자동 취소 됩니다.
            </li>
            <li>
              재화 및 티켓을 배송 및 기타 수령 방법으로 받기로 계약한 경우
              (회사)는 계약에 명시된 방법과 기간을 준수하여 이용자에게
              공급합니다.
            </li>
            <li>
              (몰)의 고의. 과실로 약정된 기간 내 수령이 불가하게 된 경우에는
              그로 인한 이용자의 손해를 배상합니다.
            </li>
          </ol>
          <h4>제 8조 환불</h4>
          <ol>
            <li>
              (몰)은 이용자가 구매 신청한 티켓 등이 품절 등의 사유로 인도 또는
              제공을 할 수 없을 때에는 지체 없이 그 사유를 이용자에게 통지하고
              사전에 재화 등의 대금을 받은 경우에는 대금을 받은 날부터 3영업일
              이내에 환급하거나 환급에 필요한 조치를 취합니다.
            </li>
            <li>
              이용자가 모바일 APP을 통해 티켓을 발권 받은 후 사용전에 변심 혹은
              기타 사유로 환불을 받고자 할 경우 현장 환불 절차에 따라 환불을
              신청할 수 있으며, 이때 카드수수료 등 환불에 따른 소정의 수수료가
              발생할 수 있습니다.
            </li>
          </ol>
        </div>
        <div className="document">
          <h3>[제 6장 게시물 및 저작권]</h3>
          <h4>제 1조 게시물의 저작권</h4>
          <p>홈페이지에 게재된 자료에 대한 권리는 다음 각 항과 같습니다.</p>
          <ol>
            <li>
              게시물에 대한 권리와 책임은 게시자에게 있으며 회사는 게시자의 동의
              없이는 이를 서비스 내 게재 이외에 영리적 목적으로 사용할 수
              없습니다. 단, 비영리적인 경우에는 그러하지 아니하며 또한 회사는
              홈페이지 내의 게재권을 갖습니다.
            </li>
            <li>
              회원은 서비스를 이용하여 얻은 정보를 가공, 판매하는 행위 등
              홈페이지에 게재된 자료를 상업적으로 사용할 수 없습니다.
            </li>
          </ol>
          <h4>제 2조 회원의 게시물</h4>
          <p>
            회사는 회원이 게시하거나 등록하는 홈페이지 내의 내용물이 다음 각
            항에 해당한다고 판단되는 경우에 사전 통지 없이 삭제할 수 있습니다.
          </p>
          <ol>
            <li>
              다른 회원 또는 제3자를 비방하거나 중상모략 또는 허위사실의 적시
              등으로 명예를 손상시키는 내용인 경우
            </li>
            <li>공공질서 및 미풍양속에 위반되는 내용인 경우</li>
            <li>범죄적 행위에 결부된다고 인정되는 내용일 경우</li>
            <li>
              회사의 저작권, 제 3 자의 저작권 등 기타 권리를 침해하는 내용인
              경우
            </li>
            <li>회사에서 규정한 게시기간이나 용량을 초과한 경우</li>
            <li>기타 관계법령에 위반된다고 판단되는 경우</li>
          </ol>
          <h4>제 3조 저작권의 보호</h4>
          <ol>
            <li>
              회원은 회사가 소유한 저작권 기타 지적재산권을 무단 도용하는 등
              일체의 침해행위를 하여서는 안됩니다.
            </li>
            <li>
              회원은 서비스를 이용함으로써 얻은 정보를 회사의 사전 승낙 없이
              복제, 송신, 출판, 배포, 방송 기타 방법에 의하여 영리 목적으로
              이용하거나 제3자에게 이용하게 하여서는 안됩니다.
            </li>
            <li>
              위 1항, 2항의 규정을 위반하여 회사에 유, 무형적인 피해를 입힌 경우
              당해 회원은 그 손해를 배상하여야 합니다.
            </li>
          </ol>
        </div>
        <div className="document">
          <h3>[제 8장 회사의 면책사항]</h3>
          <h4>제 1조 면책의 경우</h4>
          <p>회사는 다음의 경우 책임을 부담하지 않습니다.</p>
          <ol>
            <li>
              회사는 천재지변, 불가항력 기타 회사의 합리적인 통제범위를 벗어난
              사유로 인하여 서비스를 제공할 수 없는 경우에는 그에 대한 책임을
              부담하지 않습니다.
            </li>
            <li>
              회사는 회원의 귀책사유로 인하여 서비스를 제공할 수 없는 경우에는
              그에 대한 책임을 부담하지 않습니다.
            </li>
            <li>
              회사는 회원이 회사의 서비스 제공으로부터 기대되는 이익을 얻지
              못하였거나 서비스 자료에 대한 취사 선택 또는 이용으로 발생하는
              손해 등에 대해서는 책임을 부담하지 않습니다.
            </li>
            <li>
              회원이 화면에 게재한 정보, 자료, 사실 등의 내용에 관한 신뢰도 또는
              정확성에 대하여는 해당 회원이 책임을 부담하며, 회사는 내용의
              부정확 또는 허위로 인해 회원 또는 제3자에게 발생한 손해에 대하여는
              아무런 책임을 부담하지 않습니다.
            </li>
            <li>
              회사는 서비스 이용과 관련하여 회원의 고의 또는 과실로 인하여 회원
              또는 제3자에게 발생한 손해에 대하여는 아무런 책임을 부담하지
              않습니다.
            </li>
          </ol>
        </div>
        <div className="document">
          <h3>[제 9장 사이트 연결 등의 광고 게재]</h3>
          <h4>제 1조 사이트 연결</h4>
          <ol>
            <li>
              회사는 업무상 홈페이지 내 타 사이트를 하이퍼링크 (하이퍼링크의
              대상에는 문자, 그림 및 동영상 등이 포함됨)방식 등에 의해 연결시킬
              수 있습니다.
            </li>
            <li>
              회사는 회원이 해당 연결사이트와 독자적으로 상품 또는 용역을 거래한
              행위에 대해서는 아무런 책임을 부담하지 않습니다.
            </li>
          </ol>
          <h4>제 2조 광고 게재</h4>
          <ol>
            <li>
              회사는 회원에게 외부 광고를 홈페이지에 게재하거나 이메일 또는
              DM(서신) 등을 이용하여 개별 회원에게 보낼 수 있습니다. 수신거절의
              의사를 명백히 표시한 회원에 대해서는 더 이상 이메일 등을 발송하지
              않습니다.
            </li>
            <li>
              회사는 본 서비스를 통한 광고주의 판촉활동에 회원이 직접
              참여함으로써 발생하는 손해에 대하여는 아무런 책임을 부담하지
              않습니다.
            </li>
          </ol>
        </div>
        <div className="document">
          <h3>[제 10장 분쟁해결]</h3>
          <h4>제 1조 분쟁해결</h4>
          <ol>
            <li>
              회사는 회원이 제기하는 정당한 의견이나 불만을 반영하고 그 피해를
              보상처리하기 위하여 피해보상처리기구인 고객센터를 설치/운영합니다.
            </li>
            <li>
              회사는 회원으로부터 제출되는 불만사항 및 의견을 우선적으로
              처리합니다. 다만, 신속한 처리가 곤란한 경우에는 회원에게 그 사유와
              처리일정을 통보합니다.
            </li>
            <li>
              회사와 회원간에 발생한 분쟁은 전자거래기본법 제28조 및 동법 시행령
              제15조에 의하여 설치된 전자거래분쟁조정위원회의 조정에 따를 수
              있습니다.
            </li>
          </ol>
        </div>
        <div className="document">
          <h3>[제 11장 관할법원 및 준거법]</h3>
          <h4>제 1조 관할법원</h4>
          <p>
            회사와 회원간에 발생한 전자거래 분쟁에 관한 소송은 민사소송법상의
            관할법원에 제기합니다.
          </p>
          <h4>제 2조 준거법</h4>
          <p>
            회사와 회원간에 제기된 전자거래 소송에는 대한민국법을 적용합니다.
          </p>
        </div>
      </div>
    </AgreementContainer>
  );
});

export default AgreementHome;
