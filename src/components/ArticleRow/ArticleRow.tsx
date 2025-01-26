import Classes from "./ArticleRow.module.css";

export type TArticle = {
  id: string;
  title: string;
  content: string;
  image: string;
  date: string;
  url: string;
  source: string;
};
export const ArticleRow = ({ article }: { article: TArticle }) => {
  return (
    <div className={Classes.article_row_container}>
      {article.image && (
        <img
          className={Classes.article_image}
          src={article.image}
          alt={article.title}
        />
      )}
      <p className={Classes.primary_text}>{article.title}</p>
      <p dangerouslySetInnerHTML={{ __html: article.content }} />
      <div>
        <p>source: {article.source}</p>
      </div>
    </div>
  );
};
