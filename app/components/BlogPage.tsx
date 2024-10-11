'use client'

import styled from "styled-components";

const MOBILE_WIDTH = '96vw';

export const BlogPageWrapper = styled.div`
    display: flex;
    align-items: center;
    img {
        border: 3px solid white;
        display: block;
        margin: auto;
        object-fit: cover;
        max-width: 65vw;
        max-height: 60vh;
        @media(max-width: 600px) {
            max-width: ${MOBILE_WIDTH};
        }
    }
`;

export const BlogContentWrapper = styled.div<{ $hasMarginBottom?: boolean, $hasBorder?: boolean }>`
    width: 80vw;
    margin-right: auto;
    padding: 15px;
    margin-left: auto;
    margin-bottom: ${({ $hasMarginBottom }) => $hasMarginBottom ? '15px' : '0'};
    @media(max-width: 600px) {
        width: ${MOBILE_WIDTH};
        padding: 15px 0;
    }
    border: ${({ $hasBorder }) => $hasBorder ? '2px solid white' : 'auto'};
`;

export const BlogTitleStyled = styled.h2<{ $hasBorder?: boolean }>`
    border: ${({ $hasBorder }) => $hasBorder ? '2px solid white' : 'auto'};
    margin-top: -10px;
`;

