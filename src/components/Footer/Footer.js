import React from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import {
  FooterContainer,
  FooterLinksContainer,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  MyText,
  SocialIcons,
  SocialIconLink,
  WebsiteRights
} from "./Footer.elements";

function Footer() {
  return (
    <FooterContainer>
      <FooterLinksContainer>
        <FooterLinkItems>
          <FooterLinkTitle>Contact Us</FooterLinkTitle>
          <MyText>Rajesh Nagar,beed bypass,aurangabad</MyText>
          <MyText>Phone - 8600383222</MyText>
          <MyText>Shivdreamhomes@gmail.com</MyText>
          <MyText>shivdreamhomes.in</MyText>
        </FooterLinkItems>

        <FooterLinkItems>
          <FooterLinkTitle>Quick Links</FooterLinkTitle>
          <FooterLink to="/">Properties</FooterLink>
          <FooterLink to="/">Admin Area</FooterLink>
          <FooterLink to="/">About us</FooterLink>
        </FooterLinkItems>
      </FooterLinksContainer>

      <SocialMedia>
        <SocialMediaWrap>
          <SocialLogo to="/">
            Shiv
            <br />
            Dreamhomes
          </SocialLogo>
          <WebsiteRights>Shivdreamhomes Aurangabad © 2020</WebsiteRights>
          <SocialIcons>
            <SocialIconLink
              href="facebook.com/shivdreamhomes"
              target="_blank"
              aria-label="Facebook"
            >
              <FaFacebook />
            </SocialIconLink>
            <SocialIconLink
              href="instagram.com/shivdreamhomes"
              target="_blank"
              aria-label="Instagram"
            >
              <FaInstagram />
            </SocialIconLink>
          </SocialIcons>
        </SocialMediaWrap>
      </SocialMedia>
    </FooterContainer>
  );
}

export default Footer;
