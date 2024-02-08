import React from 'react'
import video from "../assets/video.mp4"
import "./LandingPage.css"
import { Link } from 'react-router-dom'
function LandingPage() {



  return (



    <div className='Landing-page-container'>
  
            <video className='landingPageVideo' src={ video } autoPlay loop muted></video>
                
                <div className="content-landing-page">
                    <h2>Explore the Solar System!</h2>       
                    <Link to="/home">  <button className='landing-pg-btn' >Explore</button></Link>
                </div>



    </div>




  )
}

export default LandingPage