import Navbar from '../../components/Navbar/Navbar'
import Foodcard from '../../components/Foodcard/Foodcard'
import FoodData from '../../data'
import "./Home.css"

function Home() {
  return (
    <>
    <Navbar/>

<div className='food-card-container'>
  {
    FoodData.map((foodObject,i)=>{
      const {
        id,
        image,
        hotelName,
        foodRating,
        foodDeliveryTime,
        foodtype,
        address
      } = foodObject

      return(<Foodcard 
        key={i}
        id={id}
        image={image}
        hotelName={hotelName}
        foodRating={foodRating}
        foodDeliveryTime={foodDeliveryTime}
        foodtype={foodtype}
        address={address}
        />)
    })
  }
</div>
    </>
    
  )
}

export default Home