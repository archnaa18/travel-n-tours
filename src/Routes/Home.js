import React from "react";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import Pic1 from "../assets/home-bg.jpg";
import Destination from "../Components/Destination";
import Trip from "../Components/Trip";
import Footer from "../Components/Footer";
function Home(){
return(
<>
<Navbar/>
<Hero cName="hero"
heroImg={Pic1}
heroTitle="Begin Your Journey to Extraordinary Destinations"
heroText="Where Every Adventure Begins – Welcome to TripWithUs"
btnText="Travel Plan"
url="/"
btnClass="show"
/>
<Destination/>
<Trip/>
<Footer/>


</>
)
}
export default Home;