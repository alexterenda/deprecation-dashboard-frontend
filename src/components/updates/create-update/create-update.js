import React, { useState } from 'react'
import Header from "../../header/header";

const CreateUpdate = () => {
  const [newUpdate, setNewUpdate] = useState("");

  const test = (el) => {
    console.log(el);
  }

  return (
    <div>
      <Header title="Create a new update" />
      <div>
        <input type="text" />
        <textarea value={newUpdate} onChange={(e) => setNewUpdate(e.target.value)} />
        <button onClick ={() => test(newUpdate)}>Create</button>
      </div>
    </div>
  )
}

export default CreateUpdate;
