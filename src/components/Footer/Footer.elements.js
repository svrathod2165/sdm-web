import styled from "styled-components";
import { Link } from "react-router-dom";

export const FooterContainer = styled.div`
  background-color: #101522;
  padding: 20px 20px 20px 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const FooterLinksContainer = styled.div`
  width: 100%;
  max-width: 1000px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-content: space-between;
`;

export const FooterLinksWrapper = styled.div`
  display: flex;
  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

export const FooterLinkItems = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: flex-start;
  margin: 15px;
  text-align: left;
  color: #fff;
`;

export const FooterLinkTitle = styled.h2`
  margin-bottom: 16px;
`;

export const FooterLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  margin-bottom: 15px;
  &:hover {
    color: #0467fb;
    transition: 0.3s ease-out;
  }
`;

export const FooterText = styled.div`
  color: #fff;
  text-decoration: none;
  margin-bottom: 0.5rem;
`;

export const SocialMedia = styled.section`
  max-width: 1000px;
  width: 100%;
`;

export const SocialMediaWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  max-width: 1000px;
  /* margin: 40px auto 0 auto; */
`;

export const SocialLogo = styled(Link)`
  color: #fff;
  justify-self: start;
  cursor: pointer;
  text-decoration: none;
  font-size: 24px;
  line-height: 0.9;
  font-weight: 700;
  display: flex;
  align-items: center;
`;

export const MyText = styled.small`
  color: #fff;
  margin-bottom: 15px;
`;

export const WebsiteRights = styled.small`
  color: #fff;
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 240px;
`;

export const SocialIconLink = styled.a`
  color: #fff;
  font-size: 24px;
`;
