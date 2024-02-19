import React from "react";
import styled from "styled-components";
import copyIcon from "../imgs/icon-copy.png";

const ContactItem = ({ img, alt, text, email, github }) => {
  const onClickCopyText = () => {
    let email = "0207ehdrjs@naver.com";
    navigator.clipboard
      .writeText(email)
      .then(() => {
        alert("클립보드에 복사되었습니다");
      })
      .catch((err) => {
        alert("복사에 실패했습니다.");
        console.error("클립보드 복사 실패: ", err);
      });
  };
  return (
    <Wrap>
      <Image src={img} alt={alt} />
      {github ? (
        <a
          href="https://github.com/IPYURA"
          target="_blank"
          rel="noopener noreferrer"
        >
          Click Here!
        </a>
      ) : (
        <Text>{text}</Text>
      )}
      {email ? (
        <CopyButton onClick={onClickCopyText}>
          <img src={copyIcon} alt="copy" />
        </CopyButton>
      ) : (
        ""
      )}
    </Wrap>
  );
};

export default ContactItem;

const Wrap = styled.div`
  width: 300px;
  height: 60px;
  padding-left: 20px;
  display: flex;
  align-items: center;
  a {
    transition: 0.3s;
    &:hover {
      color: #aaa;
    }
  }
`;
const Image = styled.img`
  width: 38px;
  height: 38px;
  margin-right: 10px;
`;
const Text = styled.span`
  margin-right: 20px;
  color: #1a1a1a;
`;
const CopyButton = styled.button`
  width: 24px;
  height: 24px;
  border: none;
  background: none;
  cursor: pointer;
  img {
    width: 100%;
    height: 100%;
  }
`;
