import "./Cardpage.css"
import { useParams } from "react-router-dom"
import FoodData from "./../../data"
import Navbar from "./../../components/Navbar/Navbar"

const Cardpage = ()=>{
    const {id} = useParams()

    const seleceteId = FoodData.find((dataobj)=>dataobj.id===id)

    return(
        <>  
          <Navbar/>

          <div className="food-container">
      <img src={seleceteId.image} className="food-image" />
      <div className="food-info-container">
        <h2 className="food-hotelName">{seleceteId.hotelName}</h2>
        <div className="rate-time-conatiner">
          <p className="food-foodRating">{seleceteId.foodRating}</p>•
          <p className="food-foodDeliveryTime">
            {seleceteId.foodDeliveryTime}</p>
        </div>
        <p className="food-foodtype">{seleceteId.foodtype.foodName}</p>
        <p className="food-foodtype">{seleceteId.foodtype.foodVerity}</p>
        <p className="food-address">{seleceteId.address}</p>
      </div>
    </div>
          
        </>
    )
}

export default Cardpage