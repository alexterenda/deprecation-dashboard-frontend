import React, {useState} from 'react'

const UpdateEmail = (props) => {
  const [formData, setFormData] = useState({
    date: "",
    endpoint: "",
    source: "",
    status: "clear",
    id: ""
  });

  const handleFormData = (el, type, id) => {
    console.log(el);
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
        <label for="status">Status:</label>
        <select name="status" id="status" onChange={(e) => handleFormData(e.currentTarget.value, "status", props.id)}>
          <option value="clear">Clear</option>
          <option value="pending">Pending</option>
          <option value="urgent">Urgent</option>
        </select>
        <button onClick={() => props.handleFormDataSubmit(formData)}>Update</button>
      </div>
      <div>
        <p>{props.text}</p>
      </div>
    </div>
  )
}

export default UpdateEmail;
