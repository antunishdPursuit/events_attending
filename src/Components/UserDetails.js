import "../Css/UserDetailsCss.css"
import axios from "axios";
import UserCard from "./UserCard";
import Events from "./Events/Events";
import EventSearch from "./Events/EventSearch"
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
const API = process.env.REACT_APP_API_URL;

function UserDetails() {
    const [user, setUser] = useState([]);
    const [newEventToAdd, setNewEventToAdd] = useState({})
    let navigate = useNavigate();
    let { id } = useParams();
 
    useEffect(() => {
      axios
        .get(`${API}/users/${id}`)
        .then((response) => {
          setUser(response.data);
        })
        .catch((c) => {
          console.warn("catch", c);
        });
    }, [id]);

  const handleDelete = () => {
    deleteUser();
  };

  const deleteUser = () => {
    axios
      .delete(`${API}/users/${id}`)
      .then(() => {
        navigate(`/users`);
      },
        (error) => console.error(error)
      )
      .catch((c) => console.warn("catch", c));
  };

  function handleAddEvents(event) {
    setNewEventToAdd(event)
}

  return (
    <div className="d-flex">
      <div className="flex-grow-1">
        <div className="card mb-3">
          <UserCard user={user} id={id} handleDelete={handleDelete} />
          <Events newEventToAdd={newEventToAdd} />
        </div>
      </div>
      <div className="d-flex flex-column justify-content-between">
        <EventSearch user={user} handleAddEvents={handleAddEvents} />
      </div>
    </div>
  );
}

export default UserDetails;

