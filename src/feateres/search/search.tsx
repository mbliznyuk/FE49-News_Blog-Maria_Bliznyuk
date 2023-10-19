import { faMagnifyingGlass, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import styled from "styled-components";

type Props = {};

export const Search: React.FC<Props> = () => {
  const [isSearchActive, setIsSearchActive] = useState<boolean>(false);
  const [searchedText, setSearchedText] = useState<string>("");

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
              }}
            ></SearchInput>
            <InputRightAction>
              <CloseInputIcon
                onClick={() => {
                  setSearchedText("");
                  setIsSearchActive(!isSearchActive);
                }}
              >
                <FontAwesomeIcon icon={faXmark} />
              </CloseInputIcon>
            </InputRightAction>
            {}
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
  color: var(--text-primary-color);
  &::placeholder {
    color: var(--text-secondary-color);
    opacity: 0.9;
  }
`;
const CloseInputIcon = styled.div`
  color: var(--text-primary-color);
  width: 10px;
  display: flex;
  align-items: center;
  padding-right: 10px;
  font-size: 16px;
  cursor: pointer;
`;

const SearchInputAlternative = styled.div`
  width: 92%;
  padding: 0 15px;
  background-color: #2536a7;
  border: none;
`;
