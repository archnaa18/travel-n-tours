import React from "react";
import Hero from "../Components/Hero";
import Pic2 from "../assets/about.jpg";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import AboutUs from "./AboutUs";
function About(){
return(
<>
<Navbar/>
<Hero cName="hero hero-mid"
heroImg={Pic2}
heroTitle="Explore Beyond Boundaries: Your Journey Awaits!"
heroText="Curated Travel Experiences for Every Explorer's Soul"
btnText="Contact Us"
url="/"
btnClass="show"
/>
<AboutUs/>
<Footer/>
</>
)
}
export default About;