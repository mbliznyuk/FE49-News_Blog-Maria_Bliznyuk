import { BackLink } from "../../feateres/back-link/back-link";
import { Header } from "../../feateres/header/header";
import { SignInForm } from "../../feateres/sign-in-form/sign-in-form";

import { SecondaryTemplate } from "../../ui/templates/secondary-template";
import { Title } from "../../ui/title/title";

export const SignInPage: React.FC = () => {
  return (
    <SecondaryTemplate
      header={<Header></Header>}
      backlink={<BackLink></BackLink>}
      title={<Title>Sign-In</Title>}
      body={<SignInForm></SignInForm>}
    />
  );
};
