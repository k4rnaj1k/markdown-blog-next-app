'use client'

import styled from "styled-components";

export const BlogPageWrapper = styled.div`
    display: flex;
    align-items: center;
    img {
        display: block;
        margin: auto;
    }
`;

export const BlogContentWrapper = styled.div<{ $hasMarginBottom?: boolean }>`
    width: 80vw;
    margin-right: auto;
    padding: 15px;
    margin-left: auto;
    /* background-color:#3e3e42; */
    margin-bottom: ${({$hasMarginBottom} ) => $hasMarginBottom ? '15px': '0' };
    /* margin-bottom: 15px; */
`;

export const BlogTitleStyled = styled.p`
  
`;

