import React, { useState } from "react";
import Header from "../../header/header";

const CreateUpdate = (props) => {
  return (
    <div>
      <h3 className="panel-api-contents-account-header">New Update</h3>
      <div className="create-update-form">
        <input
          placeholder="Update title"
          type="text"
          value={props.newUpdate.title}
          onChange={(e) =>
            props.handleStateUpdate(e.currentTarget.value, "title", props.apiId)
          }
        />
        <textarea
          placeholder="Email/Source Text"
          value={props.newUpdate.text}
          onChange={(e) =>
            props.handleStateUpdate(e.currentTarget.value, "text", props.apiId)
          }
        />
        <button onClick={() => props.handleAddNewUpdate(props.newUpdate)}>
          Create
        </button>
      </div>
    </div>
  );
};

export default CreateUpdate;
