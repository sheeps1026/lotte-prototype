import React, { memo } from 'react';
import styled from 'styled-components';

const EnjoyViewStyled = styled.div`
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
`;
const EnjoyView = memo(() => {
    return (
        <EnjoyViewStyled>
            <div className='title'>
                <h2>atrnName</h2>
                <div className='tag_list'>
                    <p>#패밀리</p>
                    <p>#매직패스</p>
                    <p>#롤러코스터</p>
                </div>
            </div>
            <div className='contents'>
                <div className='subwrap'>
                    <div className='sub_visual'>
                        {/* swiper */}
                    </div>
                    <div className='zone_info'>

                    </div>
                </div>
            </div>
        </EnjoyViewStyled>
    );
});

export default EnjoyView;