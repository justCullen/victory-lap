import React from 'react'
import { Link } from 'react-router-dom';
import DestinationCard from '../../components/DestinationCard/DestinationCard';
import './DestinationList.css'

export default function DestinationList(props) {
  const { destinations } = props;
  return (
    <div className='destination-list-container'>
      <Link to='destinations/new'><button className='add-dest-button'>Add a Destination</button></Link>
      <div className='cards-container'>
        {destinations.map((destination, index) => (
          <DestinationCard
            key={index}
            id={destination.id}
            name={destination.name}
            imgURL={destination.img_url}
          />
        ))}
      </div>
    </div>
  )
}
