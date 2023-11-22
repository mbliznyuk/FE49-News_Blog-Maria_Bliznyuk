import styled from "styled-components";
import { Footer } from "../footer/footer";
import { PostPagination } from "../pagination/pagination";

type Props = {
  header: React.ReactNode;
  title: React.ReactNode;
  body: React.ReactNode;
  children?: never;
};

export const MainTemplate: React.FC<Props> = ({ header, title, body }) => {
  return (
    <MainTemplateWrapper>
      {header}
      <ContentWithPaddings>
        <Main>
          <TitleContainer>{title}</TitleContainer>
          <BodyContainer>{body}</BodyContainer>
        </Main>
        <PostPagination></PostPagination>
        <Footer></Footer>
      </ContentWithPaddings>
    </MainTemplateWrapper>
  );
};

const MainTemplateWrapper = styled.div`
  width: 100%;
  min-height: 100dvh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 2;
  background-color: var(--background-primary-color);
`;

const ContentWithPaddings = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  margin: auto;
  flex-grow: 1;
`;

const Main = styled.main`
  width: 100%;
  flex-grow: 1;
  margin: auto;
`;

const TitleContainer = styled.div`
  width: 100%;
  text-align: start;
`;

const BodyContainer = styled.div`
  margin: auto;
`;
