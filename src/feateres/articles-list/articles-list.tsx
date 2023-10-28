import { styled } from "styled-components";
import { ArticleCardModel } from "../../api/types";
import { AtricleCard } from "../article-card/article-card";

type ArticlesProps = {
  articles: ArticleCardModel[];
};

export const ArticlesList: React.FC<ArticlesProps> = ({ articles }) => {
  return (
    <>
      <ArticelsWrapper>
        {articles.map((element, id) => (
          <AtricleCard key={id} articleCard={element}></AtricleCard>
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
