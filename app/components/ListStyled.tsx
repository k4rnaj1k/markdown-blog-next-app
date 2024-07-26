'use client'

import styled from "styled-components";

export const LinksListStyled = styled.div`
  margin-top: 0px;
  display: flex;
  flex-wrap: wrap;
`;

export const LinksListElement = styled.div`
  padding-left: 50px;
  float: left;
`;

export const ListLinkStyled = styled.a`
    &:hover {
        background-color: white !important;
        color: #1e1e1e !important;
    }
    color: white !important;
`;

export const NavbarWrapper = styled.nav`
    width: 100%;
    padding-bottom: 15px;
    /* background-color:  	#2d2d30; */
    padding-top: 15px;
`;