import React, { useState } from "react";
import { styled } from "styled-components";
import { PostCardModel } from "../../api/types";
import { isFavorided, toggle } from "./favorites";

type ArticleCardProps = {
  articleCard: PostCardModel;
};

export const AtricleCardBookmark: React.FC<ArticleCardProps> = ({
  articleCard,
}) => {
  const [isFavorite, setIsFavorite] = useState(isFavorided(articleCard.id));

  return (
    <FavoriteIconWrapper
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
    </FavoriteIconWrapper>
  );
};

const FavoriteIconWrapper = styled.div`
  width: 10%;
  text-align: end;
  padding: 0 20px;
  cursor: pointer;
  font-size: 18px;
  color: var(--button-primary-color);
  transition: 0.8s;
  &:hover {
    color: #502889;
  }
`;
