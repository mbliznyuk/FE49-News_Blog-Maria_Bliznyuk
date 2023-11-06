import { styled } from "styled-components";
import { PostCardModel } from "../../api/types";
import { PostCard } from "../post-card/post-card"; //TODO rename
import { Link } from "react-router-dom";
import { TabId } from "../tabs/tab";

type PostsProps = {
  posts: PostCardModel[];
  postType: TabId;
};

export const PostsList: React.FC<PostsProps> = ({ posts, postType }) => {
  const getPostById = (id: number) => posts.find((item) => item.id === id);
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
  width: 80%;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
const StyledLink = styled(Link)`
  text-decoration: unset;
`;
