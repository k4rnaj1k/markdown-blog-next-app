'use client'

import styled from "styled-components";

export const BlogPageWrapper = styled.div`
    display: flex;
    align-items: center;
    img {
        display: block;
        margin: auto;
        object-fit: cover;
        max-width: 40vw;
        @media(max-width: 900px) {
            max-width: 90vw;
        }
    }
`;

export const BlogContentWrapper = styled.div<{ $hasMarginBottom?: boolean }>`
    width: 80vw;
    margin-right: auto;
    padding: 15px;
    margin-left: auto;
    /* background-color:#3e3e42; */
    margin-bottom: ${({ $hasMarginBottom }) => $hasMarginBottom ? '15px' : '0'};
    @media(max-width: 600px) {
        width: 95vw;
    }
    /* margin-bottom: 15px; */
`;

export const BlogTitleStyled = styled.h2`
`;

