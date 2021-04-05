import { Link } from 'react-router-dom';
import './Layout.css';

export default function Layout(props) {
  const { currentUser, handleLogout } = props;
  return (
    <div className='main-layout'>
      <header className='layout-header'>
        <Link to='/'><div className='layout-title'>Victory Lap</div></Link>
        {
          currentUser ?
            <>
              <p className='username'>Welcome, {currentUser.username}</p>
              <button className='layout-button' onClick={handleLogout}>Logout</button>
            </>
            :
            <Link to='/login'><button className='login-register'>Login/Register</button></Link>
        }
      </header>
      {/* <hr /> */}
      {props.children}
    </div>
  )
}
