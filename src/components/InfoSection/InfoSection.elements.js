import styled from "styled-components";

export const InfoSec = styled.div`
  padding: 30px 0px;
  color: #000;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  background: linear-gradient(
      315deg,
      hsla(332, 100%, 65%, 1) 0%,
      hsla(268, 100%, 38%, 0.3) 81%
    ),
    url("https://scontent.fnag1-1.fna.fbcdn.net/v/t1.0-9/118783672_105885324586523_3583147594393068334_o.jpg?_nc_cat=103&_nc_sid=dd9801&_nc_ohc=xpqsfLEz_7AAX9ECmYa&_nc_ht=scontent.fnag1-1.fna&oh=49137a986cec63ddb39a9f5d9ba3dadd&oe=5F922440");
`;

export const InfoRow = styled.div`
  display: flex;
  margin: 0px -15px -15px -15px;
  flex-wrap: wrap;
  justify-content: center;
`;

export const InfoColumn = styled.div`
  margin-bottom: 15px;
  margin-right: 15px;
  margin-left: 15px;
  /* display:flex; */
  max-width: 50%;

  @media screen and (max-width: 768px) {
    max-width: 100%;
    flex-basis: 100%;
    display: flex;
    justify-content: center;
  }
`;
export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;

  @media screen and (max-width: 768px) {
    padding-bottom: 65px;
  }
`;

export const CallNowCard = styled.div`
  padding: 15px;
  margin-top: 15px;
  margin-bottom: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  background: white;
  color: #812bea;
  font-size: 18px;
  font-weight: 600;
`;

export const NoBrokerageCard = styled.div`
  padding: 15px;
  margin-bottom: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  background: white;
  font-size: 18px;
  color: #ff7b2b;
  font-weight: 600;
`;

export const Subtitle = styled.p`
  /* max-width: 440px; */
  font-size: 18px;
  line-height: 23px;
  color: #fff;
`;

export const Heading = styled.h1`
  margin-bottom: 15px;
  font-size: 36px;
  font-weight: 700;
  line-height: 1;
  color: #fff;
`;

export const Img = styled.div`
  padding-right: 0;
  border: 0;
  max-width: 100%;
  vertical-align: middle;
  display: inline-block;
  max-height: 500px;
`;

export const ImgWrapper = styled.div`
  max-width: 555px;
  display: flex;
  justify-content: flex-end;
`;
