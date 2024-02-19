import React from "react";
import styled from "styled-components";
import PageTitle from "../components/PageTitle";
import Badge from "../components/Badge";
import icons from "../img_link";
import { Element } from "react-scroll";

const Skills = () => {
  return (
    <Wrap>
      <Element style={{ width: "87%" }}>
        <Container>
          <PageTitle text="Skills" />
          <CardBox>
            <Card>
              <Text>
                <Title>HTML / CSS</Title>
                <Desc>
                  <li>웹 표준을 지키려 노력합니다.</li>
                  <li>시멘틱 태그를 활용하여 가독성을 높입니다.</li>
                  <li>SCSS를 사용할 수 있습니다.</li>
                  <li>반응형을 구현할 수 있습니다.</li>
                  <li>
                    keyframes 를 활용한 애니메이션 기법을 활용할 수 있습니다.
                  </li>
                </Desc>
              </Text>
              <BadgeBox>
                <Badge image={icons.html} name="HTML" />
                <Badge image={icons.css} name="CSS" />
                <Badge image={icons.scss} name="SCSS" />
              </BadgeBox>
            </Card>

            <Card>
              <Text>
                <Title>React</Title>
                <Desc>
                  <li>
                    Redux / Redux-thunk / Recoil 등의 상태관리 라이브러리
                    사용경험이 있습니다.
                  </li>
                  <li>
                    react-router-dom 등의 react 라이브러리를 사용 가능합니다.
                  </li>
                </Desc>
              </Text>
              <BadgeBox>
                <Badge image={icons.react} name="React" />
                <Badge image={icons.reactrouter} name="React Router" />
                <Badge image={icons.redux} name="Redux" />
                <Badge image={icons.redux} name="Redux-Thunk" />

                <Badge image={icons.recoil} name="Recoil" />
                <Badge image={icons.reactquery} name="React-Query" />
              </BadgeBox>
            </Card>

            <Card>
              <Text>
                <Title>Programming</Title>
                <Desc>
                  <li>ES6 문법에 익숙합니다.</li>
                  <li>Typescript의 사용 이유를 알고, 사용할 수 있습니다.</li>
                </Desc>
              </Text>
              <BadgeBox>
                <Badge image={icons.js} name="Javascript" />
                <Badge image={icons.ts} name="Typescript" />
              </BadgeBox>
            </Card>

            <Card>
              <Text>
                <Title>
                  CSS <br />
                  framework/library
                </Title>
                <Desc>
                  <li>
                    Styled-components, bootstrap 등의 CSS 프레임워크 /
                    라이브러리 를 활용할 수 있습니다.
                  </li>
                </Desc>
              </Text>
              <BadgeBox>
                <Badge
                  image={icons.styledcomponents}
                  name="styled-components"
                />
                <Badge image={icons.bootstrap} name="Bootstrap" />
                <Badge image={icons.tailwind} name="Tailwind CSS" />
              </BadgeBox>
            </Card>

            <Card>
              <Text>
                <Title>ETC</Title>
                <Desc>
                  <li>Mac과 Windows 환경 모두 익숙합니다.</li>
                  <li>Figma로 협업한 경험이 있습니다.</li>
                  <li>git를 사용하여 협업한 경험이 있습니다.</li>
                  <li>firebase를 사용하여 배포가 가능합니다.</li>
                </Desc>
              </Text>
              <BadgeBox>
                <Badge image={icons.figma} name="Figma" />
                <Badge image={icons.firebase} name="Firebase" />
                <Badge image={icons.git} name="git" />
                <Badge image={icons.apple} name="Mac" />
                <Badge image={icons.windows} name="Windows" />
              </BadgeBox>
            </Card>

            <Card>
              <Text>
                <Title>Studying</Title>
                <Desc>
                  <li>Next.js 14버전을 공부중입니다.</li>
                </Desc>
              </Text>
              <BadgeBox>
                <Badge image={icons.nextjs} name="Next.js" />
              </BadgeBox>
            </Card>
          </CardBox>
        </Container>
      </Element>
    </Wrap>
  );
};

export default Skills;

const Wrap = styled.div`
  width: 100vw;
  padding: 108px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.theme.subColor};
  @media screen and (max-width: 1024px) {
    padding: 88px 0;
  }
  @media screen and (max-width: 1024px) {
    padding: 64px 0;
  }
  @media screen and (max-width: 768px) {
    padding: 52px 0;
  }
`;
const Container = styled.div`
  width: 100%;
  margin: 0 auto;
`;
const CardBox = styled.div`
  width: 94%;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 28px;
  @media screen and (min-width: 1660px) {
    display: grid;
    grid-template-columns: repeat(3, 320px);
    grid-gap: 28px;
  }
  @media screen and (max-width: 1250px) {
    width: 100%;
    gap: 14px;
  }
`;
const Card = styled.div`
  padding: 8px;
  width: 320px;
  height: 320px;
  box-shadow: 1px 1px 4px rgba(5, 75, 126, 0.2);
  background: #fff;
  @media screen and (max-width: 1250px) {
    width: 38vw;
    height: 38vw;
    max-width: 320px;
    max-height: 320px;
    min-width: 280px;
    min-height: 310px;
  }
  @media screen and (max-width: 668px) {
    max-width: 100%;
    width: 100%;
  }
  @media screen and (max-width: 367px) {
    max-height: initial;
    height: auto;
  }
`;
const Text = styled.div`
  width: 100%;
  margin: 15px 0 0;
  padding-left: 15px;
  @media screen and (max-width: 1250px) {
    font-size: 14px;
  }
`;
const Title = styled.h3`
  font-size: 22px;
  color: ${(props) => props.theme.subTextColor};
  margin-bottom: 15px;
  @media screen and (max-width: 768px) {
    font-size: 20px;
  }
`;
const Desc = styled.ul`
  width: 100%;
  margin-bottom: 15px;
  padding-left: 10px;
  li {
    font-size: 14px;
    font-family: "Noto Sans KR", sans-serif;
    color: ${(props) => props.theme.textColor};
    margin-bottom: 5px;
    word-break: keep-all;
    list-style: square;
  }
`;
const BadgeBox = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  @media screen and (max-width: 668px) {
    padding: 0 15px;
  }
`;
