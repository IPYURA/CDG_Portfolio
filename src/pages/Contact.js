import React from "react";
import styled from "styled-components";
import PageTitle from "../components/PageTitle";
import { animateScroll as scroll } from "react-scroll";
import ContactItem from "../components/ContactItem";
import phoneIcon from "../imgs/icon-phone.png";
import emailIcon from "../imgs/icon-mail.png";
import githubIcon from "../imgs/Vector_git.png";

const Contact = () => {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };
  return (
    <Wrap>
      <Container>
        <PageTitle text="Contact" />
        <Message>
          항상 더 나은 방법을 고민하고
          <br /> 꾸준히 성장하는 개발자가 되겠습니다!
        </Message>
        <Info>
          <ContactItem
            img={phoneIcon}
            alt="phone"
            text="010 - 8434 - 8174"
            email={false}
            github={false}
          />
          <ContactItem
            img={emailIcon}
            alt="email"
            text="0207ehdrjs@naver.com"
            email={true}
            github={false}
          />
          <ContactItem
            img={githubIcon}
            alt="github"
            text=""
            email={false}
            github={true}
          />
        </Info>
        <ScrollUpButton onClick={scrollToTop}>
          <img src="./arrow-up-white.png" alt="arrow" />
        </ScrollUpButton>
      </Container>
    </Wrap>
  );
};

export default Contact;

const Wrap = styled.div`
  width: 100%;
  padding: 108px 0;
  display: flex;
  justify-content: center;
  background: ${(props) => props.theme.subColor};
  @media screen and (max-width: 1024px) {
    padding: 64px 0;
  }
  @media screen and (max-width: 768px) {
    padding: 52px 0;
  }
`;
const Container = styled.div`
  position: relative;
  max-width: 1280px;
  width: 87%;
  height: 500px;
  margin: 0 auto;
`;
const ScrollUpButton = styled.button`
  position: absolute;
  bottom: 0px;
  right: 0;
  width: 72px;
  height: 72px;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  background: ${(props) => props.theme.mainColor};
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.3s;
  &:hover {
    background: #fdd154;
  }
  @media screen and (max-width: 768px) {
    width: 54px;
    height: 54px;
    img {
      width: 70%;
    }
  }
`;
const Message = styled.h3`
  padding-top: 40px;
  width: 100%;
  margin: 0 auto;
  text-align: center;
  word-break: keep-all;
  color: ${(props) => props.theme.textColor};
  font-size: 24px;
  font-weight: 400;
  font-family: "Noto Sans KR", sans-serif;
  @media screen and (max-width: 768px) {
    font-size: 20px;
  }
  @media screen and (max-width: 480px) {
    font-size: 16px;
  }
`;
const Info = styled.div`
  position: relative;
  position: absolute;
  top: 55%;
  left: 50%;
  transform: translate(-50%, -35%);
  width: 100%;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  &::before {
    content: "방문해 주셔서 감사합니다!";
    position: absolute;
    bottom: -80px;
    left: 0;
    width: 100%;
    text-align: center;
    font-size: 18px;
    font-weight: 300;
    font-family: "Noto Sans KR", sans-serif;
    word-break: keep-all;
    color: ${(props) => props.theme.textColor};
  }
  @media screen and (max-width: 768px) {
    &::before {
      font-size: 16px;
    }
  }
  @media screen and (max-width: 480px) {
    &::before {
      font-size: 14px;
    }
  }
`;
