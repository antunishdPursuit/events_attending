import { Link } from "react-router-dom";
import { useState } from "react";

import axios from "axios";

const API = process.env.REACT_APP_API_URL;

function EventSearchDetails( {event, user, handleAddEvents}) {
  const [addedEvents, setAddedEvents] = useState([]);
  const isEventAdded = addedEvents.some((addedEvent) => addedEvent.artist === event.name);

  const handleAdd = () => {
    const newEvent = {
      artist: event.name,
      venue: event._embedded.venues[0].name,
      city: event._embedded.venues[0].state.stateCode,
      artist_picture: event.images[7].url,
      price: typeof event.priceRanges === "undefined" ? 0 :event.priceRanges[0].min,
      user_id: user.id,
    }

    axios
      .post(`${API}/users/${user.id}/events`, newEvent)
      .then(
        (response) => {
          setAddedEvents([...addedEvents, newEvent]);
          handleAddEvents(newEvent)
          console.log("success");
        },
        (error) => console.error(error)
      )
      .catch((c) => console.warn("catch", c));
    };

  return (
    <div className="card-body">
      <div className="row align-items-center">
        <div className="col-md-3">
          <img src={event.images[7].url} alt={`Event ${event.id}`} className="event-search-box" />
        </div>
        <div className="col-md-7">
          <h4 className="card-title fs-5">{event.name}</h4>
          <h5 className="card-subtitle fs-6">
            In {event._embedded.venues[0].city.name},{event._embedded.venues[0].state.stateCode} at {event._embedded.venues[0].name}
          </h5>
          <h5 className="fs-6">Event Date: {event.dates.start.localDate}</h5>
        </div>
        <div className="col-md-2">
          {typeof event.priceRanges === "undefined" ? (
            <div className="d-flex flex-column align-items-center">
              <Link to={event.url} className="fs-6 mb-2">Check Price</Link>
              {!isEventAdded ? (
                <button className="btn btn-success btn-sm" onClick={handleAdd}>Add</button>
              ) : (
                <p className="fs-6">Event added!</p>
              )}
            </div>
          ) : (
            <div className="d-flex flex-column align-items-center">
              <Link to={event.url} className="fs-6 mb-2">Tickets:<br/> ${event.priceRanges[0].min} - ${event.priceRanges[0].max}</Link>
              {!isEventAdded ? (
                <button className="btn btn-success btn-sm" onClick={handleAdd}>Add</button>
              ) : (
                <p className="fs-6">Event added!</p>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default EventSearchDetails;