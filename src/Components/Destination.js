import Pic4 from "../assets/p1.jpg";
import Pic5 from "../assets/p2.jpg";
import Pic6 from "../assets/p3.jpg";
import Pic7 from "../assets/p4.jpg";
import "./DestinationStyles.css";
import DestinationData from "./DestinationData";

const Destination = () => {
  return (
    <div className="destination">
      <h1>Explore Our Diverse Destinations</h1>
      <p>
        Unveiling Hidden Paradises: Discover the Wonders of Our Featured
        Destinations
      </p>
      <DestinationData className1="first-des"
        heading="Unveiling Hidden Paradises: Discover the Wonders of Our Featured Destinations"
        text="Embark on a journey beyond the ordinary as we invite you to explore our carefully
         curated selection of featured destinations. In this collection, we unveil hidden paradises 
         that promise enchanting landscapes, cultural richness, and unforgettable experiences. From 
         secluded beaches with crystal-clear waters to vibrant cities pulsating with life, each 
         destination has its own unique story waiting to be discovered. Join us on a virtual tour 
         through these wonders and let your travel dreams find inspiration in the beauty and diversity 
         that our featured destinations have to offer."
        img1={Pic6}
        img2={Pic7}

      />
      <DestinationData className1="first-des-reverse"
        heading="Explore Your Wanderlust with Unforgettable Journeys"
        text="From the sun-kissed beaches of Bali to the majestic landscapes of Patagonia, our diverse
         range of destinations ensures there's something for every type of traveler. We believe that 
         travel is not just about reaching a destination but embracing the journey, and our expertly 
         crafted itineraries reflect this philosophy. Immerse yourself in local cultures, savor
          exquisite cuisines, and create memories that will last a lifetime."
        img1={Pic4}
        img2={Pic5}

      />
    </div>
  );
};
export default Destination;
