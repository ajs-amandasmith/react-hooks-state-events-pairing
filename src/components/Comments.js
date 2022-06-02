import React, { useState } from 'react';
import Comment from './Comment';
import Search from './Search';

function Comments({ comments }) {
  const [showComments, setShowComments] = useState(true);
  const [commentList, setComments] = useState(comments);

  const removeComment = (id) => {
    const newComments = commentList.filter(comment => comment.id !== id)
    setComments(newComments);
  }

  const displayComments = showComments ? <div>{commentList.map(comment => (<Comment comment={comment} removeComment={removeComment}/>))}</div> : null;

  const handleCommentsClick = (e) => {
    console.log(e);
    setShowComments(!showComments);
  }

  const numberOfComments = comments.length;

  return (
    <div>
      <button onClick={(e) => handleCommentsClick(e)}>{showComments ? "Hide Comments" : "Show Comments"}</button>
      <Search />
      <hr></hr>
      <div>
        <h2>{showComments ? `${numberOfComments} Comments` : null}</h2>
      </div>
      <div>
       {displayComments}
      </div>
    </div>
  )
}

export default Comments;
