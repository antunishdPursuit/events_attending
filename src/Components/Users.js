import "../Css/IndexCss.css"
import axios from "axios";
import { useState, useEffect } from "react";
import User from "./User";
const API = process.env.REACT_APP_API_URL;

function Users() {
    const [users, setUsers] = useState([]);
    const [selectedOption, setSelectedOption] = useState('date');
    const [sortDirection, setSortDirection] = useState('asc'); // Default to ascending

    // Gathering the data from the backend
    useEffect(() => {
        axios
          .get(`${API}/users`)
          .then((response) => setUsers(response.data))
          .catch((error) => console.warn("Error:", error));
    }, []);
    
    //Sort
    function onSort(value, direction) {
        if(value === "username" && direction === "asc"){
            const sortedUsers = [...users].sort((a, b) => a.username.localeCompare(b.username));
            setUsers(sortedUsers); 
        } else if (value === "username" && direction === "desc"){
            const sortedUsers = [...users].sort((a, b) => b.username.localeCompare(a.username));
            setUsers(sortedUsers); 
        } else if (value === "group" && direction === "asc"){
            const sortedUsers = [...users].sort((a, b) => a.looking_for_group - b.looking_for_group);
            setUsers(sortedUsers)
        } else if(value === "group" && direction === "desc") {
            const sortedUsers = [...users].sort((a, b) => b.looking_for_group - a.looking_for_group);
            setUsers(sortedUsers)
        }
    }

    const handleSortChange = (event) => {
        const selectedValue = event.target.value;
        setSelectedOption(selectedValue);
        onSort(selectedValue, sortDirection); // Call the parent component's sorting function
    };
    
      const handleDirectionChange = () => {
        const newDirection = sortDirection === 'asc' ? 'desc' : 'asc';
        setSortDirection(newDirection);
        onSort(selectedOption, newDirection); // Call the parent component's sorting function
    };
    

  return (
    <div className="row">
        <div className="col-3 sort-box">
            {/* Sort box */}
            <div className="card sort-box-2">
                <div className="card-body">
                    <h5 className="card-title">Sort Options</h5>
                    <div className="form-check">
                        <input
                            className="form-check-input"
                            type="radio"
                            name="sortOptions"
                            value="username"
                            checked={selectedOption === 'username'}
                            onChange={handleSortChange}
                        />
                        <label className="form-check-label">Sort by username Created</label>
                    </div>
                    <div className="form-check">
                        <input
                            className="form-check-input"
                            type="radio"
                            name="sortOptions"
                            value="group"
                            checked={selectedOption === 'group'}
                            onChange={handleSortChange}
                        />
                        <label className="form-check-label">Looking for group?</label>
                    </div>
                    {/* Add more sort options if needed */}
                    <div className="form-check">
                        <input
                            className="form-check-input"
                            type="checkbox"
                            id="sortDirection"
                            checked={sortDirection === 'desc'}
                            onChange={handleDirectionChange}
                        />
                        <label className="form-check-label" htmlFor="sortDirection">Descending</label>
                    </div>
                </div>
            </div>
        </div>
        {/* Displaying Users */}
        <div className="col">
            <div className="row">
                {users.map((user) => {
                    return <User key={user.id} user={user} />;
                })}
            </div>
        </div>
    </div>
  );
}

export default Users;
