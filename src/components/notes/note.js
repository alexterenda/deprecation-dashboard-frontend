import React from 'react'

const Note = (props) => {
  const formatDate = (dateIs) => {
    const date = new Date(dateIs);

    const options = {
      weekday: "long", // or: "short", "numeric"
      month: "long", //or: "short", "numeric"
      day: "numeric",
      year: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric"
    };

    return new Intl.DateTimeFormat("en-US", options).format(date);
  }
  return (
    <div>
      <p>{props.user}</p>
      <p>{props.content}</p>
      <p>{formatDate(props.created)}</p>
    </div>
  )
}

export default Note;
