import React from 'react'
import "./HomePage.css"
import SolarSystem from "../assets/SolarSystem.mp4"
import Navbar from './Navbar'
import Card from './Card'
import { Link } from 'react-router-dom'

function HomePage({DisplayPlanetDetails}) {

 const singlePlanet =    DisplayPlanetDetails.map((planet)=>{
       
    const planetName = planet.planet;

    console.log("planet detials",planet)

      return(
       <Link to={`/planet/${planetName}`} >

        <Card name={planet.planet} image={planet.image}/>

      </Link>
      )
       

    })

  return (
    
    
    <div className='home_page_container'>
        
        <div className="home_page_first">
        <Navbar/>
        <video className='home_page_video' src={SolarSystem} autoPlay loop muted />

        </div>
       
       <div className="home_page_second">
                <h2 className='home_page_headingg'>Places To Explore!</h2>

                <div className="home_page_second_container">
{/* 
                <Card name={"Mercury"} image={"https://www.asc-csa.gc.ca/images/astronomie/systeme-solaire/mercury.png"}/>
               
                <Card name={"Venus"} image={"https://www.asc-csa.gc.ca/images/astronomie/systeme-solaire/venus.png"}/>
                <Card name={"Mars"} image={"https://www.asc-csa.gc.ca/images/astronomie/systeme-solaire/mars.png"}/>
                <Card name={"Jupiter"} image={"https://www.asc-csa.gc.ca/images/astronomie/systeme-solaire/jupiter.png"}/>
                <Card name={"Saturn"} image={"https://www.asc-csa.gc.ca/images/astronomie/systeme-solaire/saturn.png"}/>
                <Card name={"Uranus"} image={"https://www.asc-csa.gc.ca/images/astronomie/systeme-solaire/uranus.png"}/>
                <Card name={"Neptune"} image={"https://www.asc-csa.gc.ca/images/astronomie/systeme-solaire/neptune.png"}/>
                <Card name={"Moon"} image={"https://www.asc-csa.gc.ca/images/astronomie/systeme-solaire/moon.png"}/>
               */}

                              {singlePlanet}
                </div>
                {/* <Planetcard name={name} image={image}/> */}

       </div>

           
     
    </div>


  )
}

export default HomePage