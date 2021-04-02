import { useEffect, useState } from 'react';
import CommentBox from '../components/CommentBox';
import { useParams, Link, useHistory } from "react-router-dom";
import { getOneDestination } from '../services/destinations';
import { getAllComments } from '../services/comments';

export default function DestinationDetails(props) {
  const [destination, setDestination] = useState([]);
  const [comments, setComments] = useState([]);
  const { id } = useParams();
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


  return (
    <div>
      <div>{destination.name}</div>
      <div>{destination.content}</div>
      <div>{destination.user.username}</div>
      <img src={destination.img_url} />
      <CommentBox comments={comments} />
    </div>
  )
}
