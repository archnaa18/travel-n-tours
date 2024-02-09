import { Component } from "react";
import "./DestinationStyles.css";
import Pic4 from "../assets/p1.jpg";
import Pic5 from "../assets/p2.jpg";
import Pic6 from "../assets/p3.jpg";
import Pic7 from "../assets/p4.jpg";

class DestinationData extends Component{
    render(){
        return(
            <div className={this.props.className1}>
            <div className="des-text">
              <h2>
               {this.props.heading}
              </h2>
              <p>
               {this.props.text}
              </p>
            </div>
            <div className="image">
                <img alt="nature" src={this.props.img1}/>
                <img alt="nature" src={this.props.img2}/>
            </div>
          </div>
        )
    }
}
export default DestinationData;