import { Link } from "react-router-dom";
import styled from "styled-components";

export const BackLink: React.FC = () => (
  <BackLinkWrapper>
    <StyledLink to={"/"}>
      <BackLinkText>Back to home</BackLinkText>
    </StyledLink>
  </BackLinkWrapper>
);

const StyledLink = styled(Link)`
  text-decoration: unset;
`;
const BackLinkWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const BackLinkText = styled.div`
  font-size: 14px;
  color: var(--text-primary-color);
  margin: 40px 20px 0 20px;
`;
