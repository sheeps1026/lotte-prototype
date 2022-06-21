import React, { memo } from "react";
import styled from "styled-components";
import checkboxOff from "../../assets/images/checkbox-icon.png";
import checkboxOn from "../../assets/images/checkbox-icon-on.png";
import selectBg from "../../assets/images/select-icon2.png";
const InquiryWriteWrap = styled.div`
width: 50%;
margin: 0 auto;
position: relative;
  ul {
    padding: 30px 40px;
    background: #f2f2f2f2;
    width: 100%;
    li {
      color: #888;
      line-height: 1.5;
      font-size: 17px;
      padding: 5px 0;
      font-weight: 400;
      &:before {
        position: absolute;
        left: 30px;
        content: "·";
        font-size: 15px;
        font-weight: bold;
      }
    }
  }
  h4 {
    font-weight: bold;
    font-size: 26px;
    margin: 20px 0;
    letter-spacing: -1px;
    span {
      color: green;
    }
  }
  h5 {
    font-weight: bold;
    font-size: 20px;
    margin: 20px 0;
    &:after {
      content: "＊";
      font-weight: bold;
      color: green;
    }
  }
  .ScroolDiv {
    max-height: 150px;
    overflow-y: scroll;
    overflow-x: hidden;
    border: 1px solid #ccc;
    padding: 40px 30px;
    width: 100%;
    h3 {
      font-weight: bold;
      color: #777;
      font-size: 19px;
      line-height: 2;
    }
    p {
      font-size: 18px;
      line-height: 1.5;
      color: #777;
    }
  }
  .CheckBoxWrap {
    border-left: 1px solid #ccc;
    border-right: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
    padding: 20px;
    width: 100%;
    input[type="checkbox"] {
      display: none;
      & + label {
        padding: 5px 35px;
        background: url(${checkboxOff}) left center no-repeat;
        line-height: 1.5;
        font-size: 19px;
        color: #444;
      }
      &:checked + label {
        background: url(${checkboxOn}) left center no-repeat;
      }
    }
  }
  .titleWrap {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    border-bottom: 1px solid #000;
    .essentialTxt {
      color: green;
      &:before {
        content: "＊";
        font-weight: bold;
      }
    }
  }
  .selectStyle {
    -o-appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    padding: 15px 15px;
    width: 250px;
    color: #000 !important;
    font-size: 19px;
    border: 1px solid #eee;
    background: url(${selectBg}) 90% 50% no-repeat;
    &:placeholder {
      color: #777;
    }
  }
  .inputSt {
    padding: 15px 15px;
    width: 250px;
    color: #777;
    font-size: 19px;
    border: 1px solid #eee;
  }
  .txtareaSt {
    width: 100%;
    color: #777;
    font-size: 19px;
    border: 1px solid #eee;
    resize: none;
    height: 230px;
    padding: 10px;
  }
  .fileAddBtn {
    display: none;
    & + label {
      display: inline-block;
      font-size: 18px;
      border: 1px solid #000;
      padding: 15px 20px;
      font-weight: bold;
      border: 1px solid #222;
    }
  }
  .noticeTxt {
    line-height: 1.5;
    margin: 20px 0px;
    color: #222;
    font-size: 18px;
  }
  .resetBtn {
    width: 160px;
    background: none;
    font-size: 20px;
    font-weight: bold;
    color: #777;
    border: 1px solid #777;
    padding: 15px 30px;
    border-radius: 50px;
    bottom: 0px;
    position: relative;
    overflow: hidden;
    z-index: 1;
    /* &:hover {
      color: #fff; */
    &:after {
      left: 0;
      content: "";
      display: block;
      width: 160px;
      border-radius: 50%;
      height: 160px;
      background: #777;
      position: absolute;
      /* bottom: 20px; */
      top: 55px;
      transition: all 0.4s;
      z-index: -1;
    }
    &:hover {
      color: #fff;
      border: 1px solid #777;
      &:after {
        top: -50px;
      }
    }
  }
  .submitBtn {
    width: 160px;
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
    /* &:hover {
      color: #fff; */
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

const InquiryWrite = memo(() => {
  return (
    <InquiryWriteWrap>
      <ul>
        <li>답변은 이메일 주소로 발송됩니다.</li>
        <li>
          접수 후 1주 이내 회신을 드리기 위해 노력하고 있습니다., 공휴일에
          접수될 경우 답변에 시간이 소요될 수 있으니 양해 부탁드립니다.
        </li>
        <li>
          불건전한 내용(개인정보보안, 귀책사유에 대한 개인 음해성 비방의 글 등)
          또는광고성 게시글은 사전 통보없이 삭제될 수 있습니다.
        </li>
      </ul>
      <h4>
        개인정보수집,이용동의서 <span>(필수)</span>
      </h4>
      <div className="ScroolDiv">
        <h3>개인 정보 수집 , 이용 동의서</h3>
        <p>
          본인은 방문 전 이용문의 작성과 관련하여 귀사가 아래와 같이 본인의
          개인정보를 수집, 이용하는데 동의합니다.
        </p>
        <h3>개인 정보 수집 , 이용 동의서</h3>
        <p>
          1. 본인은 방문 전 이용문의 작성과 관련하여 귀사가 아래와 같이 본인의
          개인정보를 수집, 이용하는데 동의합니다.
        </p>
      </div>
      <form name="">
        <div className="CheckBoxWrap">
          <input type="checkbox" id="checkBoxWrap" />
          <label for="checkBoxWrap">동의합니다.</label>
        </div>
        <div className="titleWrap">
          <h4>문의등록</h4>
          <span className="essentialTxt">는 필수 입력값입니다.</span>
        </div>
        <h5>문의유형</h5>
        <select className="selectStyle" name="" id="">
          <option value="">선택</option>
        </select>
        <h5>이름</h5>
        <input
          type="text"
          className="inputSt"
          placeholder="이름을 입력하세요."
        />
        <h5>이메일주소</h5>
        <input
          type="mail"
          className="inputSt"
          placeholder="이메일주소를 입력하세요."
        />
        <h5>제목</h5>
        <input
          type="text"
          className="inputSt"
          placeholder="제목을 입력하세요."
        />
        <h5>내용</h5>
        <textarea
          type="text"
          className="txtareaSt"
          placeholder="내용을 입력하세요."
        />
        <h5>첨부파일</h5>
        <input type="file" className="fileAddBtn" id="fileAdd" />
        <label for="fileAdd">첨부파일</label>
        <p className="noticeTxt">
          ※ 파일 (jpg,png,jpeg,pdf,pptx,xisx,docx)만 최대 1개 등록 가능합니다.
        </p>
        <h5>자동등록방지</h5>
        <p className="noticeTxt">
          ※ 롯데월드 게시판은 게시물이 자동으로 등록되는 것을 방지하기 위해서
          보안절차를 거치고 있습니다.
        </p>
        <button type="button" className="resetBtn">
          취소
        </button>
        <button type="submit" className="submitBtn">
          등록
        </button>
      </form>
    </InquiryWriteWrap>
  );
});

export default InquiryWrite;