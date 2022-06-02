import React, { useState } from 'react';
import Comments from './Comments'

function Video({ videoData }) {
  const [upvotes, setUpvotes] = useState(videoData.upvotes);
  const [downvotes, setDownvotes] = useState(videoData.downvotes);

  const handleUpvoteClick = (e) => {
    const newUpvote = upvotes + 1;
    setUpvotes(newUpvote);
  }

  const handleDownvoteClick = (e) => {
    const newDownvote = downvotes + 1;
    setDownvotes(newDownvote);
  }

  return (
    <div>
      <iframe
        width="919"
        height="525"
        src={videoData.embedUrl}
        frameBorder="0"
        allowFullScreen
        title="React Today and Tomorrow"
      />
      <h5>{videoData.views} Views | Uploaded {videoData.createdAt}</h5>
      <button onClick={(e) => handleUpvoteClick(e)}>{upvotes} 👍</button>
      <button onClick={(e) => handleDownvoteClick(e)}>{downvotes} 👎</button>
      <Comments comments={videoData.comments}/>
    </div>
  )
}

export default Video;

  // <iframe
  //       width="919"
  //       height="525"
  //       src="https://www.youtube.com/embed/dQw4w9WgXcQ"
  //       frameBorder="0"
  //       allowFullScreen
  //       title="Thinking in React"
  // />