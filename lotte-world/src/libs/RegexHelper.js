/**
 * @filename    : RejexHelper.js
 * @autor       : 유다현 (ekgus1129@gmail.com);
 * @description : 정규표현식 검사 수행
 */

 import BadRequestException from "../exceptions/BadRequestException";

 class RegexHelper {
     /**
      * *값의 존재 여부를 검사한다.
      * *@param {string} field  검사할 대상의 css 선택자
      * *@param {string} msg       값이 없을 경우 표시할 메시지 내용
      */
   
     value(field, msg) {
       const content = field.value;
       console.error(content);
      
       if (
         content === undefined ||
         content === null ||
         (typeof content == "string" && content.trim().length === 0)
       ) {
         throw new BadRequestException(msg, field);
       }
       return true;
     }
   
     /**
      * *입력값이 지정된 글자수 미만인지 검사
      * *@param {string} field  검사할 대상의 css 선택자
      * *@param {int}    len       최대 글자수
      * *@param {string} msg       값이 없을 경우 표시할 메시지 내용
      */
   
     minLength(field, len, msg) {
       this.value(field, msg);
   
       let content = field.value;
       if (content.trim().length < len) {
         throw new BadRequestException(msg, field);
       }
       return true;
     }
     /**
      * *입력값이 지정된 글자수 이상인지 검사
      * *@param {string} field  검사할 대상의 css 선택자
      * *@param {int}    len       최대 글자수
      * *@param {string} msg       값이 없을 경우 표시할 메시지 내용
      */
     maxLength(field, len, msg) {
       this.value(field, msg);
   
       let content = field.value;
       if (content.trim().length > len) {
         throw new BadRequestException(msg, field);
       }
       return true;
     }
     /**
      * *입력값이 정규표현식을 충족하는지 검사
      * *@param {string} field  검사할 대상의 css 선택자
      * *@param {string} msg       값이 없을 경우 표시할 메시지 내용
      * *@param {object} regexExpr 검사할 정규표현식
      */
     field(field, msg, regexExpr) {
       this.value(field, msg);
   
       const content = field.value;
       const src = content.trim();
   
       if (!regexExpr.test(src)) {
         throw new BadRequestException(msg, field);
       }
       return true;
     }
     /**
      * *입력값이 핸드폰번호 형식에 맞는지 검사
      * *@param {string} field 검사할 대상의 css 선택자
      * *@param {string} msg      값이 없을 경우 표시할 메시지 내용
      */
     phoneNum(field,msg){
       return this.field(field,msg,/^[0-9]{2,3}[0-9]{3,4}[0-9]{4}/);
     }
   
   
   
     /**
      * *입력값이 숫자인지 검사
      * *@param {string} field 검사할 대상의 css 선택자
      * *@param {string} msg      값이 없을 경우 표시할 메시지 내용
      */
     num(field, msg) {
       return this.field(field, msg, /^[0-9]*$/);
     }
     /**
      * *입력값이 지정된 영어인지 검사
      * *@param {string} field 검사할 대상의 css 선택자
      * *@param {string} msg      값이 없을 경우 표시할 메시지 내용
      */
     eng(field, msg) {
       return this.field(field, msg, /^[a-zA-Z]*$/);
     }
     /**
      * *입력값이 지정된 숫자영어 조합인지 검사
      * *@param {string} field 검사할 대상의 css 선택자
      * *@param {string} msg      값이 없을 경우 표시할 메시지 내용
      */
     engNum(field, msg) {
       return this.field(field, msg, /^[a-zA-Z0-9]*$/);
     }
     /**
      * *입력값이 지정된 지정된 특수문자와 숫자 영어 조합인지 검사
      * *@param {string} field 검사할 대상의 css 선택자
      * *@param {string} msg      값이 없을 경우 표시할 메시지 내용
      */
     regExpEngNum(field, msg) {
       return this.field(field, msg, /^[a-z0-9_-]*$/);
     }
     /**
      * *입력값이 지정된 지정된 특수문자와 숫자 영어 조합인지 검사
      * *@param {string} field 검사할 대상의 css 선택자
      * *@param {string} msg      값이 없을 경우 표시할 메시지 내용
      */
     allRegExpEngNum(field, msg) {
       return this.field(
         field,
         msg,
         /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/
       );
     }
     /**
      * *입력값이 지정된 한글,영문인지 검사
      * *@param {string} field 검사할 대상의 css 선택자
      * *@param {string} msg      값이 없을 경우 표시할 메시지 내용
      */
     korEng(field, msg) {
       return this.field(field, msg, /^[a-z|A-Z|ㄱ-ㅎ|가-힣]+$/);
     }
 
     /**
      * *입력값이 지정된 한글인지 검사
      * *@param {string} field 검사할 대상의 css 선택자
      * *@param {string} msg      값이 없을 경우 표시할 메시지 내용
      */
      kor(field, msg) {
       return this.field(field, msg, /^[ㄱ-ㅎ가-힣]+$/);
     }
 
     /**
      * *입력값이 4글자의 숫자인지 검사
      * *@param {string} field 검사할 대상의 css 선택자
      * *@param {string} msg      값이 아닐 표시할 메시지 내용
      */
     numYear(field, msg) {
       return this.field(field, msg, /^\d{4}$/);
     }
     /**
      * *입력값이 체크 되어있는지 검사
      * *@param {string} field 검사할 대상의 css 선택자
      * *@param {string} msg      값이 없을 경우 표시할 메시지 내용
      */
     check(field, msg) {
         const checkedItem = Array.from(field).filter((v,i)=>v.checked);
     //   const content = field;
     //   const selectedOption = content.options[content.selectedIndex].value;
   
       // return alert(selectedOption);
     //   if (selectedOption === 0) {
     //     throw new BadRequestException(msg, field);
     //   }
       if (checkedItem.length === 0) {
         throw new BadRequestException(msg, field[0]);
       }
     }
   
     /**
      * *입력값이 1~ 31일 인지 검사
      * *@param {string} field 검사할 대상의 css 선택자
      * *@param {string} msg      값이 없을 경우 표시할 메시지 내용
      */
     numDay(seletor, msg) {
       return this.field(seletor, msg, /^(0[1-9]|[12][0-9]|3[01])$/);
     }
   
      /**
      * *입력값이 있으면 이메일 형식을 검사
      * *@param {string} field 검사할 대상의 css 선택자
      * *@param {string} msg      값이 없을 경우 표시할 메시지 내용
      */
     email(field, msg) {
       const content = field.value;
       if (content === "") {
         return true;
       } else {
         return this.field(
           field,
           msg,
           /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i
         );
       }
     }
     /**
      * *입력값이 지정된 값과 일치하는지 검사
      * *@param {string} origin   원본
      * *@param {string} compare  비교대상
      * *@param {string} msg      값이 다를 경우 표시할 메시지 내용
      */
     compareTo(origin, compare, msg) {
       this.value(origin, msg);
       this.value(compare, msg);
   
       var src = origin.value.trim();
       var dsc = compare.value.trim();
   
       if (src !== dsc) {
         throw new BadRequestException(msg, origin);
       }
       return true;
     }
   }
   
   export default new RegexHelper();