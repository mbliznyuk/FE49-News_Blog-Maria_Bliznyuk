import { PostCardModel } from "../../api/types";
import { useAppSelector } from "../../hook";
import CircularColor from "../../ui/progreass/progress";
import { FilterMenu } from "../filtеr-menu/filter-menu";
import { PostsList } from "../posts-list/posts-list";
import { Tabs, mockedTabsModels } from "../tabs/tab";
import { ARTICLES, NEWS } from "../tabs/tab.slice";

type PostsProps = {
  articles: PostCardModel[];
  news: PostCardModel[]; // TODO DELETE NEWSCARDMODEL
  isLoading: boolean;
};

export const PostsPageBody: React.FC<PostsProps> = ({
  articles,
  news,
  isLoading,
}) => {
  const { activeTab } = useAppSelector((state) => state.tabs);

  const getCurrentPosts = (): PostCardModel[] => {
    switch (activeTab) {
      case ARTICLES:
        return articles;
      case NEWS:
        return news;
      default:
        return articles;
    }
  };

  return (
    <>
      <Tabs tabs={mockedTabsModels}></Tabs>
      <FilterMenu></FilterMenu>
      <PostsList
        posts={getCurrentPosts()}
        postType={activeTab}
        isLoading={isLoading}
      ></PostsList>
    </>
  );
};
