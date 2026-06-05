import "./ProductTab.css"
import Product from "./Product.jsx"
import rideImg from "./assets/top_bar_rides_3d.png"
import reserveImg from "./assets/reserve_clock.png"
import intercityImg from "./assets/intercity.png"
import courierImg from "./assets/Courier.png"
import clockImg from "./assets/Hourly2021.png"
import bikeImg from "./assets/Uber_Moto_India1.png"
function ProductTab(){
    return(
        <div className="explore-cards">
        <Product title="Ride" idx="0" image={rideImg}/>
        <Product title="Reserve" idx="1" image={reserveImg}/>
        <Product title="Intercity" idx="2" image={intercityImg}/>
        <Product title="Parcel" idx="3" image={courierImg}/>
        <Product title="Rentals" idx="4" image={clockImg}/>
        <Product title="Bike" idx="5" image={bikeImg}/>
        </div>
    );
}
export default ProductTab