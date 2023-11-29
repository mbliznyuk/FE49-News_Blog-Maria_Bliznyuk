import { Button } from "../../ui/button/button";
import { Link, useParams } from "react-router-dom";
import { styled } from "styled-components";

export const RegistrationConfirmationForm: React.FC = () => {
  const { email } = useParams();
  return (
    <RegistrationConfirmationFormWrapper>
      <RegistrationConfirmationFormTextWrapper>
        <RegistrationConfirmationFormText>
          Please activate your account with the activation
        </RegistrationConfirmationFormText>
        <RegistrationConfirmationFormText>
          link in the email <EmailSpan>{email}</EmailSpan>
        </RegistrationConfirmationFormText>

        <RegistrationConfirmationFormText>
          Please, check your email
        </RegistrationConfirmationFormText>
      </RegistrationConfirmationFormTextWrapper>
      <StyledLink to={"/"}>
        <Button variant="primary" onClick={() => {}}>
          Go to home
        </Button>
      </StyledLink>
    </RegistrationConfirmationFormWrapper>
  );
};

const StyledLink = styled(Link)`
  text-decoration: unset;
`;

const RegistrationConfirmationFormWrapper = styled.div`
  background-color: var(--header-color);
  width: 35%;
  margin: auto;
  margin-top: 30px;
  padding: 35px;
  border-radius: 1em;
`;
const RegistrationConfirmationFormTextWrapper = styled.div`
  margin-bottom: 35px;
  color: var(--text-primary-color);
`;
const RegistrationConfirmationFormText = styled.div`
  line-height: 30px;
  font-size: 20px;
`;

const EmailSpan = styled.span`
  line-height: 30px;
  font-size: 20px;
  font-weight: bold;
`;
