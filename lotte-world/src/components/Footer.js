import React, { memo } from 'react';
import styled from "styled-components";
const FooterWrap = styled.footer`
    background:#f1f1f1;
    width:100%;
    height: 100px;
    text-align: center;
`
const Footer = memo(() => {
    return (
        <FooterWrap>
            footer
        </FooterWrap>
    );
});

export default Footer;