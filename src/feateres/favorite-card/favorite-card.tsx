import moment from "moment";
import { styled } from "styled-components";
import { PostCardModel } from "../../api/types";

import { AtricleCardBookmark } from "../post-card/bookmark";

type FavoritePostCardProps = {
  postCard: PostCardModel;
};

export const FavoritePostCard: React.FC<FavoritePostCardProps> = ({
  postCard,
}) => {
  return (
    <FavoritePostCardWrapper>
      <LeftWrapper>
        <PostCardTitle>{postCard.title}</PostCardTitle>
        <PostCardDate>
          {moment(postCard.published_at).format("LL")}
        </PostCardDate>
        <TextWrapper>{postCard.text}</TextWrapper>
        <PostCardIcons>
          <Icon>
            <i className="fa-brands fa-facebook-f"></i>
          </Icon>
          <Icon>
            <i className="fa-brands fa-twitter"></i>
          </Icon>

          <Icon>
            <AtricleCardBookmark articleCard={postCard}></AtricleCardBookmark>
          </Icon>
        </PostCardIcons>
      </LeftWrapper>
      <RightWrapper>
        <CardImageWrapper>
          <img src={postCard.image_url} alt="#"></img>
        </CardImageWrapper>
      </RightWrapper>
    </FavoritePostCardWrapper>
  );
};

const FavoritePostCardWrapper = styled.div`
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

const PostCardDate = styled.div`
  color: #8b8a90;
  font-size: 14px;
  height: 16px;
  margin-bottom: 5px;
`;

const PostCardTitle = styled.div`
  color: var(--text-primary-color);
  font-size: 16px;
  font-weight: bold;
  -webkit-line-clamp: 2;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  margin-bottom: 5px;
`;

const CardImageWrapper = styled.div`
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

const PostCardIcons = styled.div`
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
