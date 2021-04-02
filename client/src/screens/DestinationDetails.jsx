import React from 'react'
import { useState } from 'react';
import { getOneDestination } from '../services/destinations';

export default function DestinationDetails(props) {
  const [destination, setDestination] = useState([]);
  const [comments, setComments] = useState([]);
  // const { destinations, comments } = props;


  // useEffect(() => {
  //   const fetchDestination = async () => {
  //     const destination = await getOneDestination(id);
  //     setDestination(destination);
  //     setLoaded(true);
  //   };
  //   fetchProduct();
  // }, [id]);



  return (
    <div>
      <h3>yoyoyo</h3>
    </div>
  )
}
