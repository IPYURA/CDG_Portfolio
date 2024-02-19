import React from "react";
import styled from "styled-components";

const Footer = () => {
  return <Wrap>© 2024. Cho DongGeon. All right reserved.</Wrap>;
};

export default Footer;

const Wrap = styled.div`
  width: 100%;
  height: 108px;
  background: #ccc;
  display: grid;
  place-items: center;
  color: #1a1a1a;
  font-size: 18px;
  @media screen and (max-width: 480px) {
    font-size: 16px;
  }
`;
