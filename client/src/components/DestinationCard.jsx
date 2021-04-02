import React from 'react';
import { Link } from 'react-router-dom';

export default function DestinationCard(props) {
  const { id, name, imgURL, content, user, comments } = props;
  return (
    <div className='dest-card'>
      <div className='dest-image-cont'>
      <Link className='dest-link' to={`/destinations/${id}`}>
        <img className='dest-image' src={imgURL} alt={name} />
      </Link>
      </div>
      <div className='dest-text'>
        <div className='dest-name'>{name}</div>
      </div>
    </div>
  )
}
