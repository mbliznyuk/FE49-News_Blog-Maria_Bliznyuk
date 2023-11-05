import { styled } from "styled-components";
import { ArticleCardModel } from "../../api/types";
import { AtricleCard } from "../article-card/article-card";
import { Link } from "react-router-dom";

type ArticlesProps = {
  articles: ArticleCardModel[];
};

export const SearchResaultBody: React.FC<ArticlesProps> = ({ articles }) => {
  const getArticleById = (id: number) =>
    articles.find((item) => item.id === id);
  return (
    <>
      <ArticelsWrapper>
        {articles.map((element, id) => (
          <StyledLink key={id} to={`/articles/${element.id}`}>
            <AtricleCard
              key={id}
              articleCard={getArticleById(element.id)!}
            ></AtricleCard>
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
