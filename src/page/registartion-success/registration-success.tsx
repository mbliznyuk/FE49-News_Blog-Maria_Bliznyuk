import { BackLink } from "../../feateres/back-link/back-link";
import { Header } from "../../feateres/header/header";
import { RegistrationConfirmationForm } from "../../feateres/registration-confirmation-form/registration-confirmation-form";

import { SecondaryTemplate } from "../../ui/templates/secondary-template";
import { Title } from "../../ui/title/title";

export const RegistrationSuccess: React.FC = () => {
  return (
    <SecondaryTemplate
      header={<Header></Header>}
      backlink={<BackLink></BackLink>}
      title={<Title>Registration Confirmation</Title>}
      body={<RegistrationConfirmationForm></RegistrationConfirmationForm>}
    />
  );
};
