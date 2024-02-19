import React from "react";
import styled from "styled-components";

const PageTitle = ({ text }) => {
  return <Title>{text}</Title>;
};

export default PageTitle;

const Title = styled.div`
  width: 90%;
  margin: 0 auto 27px;
  font-size: 50px;
  font-weight: 100;
  color: ${(props) => props.theme.mainColor};
  @media screen and (max-width: 768px) {
    font-size: 44px;
  }
  @media screen and (max-width: 480px) {
    font-size: 38px;
  }
`;
