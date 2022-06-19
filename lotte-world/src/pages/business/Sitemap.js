import React, { memo } from "react";
import { Routes, Route, Link } from "react-router-dom";
import styled from "styled-components";

import Introduce from "./Introduce";
import AgreementHome from "./AgreementHome";
import AgreementAdventure from "./AgreementAdventure";
import AgreementMembership from "./AgreementMembership";
import Email from "../../components/Email";

const SitemapContainer = styled.div`
  width: 1540px;
  margin: 0 auto;

  > div {
    h2 {
      margin-top: 175px;
      color: #333333;
      font-size: 60px;
      font-weight: 700;
      letter-spacing: -3.6px;
      line-height: 60px;
    }

    > div {
      padding-top: 100px;

      > ul {
        display: flex;
        justify-content: space-between;

        > li {
          margin-right: 60px;
          padding-bottom: 75px;

          > a {
            color: #333333;
            text-decoration: none;
            font-size: 32px;
            font-weight: 700;
            letter-spacing: -1.92px;
            line-height: 38.4px;
          }

          > ul {
            margin-top: 30px;

            > li {
              margin-top: 14px;

              &:nth-child(1) {
                margin-top: 0;
              }

              > a {
                color: rgb(51, 51, 51);
                text-decoration: none;
                font-size: 18px;
                letter-spacing: -0.36px;
                line-height: 27px;
              }

              > ul {
                margin-top: 7px;

                > li {
                  margin-top: 5px;

                  &:nth-child(1) {
                    margin-top: 0;
                  }

                  &::before {
                    content: "·";
                    padding-right: 15px;
                    color: rgb(136, 136, 136);
                  }

                  > a {
                    text-decoration: none;
                    color: rgb(136, 136, 136);
                    font-size: 16px;
                    letter-spacing: -0.36px;
                    line-height: 24px;
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

const Sitemap = memo(() => {
  return (
    <SitemapContainer>
      <div>
        <h2>사이트맵</h2>
        <div>
          <ul>
            <li>
              <Link to="/">즐길거리</Link>
              <ul>
                <li>
                  <Link to="/">어트랙션</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/">이용가이드</Link>
              <ul>
                <li>
                  <Link to="/">가이드맵</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/">소통공간</Link>
              <ul>
                <li>
                  <Link to="/">공지사항</Link>
                </li>
                <li>
                  <Link to="/">자주 묻는 질문</Link>
                </li>
                <li>
                  <Link to="/">문의사항</Link>
                  <ul>
                    <li>
                      <Link to="/">분실물 센터</Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/Introduce">유틸리티</Link>
              <ul>
                <li>
                  <Link to="/Introduce">롯데월드 어드벤처 부산 소개</Link>
                </li>
                <li>
                  <Link to="/AgreementHome">이용약관</Link>
                  <ul>
                    <li>
                      <Link to="/AgreementHome">홈페이지</Link>
                    </li>
                    <li>
                      <Link to="/AgreementAdventure">
                        롯데월드 어드벤처 부산
                      </Link>
                    </li>
                    <li>
                      <Link to="/AgreementMembership">연간이용</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to="/Sitemap">사이트맵</Link>
                </li>
                <li>
                  <Link to="/Email">이메일무단수집거부</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/">온라인예매</Link>
              <ul>
                <li>
                  <Link to="/">예매</Link>
                </li>
              </ul>
            </li>
          </ul>

          <Routes>
            <Route path="/Introduce" element={<Introduce />} />
            <Route path="/AgreementHome" element={<AgreementHome />} />
            <Route
              path="/AgreementAdventure"
              element={<AgreementAdventure />}
            />
            <Route
              path="/AgreementMembership"
              element={<AgreementMembership />}
            />
            <Route path="/Email" element={<Email />}></Route>
          </Routes>
        </div>
      </div>
    </SitemapContainer>
  );
});

export default Sitemap;
