import { useLocation } from "react-router-dom";

const useQueryString = (props) => {
    //QueryString 문자열 추출함
    const { search } = useLocation();
    // console.log(search +"search 이걸 받아옴");

    //QueryString 문자열을 객체로 변환
    const params = new URLSearchParams(search);
    // console.log("파람스는"+new URLSearchParams(search));
    //모든 key와 value의 쌍을 for ...in 반복문 처리 가능한 [key,value]쌍으로 반환
    
    const entries = params.entries();
    
    //리턴할 빈 객체
    const result = {}

    for(const [key,value] of entries){
        result[key] = value;
    }
    // console.log(props);

    //추출된 결과에서 props에 설정된 key가 없다면 props의 값으로 대처함
    for(const p in props){
        if(!result.hasOwnProperty(p)){
            result[p]= props[p]
        }
    }
    // console.log(result);
    
    return result;
};

export { useQueryString };