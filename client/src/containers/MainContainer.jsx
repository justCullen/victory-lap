import { useState, useEffect } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';
import DestinationList from '../screens/DestinationList';
import LandingPage from '../screens/LandingPage';

export default function MainContainer(props) {
  const { currentUser } = props;
  return (
    <Switch>
      {
        currentUser ?
          <DestinationList />
          :
          <LandingPage />
        }
    </Switch>
  )
}
