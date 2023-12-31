import { Link } from "react-router-dom";
import { styled } from "styled-components";
import { PostCardModel } from "../../api/types";
import CircularColor from "../../ui/progreass/progress";
import { PostCard } from "../post-card/post-card";
import { TabId } from "../tabs/tab";
import { ARTICLES, NEWS } from "../tabs/tab.slice";

type PostsProps = {
  posts: PostCardModel[];
  postType: TabId;
  isLoading: boolean;
};

export const PostsList: React.FC<PostsProps> = ({
  posts,
  postType,
  isLoading,
}) => {
  const getPostById = (id: number) => posts.find((item) => item.id === id);
  if (isLoading) {
    return CircularColor();
  }

  const getUrlPrefix = (): string => {
    switch (postType) {
      case ARTICLES:
        return "articles";
      case NEWS:
        return "blogs";
      default:
        return "articles";
    }
  };

  return (
    <>
      <PostsWrapper>
        {posts.map((element, id) => (
          <StyledLink key={id} to={`/${getUrlPrefix()}/${element.id}`}>
            <PostCard
              key={id}
              postCard={getPostById(element.id)!}
              postType={postType}
            ></PostCard>
          </StyledLink>
        ))}
      </PostsWrapper>
    </>
  );
};

const PostsWrapper = styled.div`
  width: 100%;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
const StyledLink = styled(Link)`
  text-decoration: unset;
`;
