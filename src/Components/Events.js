import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Event from "./Event";
// import EventForm from "./EventForm";

const API = process.env.REACT_APP_API_URL;

function Events() {
  let { id } = useParams();
  const [events, setEvents] = useState([]);

  useEffect(() => {
    axios.get(`${API}/users/${id}/events`).then((response) => {
      setEvents(response.data);
    });
  }, [id]);

  const handleDelete = (id) => {
    axios
      .delete(`${API}/users/${id}/events/${id}`)
      .then(
        (response) => {
          const copyEventArray = [...events];
          const indexDeletedEvent = copyEventArray.findIndex((event) => {
            return event.id === id;
          });
          copyEventArray.splice(indexDeletedEvent, 1);
          setEvents(copyEventArray);
        },
        (error) => console.error(error)
      )
      .catch((c) => console.warn("catch", c));
  };

  const handleEdit = (updatedEvent) => {
    axios
      .put(`${API}/users/${id}/events/${updatedEvent.id}`, updatedEvent)
      .then((response) => {
        const copyEventArray = [...events];
        const indexUpdatedEvent = copyEventArray.findIndex((user) => {
          return user.id === updatedEvent.id;
        });
        copyEventArray[indexUpdatedEvent] = response.data;
        setEvents(copyEventArray);
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