import { styled } from "styled-components";
import { ArticleCardModel } from "./types";

type ArticlesProps = {
  articles: ArticleCardModel[];
};

export const ArticlesList: React.FC<ArticlesProps> = ({ articles }) => {
  return (
    <>
      <ArticelsWrapper>
        {articles.map((element, id) => (
          <div key={id}>{element.title}</div>
        ))}
      </ArticelsWrapper>
    </>
  );
};

const ArticelsWrapper = styled.div`
  display: flex;
`;
