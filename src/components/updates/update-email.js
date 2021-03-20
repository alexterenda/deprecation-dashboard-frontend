import React, {useState} from 'react'

const UpdateEmail = (props) => {
  const [formData, setFormData] = useState({
    date: "",
    endpoint: "",
    source: "",
    id: ""
  });

  const handleFormData = (el, type, id) => {
    const newFormData = {...formData};
    newFormData[type] = el;
    newFormData.id = id;
    setFormData(newFormData);
  }

  return (
    <div>
      <div>
        <input value={formData.date} type="text" placeholder="Date" onChange={(e) => handleFormData(e.currentTarget.value, "date", props.id)}/>
        <input value={formData.endpoint} type="text" placeholder="Endpoint" onChange={(e) => handleFormData(e.currentTarget.value, "endpoint", props.id)} />
        <input value={formData.source} type="text" placeholder="Source" onChange={(e) => handleFormData(e.currentTarget.value, "source", props.id)} />
        <button onClick={() => props.handleFormDataSubmit(formData)}>Update</button>
      </div>
      <div>
        <p>{props.text}</p>
      </div>
    </div>
  )
}

export default UpdateEmail;
