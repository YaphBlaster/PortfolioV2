import { createGlobalStyle } from 'styled-components';

import CustomFontRegular from './font_regular.otf';
import CustomFontMedium from './font_medium.otf';
import CustomFontBold from './font_bold.otf';

export default createGlobalStyle`
    @font-face {
        font-family: 'Custom Font Regular';
        src:  url(${CustomFontRegular}) format('opentype');
        font-style: normal;
        font-weight: 400;
    }

    @font-face {
        font-family: 'Custom Font Medium';
        src:  url(${CustomFontMedium}) format('opentype');
        font-style: normal;
        font-weight: 500;
    }

    @font-face {
        font-family: 'Custom Font Bold';
        src:  url(${CustomFontBold}) format('opentype');
        font-style: normal;
        font-weight: 700;
    }
`;
