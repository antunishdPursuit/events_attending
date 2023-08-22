import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const API = process.env.REACT_APP_API_URL;

function UsersNewForm() {
  const navigate = useNavigate();
  const currentDate = new Date();
  const formattedDate = currentDate.toISOString().split('T')[0]; // Format as yyyy-mm-dd
  const [selectedImage, setSelectedImage] = useState('');
  const [user, setUser] = useState({
    profile_picture: "",
    username: "",
    bio: "",
    looking_for_group: false,
    date_created: formattedDate,
  });

  const addUser = (newUser) => {
    axios
      .post(`${API}/users`, newUser)
      .then(
      (res) => {
      navigate(`/users`);
      })
      .catch((c) => {
        console.error("catch", c)
      });
  };

  const handleTextChange = (event) => {
    if(event.target.id === "profile_picture"){
      const test = event.target.value.split(".")
      const test1 = test[test.length - 1]

      if (test1 === "jpg" || test1 === "jpeg" || test1 === "png" ){
          // Figured out how to get to the image src but unable to create a deafult picture with there is an invalid src
          // let imageSrc = event.target.offsetParent.children[2].children[1].children[0].src
          setSelectedImage(event.target.value);
      }
    }
    setUser({ ...user, [event.target.id]: event.target.value });
  };

  const handleCheckboxChange = () => {
    setUser({ ...user, looking_for_group: !user.looking_for_group });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const test = user.profile_picture.split(".")
    const test1 = test[test.length - 1]
    if (
      test1 === "jpg" ||
      test1 === "jpeg" ||
      test1 === "png" 
    ) {
        addUser(user)
    } else {
        window.confirm(".jpg, .jpeg, and .png are the only supported image types.")
    }
  };

  // Displaying an image
  function addDefaultSrc(ev){
    ev.target.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Red_X.svg/2048px-Red_X.svg.png'
  }

  return (
    <div className="row justify-content-md-center">
      <div className="col-md-auto">
        <h1>New User Item</h1>
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="form-floating col-6">
                  <input
                  id="profile_picture" 
                  type="text" 
                  value={user.profile_picture}
                  onChange={handleTextChange}
                  className="form-control" 
                  placeholder="profile_picture"
                  required
                  />
                  <label htmlFor="profile_picture">Profile Picture:</label>
              <div className="container mt-5" id="imagePreviewParent">
                  <h4>ImagePreview</h4>
                  <div className="image-preview" id="imagePreview">
                      {selectedImage && <img onError={addDefaultSrc} src={selectedImage} alt="Preview" className="img-fluid" />}
                  </div>
              </div>
            </div>
              <br></br>
            <div className="col-auto">
              <div className="form-floating">
                <input
                id="username" 
                type="text" 
                value={user.username}
                onChange={handleTextChange}
                className="form-control" 
                placeholder="username:"
                required
                />
                <label htmlFor="username">Username:</label>
              </div>
                <br></br>
              <div className="form-floating">
                <input
                id="bio" 
                type="text" 
                value={user.bio}
                onChange={handleTextChange}
                className="form-control" 
                placeholder="bio"
                required
                />
                <label htmlFor="bio">Bio:</label>
              </div>
                <br></br>
              <div className="form-check form-switch">
                <input 
                id="looking_for_group"
                type="checkbox" 
                value={user.looking_for_group}
                checked={user.looking_for_group}
                onChange={handleCheckboxChange}
                className="form-check-input" 
                />
                <label className="form-check-label" htmlFor="looking_for_group">Looking for a Group?</label>
              </div>
                <br></br>
              <div className="form-floating">
                <input
                id="date_created" 
                type="date" 
                value={formattedDate}
                onChange={handleTextChange}
                className="form-control" 
                placeholder="date_created:"
                readOnly
                required
                />
                <label htmlFor="date_created">Date Created:</label>
              </div>
                <br></br>
              <input type="submit" />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UsersNewForm;