<<<<<<< HEAD
import BadRequestException from "../exceptions/BadRequestException.js";

class RegexHelper {
  // 값의 존재 여부를 검사
  value(field, msg) {
    const content = field.value;

    if (
      content == undefined ||
      content == null ||
      (typeof content == "string" && content.trim().length == 0)
    ) {
      throw new BadRequestException(msg, field);
    }

    return true;
  }

  // 아이디 검사
  idCheck(field, min, max, msg) {
    this.value(field, msg);

    const content = field.value;

    if (content.trim().length > max) {
      throw new BadRequestException(msg, field);
    }

    if (content.trim().length < min) {
      throw new BadRequestException(msg, field);
    }

    return this.field(field, msg, /^[a-z0-9\-_]*$/);
  }

  // 비밀번호 검사
  pwdCheck(field, min, max, msg) {
    this.value(field, msg);

    const content = field.value;

    if (content.trim().length > max) {
      throw new BadRequestException(msg, field);
    }

    if (content.trim().length < min) {
      throw new BadRequestException(msg, field);
    }

    return this.field(
      field,
      msg,
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]*$/
    );
  }

  // 비밀번호 검사 (두 값이 동일한지 검사)
  pwdCompareTo(origin, compare, msg) {
    this.value(origin, msg);
    this.value(compare, msg);

    var src = origin.value.trim();
    var dsc = compare.value.trim();

    if (src != dsc) {
      throw new BadRequestException(msg, origin);
    }

    return true;
  }

  // 이름 검사
  nameCheck(field, msg) {
    return this.field(field, msg, /^[a-zA-Zㄱ-힣0-9]*$/);
  }

  // 생년월일 검사
  yearCheck(field, msg) {
    return this.field(field, msg, /^[0-9]{4}$/);
  }

  // 이메일주소 형식인지 검사하기 위해 field()를 간접적으로 호출
  emailCheck(field, msg) {
    return this.field(
      field,
      msg,
      /^([\w-]+(?:\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i
    );
  }

  // 핸드폰 번호 형식과 집전화 번호 형식 둘중하나를 충족하는지 검사
  phoneCheck(field, msg) {
    this.value(field, msg);

    const content = field.value.trim();
    var check1 = /^01(?:0|1|[6-9])(?:\d{3}|\d{4})\d{4}$/;
    var check2 = /^\d{2,3}\d{3,4}\d{4}$/;

    // 핸드폰 형식도 아니고, 집전화 형식도 아니라면
    if (!check1.test(content) && !check2.test(content)) {
      throw new BadRequestException(msg, field);
    }

    return true;
  }

  // 라디오나 체크박스가 선택된 항목인지 검사
  check(field, len, msg) {
    const checkedItem = Array.from(field).filter((v, i) => v.checked);

    if (checkedItem.length === 0) {
      throw new BadRequestException(msg, field[0]);
    }
  }

  // 라디오나 체크박스의 최소 선택 갯수를 제한
  checkMin(field, msg) {
    const checkedItem = Array.from(field).filter((v, i) => v.checked);

    if (checkedItem.length < 0) {
      throw new BadRequestException(msg, field[0]);
    }
  }

  // 라디오나 체크박스의 최대 선택 갯수를 제한
  checkMax(field, len, msg) {
    const checkedItem = Array.from(field).filter((v, i) => v.checked);

    if (checkedItem.length > 0) {
      throw new BadRequestException(msg, field[0]);
    }
  }

  // 입력값이 정규표현식을 충족하는지
  field(field, msg, regexExpr) {
    this.value(field, msg);

    const content = field.value;
    const str = content.trim();

    if (!regexExpr.test(str)) {
      throw new BadRequestException(msg, field);
    }

    return true;
  }

  // 입력값이 지정된 글자수를 초과했는지 검사
  maxLength(field, len, msg) {
    this.value(field, msg);

    const content = field.value;

    if (content.trim().length > len) {
      throw new BadRequestException(msg, field);
    }

    return true;
  }

  // 입력값이 지정된 글자수 미만인지 검사
  minLength(field, len, msg) {
    this.value(field, msg);

    const content = field.value;

    if (content.trim().length < len) {
      throw new BadRequestException(msg, field);
    }

    return true;
  }

  // 숫자로만 이루어 졌는지 검사하기 위해 field()를 간접적으로 호출
  num(field, msg) {
    return this.field(field, msg, /^[0-9]*$/);
  }

  // 영문으로만 이루어 졌는지 검사하기 위해 field()를 간접적으로 호출
  eng(field, msg) {
    return this.field(field, msg, /^[a-zA-Z]*$/);
  }

  // 한글로만 이루어 졌는지 검사하기 위해 field()를 간접적으로 호출
  kor(field, msg) {
    return this.field(field, msg, /^[ㄱ-ㅎ가-힣]*$/);
  }

  // 영문과 숫자로만 이루어 졌는지 검사하기 위해 field()를 간접적으로 호출
  engNum(field, msg) {
    return this.field(field, msg, /^[a-zA-Z0-9]*$/);
  }

  // 한글과 숫자로만 이루어 졌는지 검사하기 위해 field()를 간접적으로 호출
  korNum(field, msg) {
    return this.field(field, msg, /^[ㄱ-ㅎ가-힣0-9]*$/);
  }
}

export default new RegexHelper();
=======
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
>>>>>>> cfefcfb4dedad26bcc266de9674da19666fef568
