import { styled } from "styled-components";

type UserNameLabelProps = {
  username: string;
};

function getInitials(username: string): string {
  if (username.includes(" ")) {
    return username.split(" ")[0].charAt(0) + username.split(" ")[1].charAt(0);
  } else {
    return username.charAt(0);
  }
}

export const UserNameLabel: React.FC<UserNameLabelProps> = (
  props: UserNameLabelProps
) => {
  const shortName = getInitials(props.username);

  return (
    <UsernameLabelWrapper>
      <UsernameLabel>{shortName}</UsernameLabel>
      <UserName>{props.username}</UserName>
    </UsernameLabelWrapper>
  );
};

const UsernameLabelWrapper = styled.div`
  width: 155px;
  height: 100%;
  padding: 0 10px;
  font-weight: 600;
  border-left: 1px solid var(--border-primary-color);
  color: var(--text-primary-color);
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  font-size: 14px;
  cursor: pointer;
`;

const UsernameLabel = styled.div`
  width: 25px;
  height: 25px;
  padding: 5px;
  /* margin: 7px; */
  font-weight: 600;
  border-radius: 2px;
  background-image: linear-gradient(45deg, #4d0ac7, #912ef2);
  color: white;
  justify-content: center;
  display: flex;
  align-items: center;
`;

const UserName = styled.div`
  max-width: 100px;
`;
