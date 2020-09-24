import React from "react";
import {
  InfoSec,
  InfoRow,
  TextWrapper,
  InfoColumn,
  CallNowCard,
  NoBrokerageCard,
  ImgWrapper,
  Img,
  Heading,
  Subtitle
} from "./InfoSection.elements";
import { Container } from "../../Styles";
import Contact from "../ContactForm/ContactForm";

const phonenum = "Call Now - 8600383222";
const heading = "Want to buy dream home in Aurangabad ?";
const subtititle =
  "We will find your dream home as per your specification like area , property type , price , locality etc..";

function InfoSection() {
  return (
    <>
      <InfoSec>
        <Container>
          <InfoRow>
            {/* 1st column with text */}

            <InfoColumn>
              <TextWrapper>
                <Heading>{heading}</Heading>
                <Subtitle>{subtititle}</Subtitle>
                <CallNowCard>{phonenum}</CallNowCard>
                <NoBrokerageCard>No Brokerage ● Free of Cost</NoBrokerageCard>
              </TextWrapper>
            </InfoColumn>

            {/* 2nd coloumn contact box */}

            <InfoColumn>
              <ImgWrapper>
                <Img>
                  <Contact />
                </Img>
              </ImgWrapper>
            </InfoColumn>
          </InfoRow>
        </Container>
      </InfoSec>
    </>
  );
}

export default InfoSection;
