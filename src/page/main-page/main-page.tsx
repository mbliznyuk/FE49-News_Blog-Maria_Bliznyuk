import { BackLink } from "../../feateres/back-link/back-link";
import { Header } from "../../feateres/header/header";
import { MainTemplate } from "../../ui/templates/main-template";
import { Title } from "../../ui/title/title";

export const MainPage: React.FC = () => {
  return (
    <MainTemplate
      header={<Header></Header>}
      backLink={<BackLink />}
      title={<Title>Blog</Title>}
      body={<div />}
    />
  );
};
