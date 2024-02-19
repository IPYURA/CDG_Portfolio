import React from "react";
import styled from "styled-components";
import picture from "../imgs/cho.webp";
import { keyframes } from "styled-components";

const Home = () => {
  return (
    <Wrap>
      <Container>
        <ImageBox>
          <Image src={picture} alt="picture"></Image>
        </ImageBox>
        <Text>
          <Title>
            <em>Front-End </em>개발자를 꿈꾸는
            <br /> 조동건 입니다.
          </Title>
          <SubTitle>
            저는 전자공학과에서 C언어를 배우며 프로그래밍에 흥미를 느꼈습니다.
            앞에 놓인 기계를 움직이는 것을 넘어, 프로그래밍을 통해 웹이라는 더
            넓은 세상에 영향을 끼치고 싶습니다.
          </SubTitle>
        </Text>
      </Container>
      <Indicator>Scroll Down!</Indicator>
    </Wrap>
  );
};

export default Home;

const Wrap = styled.div`
  width: 87%;
  max-width: 1280px;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 768px) {
    height: 70vh;
    position: relative;
  }
`;
const Container = styled.div`
  width: 100%;
  height: 60vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 768px) {
    justify-content: center;
  }
`;
const ImageBox = styled.div`
  width: 37%;
  height: 100%;
  overflow: hidden;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;
const Text = styled.div`
  width: 60%;
  @media screen and (max-width: 768px) {
    width: 75%;
  }
  @media screen and (max-width: 480px) {
    width: 100%;
  }
`;
const Title = styled.h3`
  font-size: 45px;
  font-weight: 400;
  color: ${(props) => props.theme.textColor};
  margin-bottom: 15px;
  em {
    font-style: normal;
    color: blue;
    color: ${(props) => props.theme.mainColor};
  }
  @media screen and (max-width: 976px) {
    font-size: 40px;
  }
  @media screen and (max-width: 850px) {
    font-size: 36px;
  }
  @media screen and (max-width: 650px) {
    font-size: 32px;
  }
  @media screen and (max-width: 580px) {
    font-size: 28px;
  }
  @media screen and (max-width: 359px) {
    font-size: 24px;
  }
`;
const SubTitle = styled.h4`
  font-family: "Noto Sans KR", sans-serif;
  font-size: 16px;
  word-break: keep-all;
  font-weight: 300;
  color: ${(props) => props.theme.textColor};
  @media screen and (max-width: 850px) {
    font-size: 14px;
  }
  @media screen and (max-width: 580px) {
    font-size: 12px;
  }
  @media screen and (max-width: 359px) {
    font-size: 11px;
  }
`;
const textBlink = keyframes`
  0%{color:#fff};
  25%{color:#fff};
  50%{color:#0c8ce9};
  75%{color:#0c8ce9};
  100%{color:#fff};
`;
const Indicator = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    bottom: 20px;
    color: #fff;
    width: 100px;
    padding: 5px 10px;
    border-radius: 16px;
    text-align: center;
    font-size: 14px;
    animation: ${textBlink} 2s linear infinite;
  }
`;
