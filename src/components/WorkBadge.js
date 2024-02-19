import React from "react";
import styled from "styled-components";

const WorkBadge = ({ text }) => {
  return <Wrap>{text}</Wrap>;
};

export default WorkBadge;

const Wrap = styled.span`
  display: inline-block;
  width: auto;
  padding: 2px 15px;
  margin-right: 10px;
  margin-bottom: 10px;
  color: ${(props) => props.theme.subTextColor};
  border: 1px solid ${(props) => props.theme.subTextColor};
  border-radius: 16px;
  font-size: 18px;
  font-weight: 300;
  @media screen and (max-width: 1024px) {
    font-size: 14px;
  }
`;
