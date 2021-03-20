import React from 'react'
import Header from "../header/header";
import EachUpdateLink from "./each-update-link";


const Updates = (props) => {
  const createUpdates = props.updates.map((update) => {
    return (
      <EachUpdateLink 
        name={props.name}
        version={props.latestVersion}
        date={update.deprecation_date}
        link={update.endpoint}
        source={update.source}
        text={update.text}
        status={update.status}
        checkStatusColor={props.checkStatusColor}
      />
    );
  });

  return (
    <div>
      <Header 
        title = {`Updates for ${props.name} API`}
      />
      {createUpdates}
    </div>
  )
}

export default Updates;
