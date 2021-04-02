import React from 'react'
import { Link } from 'react-router-dom';
import DestinationCard from '../components/DestinationCard/DestinationCard';

export default function DestinationList(props) {
  const { destinations } = props;
  return (
    <div>
      <h3>DestinationList</h3>
      <Link to='destinations/new'><button>Add a Destination</button></Link>
      {destinations.map(destination => (
        <DestinationCard
          id={destination.id}
          name={destination.name}
          imgURL={destination.img_url}
          // content={destination.content}
          // user={destination.user.username}
          // comments={destination.comments}
        />
        ))}
    </div>
  )
}
