import "../Css/UserDetailsCss.css"
import { Link } from "react-router-dom";

function UserCard({ user, id, handleDelete }) {
  return (
    <div className="card-body">
        <div className="d-flex flex-column align-items-center mb-3">
            <img src={user.profile_picture} alt={user.username} className="rounded-circle user-avatar image-box" />
            <h3 className="card-title mt-2">
                {user.username} {user.looking_for_group && <span className="star">⭐️</span>}
            </h3>
        </div>
        <h6 className="card-text">{user.bio}</h6>
        <p className="card-text">
            {new Date(user.date_created).toLocaleDateString()}
        </p>
        <div className="d-grid gap-2 d-md-flex justify-content-md-end">
            <Link to={`/users`}>
                <button className="btn btn-secondary me-md-2">Back</button>
            </Link>
            <Link to={`/users/${id}/edit`}>
                <button className="btn btn-primary me-md-2">Edit</button>
            </Link>
            <Link to={`/users`}>
                <button className="btn btn-danger" onClick={handleDelete}>Delete</button>
            </Link>
        </div>
    </div>
  );
}

export default UserCard;
