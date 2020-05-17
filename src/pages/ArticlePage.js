import React, { useState, useEffect } from 'react';
import articleContent from './article-content';
import ArticleList from '../components/ArticlesList';
import NotFoundPage from './NotFound';
import CommentsList from '../components/CommentsList';
import UpvotesSection from '../components/UpvotesSection';
import AddCommentForm from '../components/AddCommentForm';

const ArticlePage = ({ match }) => {
  const name = match.params.name;
  const article = articleContent.find((article) => article.name === name);

  const [articleInfo, setArticleInfo] = useState({ upvotes: 0, comments: [] });

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(`/api/articles/${name}`);
      const body = await result.json();

      setArticleInfo(body);
    };

    fetchData();
  }, [name, articleInfo.upvotes]);

  if (!article) return <NotFoundPage />;

  const otherArticles = articleContent.filter(
    (article) => article.name !== name
  );

  return (
    <>
      <h1>{article.title}</h1>
      <UpvotesSection
        articleName={name}
        upvotes={articleInfo.upvotes}
        setArticleInfo={setArticleInfo}
      />
      {article.content.map((paragraph, key) => (
        <p key={key}>{paragraph}</p>
      ))}

      <AddCommentForm articleName={name} setArticleInfo={setArticleInfo} />
      
      <CommentsList comments={articleInfo.comments} />

      <h3>Other Articles: </h3>
      <ArticleList articles={otherArticles} />
    </>
  );
};

export default ArticlePage;
