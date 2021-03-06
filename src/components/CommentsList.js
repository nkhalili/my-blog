import React from 'react';

const commentsList = ({ comments }) => {
  if (comments === undefined) return <div>empty</div>;

  return (
    <>
      <h3>Comments</h3>
      {comments.map((comment, key) => (
        <div className="comment" key={key}>
          <h4>{comment.username}</h4>
          <p>{comment.text}</p>
        </div>
      ))}
    </>
  );
};

export default commentsList;
