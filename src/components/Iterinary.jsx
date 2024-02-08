import React,{useEffect,useState}from 'react'
import Navbar from './Navbar';
import "./Iterinary.css"
import { useLocation } from 'react-router-dom';

function Iterinary({planetsWithTopPlacesToVisit, distanceAndTimeArray}) {
    console.log("In array :",distanceAndTimeArray)
    var singlePlanet1 =''
  const [singlePlanet, setSinglePlanet] = useState('');  
  let currentDay = 1;
    var currDay = 1;

    distanceAndTimeArray = distanceAndTimeArray.filter((item, index, self) => {
        // Use the 'findIndex' method to check if the item appears later in the array
        const laterIndex = self.findIndex((otherItem) => {
          return (
            item.from === otherItem.from &&
            item.to === otherItem.to &&
            item.timeRequired === otherItem.timeRequired
          );
        });
      
        // Keep the first occurrence and remove duplicates
        return index === laterIndex;
      });


      useEffect(() => {

        if (distanceAndTimeArray && distanceAndTimeArray.length > 0) {
          currDay =1
          console.log('Distance and time array:', distanceAndTimeArray);

          singlePlanet1 = distanceAndTimeArray.map((item) => {
            console.log('Item here:', item);
            return (
              <div className="single-itirenary" key={item.from + item.to}>
                <h1 className="single-itirenary-heading">
                  {item.from} to {item.to}
                </h1>
    
                <div className="single-itirenary-content">
                  <h2 className="starting-day-number">Day {Math.round(currDay)}</h2>
                  <h3 className="start-day-from">Start Journey from {item.from}</h3>
                  <h2 className="starting-day-number">
                    Day {Math.round((currDay += item.timeRequired))}
                  </h2>
                  <h3 className="arrival-at">Arrival at {item.to}</h3>
    
                  {item.toPlanetTopPlacesToVisit.map((place, index) => {
                    const isLastIteration =
                      index === item.toPlanetTopPlacesToVisit.length - 1;
                    return (
                      <div key={place.name}>
                        <h3 className="arrival-at">Visiting {place.name}</h3>
                        {!isLastIteration && (
                          <h2 className="starting-day-number">
                            Day {Math.round((currDay += place.timeEstimated))}
                          </h2>
                        )}
                      </div>
                    );
                  })}


                </div>
              </div>
            );
          });
         console.log("splanet: ",singlePlanet)
         setSinglePlanet(singlePlanet1)
        }
       }, []);



  return (
    <div className='itirenary-main-page'>
    <Navbar/>
    <div className=''>
      
        <h1 className='iterinary-main-heading'>Itinerary</h1> 

    <div>

      
    {singlePlanet && singlePlanet.length > 0 && singlePlanet}
    </div>
          

    </div>
  </div>)
}

export default Iterinary


