import styled from "styled-components";
import { Footer } from "../../ui/footer/footer";

export const MainPage: React.FC = () => {
  return (
    <MainWrapper>
      <NavigationWrapper></NavigationWrapper>
      <WrapperForTextAndImage>
        <TextWrapper>
          <Text>NEWS BLOG</Text>
          <Text>BLOGOLOGO</Text>
        </TextWrapper>
        <ImageWrapper>
          <img src=".pngwing.com.png" alt="cosmos" />
        </ImageWrapper>
      </WrapperForTextAndImage>
      <WrapperForFooter>
        <Footer></Footer>
      </WrapperForFooter>
    </MainWrapper>
  );
};

const MainWrapper = styled.div`
  width: 100%;
  min-height: 100dvh;
  display: flex;
  flex-direction: column;
  justify-content: center;

  background-image: linear-gradient(45deg, #5f1bdd, #912ef2);
`;

const NavigationWrapper = styled.div`
  height: 60px;
`;

const WrapperForTextAndImage = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: row;
  width: 75%;
  align-items: center;
  justify-content: space-evenly;
`;

const TextWrapper = styled.div`
  margin: auto;
  display: flex;
  flex-direction: column;
`;

const Text = styled.div`
  font-family: "Cinzel", sans-serif;
  font-size: 72px;
`;

const ImageWrapper = styled.div`
  width: 300px;
  height: 300px;
  border-radius: 50%;
  overflow: hidden;
  background-color: white;
  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    overflow: hidden;
  }
`;
const WrapperForFooter = styled.div`
  background-color: whitesmoke;
  padding: 0 35px;
`;
