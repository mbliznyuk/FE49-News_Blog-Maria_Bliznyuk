import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../../hook";
import { setIsDark } from "./theme-switcher.slice";

export const ThemeSwitcher: React.FC = () => {
  const isDark = useAppSelector((state) => state.themeSwitcher.isDark);
  const dispatch = useAppDispatch();

  return (
    <SwitchWrapper>
      {isDark ? "Dark theme" : "Lihgt theme"}

      <SwitchInput
        className="switch-checkbox"
        id={"1"}
        type="checkbox"
        checked={isDark}
        onChange={() => dispatch(setIsDark(!isDark))}
      />
      <SwitchLabel className="switch-label" htmlFor={"1"}>
        <SwitchButton className="switch-button" />
      </SwitchLabel>
    </SwitchWrapper>
  );
};

const SwitchWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  align-items: center;
`;
const SwitchInput = styled.input`
  height: 0;
  width: 0;
  visibility: hidden;
`;

const SwitchLabel = styled.label`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  width: 40px;
  height: 20px;
  border-radius: 100px;
  border: 2px solid var(--switcher-color);
  position: relative;
  transition: background-color 0.2s;
`;

const SwitchButton = styled.span`
  content: "";
  position: absolute;
  top: 3px;
  left: 2px;
  width: 15px;
  height: 15px;
  border-radius: 45px;
  transition: 0.2s;
  background: var(--switcher-color);
  box-shadow: 0 0 2px 0 rgba(10, 10, 10, 0.29);
  ${SwitchInput}:checked + ${SwitchLabel} & {
    left: calc(100% - 2px);
    transform: translateX(-100%);
    color: white;
  }

  ${SwitchLabel}:active & {
    width: 25px;
  }
`;
