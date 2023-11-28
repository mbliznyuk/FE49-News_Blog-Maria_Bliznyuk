import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { getLogin } from "../../api/local-storage-login";
import { useAppDispatch, useAppSelector } from "../../hook";
import { UserNameLabel } from "../../ui/username-label/username-label";
import { BurgerMenu } from "../burger-menu/burger-menu";
import { Search } from "../search/search";
import { ReactComponent as ReactLogo } from "./Logo.svg";
import { toggle } from "./is-burger-open.slice";

type Props = {};

export const Header: React.FC<Props> = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { isBurgerOpen } = useAppSelector((state) => state.burgerMenu);
  const username = getLogin();
  return (
    <>
      <HeaderWrapper>
        <StyledLink to={"/"}>
          <Logo>
            <ReactLogo />
          </Logo>
        </StyledLink>

        <Search></Search>
        <div
          onClick={() => (username ? dispatch(toggle()) : navigate("/sign-in"))}
        >
          <UserNameLabel username={username || ""}></UserNameLabel>
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
  width: 100%;
  display: flex;
`;
