import React from 'react'
import Note from "./note";
import NewNote from "./new-note";

const Notes = (props) => {
  return (
    <div>
      <div>
        <Note 
          user="Max Sherman"
          content="Hi Regis, could you please update this, thanks!"
        />
      </div>
      <div>
        <NewNote
          handleAddNote={props.handleAddNote}
          id={props.id}
        />
      </div>
    </div>
  )
}

export default Notes;
