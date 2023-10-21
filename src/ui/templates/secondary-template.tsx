import styled from "styled-components";
import { Footer } from "../footer/footer";

type Props = {
  header: React.ReactNode;
  backlink: React.ReactNode;
  title: React.ReactNode;
  body: React.ReactNode;
  children?: never;
};

export const SecondaryTemplate: React.FC<Props> = ({
  header,
  backlink,
  title,
  body,
}) => {
  return (
    <MainTemplateWrapper>
      {header}
      <ContentWithPaddings>
        <BackLinkContainer>{backlink}</BackLinkContainer>
        <Main>
          <TitleContainer>{title}</TitleContainer>
          <BodyContainer>{body}</BodyContainer>
        </Main>
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

const BackLinkContainer = styled.div`
  width: 100%;
  text-align: start;
`;

const TitleContainer = styled.div`
  width: 100%;
  text-align: start;
`;

const BodyContainer = styled.div`
  margin: auto;
`;
