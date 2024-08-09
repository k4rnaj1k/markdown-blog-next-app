'use server'
import styled from "styled-components";
import { getBlogName } from "../service/configService";
import { LinksListElement, LinksListStyled, NavbarWrapper } from "./ListStyled";



export const Navbar = async () => {
  const blogName = await getBlogName();
  return <NavbarWrapper>
    <LinksListStyled>
      <LinksListElement>{blogName}</LinksListElement>
      <LinksListElement>
        <a href="/home">~</a>
      </LinksListElement>
      <LinksListElement>
        <a href="/blogs">~/blogs</a>
      </LinksListElement>
      <LinksListElement>
        <a href="/about">~/about</a>
      </LinksListElement>
      <LinksListElement>
        <a href="/contacts">~/contacts</a>
      </LinksListElement>
    </LinksListStyled>
  </NavbarWrapper>
};