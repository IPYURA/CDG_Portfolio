import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Gnb from "./Gnb";
import { animateScroll as scroll } from "react-scroll";

const Header = () => {
  const [position, setPosition] = useState(0);
  function onScroll() {
    setPosition(window.scrollY);
  }

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <Wrap className={position > 10 ? "active" : ""}>
      <Container>
        <Logo onClick={scrollToTop}>CDG Portfolio</Logo>
        <Gnb scrolled={position} />
      </Container>
    </Wrap>
  );
};

export default Header;

const Wrap = styled.div`
  position: fixed;
  top: 0;
  z-index: 10;
  width: 100%;
  height: 88px;
  background: ${(props) => props.theme.mainColor};
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.5s;
  &.active {
    background: #fff;
  }
  &.active div {
    color: ${(props) => props.theme.subTextColor};
  }
  @media screen and (max-width: 1024px) {
    height: 60px;
  }
  @media screen and (max-width: 768px) {
    height: 48px;
  }
`;
const Container = styled.div`
  width: 85%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 1024px) {
    justify-content: center;
  }
`;
const Logo = styled.div`
  width: 310px;
  font-size: 32px;
  font-weight: 300;
  line-height: 148px;
  color: #fff;
  cursor: pointer;
  @media screen and (max-width: 1024px) {
    display: none;
  }
`;
