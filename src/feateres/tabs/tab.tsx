import { styled } from "styled-components";
import { useAppDispatch, useAppSelector } from "../../hook";
import { ARTICLES, NEWS, setActiveTab } from "./tab.slice";

type TabsProps = {
  tabs: TabModel[];
};

export type TabId = "ARTICLES" | "NEWS";

export const mockedTabsModels: TabModel[] = [
  { id: ARTICLES, name: "Articles" },
  { id: NEWS, name: "News" },
];

export interface TabModel {
  id: TabId;
  name: string;
  isDisabled?: boolean;
}

export const Tabs: React.FC<TabsProps> = (props: TabsProps) => {
  const dispatch = useAppDispatch();
  const activeId = useAppSelector((state) => state.tabs.activeTab);
  return (
    <TabsWrapper>
      {props.tabs.map((element, id) => (
        <Tab
          key={id}
          $isSelected={activeId === element.id}
          disabled={element.isDisabled}
          onClick={() => dispatch(setActiveTab(element.id))}
        >
          {element.name}
        </Tab>
      ))}
    </TabsWrapper>
  );
};

const TabsWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 60px;
  border-bottom: 1px solid var(--border-primary-color);
  margin-bottom: 20px;
`;

const Tab = styled.button<{ $isSelected: boolean }>`
  all: unset;
  color: var(--text-primary-color);
  font-size: 18px;
  font-weight: 500;
  margin: 0 20px;
  padding: 10px 10px;
  border-bottom: 3px solid;
  border-color: ${({ $isSelected }) =>
    $isSelected ? "var(--border-accent-color)" : "transparent"};
  cursor: pointer;
  &:hover {
    color: var(--text-hover-color);
  }

  &:disabled {
    color: gray;
    cursor: auto;
  }
`;
