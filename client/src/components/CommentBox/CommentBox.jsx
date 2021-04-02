import React from 'react'
import './CommentBox.css';

export default function CommentBox(props) {
  const { comments } = props;

  return (
    <div>
      <button>Add Comment</button>
      {comments.map((comment) => (
        <div>
          <div>{comment.user.username}</div>
          <div>{comment.content}</div>
        </div>
      ))}
    </div>
  )
}
