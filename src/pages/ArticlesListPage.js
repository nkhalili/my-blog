import React from 'react';
import articleContent from './article-content';
import ArticleList from '../components/ArticlesList';

const ArticlesListPage = () => (
  <>
    <h1>Articles</h1>
    <ArticleList articles={articleContent} />
  </>
);

export default ArticlesListPage;
