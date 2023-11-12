import { styled } from "styled-components";
import { PostCardModel } from "../../api/types";
import { PostCard } from "../post-card/post-card"; //TODO rename
import { Link } from "react-router-dom";
import { TabId } from "../tabs/tab";
import CircularColor from "../../ui/progreass/progress";

type PostsProps = {
  posts: PostCardModel[];
  postType: TabId;
  isLoading: boolean;
};

export const PostsList: React.FC<PostsProps> = ({
  posts,
  postType,
  isLoading,
}) => {
  const getPostById = (id: number) => posts.find((item) => item.id === id);
  if (isLoading) {
    return CircularColor();
  }
  return (
    <>
      <PostsWrapper>
        {posts.map((element, id) => (
          <StyledLink key={id} to={`/posts/${element.id}`}>
            <PostCard
              key={id}
              postCard={getPostById(element.id)!}
              postType={postType}
            ></PostCard>
          </StyledLink>
        ))}
      </PostsWrapper>
    </>
  );
};

const PostsWrapper = styled.div`
  width: 100%;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
const StyledLink = styled(Link)`
  text-decoration: unset;
`;
