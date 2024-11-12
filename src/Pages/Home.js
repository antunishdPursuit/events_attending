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
        <div className="home_container">
            <div className="home_banner">
                <div className="home_banner_left_box">
                    <h1>
                    {Array.from("EventLink").map((letter, index) =>(
                        <span key={index} className="home_banner_bounce_letter">    
                            {letter}
                        </span>
                    ))}
                    </h1>
                    <i className="home_banner_slogan">
                        <span>"Connecting music lovers</span>
                        <span> to share  unforgettable</span>
                        <span> concert experiences together"</span>
                    </i>
                </div>
                <div className="home_banner_right_box">
                    {isLoading ? 
                        <div className="home_banner_right_box_loading">
                            Loading...
                        </div> 
                        : 
                        users && (
                            <div className="home_banner_right_box_circle">
                                <img src={users[randomNumber].profile_picture}  alt={users[randomNumber].username}/>
                                <div >
                                    <p >{users[randomNumber].username}</p>
                                    <p >{users[randomNumber].bio}</p>
                                </div>
                                <div className="home_banner_right_box_button">
                                    <button  onClick={changeUser}>Change User</button>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
            <div className="home_features">
                <div className="home_features_box">
                    <h3>Create Your Personal Event List:</h3>
                    <p>Found an event you can't miss? Add it to your personalized event list with just a click. Our user-friendly interface lets you manage your event schedule effortlessly, so you'll never miss out on the experiences you love.</p>
                </div>
                <div className="home_features_box">
                    <h3>Discover Exciting Events:</h3>
                    <p>Browse through a diverse range of events happening in your city and beyond. From concerts by international artists to local art exhibitions and sports tournaments, you'll find events that cater to every interest.</p>
                </div>
                <div className="home_features_box">
                    <h3>Discover Exciting Events:</h3>
                    <p>Browse through a diverse range of events happening in your city and beyond. From concerts by international artists to local art exhibitions and sports tournaments, you'll find events that cater to every interest.</p>
                </div>
            </div>
        </div>
    );
}

export default Home;
