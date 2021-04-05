import React from 'react';
import { Link } from 'react-router-dom';
import './DestinationCard.css';

export default function DestinationCard(props) {
  const { id, name, imgURL } = props;
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
