import React from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom';
function Navbar() {

    const handleClick = ()=>{
        e.preventDefault();
        console.log("Hanlde Clicked!")
    }
  return (
       <div className='navbar'>
      <Link to="/">
        <div className="title1">Home</div>
      </Link>
      <Link to="/home">
        <div className="title3">
          Explore
        </div>
      </Link>

      <Link to="/wishlist" >
       <div className="title2">  Wishlist</div>
      
      </Link>

      {/* <div className="click" onClick={handleClick}>
        click
      </div> */}
    </div>

  )
}

export default Navbar