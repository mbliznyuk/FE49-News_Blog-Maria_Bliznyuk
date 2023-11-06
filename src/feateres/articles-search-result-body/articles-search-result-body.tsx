import { styled } from "styled-components";
import { PostCardModel } from "../../api/types";
import { PostCard } from "../post-card/post-card";
import { Link } from "react-router-dom";
import { ARTICLES } from "../tabs/tab.slice";

type ArticlesProps = {
  articles: PostCardModel[];
};

export const ArticlesSearchResultBody: React.FC<ArticlesProps> = ({
  articles,
}) => {
  const getArticleById = (id: number) =>
    articles.find((item) => item.id === id);
  return (
    <>
      <ArticelsWrapper>
        {articles.map((element, id) => (
          <StyledLink key={id} to={`/articles/${element.id}`}>
            <PostCard
              key={id}
              postCard={getArticleById(element.id)!}
              postType={ARTICLES}
            ></PostCard>
          </StyledLink>
        ))}
      </ArticelsWrapper>
    </>
  );
};

const ArticelsWrapper = styled.div`
  width: 80%;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
const StyledLink = styled(Link)`
  text-decoration: unset;
`;
