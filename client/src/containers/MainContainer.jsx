import { useState, useEffect } from 'react';
import { Switch, Route, useHistory, useParams } from 'react-router-dom';
import DestinationList from '../screens/DestinationList';
import LandingPage from '../screens/LandingPage';
import DestinationCreate from '../screens/DestinationCreate';
import DestinationDetails from '../screens/DestinationDetails/DestinationDetails';
import { destroyDestination, getAllDestinations, postDestination, putDestination } from '../services/destinations';

export default function MainContainer(props) {
  const [destinations, setDestinations] = useState([]);
  const [comments, setComments] = useState([]);
  const history = useHistory();
  const { id } = useParams();
  const { currentUser } = props;

  useEffect(() => {
    const fetchDestinations = async () => {
      const destinationData = await getAllDestinations();
      setDestinations(destinationData);
    }
    fetchDestinations();
  }, [])

  const handleCreate = async (destinationData) => {
    const newDestination = await postDestination(destinationData);
    setDestinations(prevState => [...prevState, newDestination])
    history.push('/destinations');
  }

  const handleUpdate = async (id, destinationData) => {
    const updatedDestination = await putDestination(id, destinationData);
    setDestinations(prevState => prevState.map(destination => {
      return destination.id === Number(id) ? updatedDestination : destination
    }))
    history.push('/destinations');
  }

  const handleDelete = async (id) => {
    await destroyDestination(id);
    setDestinations(prevState => prevState.filter(destination => destination.id !== id))
  }

  return (
    <Switch>
      <Route path='/destinations/new'>
        <DestinationCreate
          handleCreate={handleCreate}
        />
      </Route>
      <Route path='/destinations/:id'>
        <DestinationDetails />
      </Route>
      <Route path='/'>
      {
        currentUser ?
        <DestinationList destinations={destinations} />
        :
        <LandingPage />
      }
      </Route>
    </Switch>
  )
}
