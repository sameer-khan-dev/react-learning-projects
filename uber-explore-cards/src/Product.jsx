import "./Product.css"
export default function Product({title,idx,image}){
    let description=["Go anywhere with Uber.Request a ride,hop in,and go.","Reserve your ride in advance so you can relax on the day of your trip.",
        "Get convinient,affortable outstation cabs anytime at your door.","Uber makes same-day item delivery easier than ever.",
        "Request a trip for a block of time and make multiple stops.","Get affordable motorbike rides in minutes at your doorstep."];
    return(
        <div className="card-box">
        <article>
        <h2>{title}</h2>
        <p>{description[idx]}</p>
        <div id="link">
        <a href="#">Details</a>
        </div>
        </article>
        <div id="card-img">
            <img src={image} alt="" />
        </div>
        </div>
    );
}