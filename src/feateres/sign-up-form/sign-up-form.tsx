import { useEffect, useState } from "react";
import { Button } from "../../ui/button/button";
import { Input } from "../../ui/input/input";
import styled from "styled-components";
import { setName } from "./sign-up-form.slice";
import { useAppDispatch, useAppSelector } from "../../hook";

import { useNavigate } from "react-router-dom";
import { register } from "../auth/registration.slice";

export const SignUpForm: React.FC = () => {
  const dispatch = useAppDispatch();
  const name = useAppSelector(({ signUpForm }) => signUpForm.name);
  const { isCompleted, registrationResponse } = useAppSelector(
    ({ registration }) => registration
  );

  const navigate = useNavigate();

  useEffect(() => {
    console.log("isComplited");
    console.log(isCompleted);
    if (isCompleted) {
      navigate("/sign-up/success/" + registrationResponse?.email);
    }
  }, [isCompleted, registrationResponse, navigate]);

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmedPassword, setConfirmedPassword] = useState<string>("");
  const [isFormSubmitted, setIsFormSubmitted] = useState<boolean>(false);

  const getPasswordErrorMessage = (
    currentPassword: string,
    anotherPassword: string
  ): string | undefined => {
    if (!isFormSubmitted) {
      return undefined;
    }
    if (!currentPassword) {
      return "Password shoudn't be empty";
    }
    if (currentPassword !== anotherPassword) {
      return "Passwords aren't equal";
    }
    return undefined;
  };

  const isFormValid = (): boolean => {
    return (
      !!email &&
      !!password &&
      !!confirmedPassword &&
      password === confirmedPassword
    );
  };

  return (
    <FormWrapper>
      <Input
        type="text"
        labelText="Name"
        value={name}
        onChange={({ currentTarget }) => dispatch(setName(currentTarget.value))}
      />
      <Input
        type="email"
        labelText="Email"
        value={email}
        onChange={({ currentTarget }) => setEmail(currentTarget.value)}
        error={
          !email && isFormSubmitted ? `Email shoudn't be empty` : undefined
        }
      />
      <Input
        type="password"
        labelText="Password"
        value={password}
        onChange={({ currentTarget }) => setPassword(currentTarget.value)}
        error={getPasswordErrorMessage(password, confirmedPassword)}
      />
      <Input
        type="password"
        labelText="Confirm password"
        value={confirmedPassword}
        onChange={({ currentTarget }) =>
          setConfirmedPassword(currentTarget.value)
        }
        error={getPasswordErrorMessage(confirmedPassword, password)}
      />
      <EmptySpace></EmptySpace>
      <Button
        variant="primary"
        disabled={!isFormValid()}
        onClick={() => {
          setIsFormSubmitted(true);
          if (isFormValid()) {
            dispatch(
              register({
                name,
                password,
                email,
              })
            );
          }
        }}
      >
        Sign Up
      </Button>
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
  margin-bottom: 35px;
`;

const EmptySpace = styled.div`
  height: 15px;
`;
