/**
 * @filename: EnjoyList.js
 * @description: 놀이기구 목록
 */
import React, { memo, useEffect,useState } from 'react';
import axios from "axios";
import {Routes,Route,NavLink} from 'react-router-dom';
import styled from 'styled-components';


// 이미지 첨부
import att1 from '../../assets/images/pages/enjoy/202202250148171640_420.jpg';
import att2 from '../../assets/images/pages/enjoy/202203240224470610.jpg';
import att3 from '../../assets/images/pages/enjoy/202202250150303520.jpg';
import att4 from '../../assets/images/pages/enjoy/202202250151106020.jpg';
import att5 from '../../assets/images/pages/enjoy/202202250151422890.jpg';
import att6 from '../../assets/images/pages/enjoy/202202250322114670.jpg';
import att7 from '../../assets/images/pages/enjoy/202202250323048450.jpg';
import att8 from '../../assets/images/pages/enjoy/202203240228245450.jpg';
import att9 from '../../assets/images/pages/enjoy/202203240215022000.jpg';
import bg from '../../assets/images/pages/enjoy/fixed-bg-zone.jpg';

const EnjoyListStyled = styled.div`
position: relative;
width: 100%;
.title {
    width: 1380px;
    max-width: calc(100%-240px);
    margin: 0 auto;
    margin-top: 175px;
    h2 {
        color: #fff;
        font-size: 60px;
        font-weight: 700;
        line-height: 1;
        letter-spacing: -.06em;
        word-break: keep-all;
    }
  }
.contents {
    .fixed_bg.zone {
        background-image: url(${bg});
    }
    .subwrap { 
        width: 100%;
        padding: 110px 0 180px;
        position: relative;
        margin-top: 150px;
        padding-top: 120px;
        padding-bottom: 180px;
        &::before {
            content: "";
            position: absolute;
            top: 0;
            left: auto;
            right: 0;
            width: calc(100% - 120px);
            display: block;
            height: 100%;
            background: #fff;
        }

        .inner {
            width: 1380px;
            max-width: calc(100% - 240px);
            margin: 0 auto;
            position: relative;
            .cardlist {
                ul {
                    display: flex;
                    flex-wrap: wrap;
                    li {
                        width: 419px;
                        float: left;
                        margin-top: 85px;
                        margin-right: 60px;
                        &:nth-child(-n+3) {
                            margin-top: 0;
                        }
                        &:nth-child(3n) {
                            margin-right: 0;
                        }
                        a {
                            display: block;

                            .cardimg {
                                position: relative;
                                width: 100%;
                                overflow: hidden;
                                .img {
                                    transition: all .6s ease;
                                    transform: scale(1);
                                    height: 100%;
                                    img {
                                        width: 100%;
                                    }
                                }
                                .category {
                                    position: absolute;
                                    top: 0;
                                    left: 0;
                                    right: auto;
                                    width: auto;
                                    min-width: 95px;
                                    height: 35px;
                                    padding: 0 20px;
                                    font-size: 16px;
                                    font-weight: 500;
                                    color: #fff;
                                    line-height: 35px;
                                    background: rgba(0, 0, 0, 0.5);
                                    text-align: center;
                                    }
                                }
                            .cardtxt {
                                min-height: 91px;
                                .tit {
                                    margin-top: 25px;
                                    font-size: 26px;
                                    font-weight: 700;
                                    color: #000;
                                    line-height: 1.5;
                                    letter-spacing: -0.06em;
                                    overflow: hidden;
                                    text-overflow: ellipsis;
                                    white-space: nowrap;
                                }
                                .taglist {
                                    margin-top: 10px;
                                    p {
                                        display: inline-block;
                                        min-height: 32px;
                                        padding: 0 15px;
                                        margin: 0 2px 10px;
                                        font-size: 16px;
                                        font-weight: 400;
                                        color: #888;
                                        line-height: 30px;
                                        border-radius: 20px;
                                        border: 1px solid #ddd;
                                        &:last-child {
                                            margin-right: 0;
                                        }
                                    }
                                }
                            }
                          }
                        }
                    }
                }
            }
        }
    }

`;
const EnjoyList = memo(() => {
    const [view, setView] = useState([]);
    useEffect(() => {
        (async () => {
            let json = null;
            try {
                const response = await axios.get(`http://localhost:3001/enjoyInfoList`);
                json = response.data;
            } catch (e) {
                console.error(e);
            }
            if (json!=null) {
                setView(json);
            }
        })();
    }, []);

    return (
        <EnjoyListStyled>
            <div className='title'>
                <h2>어트랙션</h2>
            </div>
            <div className='contents'>
                <div className='fixed_bg zone'/>
                <div className='subwrap'>
                    <div className='inner'>
                        <div className='cardlist'>
                            <ul>
                                {view.map((v,i) => {
                                    return (
                                        <li key={i}>
                                            <NavLink to={`/enjoyList/${v.EN_id}`} href='#!'>
                                                <div className='cardimg'>
                                                    <p className='img'>
                                                        <img src={v.img} alt=''/>
                                                    </p>
                                                    <p className='category'>어트랙션 {`[${v.loc}]`}</p>
                                                </div>
                                                <div className='cardtxt'>
                                                    <p className='tit'>{v.title}</p>
                                                    <div className='taglist'>
                                                        <p>{v.hashtag}</p>
                                                    </div>
                                                </div>
                                            </NavLink>
                                        </li>
                                    )
                                })}
                                {/* <li>
                                    <NavLink to={`/enjoyView/${view.EN_id}`} href='#!'>
                                        <div className='cardimg'>
                                            <p className='img'>
                                                <img src={att1} alt='토킹트리'/>
                                            </p>
                                            <p className='category'>어트랙션 [팅커폴스]</p>
                                        </div>
                                        <div className='cardtxt'>
                                            <p className='tit'>토킹트리</p>
                                            <div className='taglist'>
                                                <p>#패밀리</p>
                                            </div>
                                        </div>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to='/enjoyView/2' href='#!'>
                                        <div className='cardimg'>
                                            <p className='img'>
                                                <img src={att2} alt='쿠키열차'/>
                                            </p>
                                            <p className='category'>어트랙션 [조이풀메도우]</p>
                                        </div>
                                        <div className='cardtxt'>
                                            <p className='tit'>쿠키열차</p>
                                            <div className='taglist'>
                                                <p>#패밀리</p>
                                                <p>#매직패스</p>
                                                <p>#롤러코스터</p>
                                            </div>
                                        </div>
                                    </NavLink>
                                </li>
                                <li>
                                    <a href='#!'>
                                        <div className='cardimg'>
                                            <p className='img'>
                                                <img src={att3} alt='날아라꼬꼬'/>
                                            </p>
                                            <p className='category'>어트랙션 [조이풀메도우]</p>
                                        </div>
                                        <div className='cardtxt'>
                                            <p className='tit'>날아라꼬꼬</p>
                                            <div className='taglist'>
                                                <p>#어린이</p>
                                                <p>#회전형</p>
                                                <p>#꼬꼬</p>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a href='#!'>
                                        <div className='cardimg'>
                                            <p className='img'>
                                                <img src={att4} alt='달려라염소'/>
                                            </p>
                                            <p className='category'>어트랙션 [조이풀메도우]</p>
                                        </div>
                                        <div className='cardtxt'>
                                            <p className='tit'>달려라염소</p>
                                            <div className='taglist'>
                                                <p>#어린이</p>
                                                <p>#회전형</p>
                                                <p>#염소</p>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a href='#!'>
                                        <div className='cardimg'>
                                            <p className='img'>
                                                <img src={att5} alt='춤추는포니'/>
                                            </p>
                                            <p className='category'>어트랙션 [조이풀메도우]</p>
                                        </div>
                                        <div className='cardtxt'>
                                            <p className='tit'>춤추는포니</p>
                                            <div className='taglist'>
                                                <p>#어린이</p>
                                                <p>#햇님달님</p>
                                                <p>#포니</p>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a href='#!'>
                                        <div className='cardimg'>
                                            <p className='img'>
                                                <img src={att6} alt='아기돼지범퍼카'/>
                                            </p>
                                            <p className='category'>어트랙션 [조이풀메도우]</p>
                                        </div>
                                        <div className='cardtxt'>
                                            <p className='tit'>아기돼지범퍼카</p>
                                            <div className='taglist'>
                                                <p>#어린이</p>
                                                <p>#범퍼카</p>
                                                <p>#아기돼지</p>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a href='#!'>
                                        <div className='cardimg'>
                                            <p className='img'>
                                                <img src={att7} alt='양들의격투'/>
                                            </p>
                                            <p className='category'>어트랙션 [조이풀메도우]</p>
                                        </div>
                                        <div className='cardtxt'>
                                            <p className='tit'>양들의격투</p>
                                            <div className='taglist'>
                                                <p>#연인</p>
                                                <p>#패밀리</p>
                                                <p>#매직패스</p>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a href='#!'>
                                        <div className='cardimg'>
                                            <p className='img'>
                                                <img src={att8} alt='회전목마'/>
                                            </p>
                                            <p className='category'>어트랙션 [조이풀메도우]</p>
                                        </div>
                                        <div className='cardtxt'>
                                            <p className='tit'>회전목마</p>
                                            <div className='taglist'>
                                                <p>#연인</p>
                                                <p>#패밀리</p>
                                                <p>#매직패스</p>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a href='#!'>
                                        <div className='cardimg'>
                                            <p className='img'>
                                                <img src={att9} alt='스완레이크'/>
                                            </p>
                                            <p className='category'>어트랙션 [로얄가든]</p>
                                        </div>
                                        <div className='cardtxt'>
                                            <p className='tit'>스완레이크</p>
                                            <div className='taglist'>
                                                <p>#연인</p>
                                                <p>#패밀리</p>
                                                <p>#매직패스</p>
                                            </div>
                                        </div>
                                    </a>
                                </li> */}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        </EnjoyListStyled>
    );
});

export default EnjoyList;