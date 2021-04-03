import { useEffect, useState } from 'react';
import CommentBox from '../../components/CommentBox/CommentBox';
import { useParams, Link } from "react-router-dom";
import { getOneDestination } from '../../services/destinations';
import { getAllComments, postComment } from '../../services/comments';
import './DestinationDetails.css';

export default function DestinationDetails(props) {
  const [destination, setDestination] = useState([]);
  const [comments, setComments] = useState([]);
  const { handleDelete, currentUser } = props;
  const { id } = useParams();

  useEffect(() => {
    const fetchDestination = async () => {
      const destination = await getOneDestination(id);
      setDestination(destination);
    };
    fetchDestination();
  }, [id]);

  useEffect(() => {
    const fetchComments = async () => {
      const comments = await getAllComments(id);
      setComments(comments);
    };
    fetchComments();
  }, [id]);

  const handleCreateComment = async (id, commentData) => {
    const newComment = await postComment(id, commentData);
    setComments(prevState => [...prevState, newComment])
  }

  return (
    <div className='destination-detail'>
      <div>{destination.name}</div>
      <div>{destination.content}</div>
      <div>{destination.user && destination.user.username}</div>
      <img src={destination.img_url} alt={destination.name} />
      <br/>
      {
              currentUser?.id === destination.user_id &&
              <>
                <Link to={`/destinations/${id}/edit`}><button>Edit</button></Link>
                <button onClick={()=>handleDelete(destination.id)}>Delete</button>
              </>
      }
      <hr/>
      <CommentBox comments={comments} handleCreateComment={handleCreateComment}/>
    </div>
  )
}
