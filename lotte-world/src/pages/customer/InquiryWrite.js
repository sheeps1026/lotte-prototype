import React, { memo } from "react";
import styled from "styled-components";
import checkboxOff from "../../assets/images/checkbox-icon.png";
import checkboxOn from "../../assets/images/checkbox-icon-on.png";
import selectBg from "../../assets/images/select-icon2.png";
import useAxios from "axios-hooks";
import regexHelper from "../../libs/RegexHelper";
import { createRoutesFromChildren, useNavigate } from "react-router-dom";
const InquiryWriteWrap = styled.div`
  width: 50%;
  margin: 240px auto;
  position: relative;
  ul {
    padding: 30px 40px;
    background: #f2f2f2f2;
    width: calc(100% - 80px);
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
    margin: 60px 0 20px;
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
    box-sizing: border-box;
    &::-webkit-scrollbar {
      width: 15px;
    }
    &::-webkit-scrollbar-thumb {
      background-color: #ccc;
      border-radius: 20px;
      border: 3px solid #fff;
    }
    &::-webkit-scrollbar-track {
      background-color: #fff;
    }
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
    box-sizing: border-box;
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
  .selectSt {
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
  .fileCon {
    display: flex;
    align-items: center;
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
    .fileWrap {
      display: flex;
      align-items: center;
      span {
        display: inline-block;
      }
      .fileName {
        line-height: 1.5;
        width: 150px;
        text-overflow: ellipsis;
        overflow: hidden;
        margin: 0 0 0 10px;
      }
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

const InquiryWrite = () => {
  const navigate = useNavigate();
  // 백엔드에 데이터 저장을 위한 Ajax 요청 객체 생성
  const [{ loading }, refetch] = useAxios(
    {
      url: "http://localhost:3001/bbs_inquire",
      method: "POST",
    },
    { menual: true }
  );
  const onSubmit = React.useCallback((e) => {
    e.preventDefault();
    const current = e.target;

    try {
      //유형
      regexHelper.value(current.division, "유형을 선택하세요");
      //이름
      regexHelper.value(current.name, "이름을 입력하세요");
      regexHelper.minLength(
        current.name,
        2,
        "이름은 최소 2글자이상 입력하세요."
      );
      regexHelper.maxLength(
        current.name,
        10,
        "이름은 최대 10글자이하 입력하세요."
      );
      //이메일
      regexHelper.value(current.mail, "문의하시는 분의 이메일을 입력하세요.");
      regexHelper.emailCheck(current.mail, "정확한 이메일 형식을 입력하세요.");
      //타이틀
      regexHelper.value(current.title, "제목을 입력하세요");
      regexHelper.minLength(
        current.title,
        "제목은 최소 2글자 이상 입력하세요."
      );
      regexHelper.maxLength(
        current.title,
        "제목은 최대 100글자 이하 입력하세요."
      );
      //내용
      regexHelper.value(current.content, "내용을 입력하세요");
      regexHelper.minLength(
        current.content,
        "내용은 최소 2글자 이상 입력하세요."
      );
      regexHelper.maxLength(
        current.content,
        "내용은 최대 100글자 이하 입력하세요."
      );
    } catch (e) {
      window.alert(e.message);
      console.log(e);
      return;
    }
    let json = null;

    (async () => {
      try {
        const response = await refetch({
          data: {
            I_name: current.name.value,
            I_division: current.division.value,
            I_mail: current.mail.value,
            I_title: current.title.value,
            I_content: current.content.value,
            I_file: current.file.value,
          },
        });
        json = response.data;
        console.log("저장중");
      } catch (e) {
        console.error(e);
        console.log("저장안댐");
        // window.alert(`[${e.response.status}] ${e.response.statusText}\n${e.message}`);
      }

      //정상으로 저장되었다면?
      if (json !== null) {
        window.alert("답변은 메일로 전송해드리겠습니다.");
        navigate("/customer/InquiryWrite");
      }
    })();
  });

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
          개인정보를 수집, 이용하는데 동의합니다. 2. 수집하는 개인정보의 항목
          고객의 요청ㆍ문의사항 확인, 사실조사를 위한 연락ㆍ통지, 처리결과 통보
          등의 목적 3. 개인정보의 보유, 이용기간 본인은 방문 전 이용문의 작성과
          관련하여 귀사가 아래와 같이 본인의 개인정보를 수집, 이용하는데
          동의합니다.
        </p>
      </div>
      <form onSubmit={onSubmit}>
        <div className="CheckBoxWrap">
          <input
            type="checkbox"
            id="checkBoxWrap"
            name="I_check"
            className="field"
          />
          <label htmlFor="checkBoxWrap">동의합니다.</label>
        </div>
        <div className="titleWrap">
          <h4>문의등록</h4>
          <span className="essentialTxt">는 필수 입력값입니다.</span>
        </div>
        <h5>문의유형</h5>
        <select className="selectSt" name="division">
          <option value="">선택</option>
          <option value="1">유형1</option>
          <option value="2">유형2</option>
          <option value="3">유형3</option>
        </select>
        <h5>이름</h5>
        <input
          type="text"
          className="inputSt"
          placeholder="이름을 입력하세요."
          name="name"
        />
        <h5>이메일주소</h5>
        <input
          type="mail"
          className="inputSt"
          placeholder="이메일주소를 입력하세요."
          name="mail"
          // ref={(el) => (inputRef.current[3] = el)}
        />
        <h5>제목</h5>
        <input
          type="text"
          className="inputSt"
          placeholder="제목을 입력하세요."
          name="title"
          // ref={(el) => (inputRef.current[4] = el)}
        />
        <h5>내용</h5>
        <textarea
          type="text"
          className="txtareaSt"
          placeholder="내용을 입력하세요."
          name="content"
          // ref={(el) => (inputRef.current[5] = el)}
        />
        <h5>첨부파일</h5>
        <div className="fileCon">
          <input
            type="file"
            className="fileAddBtn field"
            id="fileAdd"
            name="file"
            // ref={(el) => (inputRef.current[6] = el)}
          />
          <label htmlFor="fileAdd">첨부파일</label>
          <div className="fileWrap">
            <span className="fileName">
              filenamefilenamefilenamefilenamefilenamefilename
            </span>
            <span>.png</span>
          </div>
        </div>
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
};

export default InquiryWrite;
