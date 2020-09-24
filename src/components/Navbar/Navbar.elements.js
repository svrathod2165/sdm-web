import styled from "styled-components";
import { Link } from "react-router-dom";
import { Container } from "../../Styles";

export const Nav = styled.nav`
  background: white;
  border-bottom: 1px solid #eee;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 17px;
  position: sticky;
  top: 0;
  z-index: 999;
`;

export const NavbarContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  height: 60px;

  ${Container}
`;

export const NavLogo = styled(Link)`
  color: #000;
  justify-self: flex-start;
  cursor: pointer;
  text-decoration: none;
  font-size: 18px;
  line-height: 0.9;
  font-weight: 700;
  display: flex;
  align-items: center;
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 960px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 24px;
    cursor: pointer;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;

  @media screen and (max-width: 960px) {
    display: flex;
    background: #fff;
    flex-direction: column;
    width: 100%;
    /* height: 90vh; */
    position: absolute;
    top: 60px;
    left: ${({ click }) => (click ? 0 : "-100%")};
    opacity: 1;
    transition: all 0.5s ease;
    /* background: crimson; */
  }
`;

export const NavItem = styled.li`
  height: 60px;
  /* border-bottom: 2px solid transparent; */

  &:hover {
    /* border-bottom: 2px solid #4b59f7; */
  }

  @media screen and (max-width: 960px) {
    width: 100%;
    height: 40px;
    &:hover {
      border: none;
    }
  }
`;

export const NavItemBtn = styled.li`
  @media screen and (max-width: 960px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 90px;
  }
`;

export const NavLinks = styled(Link)`
  color: #000;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0.5rem 1rem;
  height: 100%;

  &:hover {
    color: #4b59f7;
  }

  @media screen and (max-width: 960px) {
    text-align: center;
    padding: 15px;
    width: 100%;
    display: table;

    &:hover {
      color: #4b59f7;
      transition: all 0.3s ease;
    }
  }
`;

export const NavBtnLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  padding: 8px 16px;
  height: 100%;
  width: 100%;
  border: none;
  outline: none;

  @media screen and (max-width: 960px) {
    width: 50%;
  }
`;
