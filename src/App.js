// import logo from './logo.svg';
import React from "react";
import PreNavbar from "./components/PreNavbar";
import './App.css';
import Navbar from "./components/Navbar";
import {  BrowserRouter as Router,Route,Routes } from "react-router-dom"
import Slider from "./components/Slider";
import  Banner from './data/banner.json'
import Offers from "./components/Offers";
import offer from "./data/offer.json";
import Heading from "./components/Heading";
import StartProducts from "./components/StarProducts.js"
import data from "./data/data.json"
import HotAccessoriesMenu from "./components/HotAccessoriesMenu";
import HotAccessories from "./components/HotAccessories";
import ProductReviews from "./components/ProductReviews.js"
import Videos from "./components/Videos.js"
import Banner2 from "./components/Banner2.js"
import Footer from "./components/Footer.js"
import NavOptios from "./components/NavOptios.js"
// import HotAccessories from "./components/HotAccessories.js"

const App=()=>{
return(
<>
<Router>
<PreNavbar></PreNavbar>
<Navbar ></Navbar>
<Routes>

<Route exact path="/miphones"  element = {<NavOptios miPhones = {data.miPhones} miPhonesCover= {data.miPhones}/>}/>


</Routes>

<Routes>

<Route exact path="/redmiphones"  element = {<NavOptios redmiPhones= {data.redmiPhones} redmiPhonesCover = {data.redmiPhones}/>}/>


</Routes>

<Routes>

<Route exact path="/tv"  element = {<NavOptios tv= {data.tv} tvCover = {data.tv}/>}/>


</Routes>

<Routes>

<Route exact path="/laptops"  element = {<NavOptios laptop= {data.laptop} laptopCover = {data.laptop}/>}/>


</Routes>

<Routes>

<Route exact path="/lifestyle"  element = {<NavOptios fitnessAndLifeStyle= {data.fitnessAndLifeStyle} fitnessAndLifeStyleCover = {data.fitnessAndLifeStyle}/>}/>


</Routes>

<Routes>

<Route exact path="/home"  element = {<NavOptios home= {data.home} homeCover = {data.home}/>}/>


</Routes>

<Routes>

<Route exact path="/audio"  element = {<NavOptios audio= {data.audio} audioCover = {data.audio}/>}/>


</Routes>

<Routes>

<Route exact path="/accessories"  element = {<NavOptios accessories= {data.accessories} accessoriesCover = {data.audio}/>}/>


</Routes>
{/* <NavOptios miPhones={data.miPhones} redmiPhones={data.redmiPhones} tv={data.tv} laptop={data.laptop} fitnessAndLifeStyle={data.fitnessAndLifeStyle} home={data.home} audio={data.audio}  accessories={data.accessories}></NavOptios> */}
 <Slider start={Banner.start}></Slider> 
 <Offers offer={offer}></Offers>
 <Heading text="STAR PRODUCTS"></Heading>
 <StartProducts star={data.starProduct}></StartProducts>
 <Heading text="HOT ACCESSORIES"></Heading>
 <HotAccessoriesMenu></HotAccessoriesMenu>

 <Routes>

<Route exact path="/music"  element = {<HotAccessories music = {data.hotAccessories.music} musicCover = {data.hotAccessoriesCover.music}/>}/>


</Routes>

<Routes>

<Route exact path="/smartDevice"  element = {<HotAccessories music = {data.hotAccessories.smartDevice} smartDeviceCover = {data.hotAccessoriesCover.smartDevice}/>}/>


</Routes>

<Routes>

<Route exact path="/home"  element = {<HotAccessories home = {data.hotAccessories.home} homeCover = {data.hotAccessoriesCover.home}/>}/>


</Routes>

<Routes>

<Route exact path="/lifestyle"  element = {  <HotAccessories lifeStyle={data.hotAccessories.lifeStyle} lifeStyleCover={data.hotAccessoriesCover.lifeStyle}  />}/>


</Routes>

<Routes>

<Route exact path="/mobileAccessories"  element = {<HotAccessories mobileAccessories={data.hotAccessories.mobileAccessories} mobileAccessoriesCover={data.hotAccessoriesCover.mobileAccessories}  />}/>


</Routes>

</Router>
<Heading text="PRODUCT REVIEWS"></Heading>
<ProductReviews productReviews={data.productReviews}></ProductReviews>
<Heading text="VIDEOS"></Heading>
<Videos videos={data.videos}></Videos>
<Heading text="IN THE PRESS"></Heading>
<Banner2  banner={data.banner}/>
<Footer footer={data.footer} />
</>
)
}

export default App;
