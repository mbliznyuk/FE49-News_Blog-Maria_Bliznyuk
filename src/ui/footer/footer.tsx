import styled from "styled-components";
import { ThemeSwitcher } from "../../feateres/theme-switcher/theme-switcher";

export const Footer: React.FC = () => {
  return (
    <FooterWrapper>
      <Year>{"© " + new Date().getFullYear() + " Blogologo"}</Year>
      <ThemeSwitcher></ThemeSwitcher>
    </FooterWrapper>
  );
};

const FooterWrapper = styled.footer`
  /* position: fixed;
  bottom: 0;
  left: 0; */
  width: 100%;
  height: 50px;
  color: var(--text-secondary-color);
  background-color: var(--background-primary-color);
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid var(--border-primary-color);
`;

const Year = styled.div``;
