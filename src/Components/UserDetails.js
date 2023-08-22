import "../Css/UserDetailsCss.css"
import axios from "axios";
import UserCard from "./UserCard";
import Events from "./Events";
import EventSearch from "./EventSearch"
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
const API = process.env.REACT_APP_API_URL;

function UserDetails() {
    const [user, setUser] = useState([]);
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





  return (
    <div className="row">
      <div className="col-md-5">
          <div className="card mb-3 col-md-5ol-4">
              <UserCard user={user} id={id} handleDelete={handleDelete}/>
              <Events/>
          </div>
      </div>
      <div className="col-md-7">
        {/* <EventSearch user={user}/> */}
      </div>
    </div>
  );
}

export default UserDetails;

