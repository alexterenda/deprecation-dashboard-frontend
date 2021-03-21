import React from 'react'
import Note from "./note";
import NewNote from "./new-note";
import Header from "../header/header";

const Notes = (props) => {
  const currentNotes = props.notes.filter(e => e.update_id === props.id);
  const theNotes = currentNotes.map((note) => {
    return (
      <Note 
        user="Max Sherman"
        content={note.text}
        created={note.created_at}
      />
    );
  });

  return (
    <div>
      <Header title="Notes" />
      <div>
        {theNotes}
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
