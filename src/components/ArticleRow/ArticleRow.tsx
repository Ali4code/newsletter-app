import Classes from "./ArticleRow.module.css";

export type TArticle = {
  id: string;
  title: string;
  description: string;
  content: string;
  author: string;
  image: string;
};
export const ArticleRow = ({ article }: { article: TArticle }) => {
  return (
    <div className={Classes.article_row_container}>
      <p className={Classes.primary_text}>{article.title}</p>
      <p>{article.description}</p>
      <div>
        <p>{article.content}</p>
        <p>Author: {article.author}</p>
      </div>
    </div>
  );
};
