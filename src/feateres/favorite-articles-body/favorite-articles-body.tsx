import { Link } from "react-router-dom";
import { styled } from "styled-components";
import { PostCardModel } from "../../api/types";
import CircularColor from "../../ui/progreass/progress";
import { FavoriteArticleCard } from "../favorite-card/favorite-card";

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
      <FavoriteArticlesWrapper>
        {posts.map((element, id) => (
          <StyledLink key={id} to={`/articles/${element.id}`}>
            <FavoriteArticleCard
              key={id}
              article={getPostById(element.id)!}
            ></FavoriteArticleCard>
          </StyledLink>
        ))}
      </FavoriteArticlesWrapper>
    </>
  );
};

const FavoriteArticlesWrapper = styled.div`
  width: 100%;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
const StyledLink = styled(Link)`
  text-decoration: unset;
`;
