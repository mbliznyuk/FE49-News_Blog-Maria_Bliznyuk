import styled from "styled-components";
import { UserNameLabel } from "../../ui/username-label/username-label";
import { Search } from "../search/search";
import { ReactComponent as ReactLogo } from "./Logo.svg";

type Props = {};

export const Header: React.FC<Props> = () => {
  return (
    <>
      <HeaderWrapper>
        <Logo>
          <ReactLogo />
        </Logo>
        <Search></Search>
        <UserNameLabel username={"Maria Bliznyuk"}></UserNameLabel>
      </HeaderWrapper>
    </>
  );
};
const Logo = styled.div`
  width: 150px;
  height: 100%;
  padding: 0 15px;
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
