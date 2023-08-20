import "../Css/IndexCss.css"
import Users from "../Components/Users";

function Index() {
    return (
        <div className="container">
            <div className="row align-items-center">
                <div className="col user-box d-flex justify-content-center align-items-center">
                    <h1>Users</h1>
                </div>
            </div>
            <Users />
        </div>
    );
}

export default Index;
