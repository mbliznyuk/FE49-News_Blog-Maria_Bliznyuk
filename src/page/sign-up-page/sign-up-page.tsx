import { BackLink } from "../../feateres/back-link/back-link";
import { Header } from "../../feateres/header/header";
import { SignUpForm } from "../../feateres/sign-up-form/sign-up-form";

import { SecondaryTemplate } from "../../ui/templates/secondary-template";
import { Title } from "../../ui/title/title";

export const SignUpPage: React.FC = () => {
  return (
    <SecondaryTemplate
      header={<Header></Header>}
      backlink={<BackLink></BackLink>}
      title={<Title>Sign-Up</Title>}
      body={<SignUpForm></SignUpForm>}
    />
  );
};
