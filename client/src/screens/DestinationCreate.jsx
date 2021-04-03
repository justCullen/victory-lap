import {useState} from 'react'

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
      <form onSubmit={(e) => {
        e.preventDefault();
        handleCreate(formData)
      }}>
        <h3>Create Destination</h3>
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
  