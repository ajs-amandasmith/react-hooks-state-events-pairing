import React, { useState } from 'react';

function Comment({ comment, removeComment }) {
  const [upvotes, setUpvotes] = useState(0);
  const [downvotes, setDownvotes] = useState(0);

  const handleCommentUpvote = (e) => {
    const newUpvotes = upvotes + 1;
    setUpvotes(newUpvotes)
  }

  const handleCommentDownvote = (e) => {
    const newDownvotes = downvotes + 1;
    setDownvotes(newDownvotes);
  }

  return (
    <div>
      <h3>{comment.user}</h3>
      <p>{comment.comment}</p>
      <button onClick={(e) => handleCommentUpvote(e)}>{upvotes} 👍</button>
      <button onClick={(e) => handleCommentDownvote(e)}>{downvotes} 👎</button>
      <br></br>
      <button onClick={(e) => removeComment(comment.id)}>Remove Comment</button>
    </div>
  )
}

export default Comment;
