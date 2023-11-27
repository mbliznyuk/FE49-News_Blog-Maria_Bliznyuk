import { Link } from "react-router-dom";
import { styled } from "styled-components";
import { PostCardModel } from "../../api/types";
import CircularColor from "../../ui/progreass/progress";
import { PostCard } from "../post-card/post-card"; //TODO rename
import { FavoritePostCard } from "../favorite-card/favorite-card";

type PostsProps = {
  posts: PostCardModel[];
  isLoading: boolean;
};

export const FavoriteArticlesBody: React.FC<PostsProps> = ({
  posts,
  isLoading,
}) => {
  const getPostById = (id: number) => posts.find((item) => item.id === id);
  if (isLoading) {
    return CircularColor();
  }

  return (
    <>
      <PostsWrapper>
        {posts.map((element, id) => (
          <StyledLink key={id} to={`/articles/${element.id}`}>
            <FavoritePostCard
              key={id}
              postCard={getPostById(element.id)!}
            ></FavoritePostCard>
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
