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
<div class="container text-center home-box">
    <div class="row">
        <div class="col">
            <h3>Welcome to EventPlanner!</h3>
            <p>EventPlanner is your go-to platform for discovering and organizing your favorite events. Whether you're a music lover, a sports enthusiast, or a culture connoisseur, EventPlanner makes it easy to keep track of the events that matter most to you.</p>
        </div>
    </div>
    <div class="row middle-box">
        <div class="col col-md-4">
            <h3>Discover Exciting Events:</h3>
            <p>Browse through a diverse range of events happening in your city and beyond. From concerts by international artists to local art exhibitions and sports tournaments, you'll find events that cater to every interest.</p>
        </div>
        <div class="col col-md-4">
            {isLoading ? 
                <p>Loading...</p> 
                : 
                users && (
                    <div class="card card-sm">
                        <img src={users[randomNumber].profile_picture} class="card-img-top img-fluid" alt={users[randomNumber].username}/>
                        <div class="card-body">
                            <h5 class="card-title fs-6">{users[randomNumber].username}</h5>
                            <p class="card-text fs-6">{users[randomNumber].bio}</p>
                        </div>
                        <div class="row bottom-box">
                            <div class="col-12">
                                <button class="btn btn-primary" onClick={changeUser}>Change User</button>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
        <div class="col col-md-4">
            <h3>Create Your Personal Event List:</h3>
            <p>Found an event you can't miss? Add it to your personalized event list with just a click. Our user-friendly interface lets you manage your event schedule effortlessly, so you'll never miss out on the experiences you love.</p>
        </div>
    </div>

</div>

    );
}

export default Home;


