import { useSearchParams } from "react-router-dom";
import { styled } from "styled-components";
import { useAppDispatch, useAppSelector } from "../../hook";
import { getArticles } from "../articles-list/articles-list.slice";
import { getNews } from "../news-list/news-list.slice";
import {
  DAY,
  MONATH,
  WEEK,
  YEAR,
  setActiveFilterButton,
} from "./date-filter-button.slice";

type FilterrButtonProps = {
  filterButton: FilterButtonModel[];
};

export type FilterButtonId = "DAY" | "WEEK" | "MONATH" | "YEAR";

export const mockedFilterButtonModels: FilterButtonModel[] = [
  { id: DAY, name: "Day" },
  { id: WEEK, name: "Week" },
  { id: MONATH, name: "Month" },
  { id: YEAR, name: "Year" },
];

export interface FilterButtonModel {
  id: FilterButtonId;
  name: string;
  isDisabled?: boolean;
}

export const FilterButton: React.FC<FilterrButtonProps> = (
  props: FilterrButtonProps
) => {
  const dispatch = useAppDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const activeId = useAppSelector(
    (state) => state.filterButton.activFilterButton
  );
  const sortActiveId = useAppSelector(
    (state) => state.sortMenu.activeSortOption
  );
  return (
    <FilterButtonWrapper>
      {props.filterButton.map((element, id) => (
        <FilterButtonElement
          key={id}
          $isSelected={activeId === element.id}
          disabled={element.isDisabled}
          onClick={() => {
            dispatch(setActiveFilterButton(element.id));
            dispatch(getArticles({ period: element.id, sortBy: sortActiveId }));
            dispatch(getNews({ period: element.id, sortBy: sortActiveId }));
            setSearchParams((params) => {
              params.set("page", "1");
              return params;
            });
          }}
        >
          {element.name}
        </FilterButtonElement>
      ))}
    </FilterButtonWrapper>
  );
};

const FilterButtonWrapper = styled.div`
  display: flex;
`;

const FilterButtonElement = styled.button<{ $isSelected: boolean }>`
  all: unset;
  color: ${({ $isSelected }) =>
    $isSelected ? "var(--text-accent-color)" : "var(--text-primary-color)"};
  font-size: 18px;
  font-weight: 400;
  min-width: 75px;
  margin: 0 10px;
  text-align: center;
  line-height: 30px;
  padding: 5px 10px;
  border-radius: 5px;
  background-color: ${({ $isSelected }) =>
    $isSelected ? "var(--button-primary-color)" : "var(--filter-button-color)"};
  cursor: pointer;
  &:hover {
    background-color: var(--buttun-accent-color);
  }

  &:disabled {
    color: gray;
    cursor: auto;
  }
`;
