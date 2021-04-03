import { useEffect, useState } from 'react';
import CommentBox from '../../components/CommentBox/CommentBox';
import { useParams, Link, useHistory } from "react-router-dom";
import { getOneDestination } from '../../services/destinations';
import { getAllComments, postComment } from '../../services/comments';
import './DestinationDetails.css';

export default function DestinationDetails(props) {
  const [destination, setDestination] = useState([]);
  const [comments, setComments] = useState([]);
  // const { handleCreateComment } = props;
  const { id } = useParams();
  const history = useHistory();
  // const { destinations, comments } = props;

  useEffect(() => {
    const fetchDestination = async () => {
      const destination = await getOneDestination(id);
      setDestination(destination);
      // setLoaded(true);
    };
    fetchDestination();
  }, [id]);

  useEffect(() => {
    const fetchComments = async () => {
      const comments = await getAllComments(id);
      setComments(comments);
      // setLoaded(true);
    };
    fetchComments();
  }, [id]);

  const handleCreateComment = async (commentData, id) => {
    const newComment = await postComment(commentData, id);
    setComments(prevState => [...prevState, newComment])
    history.push(`/destinations/${id}`);
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
