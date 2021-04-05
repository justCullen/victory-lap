import { useState } from 'react'
import { useParams } from 'react-router-dom';
import './CommentBox.css';

export default function CommentBox(props) {
  const [ formData, setFormData ] = useState({
    name: '',
    content: ''
  })
  const { content } = formData;
  const { comments, handleCreateComment } = props;
  const { id } = useParams();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  return (
    <div className='comment-box'>
      <form className='comment-form 'onSubmit={(e) => {
        e.preventDefault();
        handleCreateComment({ ...formData, destination_id: id });
      }}>
          <input
            type='text'
            name='content'
            value={content}
            onChange={handleChange}
          />
        <button className='comment-btn'>Comment</button>
        </form>
      <div className='comment-comments'>
      {comments.map((comment, index) => (
        <div className='com-bundle' key={index}>
          <div className='com-name'>{comment.user.username}</div>
          <div className='com-content'>{comment.content}</div>
        </div>
      ))}
        </div>
    </div>
  )
}
