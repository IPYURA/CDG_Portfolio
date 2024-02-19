import React from "react";
import styled from "styled-components";
import exitIcon from "../imgs/icon-exit.png";
import checkIcon from "../imgs/check.png";

const WorksModal = ({ worksdata, closeFunc }) => {
  const { img, desc, period, features, additionalImg } = worksdata.modalInfo;

  return (
    <Modal>
      <ExitButton onClick={closeFunc}>
        <img src={exitIcon} alt="exit" />
      </ExitButton>

      <ImageArea>
        <Image src={img} alt="이미지 준비중" />
      </ImageArea>

      <TextArea>
        <Title>{worksdata.title}</Title>
        <Section1>
          <SectionTitle>
            <img src={checkIcon} alt="icon" />
            개인프로젝트
          </SectionTitle>
        </Section1>

        <WorkDuration>
          <SectionTitle>
            <img src={checkIcon} alt="icon" />
            작업 기간
          </SectionTitle>
          <div>{period}</div>
        </WorkDuration>

        <MainFeatures>
          <SectionTitle>
            <img src={checkIcon} alt="icon" />
            주요 기능
          </SectionTitle>
          <ul>
            {features.map((element, index) => (
              <li key={index}>{element}</li>
            ))}
          </ul>
        </MainFeatures>

        <Description>
          <SectionTitle>
            <img src={checkIcon} alt="icon" />
            어려웠던 점 / 알게된 점
          </SectionTitle>
          <ul>
            {desc.map((element, index) =>
              element === "" ? (
                <br key={index} />
              ) : (
                <li key={index}>{element}</li>
              )
            )}
          </ul>
        </Description>

        {additionalImg.length > 0 ? (
          <AdditionalImage>
            {additionalImg.map((element, index) => (
              <img key={index} src={element} alt={"img" + index} />
            ))}
          </AdditionalImage>
        ) : (
          ""
        )}
      </TextArea>
    </Modal>
  );
};

export default WorksModal;

const Modal = styled.div`
  position: relative;
  padding: 54px 80px;
  width: 100%;
  max-width: 1200px;
  height: 90vh;
  background: white;
  overflow: scroll;
  display: flex;
  flex-direction: column;
  p {
    font-size: 50px;
  }
  * {
    color: ${(props) => props.theme.textColor};
    font-family: "Noto Sans KR", sans-serif;
    word-break: keep-all;
  }
  @media screen and (max-width: 768px) {
    padding: 54px 0;
  }
`;
const ExitButton = styled.div`
  position: fixed;
  right: calc((100vw - 1200px) / 2 + 20px);
  top: calc(5vh + 20px);
  width: 44px;
  height: 44px;
  background: none;
  border: none;
  cursor: pointer;
  img {
    width: 100%;
    height: 100%;
  }
  @media screen and (max-width: 1200px) {
    left: calc(100vw - 64px);
  }
  @media screen and (max-width: 1024px) {
    left: calc(95vw - 40px);
  }
  @media screen and (max-width: 768px) {
    width: 26px;
    height: 26px;
    left: calc(95vw - 30px);
  }
  @media screen and (max-width: 525px) {
    left: calc(95vw - 37px);
  }
`;
const ImageArea = styled.div`
  width: 100%;
  max-height: 450px;
  background: rgba(5, 75, 126, 0.1);
  display: flex;
  justify-content: center;
`;
const Image = styled.img`
  width: 100%;
  object-fit: contain;
`;
const TextArea = styled.div`
  width: 100%;
  height: auto;
  padding: 40px;
  @media screen and (max-width: 1024px) {
    width: 100%;
  }
  @media screen and (max-width: 768px) {
    padding: 40px 20px 0;
  }
`;
const Title = styled.h3`
  word-break: keep-all;
  font-size: 32px;
  font-weight: 400;
  color: ${(props) => props.theme.textColor};
  margin-bottom: 30px;
  @media screen and (max-width: 768px) {
    font-size: 26px;
  }
`;
const Section1 = styled.div`
  margin-bottom: 40px;
`;
const SectionTitle = styled.div`
  width: 250px;
  min-width: 250px;
  font-size: 16px;
  font-weight: 500;
  display: flex;
  gap: 8px;
  img {
    margin-top: 6px;
    height: 13px;
  }
  @media screen and (max-width: 1024px) {
    width: 200px;
    min-width: 200px;
  }
`;
const WorkDuration = styled.div`
  margin-bottom: 40px;
  display: flex;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    jusfify-content: flex-start;
  }
`;
const MainFeatures = styled.div`
  margin-bottom: 40px;
  display: flex;
  ul,
  li {
    list-style: none;
  }
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;
const Description = styled.div`
  margin-bottom: 40px;
  div {
    width: 100%;
    margin-bottom: 10px;
  }
  ul,
  li {
    list-style: none;
  }
  li {
    padding: 1px 0;
  }
`;
const AdditionalImage = styled.div`
  padding-top: 40px;
  width: 100%;
  img {
    width: 100%;
    max-height: 400px;
    object-fit: contain;
    margin-bottom: 20px;
  }
`;
