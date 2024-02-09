import React from "react";
import "./HeroStyles.css"

function Hero(props){
return(
<>

<div className={props.cName}>
  <img alt="hero-img" src={props.heroImg}/>
  <div className="hero-text">
    <h1>{props.heroTitle}</h1>
    <p>{props.heroText}</p>
    <a href={props.url} className={props.btnClass}>{props.btnText}</a>
  </div>


</div>

</>
)
}
export default Hero;