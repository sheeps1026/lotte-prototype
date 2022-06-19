import React, { memo } from "react";
import styled from "styled-components";

import Close from "../assets/images/components/Email/close.png";
import Img from "../assets/images/components/Email/email.png";

const EmailContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 820px;
  height: 700px;
  padding: 0 40px;
  // background-color: yellow;
  transform: translate(-50%, -50%);

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    h2 {
      padding: 39px 0;
      color: rgb(51, 51, 51);
      font-size: 26px;
      font-weight: 700;
      letter-spacing: -1.56px;
      line-height: 39px;
    }

    button {
      border: none;
      background-color: #fff;
      font-size: 30px;
      cursor: pointer;

      img {
        width: 24px;
        height: 24px;
      }
    }
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
      width: 200px;
      height: 200px;
    }

    h3 {
      margin-top: 60px;
      color: rgb(51, 51, 51);
      font-size: 32px;
      font-weight: 600;
      letter-spacing: -0.36px;
      line-height: 48px;
    }

    p {
      text-align: center;
      margin-top: 25px;
      color: rgb(102, 102, 102);
      font-size: 18px;
      letter-spacing: -0.36px;
      line-height: 30px;

      strong {
        color: #000;
        font-weight: 700;
      }

      &:nth-child(4) {
        margin-top: 60px;
        color: rgb(136, 136, 136);
        font-size: 18px;
        letter-spacing: -0.36px;
        line-height: 27px;
      }
    }
  }
`;

const Email = memo(() => {
  return (
    <EmailContainer>
      <header>
        <h2>이메일무단수집거부</h2>
        <button>
          <img src={Close} alt="" />
        </button>
      </header>
      <div>
        <img src={Img} alt="" />
        <h3>롯데월드는 이메일무단수집을 거부합니다.</h3>
        <p>
          롯데월드 회원에게 무차별적으로 보내지는 타사의 메일을 차단하기 위해,
          본 웹사이트에 게시된 이메일
          <br /> 주소가 전자우편 수집프로그램이나 그 밖의 기술적 장치를 이용하여
          무단으로 수집되는 것을 거부하며,
          <br />
          <strong>이를 위반 시 정보통신망법에 의해 형사처벌됨을 유념</strong>
          하시기 바랍니다.
        </p>
        <p>2007.07.25</p>
      </div>
    </EmailContainer>
  );
});

export default Email;
