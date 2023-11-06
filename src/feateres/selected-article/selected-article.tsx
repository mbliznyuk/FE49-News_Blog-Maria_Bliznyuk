import { styled } from "styled-components";
import { PostCardModel } from "../../api/types";
import { AtricleCardBookmark } from "../post-card/bookmark";

type SelectedPostProps = {
  post: PostCardModel;
};

export const SelectedPost: React.FC<SelectedPostProps> = ({
  post: article,
}) => {
  return (
    <PostWrapper>
      <ArticleImageWrapper>
        <img src={article.image_url} alt="#"></img>
      </ArticleImageWrapper>
      <PostTextWrapper>
        <ArticleText>{article.text}</ArticleText>
      </PostTextWrapper>
      <ArticleCardIcons>
        <Icon>
          <i className="fa-brands fa-facebook-f"></i>
        </Icon>
        <Icon>
          <i className="fa-brands fa-twitter"></i>
        </Icon>
        <Icon>
          <AtricleCardBookmark articleCard={article}></AtricleCardBookmark>
        </Icon>
      </ArticleCardIcons>
    </PostWrapper>
  );
};

const PostWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: auto;
  margin-bottom: 20px;
`;

const PostTextWrapper = styled.div`
  width: 75%;
  margin: auto;
`;
const ArticleText = styled.p`
  color: var(--text-secondary-color);
  font-size: 16px;
  line-height: 18px;
  margin-bottom: 20px;
`;

const ArticleImageWrapper = styled.div`
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

const ArticleCardIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 160px;
`;

const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  width: 50px;
  height: 30px;
  border-radius: 5px;
  background-color: var(--icon-color);
  transition: 0.8s;
  cursor: pointer;
  color: var(--button-primary-color);
  &:hover {
    color: #502889;
  }
`;
