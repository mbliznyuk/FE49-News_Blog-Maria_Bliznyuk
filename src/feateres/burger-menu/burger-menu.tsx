import { Link } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../../ui/button/button";

export const BurgerMenu: React.FC = ({}) => {
  return (
    <BurgerMenuWrapper>
      <StyledLink to={"/favorites"}>
        <MyFaforitesOption>My Favorites</MyFaforitesOption>
      </StyledLink>

      <StyledLink to={"/sign-in"}>
        <Button
          variant={"secondary"}
          children={"Log Out"}
          // onClick={() => localStorage.clear()}
        ></Button>
      </StyledLink>
    </BurgerMenuWrapper>
  );
};

const StyledLink = styled(Link)`
  text-decoration: unset;
`;
const BurgerMenuWrapper = styled.div`
  min-width: 175px;
  min-height: 50dvh;
  background-color: var(--input-clor);
  z-index: 5;
  position: absolute;
  top: 60px;
  right: 0;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  transition: 0.8s;
  overflow: hidden;
  border-radius: 0 0 10px 10px;
  border-left: 1px solid var(--border-primary-color);
  border-top: 1px solid var(--border-primary-color);
`;

const MyFaforitesOption = styled.div`
  height: 55px;
  color: var(--text-primary-color);
  border-bottom: 1px solid var(--border-secondary-color);
  display: flex;
  align-items: center;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  cursor: pointer;
  &:hover {
    color: var(--text-hover-color);
  }
`;
