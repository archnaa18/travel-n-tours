import "./TripStyles.css";
import TripData from "./TripData";
import Tour1 from "../assets/t1.jpg"
import Tour2 from "../assets/t2.jpg"
import Tour3 from "../assets/t3.jpg"
function Trip() {
    return (
        <div className="trip">
            <h1> Recent Trips</h1>
            <p>Embark on Extraordinary Adventures: Highlights from Our Recent Trips</p>
            <div className="Tripcard">

                <TripData
                    timage={Tour1}
                    theading=" Explore the Wonders of World"
                    ttext="Embark on a journey of a lifetime with our recent trips that have left travelers captivated and inspired. At TRIPWITHUS, we believe in creating unforgettable experiences, and our recent expeditions showcase the beauty and diversity of destinations around the globe."

                />
                 <TripData
                    timage={Tour2}
                    theading=" A Tropical Paradise in World"
                    ttext="Escape to the tropical paradise of World, where azure waters and pristine beaches await. Our recent journey to this idyllic destination was filled with sun-soaked days, cultural discoveries, and thrilling adventures. Let us take you through the sunsets, local encounters, and the hidden gems that made this trip truly magical."

                />
                 <TripData
                    timage={Tour3}
                    theading=" Uncover the Secrets of World"
                    ttext="Uncover the secrets and hidden gems of World as we share the highlights from our recent expedition. From immersive cultural experiences to breathtaking landscapes, this trip was a blend of exploration and relaxation. Join us in reliving the moments that made this destination a must-visit for any avid traveler."

                />
            </div>
        </div>
    )
}
export default Trip;