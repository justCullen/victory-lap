import React from 'react'
import DestinationCard from '../components/DestinationCard';

export default function DestinationList(props) {
  const { destinations } = props;
  return (
    <div>
      <h3>DestinationList</h3>
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
