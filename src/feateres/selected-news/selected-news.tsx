import { styled } from "styled-components";
import { PostCardModel } from "../../api/types";
import { PostsList } from "../posts-list/posts-list";
import { NEWS } from "../tabs/tab.slice";

type Props = {
  news: PostCardModel;
  recommendedNews: PostCardModel[];
  isLoading: boolean;
};

export const SelectedNews: React.FC<Props> = ({
  recommendedNews,

  isLoading,

  news,
}) => {
  return (
    <NewsWrapper>
      <NewsImageWrapper>
        <img src={news.image_url} alt="#"></img>
      </NewsImageWrapper>
      <NewsTextWrapper>
        <NewsText>{news.text}</NewsText>
      </NewsTextWrapper>
      <NewsCardIcons>
        <Icon>
          <i className="fa-brands fa-facebook-f"></i>
        </Icon>
        <Icon>
          <i className="fa-brands fa-twitter"></i>
        </Icon>
      </NewsCardIcons>
      <RecommendedNews>
        <PostsList
          posts={recommendedNews}
          postType={NEWS}
          isLoading={isLoading}
        ></PostsList>
      </RecommendedNews>
    </NewsWrapper>
  );
};
const RecommendedNews = styled.div`
  width: 100%;
  border-top: 1px solid var(--border-primary-color);
  padding: 50px 0 15px 0;
`;

const NewsWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: auto;
  margin-bottom: 20px;
`;

const NewsTextWrapper = styled.div`
  width: 75%;
  margin: auto;
`;
const NewsText = styled.p`
  color: var(--text-secondary-color);
  font-size: 16px;
  line-height: 18px;
  margin-bottom: 20px;
`;

const NewsImageWrapper = styled.div`
  width: 90%;
  height: 400px;
  margin: auto;
  margin-bottom: 25px;
  border-radius: 15px;
  overflow: hidden;
  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
`;

const NewsCardIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 130px;
  margin-bottom: 30px;
`;

const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  width: 60px;
  height: 40px;
  border-radius: 5px;
  background-color: var(--icon-color);
  transition: 0.8s;
  cursor: pointer;
  color: var(--button-primary-color);
  &:hover {
    color: #502889;
  }
`;
