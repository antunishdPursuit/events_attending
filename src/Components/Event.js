import EventForm from "./EventForm";
import EventCard from "./EventCard"
import { useState } from "react";
function Event({ event, handleDelete, handleSubmit, handleAdd }) {
    const [viewEditForm, toggleEditForm] = useState(false);

    const toggleView = () => {
        toggleEditForm(!viewEditForm);
    };
   
    return (
        <div className="Event">
            {
                viewEditForm ? (
                    <EventForm
                    eventDetails={event}
                    toggleView={toggleView}
                    handleSubmit={handleSubmit}
                />
                ) : (
                    <EventCard event={event} handleDelete={handleDelete} handleAdd={handleAdd} toggleView={toggleView}/>
                )
            }
        </div>
    );
  }
  
  export default Event;