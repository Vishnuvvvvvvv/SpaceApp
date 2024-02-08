import React, { useEffect } from 'react'
import "./SinglePlanet.css"
import { useParams } from 'react-router-dom';
import Destination from './Destination';
import Navbar from './Navbar';

function SinglePlanet({DisplayPlanetDetails,WishListPlaces,setWishList}) {

    const {singlePlanet} = useParams();
     

    console.log("planet name:",singlePlanet)


    function getPlanetDetails(planetName) {
        // Use Array.find() to find the planet with the matching name
        const planet = DisplayPlanetDetails.find((p) => p.planet === planetName);
      
        // Check if the planet was found
        if (planet) {
          return planet; // Return the planet's details
        } else {
          return null; // Return null if the planet was not found
        }
      }



      var planetDetails = getPlanetDetails(singlePlanet);
        useEffect(()=>{

            

             planetDetails = getPlanetDetails(singlePlanet);

            console.log("PlanetDetails: ",planetDetails)
            console.log("Top places to visit: ",planetDetails.topPlacetovisit)

        },[])


         const destinations = planetDetails.topPlacetovisit.map((item,index)=>{
          console.log("PLANET GOT THESE DETAILS :",item)
           return( 
           
            <div key={index} className="single-destination-container">
            <Destination planetname={singlePlanet}name={item.name} image={item.image} desc={item.minidesc} time={item.timeEstimated
}WishListPlaces={WishListPlaces} setWishList={setWishList}/>
          </div>
           
           
           )
          })

  return (<>
    <Navbar/>
    <div className='single_planet_body'>
           
     <div className="planet-details">
        <div className="planet-image">
            <img width="400px" height="400px"src={planetDetails.image} alt="" srcset="" />
        </div>    
        <div className="planet-content">
        <p>{planetDetails.description}</p>
        </div>
        
    </div>   
      
    <div className="planet-destination-section">
        <h1 className='sinlge_planet_headingh1'>Destinations to visit</h1>

        <div className=''>
        {destinations && destinations}
        </div>
    </div>
    
    </div>
  </>)
}

export default SinglePlanet