import React from "react";
import styled from "styled-components";
import { Link, animateScroll as scroll } from "react-scroll";

const Gnb = ({ scrolled }) => {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };
  return (
    <Container className={scrolled ? "active" : ""}>
      <span onClick={scrollToTop}>Home</span>
      <Link to="2" spy={true} smooth={true}>
        <span>Skills</span>
      </Link>
      <Link to="3" spy={true} smooth={true}>
        <span>Works</span>
      </Link>
      <Link to="4" spy={true} smooth={true}>
        <span>Contact</span>
      </Link>
    </Container>
  );
};

export default Gnb;

const Container = styled.div`
  width: 486px;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: 0.5s;
  span {
    color: #fff;
    font-size: 22px;
    position: relative;
    font-weight: 300;
    &:hover {
      cursor: pointer;
      color: #fdd154;
    }
  }
  &.active span {
    color: ${(props) => props.theme.subTextColor};
    &:hover {
      cursor: pointer;
      color: #fdd154;
    }
  }
  @media screen and (max-width: 768px) {
    span {
      font-size: 20px;
    }
  }
  @media screen and (max-width: 480px) {
    span {
      font-size: 16px;
    }
  }
`;
