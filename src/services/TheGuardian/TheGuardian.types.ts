export type TSearchNewsApiOrgRequest = {
  apiKey: string;
  searchParam: string;
  from: string;
  to: string;
};

export type TArticle = {
  source: {
    id: string;
    name: string;
  };
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
};

export type TNewsApiOrgResponse = {
  status: string;
  totalResults: number;
  articles: TArticle[];
};

export type TTopHeadlinesNewsApiOrgRequest = {
  apiKey: string;
  sources?: string;
};

export type TSourcesNewsApiOrgResponse = {
  status: string;
  sources: {
    id: string;
    name: string;
    description: string;
    url: string;
    category: string;
  }[];
};
