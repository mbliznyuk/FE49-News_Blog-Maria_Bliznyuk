import styled from "styled-components";
import {
  FilterButton,
  mockedFilterButtonModels,
} from "../date-filter-button/date-filter-button";
import TitleSelect from "../sort-menu/sort-menu";

type FilterMenuProps = {};

export const FilterMenu: React.FC<FilterMenuProps> = () => {
  return (
    <FilterMenuWrapper>
      <DateFilterWrapper>
        <FilterButton filterButton={mockedFilterButtonModels}></FilterButton>
      </DateFilterWrapper>
      <SortPanel>{TitleSelect()}</SortPanel>
    </FilterMenuWrapper>
  );
};

const FilterMenuWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 40px;
`;

const DateFilterWrapper = styled.div``;

const SortPanel = styled.div`
  width: 20%;
`;
