import { styled } from "styled-components";
import { ArticleCardModel } from "../../api/types";
import { useState } from "react";
import { isLiked } from "./likes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import moment from "moment";

type ArticleCardProps = {
  articleCard: ArticleCardModel;
};

export const AtricleCard: React.FC<ArticleCardProps> = ({ articleCard }) => {
  const [isLike, setIsLike] = useState(isLiked(articleCard.id));
  return (
    <ArticleWrapper>
      <CardImageWrapper>
        <img src={articleCard.image_url} alt="#"></img>
      </CardImageWrapper>
      <PostCardDate>
        {moment(articleCard.published_at).format("LL")}
      </PostCardDate>
      <PostCardTitle>{articleCard.title}</PostCardTitle>
      <LikeIconWrapper>
        <i className="fa-solid fa-heart"></i>
      </LikeIconWrapper>
    </ArticleWrapper>
  );
};

const ArticleWrapper = styled.div`
  position: relative;
  width: 290px;
  height: 310px;
  background-color: var(--article-card-color);
  border-radius: 10px;
  overflow: hidden;
  margin-bottom: 20px;
`;

const PostCardDate = styled.div`
  padding: 0 10px;
  color: #8b8a90;
  font-size: 14px;
  height: 18px;
`;

const PostCardTitle = styled.h2`
  padding: 0 10px;
  color: var(--text-primary-color);
  font-size: 16px;
  -webkit-line-clamp: 2;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const CardImageWrapper = styled.div`
  width: 100%;
  height: 60%;
  margin: auto;
  margin-bottom: 10px;

  background: linear-gradient(
    45deg,
    rgba(69, 13, 171, 0.8),
    rgba(97, 35, 160, 0.8)
  );
  cursor: pointer;
  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    overflow: hidden;
    opacity: 0.3;
    transition: 0.8s;
    &:hover {
      opacity: 1;
    }
  }
`;

const LikeIconWrapper = styled.div`
  text-align: end;
  cursor: pointer;
  width: 95%;
  font-size: 18px;
  color: red;
`;
