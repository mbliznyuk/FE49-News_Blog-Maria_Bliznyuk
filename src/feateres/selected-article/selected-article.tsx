import { styled } from "styled-components";
import { PostCardModel } from "../../api/types";
import { AtricleCardBookmark } from "../post-card/bookmark";
import { PostsList } from "../posts-list/posts-list";
import { ARTICLES } from "../tabs/tab.slice";
import { getLogin } from "../../api/local-storage-login";
import { useAppDispatch, useAppSelector } from "../../hook";
import { showPopUp } from "../pop-up/pop-up.slice";
import { PostImagePreview } from "../pop-up/pop-up";

type Props = {
  article: PostCardModel;
  recommendedArticles: PostCardModel[];
  isLoading: boolean;
};

export const SelectedArticle: React.FC<Props> = ({
  recommendedArticles,

  isLoading,

  article,
}) => {
  const dispatch = useAppDispatch();
  const { isPopUpShown: isPreviewShown } = useAppSelector(
    (state) => state.popUp
  );

  return (
    <>
      <PostImagePreview isDialogOpen={isPreviewShown}></PostImagePreview>
      <ArticleWrapper>
        <ArticleImageWrapper>
          <img src={article.image_url} alt="#"></img>
        </ArticleImageWrapper>
        <ArticleTextWrapper>
          <ArticleText>{article.text}</ArticleText>
        </ArticleTextWrapper>
        <ArticleCardIcons>
          <Icon
            onClick={() => {
              console.log("popUp article");
              dispatch(
                showPopUp({ message: "You have shared this post in Facebook" })
              );
            }}
          >
            <i className="fa-brands fa-facebook-f"></i>
          </Icon>
          <Icon
            onClick={() => {
              dispatch(
                showPopUp({ message: "You have shared this post in Twitter" })
              );
            }}
          >
            <i className="fa-brands fa-twitter"></i>
          </Icon>
          {!!getLogin() && (
            <Icon>
              <AtricleCardBookmark articleCard={article}></AtricleCardBookmark>
            </Icon>
          )}
        </ArticleCardIcons>
        <RecommendedArticles>
          <PostsList
            posts={recommendedArticles}
            postType={ARTICLES}
            isLoading={isLoading}
          ></PostsList>
        </RecommendedArticles>
      </ArticleWrapper>
    </>
  );
};

const RecommendedArticles = styled.div`
  width: 100%;
  border-top: 1px solid var(--border-primary-color);
  padding: 50px 0 15px 0;
`;
const ArticleWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: auto;
  margin-bottom: 20px;
`;

const ArticleTextWrapper = styled.div`
  width: 75%;
  margin: auto;
`;
const ArticleText = styled.p`
  color: var(--text-secondary-color);
  font-size: 16px;
  line-height: 18px;
  margin-bottom: 20px;
`;

const ArticleImageWrapper = styled.div`
  width: 90%;
  height: 400px;
  margin: auto;
  margin-bottom: 25px;
  border-radius: 15px;
  overflow: hidden;
  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
`;

const ArticleCardIcons = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 30px;
`;

const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  width: 60px;
  height: 40px;
  border-radius: 5px;
  margin-right: 5px;
  background-color: var(--icon-color);
  transition: 0.8s;
  cursor: pointer;
  color: var(--button-primary-color);
  &:hover {
    color: #502889;
  }
`;
