import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function EventForm(props) {
  let { id } = useParams();
  const { eventDetails } = props;
  const [selectedImage, setSelectedImage] = useState('');
  const [oneEvent, setOneEvent] = useState({
    artist: '',
    artist_picture: '',
    city: '',
    price: 0,
    venue: '',
  });

  useEffect(() => {
    if (eventDetails) {
      setOneEvent(eventDetails);
      setSelectedImage(eventDetails.artist_picture)
    }
  }, [eventDetails]);

  const handleTextChange = (event) => {
    if(event.target.id === "artist_picture"){
      const test = event.target.value.split(".")
      const test1 = test[test.length - 1]
      if (test1 === "jpg" || test1 === "jpeg" || test1 === "png" ){
          setSelectedImage(event.target.value);
      }
    }
    setOneEvent({ ...oneEvent, [event.target.id]: event.target.value });
  };


  const handleSubmit = (event) => {
    event.preventDefault();
    props.handleSubmit(oneEvent, id);

    if (eventDetails) {
      props.toggleView();
    }
    setOneEvent({
      artist: '',
      artist_picture: '',
      city: '',
      price: 0,
      user_id: '',
      venue: '',
    });
  };

  // Displaying an image
  function addDefaultSrc(ev){
    ev.target.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Red_X.svg/2048px-Red_X.svg.png'
  }

  return (
    <div className="Edit">
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="form-floating col-6">
            <input
            id="artist_picture" 
            type="text" 
            value={oneEvent.artist_picture || ""}
            onChange={handleTextChange}
            className="form-control" 
            placeholder="artist_picture"
            required
            />
            <label htmlFor="artist_picture">Profile Picture:</label>
            <div className="container mt-5" id="imagePreviewParent">
              <h4>ImagePreview</h4>
              <div className="image-preview" id="imagePreview">
                {selectedImage && 
                <img 
                onError={addDefaultSrc} 
                src={selectedImage} 
                alt="Preview" 
                className="img-fluid" 
                />}
              </div>
            </div>
            </div>
                <br></br>
          <div className="col-auto">
            <div className="form-floating">
              <input
              id="artist" 
              type="text" 
              value={oneEvent.artist || ""}
              onChange={handleTextChange}
              className="form-control" 
              placeholder="artist"
              required
              />
              <label htmlFor="artist">artist:</label>
            </div>
              <br></br>
            <div className="form-floating">
              <input
              id="city" 
              type="text" 
              value={oneEvent.city || ""}
              onChange={handleTextChange}
              className="form-control" 
              placeholder="city"
              required
              />
              <label htmlFor="city">city:</label>
            </div>
              <br></br>
            <div className="form-floating">
              <input
              id="price" 
              min="0"
              step=".01"
              type="number" 
              value={oneEvent.price || ""}
              onChange={handleTextChange}
              className="form-control" 
              placeholder="price"
              required
              />
              <label htmlFor="price">price:</label>
            </div>
              <br></br>
            <div className="form-floating">
              <input
              id="venue" 
              type="text" 
              value={oneEvent.venue || ""}
              onChange={handleTextChange}
              className="form-control" 
              placeholder="venue"
              required
              />
              <label htmlFor="venue">venue:</label>
            </div>
              <br></br>
            <input type="submit" />
          </div>
        </div>
      </form>
    </div>
  );
}

export default EventForm;