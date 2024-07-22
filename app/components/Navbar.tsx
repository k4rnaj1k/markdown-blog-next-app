'use server'
import styled from "styled-components";
import { getBlogName } from "../service/configService";
import { ListElement, ListLinkStyled, ListStyled, NavbarWrapper } from "./ListStyled";



export const Navbar = async () => {
  const blogName = await getBlogName();
  return <NavbarWrapper>
    <ListStyled>
      <ListElement>{blogName}</ListElement>
      <ListElement>
        <ListLinkStyled href="/home">home</ListLinkStyled>
      </ListElement>
      <ListElement>
        <ListLinkStyled href="/blogs">blogs</ListLinkStyled>
      </ListElement>
      <ListElement>
        <ListLinkStyled href="/about">about</ListLinkStyled>
      </ListElement>
    </ListStyled>
  </NavbarWrapper>
};