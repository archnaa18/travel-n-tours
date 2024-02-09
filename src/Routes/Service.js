import React from "react";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import Pic3 from "../assets/service.jpg";
import Footer from "../Components/Footer";
import Trip from "../Components/Trip";
function Service(){
return(
<>
<Navbar/>
<Hero cName="hero hero-mid"
heroImg={Pic3}
heroTitle="Exceptional Services, Seamless Adventures"
heroText="Crafting Unforgettable Travel Experiences with TripWithUs"
btnText="Contact Us"
url="/"
btnClass="show"
/>
<Trip/>
<Footer/>
</>
)
}
export default Service;