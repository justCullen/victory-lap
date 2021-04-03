import { useState } from 'react'
import { useParams } from 'react-router-dom';
import './CommentBox.css';

export default function CommentBox(props) {
  const [ formData, setFormData ] = useState({
    name: '',
    content: ''
  })
  const { name, content, img_url } = formData;
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
    <div>
      <form onSubmit={(e) => {
        e.preventDefault();
        handleCreateComment({ ...formData, destination_id: id })
      }}>
          <input
            type='text'
            name='content'
            value={content}
            onChange={handleChange}
          />
        <button>Add Comment</button>
        </form>
      {comments.map((comment, index) => (
        <div key={index}>
          <div>{comment.user.username}</div>
          <div>{comment.content}</div>
        </div>
      ))}
    </div>
  )
}
