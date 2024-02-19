import React from "react";
import styled from "styled-components";
import PageTitle from "../components/PageTitle";
import WorkBadge from "../components/WorkBadge";
import WorksItemButtons from "../components/WorksItemButtons";
import worksData from "../api";

const Works = () => {
  return (
    <Wrap>
      <Container>
        <PageTitle text="Works" />
        {worksData.map((data, index) => (
          <Item key={index}>
            <Image src={data.image} alt={data.title} />
            <DescBox>
              <Title>{data.title}</Title>
              {data.badge.map((badgeName, index) => (
                <WorkBadge key={`badge${index}`} text={badgeName} />
              ))}
              <Desc>
                {data.desc.map((desc, index) => (
                  <li key={`desc${index}`}>{desc}</li>
                ))}
              </Desc>
              <WorksItemButtons worksdata={data} />
            </DescBox>
          </Item>
        ))}
      </Container>
    </Wrap>
  );
};

export default Works;

const Wrap = styled.div`
  width: 100%;
  padding-top: 108px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 1024px) {
    padding-top: 64px;
  }
  @media screen and (max-width: 768px) {
    padding-top: 52px;
  }
`;
const Container = styled.div`
  width: 87%;
  max-width: 1280px;
  margin: 0 auto;
  @media screen and (max-width: 1024px) {
    width: 95%;
  }
`;
const Item = styled.div`
  margin-bottom: 50px;
  width: 100%;
  height: 474px;
  box-shadow: 1px 1px 4px rgba(5, 75, 126, 0.4);
  display: flex;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    height: auto;
  }
`;
const Image = styled.img`
  width: 50%;
  height: 100%;
  background: rgba(5, 75, 126, 0.1);
  object-fit: contain;
  @media screen and (max-width: 768px) {
    width: 100%;
    height: 50%;
    max-height: 474px;
  }
`;
const DescBox = styled.div`
  position: relative;
  width: 50%;
  height: 100%;
  padding: 44px 33px;
  @media screen and (max-width: 1024px) {
    padding: 33px 22px;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;
const Title = styled.h3`
  margin-bottom: 24px;
  font-family: "Noto Sans KR", sans-serif;
  font-size: 40px;
  font-weight: 300;
  color: ${(props) => props.theme.subTextColor};
  @media screen and (max-width: 1145px) {
    font-size: 36px;
    margin-bottom: 20px;
  }
  @media screen and (max-width: 1024px) {
    font-size: 30px;
    margin-bottom: 15px;
  }
  @media screen and (max-width: 768px) {
    font-size: 26px;
    margin-bottom: 20px;
  }
`;
const Desc = styled.ul`
  margin-top: 20px;
  padding-left: 17px;
  display: flex;
  flex-direction: column;
  gap: 5px;
  li {
    font-family: "Noto Sans KR", sans-serif;
    list-style: square;
  }
  @media screen and (max-width: 768px) {
    font-size: 14px;
    margin-bottom: 80px;
  }
`;
