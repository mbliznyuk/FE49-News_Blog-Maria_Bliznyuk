import { faMagnifyingGlass, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../../hook";
import { reset, search } from "./search.slice";
import { DropDown } from "./drop-down";
import { Navigate, useNavigate } from "react-router-dom";

type Props = {};

export const Search: React.FC<Props> = () => {
  const [isSearchActive, setIsSearchActive] = useState<boolean>(false);
  const [searchedText, setSearchedText] = useState<string>("");
  const dispatch = useAppDispatch();
  const { searchedArticles } = useAppSelector(({ search }) => search);
  const navigate = useNavigate();

  return (
    <RelativeContainer>
      <>
        {isSearchActive ? (
          <>
            <SearchInput
              placeholder="Search..."
              value={searchedText}
              onChange={(event) => {
                setSearchedText(event.currentTarget.value);
                dispatch(search(event.currentTarget.value));
              }}
              onKeyDown={(event) => {
                if (event.key === "Enter") {
                  console.log("title");
                  navigate(`/articles/searched/${searchedText}`);
                }
              }}
            ></SearchInput>
            <InputRightAction>
              <CloseInputIcon
                onClick={() => {
                  setSearchedText("");
                  setIsSearchActive(!isSearchActive);
                  dispatch(reset());
                }}
              >
                <FontAwesomeIcon icon={faXmark} />
              </CloseInputIcon>
            </InputRightAction>
            {searchedText && (
              <DropDown
                articles={searchedArticles.results}
                searchedString={searchedText}
              ></DropDown>
            )}
          </>
        ) : (
          <>
            <SearchIconWrapper
              onClick={() => setIsSearchActive(!isSearchActive)}
            >
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </SearchIconWrapper>
          </>
        )}
      </>
    </RelativeContainer>
  );
};

const InputRightAction = styled.div`
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  right: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const RelativeContainer = styled.div`
  position: relative;
  width: 90%;
`;

const SearchIconWrapper = styled.div`
  position: absolute;
  right: 0;
  height: 100%;
  cursor: pointer;
  padding: 0 10px;
  color: var(--text-primary-color);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
`;

const SearchInput = styled.input`
  height: 100%;
  position: relative;
  width: 100%;
  background-color: var(--search-input-color);
  outline: none;
  box-sizing: border-box;
  border: none;
  padding-left: 15px;
  color: var(--search-input-text-color);
  &::placeholder {
    color: var(--search-input-text-color);
    opacity: 0.8;
  }
`;
const CloseInputIcon = styled.div`
  color: var(--search-input-text-color);
  width: 10px;
  display: flex;
  align-items: center;
  padding-right: 10px;
  font-size: 16px;
  cursor: pointer;
`;
