import styled from "styled-components";

type Props = React.InputHTMLAttributes<HTMLInputElement> & {
  labelText: string;
  error?: string;
};

export const Input: React.FC<Props> = ({ labelText, error, ...restProps }) => {
  return (
    <Label>
      <LabelText>{labelText}</LabelText>
      <InputWrapper $borderColor={error ? "red" : undefined} {...restProps} />
      <Error>{error}</Error>
    </Label>
  );
};

const Label = styled.label`
  display: block;
  width: 100%;
  color: var(--text-primary-color);
`;

const LabelText = styled.div`
  text-align: start;
  font-weight: 500;
  margin-bottom: 7px;
`;

const InputWrapper = styled.input<{ $borderColor?: string }>`
  all: unset;
  box-sizing: border-box;
  border-radius: 5px;
  border: 1px solid
    ${({ $borderColor }) => $borderColor || "var(--border-primary-color)"};
  width: 100%;
  height: 40px;
  background-color: var(--input-clor);
  padding: 15px 10px;
  color: var(--text-secondary-color);

  &:hover {
    border: 1px solid
      ${({ $borderColor }) => $borderColor || "var(--input-accent-color)"};
  }

  &:focus-visible {
    border: 1px solid
      ${({ $borderColor }) => $borderColor || "var(--input-accent-color)"};
  }
`;

const Error = styled.div`
  height: 16px;
  color: var(--text-error-color);
`;
