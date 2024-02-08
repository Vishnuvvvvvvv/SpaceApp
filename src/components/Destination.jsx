import React,{useState} from 'react'
import { useParams } from 'react-router-dom';
import "./Destination.css"

function Destination({ planetname,name , image , desc ,time,WishListPlaces,setWishList}) {
  const {singlePlanet} = useParams();
    console.log("Planet in destination",planetname)
    console.log("Name",name)
    console.log("Image",image)
    console.log("Description",desc)
    console.log("desc:",time)
  

      const addTocart= ()=>{
      
        const placeobj = {
          name:name,
          image:image,
          timeEstimated:time
        }


        console.log("Clicked")
        const updatedDetails = [...WishListPlaces];

        // Find the planet object in the copied array
        const planet = updatedDetails.find(item => item.planet === planetname);
    
        // Check if the planet exists in the array
        if (planet) {
          // Add the new place to the topPlacetovisit array of the specific planet
          planet.topPlacetovisit.push(placeobj);
    
          // Update the state with the modified array
          setWishList(updatedDetails);
        } else {
          // Planet not found, handle the error or add a new planet
          console.error(`Planet "${singlePlanet}" not found in the displayPlanetDetails array.`);
        }
        console.log("add to cart clicked")
        console.log("Wisltist",WishListPlaces)
      }
    
      const [Title,SetTitle] = useState(["Add To cart"])
  return (
    <div>
        <h3 className='dstn_heading'>{name}</h3>
        <div className="destination-single-content">
        <img width="124px" height="122px" className="img_destination"src={image}/>
        <p>{desc}</p>
        </div>
        <button className='AddToCartBtn' onClick={()=>{addTocart(),SetTitle("Added")}}>{Title}</button>
    </div>
  )
}

export default Destination