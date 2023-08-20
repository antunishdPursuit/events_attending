import "../Css/HomeCss.css"
import axios from "axios";
import { useState, useEffect } from "react";
const API = process.env.REACT_APP_API_URL;

function Home() {
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [randomNumber, setRandomNumber] = useState(0)

  
    // Fetch data and update state
    useEffect(() => {
      fetchData(); // Function to fetch data
    }, []);
  
    async function fetchData() {
      try {
            axios
              .get(`${API}/users`)
              .then((response) => {
                setUsers(response.data);
                setIsLoading(false);
              })
              .catch((c) => {
                console.warn("catch", c);
              });
      } catch (error) {
        console.error('Error fetching data:', error);
        setIsLoading(false);
      }
    }

    function changeUser() {
        const maxLength = users.length - 1
        if(randomNumber === maxLength){
            setRandomNumber(0)
        } else {
            setRandomNumber(randomNumber + 1)
        }
    }

    return (
        <div className="container text-center">

            <div className="row">
                <div className="col image-box">
                    <h3>Welcome to EventPlanner!
                        <br></br>
                        EventPlanner is your go-to platform for discovering and organizing your favorite events. 
                        <br></br>
                        Whether you're a music lover, a sports enthusiast, or a culture connoisseur, EventPlanner makes it easy to keep track of the events that matter most to you.
                    </h3>
                </div>
            </div>
            <div className="row middle-box">
                <h3 className="col col-md-4">Discover Exciting Events:
                    <br></br>
                    Browse through a diverse range of events happening in your city and beyond. 
                    <br></br>
                    From concerts by international artists to local art exhibitions and sports tournaments, you'll find events that cater to every interest.
                </h3>
                <div className="col col-md-4">
                {isLoading ? 
                    (
                        <p>Loading...</p>
                    ) : 
                    (
                        users && (
                            <div className="container mt-5">
                                <div className="card">
                                    <img src={users[randomNumber].profile_picture} className="card-img-top" alt={users[randomNumber].username}/>
                                    <div className="card-body">
                                        <h5 className="card-title">{users[randomNumber].username}</h5>
                                        <p className="card-text">{users[randomNumber].bio}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    )
                }
                </div>
                <h3 className="col col-md-4">Create Your Personal Event List:
                    <br></br>
                    Found an event you can't miss? Add it to your personalized event list with just a click. 
                    <br></br>
                    Our user-friendly interface lets you manage your event schedule effortlessly, so you'll never miss out on the experiences you love.
                </h3>
            </div>
            <div className="row bottom-box">
                    <button className="btn btn-primary" onClick={changeUser}> Change User</button>
            </div>
        </div>
    );
}

export default Home;


