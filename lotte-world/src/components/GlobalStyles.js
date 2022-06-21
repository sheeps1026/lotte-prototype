import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import React, { memo } from 'react';

const GlobalStyles = createGlobalStyle`
    ${reset};
`;

export default GlobalStyles;