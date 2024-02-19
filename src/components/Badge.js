import React from "react";
import styled from "styled-components";

const Badge = ({ image, name }) => {
  return (
    <Wrap>
      <Image src={image} alt={name} />
      <Name>{name}</Name>
    </Wrap>
  );
};

export default Badge;

const Wrap = styled.div`
  padding: 5px;
  width: auto;
  height: 34px;
  border: 1px solid #ccc;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
`;
const Image = styled.img`
  width: 26px;
`;
const Name = styled.div`
  padding-right: 2px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  color: #333;
  @media screen and (max-width: 768px) {
    font-size: 13px;
  }
`;
