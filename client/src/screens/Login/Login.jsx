import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Login(props) {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  })
  const { username, password } = formData;
  const {handleLogin} = props

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  return (
    <form className='login-register-form' onSubmit={(e) => {
      e.preventDefault();
      handleLogin(formData);
    }}>
      <div className='login-box'>
      <div className='register-label'>Login</div>
      <label>
          <div>Username</div>
          <br/>
        <input
          type='text'
          name='username'
          value={username}
          onChange={handleChange}
        />
      </label>
      <br/>
      <label>
          <div>Password</div>
          <br/>
        <input
          type='password'
          name='password'
          value={password}
          onChange={handleChange}
        />
      </label>
      <br/>
        <button className='submit-btn'>Submit</button>
        <br/>
      <div className='sign-up-cta'>Not signed up yet? <Link to='/register'>Register</Link></div>
        </div>
    </form>
  )
}
