import styled from "styled-components";

type Props = {
  variant: "primary" | "secondary" | "default";
  children: string;
  disabled?: boolean;
  onClick?: () => void;
  role?: string;
};

export const Button: React.FC<Props> = ({
  variant,
  children,
  disabled,
  onClick,
  role,
}) => {
  return (
    <ButtonWrapper
      type="button"
      $variant={variant}
      disabled={disabled}
      onClick={onClick ? () => onClick() : () => ({})}
      role={role}
    >
      {children}
    </ButtonWrapper>
  );
};

const css = String.raw;

const ButtonWrapper = styled.button<{
  $variant: "primary" | "secondary" | "default";
  $fitContent?: boolean;
}>`
  all: unset;
  cursor: pointer;
  border-radius: 4px;
  padding: 5px 10px;
  width: ${({ $fitContent }) => {
    return $fitContent ? "fit-content" : "calc(100% - 20px)";
  }};

  ${({ $variant }) => {
    switch ($variant) {
      case "primary": {
        return css`
          background: var(--button-primary-color);
          color: white;
          text-align: center;
          font-size: 20px;
          font-weight: 600;
          &:hover {
            background-color: var(--buttun-accent-color);
          }
        `;
      }
      case "secondary": {
        return css`
          background-color: var(--button-primary-color);
          color: var(--text-accent-color);
          text-align: center;
          font-size: 20px;
          font-weight: 600;
          border-radius: 0;
          padding: 15px 10px;
          &:hover {
            background-color: var(--buttun-accent-color);
          }
        `;
      }
      case "default": {
        return css`
          background-color: transparent;
          color: var(--text-secondary-button-color);
          text-align: center;
          font-size: 20px;
          font-weight: 600;
          border-radius: 0;
          padding: 15px 10px;
          border-bottom: 1px solid var(--border-primary-color);
          &:hover {
            color: var(--background-accent-color2);
          }
        `;
      }

      default:
        return "";
    }
  }}

  &:disabled {
    cursor: none;
    opacity: 0.67;
    color: gray;
  }
`;
