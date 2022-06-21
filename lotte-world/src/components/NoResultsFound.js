import React, { memo } from 'react';
import noImage from "../assets/images/none-icon_2022.png"
import styled from "styled-components";
const NoResultWrap = styled.div`
    background: #f1f1f1;
    width: 100%;
    height: 300px;
    position: relative;
    img{
        display: block;
    margin: 0 auto;
    position: relative;
    padding: 75px 0 0;
    }
    p{
        text-align: center;
        line-height: 2;
        color: #666;
        padding:10px 0 ;
        font-weight: bold;

    }
`
const NoResultsFound = memo(() => {
    return (
        <NoResultWrap>
            <img src={noImage} alt="검색 결과 없음"/>
            <p>검색결과가 없습니다.</p>
        </NoResultWrap>
    );
});

export default NoResultsFound;