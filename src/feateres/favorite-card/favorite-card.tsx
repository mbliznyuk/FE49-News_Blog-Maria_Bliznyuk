import moment from "moment";
import { styled } from "styled-components";
import { PostCardModel } from "../../api/types";

import { AtricleCardBookmark } from "../post-card/bookmark";

type FavoriteArticlesProps = {
  article: PostCardModel;
};

export const FavoriteArticleCard: React.FC<FavoriteArticlesProps> = ({
  article,
}) => {
  return (
    <FavoriteArticleWrapper>
      <LeftWrapper>
        <ArticleTitle>{article.title}</ArticleTitle>
        <ArticleDate>{moment(article.published_at).format("LL")}</ArticleDate>
        <TextWrapper>{article.text}</TextWrapper>
        <ArticleIcons>
          <Icon>
            <i className="fa-brands fa-facebook-f"></i>
          </Icon>
          <Icon>
            <i className="fa-brands fa-twitter"></i>
          </Icon>

          <Icon>
            <AtricleCardBookmark articleCard={article}></AtricleCardBookmark>
          </Icon>
        </ArticleIcons>
      </LeftWrapper>
      <RightWrapper>
        <ArticleImageWrapper>
          <img src={article.image_url} alt="#"></img>
        </ArticleImageWrapper>
      </RightWrapper>
    </FavoriteArticleWrapper>
  );
};

const FavoriteArticleWrapper = styled.div`
  width: 80%;
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;
  padding: 10px 15px;
  max-height: 150px;
  background-color: var(--article-card-color);
  border-radius: 10px;
  overflow: hidden;
  margin: auto;
  margin-bottom: 20px;
`;

const LeftWrapper = styled.div``;

const RightWrapper = styled.div`
  margin-left: 10px;
`;

const TextWrapper = styled.div`
  color: var(--text-primary-color);
  font-size: 14px;
  -webkit-line-clamp: 3;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  margin-bottom: 5px;
  align-items: end;
`;

const ArticleDate = styled.div`
  color: #8b8a90;
  font-size: 14px;
  height: 16px;
  margin-bottom: 5px;
`;

const ArticleTitle = styled.div`
  color: var(--text-primary-color);
  font-size: 16px;
  font-weight: bold;
  -webkit-line-clamp: 2;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  margin-bottom: 5px;
`;

const ArticleImageWrapper = styled.div`
  width: 120px;
  height: 120px;
  margin: auto;
  margin-bottom: 10px;

  cursor: pointer;
  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    overflow: hidden;

    transition: 0.8s;
  }
`;

const ArticleIcons = styled.div`
  display: flex;
  align-items: center;
  width: 160px;
`;

const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  width: 30px;
  height: 30px;
  margin-right: 5px;
  transition: 0.8s;
  cursor: pointer;
  color: var(--button-primary-color);
  &:hover {
    color: #502889;
  }
`;
