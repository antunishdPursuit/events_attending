import "../../Css/EventCardCss.css"
import axios from "axios";
import EventSearchDetails from "../Events/EventSearchDetails";
import { useEffect, useState } from "react";
const API = process.env.REACT_APP_API_KEY;

function UserSearch({user, handleAddEvents}) {
    const [search, setSearch] = useState(`stateCode=NY`)
    const [eventsTicketmaster, setEventsTicketmaster] = useState([])
    const [noEvents, setNoEvents] = useState(false)
    const [isLoading, setIsLoading] = useState(true);

  
    // Fetch data and update state
    useEffect(() => {
      fetchData(API,search); // Function to fetch data
    }, [search]);
  
    async function fetchData(api,search) {
      try {
            // sort=name,desc&
            axios
            .get(
    `https://app.ticketmaster.com/discovery/v2/events.json?size=10&pages=1&apikey=${api}&${search}`)
            .then((response) => {
                setEventsTicketmaster(response.data._embedded.events)
                setIsLoading(false);
                setNoEvents(false)

            })
            .catch((c) => {
                setNoEvents(true)
                console.warn("catch", c);
            });
      } catch (error) {
        console.error('Error fetching data:', error);
        setIsLoading(false);
      }
    }


    function searchState(event) {
        event.preventDefault();
        setSearch(`stateCode=${event.target.offsetParent.children[0].value}`)
    }

    function searchZipcode(event) {
        event.preventDefault();
        setSearch(`postalCode=${event.target.offsetParent.children[0].value}`)
    }

    return (
        <div className="container mt-5">
            <form className="d-flex">
                <div className="input-group me-2">
                    <input 
                        id="state"
                        type="search" 
                        className="form-control" 
                        aria-label="Search by State"
                        placeholder="Search by State" 
                    />
                    <button 
                        className="btn btn-primary" 
                        type="submit" 
                        onClick={searchState}
                    >Search</button>
                </div>
                <div className="input-group">
                    <input 
                        id="zipcode"
                        type="search" 
                        className="form-control" 
                        aria-label="Search by Zipcode"
                        placeholder="Search by Zipcode" 
                    />
                    <button 
                        className="btn btn-primary" 
                        type="submit"
                        onClick={searchZipcode}
                    >Search</button>
                </div>
            </form>
            {isLoading ? (
                <p>Loading...</p>
            ) : (
                noEvents ?
                <h1>No events in Area: {search.split('=')[1]}</h1>
                :
                eventsTicketmaster.map(event => (
                    <EventSearchDetails key={event.id} event={event} user={user} handleAddEvents={handleAddEvents}/>
                ))
            )}
        </div>
    );
}

export default UserSearch;

