import React from 'react'

// import mercury from "../assets/mercury.png"
// import venus from "../assets/venus.png"
// import mars from "../assets/mars.png"
// import moon from "../assets/moon.png"
// import neptune from "../assets/neptune.png"
// import saturn from "../assets/saturn.png"
// import uranus from "../assets/uranus.png"
// import jupiter from "../assets/jupiter.png"


function Card({name,image}) {
    console.log("Name",name)
    console.log("image",image)

  return (
    <div className='card'>
    <img style={{height:'300px',width:'300px'}} src={image} alt="" />
    <h3 style={{color:'white'}}>{name}</h3>
   
    </div>
  )
}

export default Card