import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav>
        <h1>
            <Link to="/users">Users</Link>
        </h1>
        <button>
            <Link to="/users/new">New User</Link>
        </button>
    </nav>
  );
}
