import React, { useState, useEffect, Fragment } from "react";
import Sidebar from "../components/sidebar/sidebar";
import ApiList from "../components/api-list/api-list";
import TopNav from "../components/top-nav/top-nav";
import CollectionList from "../components/collection-list/collection-list";
import Panel from "../components/panel/panel";
import initStateData from "./initial-state-data";
import Loader from "../components/loader/loader";
import Divider from "../components/divider/divider";
import axios from "axios";

const Dashboard = () => {
  const [data, setData] = useState(initStateData);
  const [showPanel, setShowPanel] = useState(1);
  const [loader, setLoader] = useState(false);
  const [newUpdate, setNewUpdate] = useState({
    title: "",
    text: "",
    apiId: ""
  });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    setLoader(true);
    fetch("http://localhost:3001/")
      .then((res) => res.json())
      .then((val) => {
        console.log(val);
        const newVersions = val.apis.map((version) => {
          return {
            id: version.id,
            name: version.name,
            status: version.status,
            tray_version: version.tray_version,
            latest_version: version.latest_version,
            developer: version.developer,
            description: version.description,
            api_acc_manager: version.api_acc_manager,
            logo_url: version.logo_url,
            last_update: version.created_at,
          };
        });

        const newUpdates = val.updates.map((update) => {
          return {
            id: update.id,
            api_id: update.api_id,
            status: update.status,
            deprecation_date: update.change_date,
            source: update.source,
            endpoint: update.endpoint,
            text: update.text,
            title: update.title
          };
        });

        const newNotes = val.notes.map((note) => {
          return {
            id: note.id,
            update_id: note.update_id,
            user_id: note.user_id,
            text: note.text,
            created_at: note.created_at,
          };
        });

        const newUsers = val.users.map((user) => {
          return {
            id: user.id,
            username: user.username
          }
        });

        const finalVersion = val.apis.map((fin) => {
          const nversion = newVersions.find((e) => e.id === fin.id);
          const nupdate = newUpdates.filter((e) => e.api_id === fin.id);
          return {
            apis: nversion,
            updates: nupdate,
            notes: newNotes,
            users: newUsers
          };
        });
        setData({ versions: finalVersion });
        setLoader(false);
      })
      .catch((err) => console.log(err));
  };
  const handleShowPanel = (newId) => {
    setShowPanel(newId);
    setNewUpdate({
      title: "",
      text: "",
      apiId: ""
    });
  };

  // console.log(data);

  const handleStateUpdate = (el, type, id) => {
    const new_obj = {...newUpdate};
    new_obj[type] = el;
    new_obj.apiId = id;
    setNewUpdate(new_obj);
  }

  const checkStatusColor = (status) => {
    let change;
    switch (status) {
      case "urgent":
        change = "status-red";
        break;
      case "pending":
        change = "status-orange";
        break;
      case "clear":
        change = "status-green";
        break;
      default:
        change = "status-orange";
        break;
    }
    return change;
  };

  const handleFormDataSubmit = (formData) => {
    setLoader(true);
    const rbObject = {
      status: formData.status,
      change_date: formData.date,
      endpoint: formData.endpoint,
      source: formData.source,
    };

    const json_rb_object = JSON.stringify(rbObject);
    console.log(formData)

    axios.patch(`http://localhost:3001/updates/${formData.id}`, json_rb_object, {
        headers: { "Content-Type": "application/json" },
      })
      .then((response) => {
        console.log(response);
        setLoader(false);
        fetchData();
      })
      .catch((error) => console.log(error));
  };

  const handleAddNote = (noteText, id) => {
    setLoader(true);
    const noteTextObj = {
      text: noteText,
      update_id: id,
      user_id: 1
    }

    const json_note_text_obj = JSON.stringify(noteTextObj);

    // need to send a post request for the data
    axios.post(`http://localhost:3001/notes`, json_note_text_obj, {
      headers: { "Content-Type": "application/json" },
    })
    .then((response) => {
      console.log(response);
      setLoader(false);
      fetchData();
    })
    .catch((error) => console.log(error));
  };

  const handleAddNewUpdate = (newUpdate) => {
    setLoader(true);
    const new_obj = {
      title: newUpdate.title,
      api_id: newUpdate.apiId,
      text: newUpdate.text
    }

    const json_new_obj = JSON.stringify(new_obj);
    axios.post(`http://localhost:3001/updates`, json_new_obj, {
      headers: { "Content-Type": "application/json" },
    })
    .then((response) => {
      console.log(response);
      setLoader(false);
      setNewUpdate({
        title: "",
        text: "",
        apiId: ""
      });
      fetchData();
    })
    .catch((error) => console.log(error));
  }

  return (
    <div className="dashboard">
      <div className="dashboard-sidebar-wrapper">
        <Sidebar />
      </div>
      <div className="dashboard-contents-container">
        <TopNav />

        <Divider />

        <CollectionList />

        <Divider />

        {loader ? (
          <Loader />
        ) : (
          <Fragment>
            <ApiList
              data={data}
              changeColor={showPanel}
              checkStatusColor={checkStatusColor}
              showPanel={handleShowPanel}
            />
          </Fragment>
        )}
      </div>
      <div className="dashboard-panel-wrapper">
        {loader ? (
          <Loader />
        ) : (
          <Panel
            data={data}
            panelId={showPanel}
            checkStatusColor={checkStatusColor}
            handleFormDataSubmit={handleFormDataSubmit}
            handleAddNote={handleAddNote}
            handleAddNewUpdate={handleAddNewUpdate}
            newUpdate={newUpdate}
            handleStateUpdate={handleStateUpdate}
          />
        )}
      </div>
    </div>
  );
};

export default Dashboard;
