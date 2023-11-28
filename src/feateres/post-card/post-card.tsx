import moment from "moment";
import { styled } from "styled-components";
import { PostCardModel } from "../../api/types";
import { AtricleCardBookmark } from "./bookmark";
import { TabId } from "../tabs/tab";
import { ARTICLES } from "../tabs/tab.slice";
import { getLogin } from "../../api/local-storage-login";

type PostCardProps = {
  postCard: PostCardModel;
  postType: TabId;
};

export const PostCard: React.FC<PostCardProps> = ({ postCard, postType }) => {
  return (
    <PostCardWrapper>
      <CardImageWrapper>
        <img src={postCard.image_url} alt="#"></img>
      </CardImageWrapper>
      <PostCardDate>{moment(postCard.published_at).format("LL")}</PostCardDate>
      <PostCardTitle>{postCard.title}</PostCardTitle>
      <IconWrapper>
        {postType === ARTICLES && getLogin() && (
          <AtricleCardBookmark articleCard={postCard}></AtricleCardBookmark>
        )}
      </IconWrapper>
    </PostCardWrapper>
  );
};

const PostCardWrapper = styled.div`
  position: relative;
  width: 380px;
  height: 300px;
  background-color: var(--article-card-color);
  border-radius: 10px;
  overflow: hidden;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
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
  height: 44px;
  -webkit-line-clamp: 2;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const CardImageWrapper = styled.div`
  width: 100%;
  height: 60%;
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

const IconWrapper = styled.div`
  display: flex;
  justify-content: end;
`;
