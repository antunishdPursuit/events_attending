import "../Css/HomeCss.css"
import axios from "axios";
import { useState, useEffect } from "react";
const API = process.env.REACT_APP_API_URL;

function Home() {
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [randomNumber, setRandomNumber] = useState(0)

    function convertAgeInMonthsToAgeInYears(num) {
        let year = Math.floor(num/12)
        let yearDiff = num - (year * 12)
        return year <= 1 ? `They are ${num} months old` : `They are ${year} year and ${yearDiff} months old`
    }
  
    console.log(convertAgeInMonthsToAgeInYears(12))
    console.log(convertAgeInMonthsToAgeInYears(34))
    console.log(convertAgeInMonthsToAgeInYears(8))
    console.log("EDCW")

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
<div className="container text-center home-box">
    <div className="row">
        <div className="col">
            <h3>Welcome to EventPlanner!</h3>
            <p>EventPlanner is your go-to platform for discovering and organizing your favorite events. Whether you're a music lover, a sports enthusiast, or a culture connoisseur, EventPlanner makes it easy to keep track of the events that matter most to you.</p>
        </div>
    </div>
    <div className="row middle-box">
        <div className="col col-md-4">
            <h3>Discover Exciting Events:</h3>
            <p>Browse through a diverse range of events happening in your city and beyond. From concerts by international artists to local art exhibitions and sports tournaments, you'll find events that cater to every interest.</p>
        </div>
        <div className="col col-md-4">
            {isLoading ? 
                <p>Loading...</p> 
                : 
                users && (
                    <div className="card card-sm">
                        <img src={users[randomNumber].profile_picture} className="card-img-top img-fluid" alt={users[randomNumber].username}/>
                        <div className="card-body">
                            <h5 className="card-title fs-6">{users[randomNumber].username}</h5>
                            <p className="card-text fs-6">{users[randomNumber].bio}</p>
                        </div>
                        <div className="row bottom-box">
                            <div className="col-12">
                                <button className="btn btn-primary" onClick={changeUser}>Change User</button>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
        <div className="col col-md-4">
            <h3>Create Your Personal Event List:</h3>
            <p>Found an event you can't miss? Add it to your personalized event list with just a click. Our user-friendly interface lets you manage your event schedule effortlessly, so you'll never miss out on the experiences you love.</p>
        </div>
    </div>

</div>

    );
}

export default Home;


