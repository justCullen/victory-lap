import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import './DestinationEdit.css';


export default function DestinationEdit(props) {
  const [ formData, setFormData ] = useState({
    name: '',
    content: '',
    img_url: ''
    })

  const { name, content, img_url } = formData;
  const { id } = useParams();
  const { destinations, handleUpdate } = props;

  useEffect(() => {
    const prefillFormData = () => {
      const destinationOne = destinations.find(destination => destination.id === Number(id));
      setFormData({
        name: destinationOne.name,
        content: destinationOne.content,
        img_url: destinationOne.img_url
      })
    }
    if (destinations.length) {
      prefillFormData()
    }
  }, [destinations, id])

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }
  
    return (
      <form className='edit-form' onSubmit={(e) => {
        e.preventDefault();
        handleUpdate(id, formData)
      }}>
        <div className='edit-box'>
        <div className='edit-label'>Edit Destination</div>
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
  