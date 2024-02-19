import React, { useState } from "react";
import styled from "styled-components";
import githubIcon from "../imgs/Vector_git.png";
import linkIcon from "../imgs/Vector_link.png";
import WorksModal from "./WorksModal";

const WorksItemButtons = ({ worksdata }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onClickReadMore = () => {
    setIsModalOpen(true);
  };
  const onClickModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <Wrap>
      {isModalOpen ? (
        <ModalWrap>
          <WorksModal worksdata={worksdata} closeFunc={onClickModalClose} />
        </ModalWrap>
      ) : (
        ""
      )}

      <ReadMoreButton onClick={onClickReadMore}>READ MORE</ReadMoreButton>
      <GitHubButton>
        <a href={worksdata.git} target="_blank" rel="noopener noreferrer">
          <img src={githubIcon} alt="github" />
        </a>
      </GitHubButton>
      <LinkButton>
        <a href={worksdata.url} target="_blank" rel="noopener noreferrer">
          <img src={linkIcon} alt="link" />
        </a>
      </LinkButton>
    </Wrap>
  );
};

export default WorksItemButtons;

const Wrap = styled.div`
  position: relative;
  position: absolute;
  bottom: 44px;
  width: calc(100% - 66px);
  height: 44px;
  @media screen and (max-width: 480px) {
    width: calc(100% - 40px);
    left: 20px;
  }
`;
const ReadMoreButton = styled.button`
  width: auto;
  padding: 10px 20px;
  border: none;
  background: #1a1a1a;
  color: #fff;
  border-radius: 48px;
  font-size: 20px;
  cursor: pointer;
  &:hover {
    background: #fdd154;
    color: #1a1a1a;
    font-weight: 700;
  }
  @media screen and (max-width: 876px) {
    font-size: 16px;
  }
  @media screen and (max-width: 480px) {
    font-size: 14px;
  }
`;
const GitHubButton = styled.button`
  position: absolute;
  right: 0;
  width: 44px;
  background: none;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  &:hover {
    background: #fdd154;
  }
  img {
    width: 100%;
    height: 100%;
  }
  @media screen and (max-width: 876px) {
    width: 40px;
  }
  @media screen and (max-width: 480px) {
    width: 36px;
  }
`;
const LinkButton = styled(GitHubButton)`
  right: 64px;
  @media screen and (max-width: 480px) {
    right: 54px;
  }
`;

const ModalWrap = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.7);
  display: grid;
  place-items: center;
`;
