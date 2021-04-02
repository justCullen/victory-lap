import React from 'react'

export default function CommentBox(props) {
  const { comments } = props;

  return (
    <div>
      {comments.map((comment) => (
        <div>
          <div>{comment.user.username}</div>
          <div>{comment.content}</div>
        </div>
        ))}
    </div>
  )
}
