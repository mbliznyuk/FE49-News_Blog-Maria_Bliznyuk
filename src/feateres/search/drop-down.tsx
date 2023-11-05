import styled from "styled-components";
import { AllArticlesResponseResult } from "../../api/types";
import { Link } from "react-router-dom";

type DropDownProps = {
  articles: AllArticlesResponseResult[];
  searchedString: string;
};

export const DropDown: React.FC<DropDownProps> = ({
  articles,
  searchedString,
}) => {
  return (
    <DropDownWrapper>
      {!!articles.length &&
        articles.map((element, id) => (
          <StyledLink key={id} to={`/articles/${element.id}`}>
            <DropDownElement key={id}>
              {element.title}
              <SearchedArticleImage>
                <img src={element.image_url} alt="#" />
              </SearchedArticleImage>
            </DropDownElement>
          </StyledLink>
        ))}
      {!articles.length && searchedString && <div>posts not found</div>}
    </DropDownWrapper>
  );
};

const StyledLink = styled(Link)`
  text-decoration: unset;
`;

const SearchedArticleImage = styled.div`
  width: 40px;
  height: 40px;
  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
`;

const DropDownWrapper = styled.ul`
  z-index: 99;
  height: 70dvh;
  position: absolute;
  width: 100%;
  padding: 0;
  margin: 0;
  top: 60px;
  left: 0;
  border-radius: 0 0 15px 15px;
  background-color: var(--search-input-color);
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 6px;
    height: 25%;
  }
  &::-webkit-scrollbar-track {
    border-radius: 0 0 15px 0;
  }

  &::-webkit-scrollbar-thumb {
    background-color: var(--button-primary-color);
    border-radius: 25px;
  }
`;

const DropDownElement = styled.li`
  all: unset;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
  height: 60px;
  color: var(--search-input-text-color);
  border-bottom: solid 1px var(--border-primary-color);

  &:hover {
    color: var(--text-hover-color);
  }
`;
