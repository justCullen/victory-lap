import { useState } from 'react'
import './DestinationCreate.css';

export default function DestinationCreate(props) {
  const [ formData, setFormData ] = useState({
    name: '',
    content: '',
    img_url: ''
    })
    
    const { name, content, img_url } = formData;
    const { handleCreate } = props;
    
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData(prevState => ({
        ...prevState,
        [name]: value
      }))
    }
  
    return (
      <form className='create-form' onSubmit={(e) => {
        e.preventDefault();
        handleCreate(formData)
      }}>
        <div className='create-box'>
        <div className='create-label'>Create Destination</div>
        <label>
            <div>Location</div>
            <br/>
          <input
            type='text'
            name='name'
            value={name}
            onChange={handleChange}
          />
        </label>
        <br/>
        <label>
            <div>Info</div>
            <br/>
          <input
            type='text'
            name='content'
            value={content}
            onChange={handleChange}
          />
        </label>
        <br/>
        <label>
            <div>Image URL</div>
            <br/>
          <input
            type='text'
            name='img_url'
            value={img_url}
            onChange={handleChange}
          />
        </label>
        <br/>
        <button className='submit-btn'>Submit</button>
        </div>
      </form>
    )
  }
  