import { useState } from "react";
import { Navigate } from "react-router-dom";
import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../../hook";
import { Button } from "../../ui/button/button";
import { Input } from "../../ui/input/input";
import CircularColor from "../../ui/progreass/progress";
import { authorise } from "../auth/authorisation.slice";

export const SignInForm: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isFormSubmited, setIsFormSubmited] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const { isCompleted, isFailed, isInProgress } = useAppSelector(
    ({ authorisation }) => authorisation
  );
  const isEmailValid = (email: string): boolean => {
    const regularExpression =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regularExpression.test(email);
  };

  const isFormValid = (): boolean => {
    return !!email && !!password && isEmailValid(email);
  };

  const getEmailErrors = (): string | undefined => {
    if (!isEmailValid(email) && isFormSubmited) {
      return `Email shoud be valid and not empty`;
    }
    if (!isInProgress && isFailed) {
      return `User with email ${email} doesn't exist`;
    }
    return undefined;
  };

  if (isCompleted) {
    return <Navigate to={"/posts"} />;
  }

  if (isInProgress) {
    return CircularColor();
  }
  return (
    <FormWrapper>
      <Input
        placeholder="Your email"
        type="email"
        labelText="Email"
        value={email}
        onChange={({ currentTarget }) => setEmail(currentTarget.value)}
        error={getEmailErrors()}
      />
      <Input
        placeholder="Your password"
        type="password"
        labelText="Password"
        value={password}
        onChange={({ currentTarget }) => setPassword(currentTarget.value)}
        error={
          !password && isFormSubmited ? `Password shoudn't be empty` : undefined
        }
      />
      <ForgotPasswordLinkWrapper>
        <ForgotPasswordLink href="#">Forgot password?</ForgotPasswordLink>
      </ForgotPasswordLinkWrapper>
      <Button
        variant="primary"
        disabled={!email && !password}
        onClick={() => {
          setIsFormSubmited(true);
          if (isFormValid()) {
            dispatch(authorise({ email, password }));
          }
        }}
        role="presentation"
      >
        Sign In
      </Button>
      <LinkToSignUpFormWrapper>
        <SignUpFormText>Don't have an account? </SignUpFormText>
        <SignUpFormLink>SignUp</SignUpFormLink>
      </LinkToSignUpFormWrapper>
    </FormWrapper>
  );
};

const FormWrapper = styled.form`
  background-color: var(--header-color);
  width: 35%;
  margin: auto;
  margin-top: 30px;
  padding: 35px;
  border-radius: 1em;
`;

const ForgotPasswordLinkWrapper = styled.div`
  margin-bottom: 35px;
`;
const ForgotPasswordLink = styled.a`
  all: unset;
  cursor: pointer;
  color: var(--text-primary-color);
  &:hover {
    color: var(--button-primary-color);
  }
`;

const LinkToSignUpFormWrapper = styled.div`
  margin-top: 20px;
  text-align: center;
`;

const SignUpFormText = styled.span`
  color: var(--text-primary-color);
`;

const SignUpFormLink = styled.span`
  color: var(--button-primary-color);
  cursor: pointer;
`;
