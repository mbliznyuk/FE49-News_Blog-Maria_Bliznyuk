import styled from "styled-components";
import { UserNameLabel } from "../../ui/username-label/username-label";
import { Search } from "../search/search";
import { ReactComponent as ReactLogo } from "./Logo.svg";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hook";
import { toggle } from "./is-burger-open.slice";
import { BurgerMenu } from "../burger-menu/burger-menu";

type Props = {};

export const Header: React.FC<Props> = () => {
  const dispatch = useAppDispatch();
  const { isBurgerOpen } = useAppSelector((state) => state.burgerMenu);
  return (
    <>
      <HeaderWrapper>
        <StyledLink to={"/"}>
          <Logo>
            <ReactLogo />
          </Logo>
        </StyledLink>

        <Search></Search>
        <div onClick={() => dispatch(toggle())}>
          <UserNameLabel username={"Maria Bliznyuk"}></UserNameLabel>
        </div>
      </HeaderWrapper>
      <div style={{ display: isBurgerOpen ? "inherit" : "none" }}>
        <BurgerMenu />
      </div>
    </>
  );
};

const StyledLink = styled(Link)`
  text-decoration: unset;
`;

const Logo = styled.div`
  width: 150px;
  height: 100%;
  padding: 0 15px;
  cursor: pointer;
  & svg {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
`;

const HeaderWrapper = styled.div`
  background-color: var(--header-color);
  height: 60px;
  display: flex;
  position: relative;
`;
