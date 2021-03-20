import React, { Fragment, useState } from 'react'
import Header from "../header/header";
import EachUpdateLink from "./each-update-link";
import UpdateEmail from "./update-email";


const Updates = (props) => {
  const [show, setShow] = useState(false);
  const [showId, setShowId] = useState([]);


  const showUpdateEmail = (id) => {
    setShow(true);
    if (showId.includes(id)) {
      const new_arr = [...showId];
      const index = new_arr.findIndex(e => e === id);
      new_arr.splice(index, 1);
      setShowId(new_arr);
    } else {
      const new_arr = [...showId];
      new_arr.push(id);
      setShowId(new_arr);
    }
  }

  const createUpdates = props.updates.map((update) => {
    return (
      <Fragment>
        <EachUpdateLink 
          name={props.name}
          version={props.latestVersion}
          status={update.status}
          checkStatusColor={props.checkStatusColor}
          updateId={update.id}
          showUpdateEmail={showUpdateEmail}
        />
        {(show && showId.includes(update.id)) ? <UpdateEmail 
          text={update.text}
        /> : null }
      </Fragment>
    );
  });

  return (
    <div>
      <div>
        <Header 
          title = {`Updates for ${props.name} API`}
        />
      </div>
      {createUpdates}
    </div>
  )
}

export default Updates;
