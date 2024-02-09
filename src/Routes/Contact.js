import React from "react";
import Navbar from "../Components/Navbar";
import Pic4 from "../assets/contact.jpg";
import Hero from "../Components/Hero";
import Footer from "../Components/Footer";
import ContactForm from "../Components/ContactForm";
function Contact(){
return(
<>
<Navbar/>
<Hero cName="hero hero-mid"
heroImg={Pic4}
heroTitle="Get in Touch - Let's Plan Your Next Journey Together"
heroText="Questions, Suggestions, or Ready to Book? Contact TripWithUs"
btnText="Travel Plan"
url="/"
btnClass="show"
/>
<ContactForm/>
<Footer/>

</>
)
}
export default Contact;