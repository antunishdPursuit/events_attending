import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Event from "./Event";

const API = process.env.REACT_APP_API_URL;

function Events({newEventToAdd}) {
  let { id } = useParams();
  const [events, setEvents] = useState([]);

  useEffect(() => {
    axios
      .get(`${API}/users/${id}/events`)
      .then((response) => {
        setEvents(response.data);
      });
  }, [id, newEventToAdd]);

  const handleDelete = (id) => {
    axios
      .delete(`${API}/users/${id}/events/${id}`)
      .then(
        (response) => {
          setEvents((prevEvents) =>
          prevEvents.filter((event) => event.id !== id)
        );
        },
        (error) => console.error(error)
      )
      .catch((c) => console.warn("catch", c));
  };

  const handleEdit = (updatedEvent) => {
    axios
      .put(`${API}/users/${id}/events/${updatedEvent.id}`, updatedEvent)
      .then((response) => {
        setEvents((prevEvents) =>
          prevEvents.map((event) =>
            event.id === updatedEvent.id ? response.data : event
          )
        );
      })
      .catch((c) => console.warn("catch", c));
  };

  return (
    <section className="Events">
        <h2>Events</h2>
        {events.map((event) => (
            <Event
            key={event.id}
            event={event}
            handleSubmit={handleEdit}
            handleDelete={handleDelete}
            />
        ))}
    </section>
  );
}

export default Events;