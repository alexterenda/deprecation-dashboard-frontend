import React, { useState } from 'react'

const NewNote = (props) => {
  const [note, setNote] = useState("");

  return (
    <div>
      <input type="text" value={note} onChange={(e) => setNote(e.currentTarget.value)} placeholder="New note" />
      <button onClick={() => props.handleAddNote(note, props.id)}>Enter</button>
    </div>
  )
}

export default NewNote;
