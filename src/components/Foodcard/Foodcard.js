import "./Foodcard.css"
import { Link } from "react-router-dom"


const Foodcard = ({ id, image, hotelName, foodRating, foodDeliveryTime, foodtype, address }) => {
  return (
  <Link to={`/Cardpage/${id}`}>
    <div className="food-container">
      <img src={image} className="food-image" />
      <div className="food-info-container">
        <h2 className="food-hotelName">{hotelName}</h2>
        <div className="rate-time-conatiner">
          <p className="food-foodRating">{foodRating}</p>•
          <p className="food-foodDeliveryTime">
            {foodDeliveryTime}</p>
        </div>
        <p className="food-foodtype">{foodtype.foodName}</p>
        <p className="food-foodtype">{foodtype.foodVerity}</p>
        <p className="food-address">{address}</p>
      </div>
    </div>

    </Link>


  )
}

export default Foodcard