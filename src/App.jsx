
import './App.css'
import {React,useState} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import HomePage from './components/HomePage';



import mercury from "./assets/mercury.png"
import venus from "./assets/venus.png"
import mars from "./assets/mars.png"
import moon from "./assets/moon.png"
import neptune from "./assets/neptune.png"
import saturn from "./assets/saturn.png"
import uranus from "./assets/uranus.png"
import jupiter from "./assets/jupiter.png"

import Wishlist from './components/Wishlist';
import SinglePlanet from './components/SinglePlanet';
import Iterinary from './components/Iterinary';


function App() {
 const DisplayPlanetDetails= [{
 planet:"Mercury",
  image:'https://www.asc-csa.gc.ca/images/astronomie/systeme-solaire/mercury.png',
  description:"Mercury—the smallest planet in our solar system and nearest to the Sun—is only slightly larger than Earth's Moon. Its surface is covered in tens of thousands of impact craters. From the surface of Mercury, the Sun would appear more than three times as large as it does when viewed from Earth, and the sunlight would be as much as 11 times brighter. Despite its proximity to the Sun, Mercury is not the hottest planet in our solar system— that title belongs to nearby Venus, thanks to its dense atmosphere. But Mercury is the fastest planet, zipping around the Sun every 88 Earth days. Mercury is appropriately named for the swiftest of the ancient Roman gods."
  ,topPlacetovisit:[
      {name:"Mercurys caloris basin",minidesc:"This massive shield volcano is three times the height of Mount Everest . Hiking to its summit would provide breathtaking views of the Martian landscape.",timeEstimated:3,image:"https://smd-cms.nasa.gov/wp-content/uploads/2023/09/PIA19216_1280.jpg?resize=900,885"}
    ,{name:"Ice Caves",minidesc:"Ice Caves: In permanently shadowed craters near the poles, there could be ice deposits. Tourists might visit these ice caves to study the frozen water and the potential for scientific research.",timeEstimated:3,image:"https://media.istockphoto.com/id/1254779111/photo/man-takes-a-photo-in-the-opening-of-an-ice-cave-in-the-vatnajokull-glacier-in-southeast.jpg?s=612x612&w=is&k=20&c=-BKtD4sJIUac1qUeBvJFQgBZnfdUoMeEcokMnRZAnM8="}
      

  ]
 },{
  planet:"Venus",
  image:'https://www.asc-csa.gc.ca/images/astronomie/systeme-solaire/venus.png',
  description:"Venus is often called Earth's sister planet due to its similar size and composition. However, it's a scorching world with a thick, toxic atmosphere that traps heat, making it the hottest planet in our solar system. Venus is known for its extreme greenhouse effect and its surface is dotted with volcanoes and vast plains of lava.",
  topPlacetovisit:[
    {name:"Ishtar Terra",image:"https://dsokolovskiy.com/blog/pictures/cotu-venus.jpg",minidesc:"Join us on a captivating expedition to Ishtar Terra, Venus' mysterious highlands. This vast region, marked by towering mountain ranges, deep canyons, and high plateaus, offers a unique glimpse into the complex geology of our neighboring planet, all veiled beneath the thick, sulfuric acid-laden clouds. Explore the rugged beauty and unearth the secrets of Venus as you immerse yourself in the intriguing landscape of Ishtar Terra,",timeEstimated:3}    ,{image:"https://www.sciencenews.org/wp-content/uploads/2023/03/031523_lg_volcanism-venus_feat.jpg",name:"Volcano Adventure Park",minidesc:"Prepare to embark on an otherworldly adventure at the Volcano Adventure Park Venus! Step onto the scorching surface of Earth's fiery twin, Venus, and experience the thrill of exploring its vast volcanic landscapes. Discover the breathtaking beauty and unearthly wonders of Venusian volcanoes, offering a unique adventure unlike anything on Earth.",timeEstimated:3}

]
},
{
  planet:"Mars",
  image:'https://www.asc-csa.gc.ca/images/astronomie/systeme-solaire/mars.png',
  description:" Mars, often referred to as the Red Planet, has intrigued scientists for its potential to host past or present life. It has a thin atmosphere and a cold, desert-like surface with evidence of ancient rivers and lakes. Missions to Mars are ongoing to search for signs of microbial life and prepare for potential human colonization.",
  topPlacetovisit:[
    {image:"https://mars.nasa.gov/gallery/atlas/images/oly.gif",name:"Olympus Mons",minidesc:"This massive shield volcano is three times the height of Mount Everest . Hiking to its summit would provide breathtaking views of the Martian landscape.",timeEstimated:3}
    ,{image:"data:image/jpeg;base64,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",name:"Valles Marineris",minidesc:"This system of canyons is more than 4,000 kilometers long and up to 7 kilometers deep. Tourists could embark on canyon treks and witness the diverse geology of Mars.",timeEstimated:3}

]
  
},
{
  planet:"Jupiter",
  image:"https://www.asc-csa.gc.ca/images/astronomie/systeme-solaire/jupiter.png",
  description:"Jupiter is the largest planet in our solar system, known for its massive size and distinct bands of clouds. It's a gas giant, composed mostly of hydrogen and helium, and has a powerful magnetic field. Jupiter also has a multitude of moons, including the four largest called the Galilean moons: Io, Europa, Ganymede, and Callisto.",
  topPlacetovisit:[
    {image:"https://upload.wikimedia.org/wikipedia/commons/7/7b/Io_highest_resolution_true_color.jpg",name:"Io",minidesc:"Known for its frequent volcanic eruptions, Io would offer visitors the opportunity to witness active volcanism up close and study the dynamic nature of this moon. Jupiter's Great Red Spot: Orbiting space stations could provide uninterrupted views of Jupiter siconic storm, allowing for long term scientific observations and breathtaking imagery",timeEstimated:3}
    ,{image:"https://assets3.cbsnewsstatic.com/hub/i/r/2017/07/13/0175fbfb-a49e-4fe0-a641-b0dc1886e2e8/thumbnail/1200x630/62d317982a79b1275f1ed15c64470468/jupiter-great-red-spot-flyover-071017.jpg?v=f334c339940ae79342a8ce7757900604",name:"Red Spot",minidesc:" The Great Red Spot's turbulent swirls and ever-changing cloud patterns contribute to its enigmatic allure, making it one of the most captivating and enduring mysteries of our solar system.",timeEstimated:3}

]
},

{
  planet:"Saturn",
  image:"https://www.asc-csa.gc.ca/images/astronomie/systeme-solaire/saturn.png",
  description:"Saturn is famous for its stunning system of rings, which are made up of ice particles and rocky debris. Like Jupiter, it is a gas giant and has a variety of moons, with Titan being the most notable due to its thick atmosphere and potential for liquid lakes of hydrocarbons.",
  topPlacetovisit:[
    {image:"https://wallpapercrafter.com/th800/4827-saturn-planet-rings-space-4k.jpg",name:"SATURN’S RINGS",minidesc:"Saturn's stunning ring system is one of the most iconic features in our solar system.The rings consist of numerous ringlets and divisions, such as the Cassini Division, and they change in appearance as Saturn orbits the Sun.",timeEstimated:3}
    ,{image:"https://t3.ftcdn.net/jpg/00/58/29/76/360_F_58297602_Pyr7gyi6pfz40KC91CoaIiXmdA4E87nN.jpg",name:"TITAN",minidesc:"Saturn's largest moon and one of the most intriguing objects in the solar system. It has a thick atmosphere and lakes of liquid methane and ethane on its surface.",timeEstimated:3}

]

},
{ planet:"Uranus",
image:"https://www.asc-csa.gc.ca/images/astronomie/systeme-solaire/uranus.png",
description:"Uranus is an ice giant, primarily composed of water, ammonia, and methane ices. It has a unique feature - its axis of rotation is nearly perpendicular to its orbit, causing it to roll along like a ball. Uranus has a faint ring system and a set of smaller moons.",
  topPlacetovisit:[
    {image:"https://upload.wikimedia.org/wikipedia/commons/e/e1/PIA18185_Miranda%27s_Icy_Face.jpg",name:"Miranda",minidesc:"Meet Miranda, one of Saturn's smallest but quirkiest moons. This celestial oddity stands out with its remarkable, chaotic terrain. Despite its diminutive size, Miranda boasts towering cliffs and bizarre, jumbled landscapes, a testament to the mysterious forces shaping our solar system. ",timeEstimated:3,}
    ,{image:"data:image/jpeg;base64,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",name:"Uranus' Graceful Rings",minidesc:"Explore the subtle elegance of Uranus' slender rings, a delicate feature surrounding this distant ice giant. Unlike Saturn's more prominent rings, Uranus' rings offer a quieter, yet captivating, cosmic spectacle. These narrow bands of dark particles and icy debris add a touch of intrigue to this enigmatic planet. Join us in admiring the understated beauty of Uranus",timeEstimated:3,}

]
},

{
  planet:"Neptune",
  image:"https://www.asc-csa.gc.ca/images/astronomie/systeme-solaire/neptune.png",
  description:" Neptune is the farthest planet from the Sun and another ice giant, similar in composition to Uranus. It has a deep blue color due to the presence of methane in its atmosphere. Neptune also boasts strong winds and a dark storm called the Great Dark Spot",
  topPlacetovisit:[
    {image:"https://i.pinimg.com/originals/f3/f0/a4/f3f0a47418bd66117639c60a320ba7ca.jpg",name:"Triton",minidesc:" Discover Triton, Neptune's enigmatic moon, an icy world like no other. It orbits Neptune in a unique backward direction, defying cosmic norms. Triton's landscape is a fascinating mix of smooth plains and rugged terrain, featuring geysers that emit nitrogen into its thin atmosphere, creating an otherworldly spectacle. ",timeEstimated:3}
    ,{image:"https://i.pinimg.com/originals/94/c8/ac/94c8ac50b3c60eb246580e659b665b27.png",name:"Neptune's Dark Spot",minidesc:"A Tempestuous Wonder Experience Neptune's Dark Spot, a captivating mystery in the heart of this distant gas giant. This colossal storm, reminiscent of a giant whirlpool, showcases the power of nature on an epic scale. With winds reaching speeds up to 1,500 miles per hour (2,400 kilometers per hour), it stands as one of the solar system's most formidable tempests.",timeEstimated:3}

]
},
{
  planet:"Moon",
  image:"https://www.asc-csa.gc.ca/images/astronomie/systeme-solaire/moon.png",
  description:"The Moon, Earth's closest celestial companion, stands in stark contrast to the fiery intensity of Venus. It is a serene and desolate world, often regarded as Earth's silent, cratered companion in the vast expanse of space. This rocky satellite, with its own unique character, has long captivated the imaginations of stargazers and scientists alike.",
  topPlacetovisit:[
    {name:"Lunar Gardens of Tranquility",
    minidesc:"Imagine a serene oasis nestled within the vast lunar landscape - the Lunar Gardens of Tranquility. Located within a massive, transparent biodome, this awe-inspiring lunar attraction replicates Earth's diverse ecosystems. It's a remarkable testament to humanity's ability to adapt and thrive in the harshest environments.",timeEstimated:3,
    image:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Aldrin_Looks_Back_at_Tranquility_Base_-_GPN-2000-001102.jpg/800px-Aldrin_Looks_Back_at_Tranquility_Base_-_GPN-2000-001102.jpg"}
    ,{name:"Lunar Museum of Space Exploration",minidesc:"The Lunar Museum of Space Exploration stands as a testament to humanity's journey into the cosmos. Located within a massive underground cavern, this museum is a treasure trove of space artifacts, historical exhibits, and interactive displays, making it a must-visit destination for anyone with a passion for space exploration.",timeEstimated:3,image:"data:image/jpeg;base64,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"}

]
}
]

const [WishListPlaces,setWishList] = useState([
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

const [distanceAndTimeArray,setDistanceTimeArray] = useState([])
console.log("distance and time array: ",distanceAndTimeArray)
  return (
    <Router>
    <Routes>
        <Route exact path="/" element={<LandingPage/>}/>
        <Route path="/home" element={<HomePage DisplayPlanetDetails={DisplayPlanetDetails}/>}/>
        
        <Route path="/planet/:singlePlanet" element={<SinglePlanet DisplayPlanetDetails={DisplayPlanetDetails}  WishListPlaces={WishListPlaces}  setWishList={setWishList} setDistanceTimeArray={setDistanceTimeArray}/>}/>
        <Route path="/wishlist" element={<Wishlist WishListPlaces={WishListPlaces}  DisplayPlanetDetails={DisplayPlanetDetails} distanceAndTimeArray={distanceAndTimeArray} setWishList={setWishList} setDistanceTimeArray={setDistanceTimeArray} />}/>
        <Route path="/itirenary" element={<Iterinary WishListPlaces={WishListPlaces}  DisplayPlanetDetails={DisplayPlanetDetails} distanceAndTimeArray={distanceAndTimeArray}/>}/>
        {/* <Route path="/:planetname" element={<PlanetDetails/>}/> */}
    </Routes>
    </Router>
  )
}

export default App
