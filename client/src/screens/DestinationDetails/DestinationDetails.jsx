import { useEffect, useState } from 'react';
import CommentBox from '../../components/CommentBox/CommentBox';
import { useParams } from "react-router-dom";
import { getOneDestination } from '../../services/destinations';
import { getAllComments, postComment } from '../../services/comments';
import './DestinationDetails.css';

export default function DestinationDetails(props) {
  const [destination, setDestination] = useState([]);
  const [comments, setComments] = useState([]);
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
      <img src={destination.img_url} />
      <CommentBox comments={comments} handleCreateComment={handleCreateComment}/>
    </div>
  )
}
