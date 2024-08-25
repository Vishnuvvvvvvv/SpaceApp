import React,{useEffect, useState} from 'react'
import Navbar from './Navbar';
import "./Wishlist.css"
import Iterinary from './Iterinary';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Wishlist({WishListPlaces,DisplayPlanetDetails,distanceAndTimeArray,setDistanceTimeArray,setWishList}) {
  
  
  const planetsWithTopPlacesToVisit =WishListPlaces.filter(
    planet => planet.topPlacetovisit.length > 0
  );


  const navigate = useNavigate();
  
  // Create an object for Earth

    const earthObject = { planet: 'Earth', topPlacetovisit: [] };

    // Add Earth to the top of the array
    planetsWithTopPlacesToVisit.unshift(earthObject);





  console.log("Wishleted places",planetsWithTopPlacesToVisit);


  const singleWishlist =  planetsWithTopPlacesToVisit.map((planet, index) =>{
    if (planet.planet.toLowerCase() === "earth") {
      return null; // Return null to skip rendering
    }
  
    return(
   
    <>  
 
    <div key={index} className='SingleWishlistedPlace'>
      <h3>{planet.planet}</h3>
     
        {planet.topPlacetovisit.map((place, placeIndex) => (
         
         <li key={placeIndex}>
            {place.name} 
            
        </li>
       
       ))}
     
    </div>
    </> 
  )
        } 
  
  )
      
  const [showDetails, setShowDetails] = useState(true);
  const [showNewComponent, setShowNewComponent] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  // const [distanceAndTimeArray,setDistanceTimeArray] = useState([])
  const speedInKmPerHr = 38000; // Speed in kilometers per hour
const speedInKmPerDay = speedInKmPerHr * 24; // Convert speed to kilometers per day


const distancesToSunInKilometers = {
  "Mercury": 57900000,
  "Venus": 108200000,
  "Earth": 149600000,
  "Mars": 227900000,
  "Jupiter": 778600000,
  "Saturn": 1433500000,
  "Uranus": 2872500000,
  "Neptune": 4495100000,
  "Moon": 149600000
};



  const buildItinerary = () => {
    console.log("Build itirenary clicked")
    const newDistanceAndTimeArray = [];
     setDistanceTimeArray(newDistanceAndTimeArray)
     console.log("distance time rrrry",distanceAndTimeArray)
   // const distanceAndTimeArray2 = [...distanceAndTimeArray];


    for (let i = 0; i < planetsWithTopPlacesToVisit.length - 1; i++) {
      const fromPlanet = planetsWithTopPlacesToVisit[i].planet;
      const toPlanet = planetsWithTopPlacesToVisit[i + 1].planet;
      const distance = Math.abs(distancesToSunInKilometers[toPlanet] - distancesToSunInKilometers[fromPlanet]);
      
      // Calculate timeRequired (assuming constant speed, e.g., 1000 km/day)
      const timeRequired = distance / speedInKmPerDay; // Convert to days

      const toPlanetDetails =  planetsWithTopPlacesToVisit.find((planet) => planet.planet === toPlanet);

      const toPlanetTopPlacesToVisit = toPlanetDetails ? toPlanetDetails.topPlacetovisit : [];

    //   distanceAndTimeArray.push({
    //     from: fromPlanet,
    //     to: toPlanet,
    //     timeRequired: timeRequired,
    //     toPlanetTopPlacesToVisit: toPlanetTopPlacesToVisit
    //   });
      


    // }
    // setDistanceTimeArray(distanceAndTimeArray)

    newDistanceAndTimeArray.push({
      from: fromPlanet,
      to: toPlanet,
      timeRequired: timeRequired,
      toPlanetTopPlacesToVisit: toPlanetTopPlacesToVisit,
    });
  }

  // Set the state using the new array
  setDistanceTimeArray(newDistanceAndTimeArray);

    setWishList([
      {
        planet:"Earth",
        topPlacetovisit:[]
      },
      {
        planet:"Moon",
        topPlacetovisit:[]
      },
    
      {
        planet:"Mercury",
        topPlacetovisit:[]
      },
      {
        planet:"Venus",
        topPlacetovisit:[]
      },
      {
        planet:"Mars",
        topPlacetovisit:[]
      },
      {
        planet:"Jupiter",
        topPlacetovisit:[]
      },
      {
        planet:"Saturn",
        topPlacetovisit:[]
      },
      {
        planet:"Uranus",
        topPlacetovisit:[]
      },
      {
        planet:"Neptune",
        topPlacetovisit:[]
    
      }
    ])

    console.log("distance array:",distanceAndTimeArray);
    navigate('/itinerary', { state: { distanceAndTimeArray } });
  };

  console.log("distance array2:",distanceAndTimeArray);

  return (
   <div className='WishList'>
    <Navbar/>
    <h2 className='WishlistedPalcesHeading'>Wishlisted Places</h2>
   <div className="display-wishlet">

    
          { singleWishlist && singleWishlist}

                {/* <button>Build Itirenary</button> */}

          </div>  

        {planetsWithTopPlacesToVisit.length > 1 &&  
         <Link to="/itirenary"> <button className="ItirenaryBtn"onClick={()=>{toggleDetails(),buildItinerary()}}>Build Itinerary</button> </Link>
       // {console.log( "Array: ", distanceAndTimeArray)}
        }
          
          {/* <Iterinary planetsWithTopPlacesToVisit={planetsWithTopPlacesToVisit} distanceAndTimeArray={distanceAndTimeArray} setDistanceTimeArray={setDistanceTimeArray}/> */}
   
   </div>
  )
}

export default Wishlist