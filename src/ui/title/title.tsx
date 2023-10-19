import styled from 'styled-components';

type Props = {
  children: string;
};

export const Title: React.FC<Props> = ({ children }) => (
  <TitleWrapper>{children}</TitleWrapper>
);

const TitleWrapper = styled.h1`
  line-height: 36px;
  font-size: 30px;
  margin: 30px 20px;
  color: var(--text-primary-color);
`;
