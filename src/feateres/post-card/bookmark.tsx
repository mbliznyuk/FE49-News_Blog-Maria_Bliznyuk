import { useState } from "react";
import { styled } from "styled-components";
import { PostCardModel } from "../../api/types";
import { isFavorided, toggle } from "./favorites";
import React from "react";

type ArticleCardProps = {
  articleCard: PostCardModel;
};

export const AtricleCardBookmark: React.FC<ArticleCardProps> = ({
  articleCard,
}) => {
  const [isFavorite, setIsFavorite] = useState(isFavorided(articleCard.id));
  return (
    <LikeIconWrapper
      onClick={(event) => {
        setIsFavorite(!isFavorite);
        toggle(articleCard.id);
        event.preventDefault();
        event.stopPropagation();
      }}
    >
      {isFavorite ? (
        <i className="fa-solid fa-bookmark"></i>
      ) : (
        <i className="fa-regular fa-bookmark"></i>
      )}
    </LikeIconWrapper>
  );
};

const LikeIconWrapper = styled.div`
  text-align: end;
  cursor: pointer;
  font-size: 18px;
  color: var(--button-primary-color);
  transition: 0.8s;
  &:hover {
    color: #502889;
  }
`;
