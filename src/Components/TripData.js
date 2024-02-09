import "./TripStyles.css";
function TripData(props){
    return(
        <div className="t-card">
            <div className="t-img">
                <img src={props.timage} alt="tour"/>
               
            </div>
            <h4>{props.theading}</h4>
                <p>{props.ttext}</p>

        </div>
    )
}
export default TripData;