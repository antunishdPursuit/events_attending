import "../../Css/EventCardCss.css"
import { useState } from "react";

function User({ event, handleDelete, toggleView }) {
    const [selectedImage] = useState(event.artist_picture);

    function addDefaultSrc(ev){
        ev.target.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Red_X.svg/2048px-Red_X.svg.png'
    }

  return (
    <div className="card">
        <div className="card-body">
            <div className="d-flex align-items-center">
                {selectedImage && 
                <img 
                alt="Preview" 
                src={selectedImage} 
                onError={addDefaultSrc} 
                className="img-fluid rounded event-card" 
                />}
                <h4 className="card-title ms-3"> {event.artist}</h4>
            </div>
            <div className="d-flex flex-column">
                <h5 className="card-subtitle">In {event.city} at {event.venue}</h5>
                <p className="card-text">Min Price: ${event.price}</p>
            </div>
            <button className="btn btn-primary" onClick={toggleView}>Edit</button>
            <button className="btn btn-danger" onClick={() => handleDelete(event.id)}>Delete</button>
        </div>
    </div>
  );
}

export default User;
