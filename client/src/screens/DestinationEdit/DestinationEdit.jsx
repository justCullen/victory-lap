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
      <form onSubmit={(e) => {
        e.preventDefault();
        handleUpdate(id, formData)
      }}>
        <h3>Edit Destination</h3>
        <label>
          Location:
          <input
            type='text'
            name='name'
            value={name}
            onChange={handleChange}
          />
        </label>
        <br/>
        <label>
          Info:
          <input
            type='text'
            name='content'
            value={content}
            onChange={handleChange}
          />
        </label>
        <br/>
        <label>
          Image URL:
          <input
            type='text'
            name='img_url'
            value={img_url}
            onChange={handleChange}
          />
        </label>
        <br/>
      <button>Submit</button>
      </form>
    )
  }
  