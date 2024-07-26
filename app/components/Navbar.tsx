'use server'
import styled from "styled-components";
import { getBlogName } from "../service/configService";
import { LinksListElement, ListLinkStyled, LinksListStyled, NavbarWrapper } from "./ListStyled";



export const Navbar = async () => {
  const blogName = await getBlogName();
  return <NavbarWrapper>
    <LinksListStyled>
      <LinksListElement>{blogName}</LinksListElement>
      <LinksListElement>
        <ListLinkStyled href="/home">home</ListLinkStyled>
      </LinksListElement>
      <LinksListElement>
        <ListLinkStyled href="/blogs">blogs</ListLinkStyled>
      </LinksListElement>
      <LinksListElement>
        <ListLinkStyled href="/about">about</ListLinkStyled>
      </LinksListElement>
    </LinksListStyled>
  </NavbarWrapper>
};