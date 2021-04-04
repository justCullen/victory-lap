import { Link } from 'react-router-dom';
import './Layout.css';

export default function Layout(props) {
  const { currentUser, handleLogout } = props;
  return (
    <div>
      <header>
        <Link to='/'><h1>Victory Lap</h1></Link>
        {
          currentUser ?
            <>
              <p>{currentUser.username}</p>
              <button onClick={handleLogout}>Logout</button>
            </>
            :
            <Link to='/login'>Login/Register</Link>
        }
      </header>
      <hr />
      {props.children}
    </div>
  )
}
