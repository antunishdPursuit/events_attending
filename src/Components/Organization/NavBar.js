import { Link } from "react-router-dom";
import "../../Css/NavBarCss.css"

export default function NavBar() {
  return (
    <nav>
        <div className="logo">
            Logo
        </div>
        <div className="nav-center">
            <Link to="/">EventLink</Link>
        </div>
        <div className="" id="navbarNav">
            <ul className="nav-right">
            <li>
                <Link to="/users">Users</Link>
            </li>
            <li>
                <Link to="/users/new">New User</Link>
            </li>
            <li>
                <Link to="/About">About</Link>
            </li>
            </ul>
        </div>
    </nav>
  );
}
