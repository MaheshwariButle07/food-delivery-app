import "./Cardpage.css"
import { useParams } from "react-router-dom"
import FoodData from "./../../data"
import Navbar from "./../../components/Navbar/Navbar"

const Cardpage = () => {
  const { id } = useParams()

  const seleceteId = FoodData.find((dataobj) => dataobj.id === id)

  return (
    <>
      <Navbar />

      <div className="cp-card-container">
        <div>
          <img src={seleceteId.image} className="cp-img" />
        </div>


        <div className="info-container">
          <h1>{seleceteId.hotelName}</h1>
          <p className="info">{seleceteId.foodRating} | {seleceteId.foodDeliveryTime} | {seleceteId.address}</p>
          <h2>{seleceteId.foodtype.foodName}</h2>
          <p className="info">{seleceteId.description}</p>
        </div>
      </div>


    </>
  )
}

export default Cardpage