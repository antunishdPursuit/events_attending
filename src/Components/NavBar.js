import { Link } from "react-router-dom";
// import "../Css/NavBarCss.css"
export default function NavBar() {
    
  return (
    // <nav>
    //     <h1>
    //         <Link to="/users">Users</Link>
    //     </h1>
    //     <button>
    //         <Link to="/users/new">New User</Link>
    //     </button>
    // </nav>
    <nav className="navbar navbar-expand-sm bg-body-tertiary">
        <div className="container-fluid">
            <Link className="navbar-brand" to="/">Home</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/users">Users</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/users/new">New User</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="#">About</Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
  );
}
