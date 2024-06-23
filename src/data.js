const FoodData =[
    {
    id:"Biryani",
    image:"https://www.licious.in/blog/wp-content/uploads/2022/06/chicken-hyderabadi-biryani-01.jpg",
    hotelName:"Aroma's Hyderabad House",
    foodRating:"4.3",
    foodDeliveryTime:"30-35 mins",
    foodtype:{
        foodName:"Biryani",
        foodVerity:"Biryani , Mughlai , Chinese"
    },
    address:"Hinjwadi", 
    description:"Succelent boneless chicken cooked in onion and cashew based gravy and topped on hyderabadi dum biryani, Served with raita and mirchi-ka-salan. It combines fragrant rice with various meats (such as chicken, goat, lamb, or fish) and a blend of spices. To cater to vegetarians, some versions substitute vegetables or paneer for the meat. Regardless of its origins, biryani continues to be a beloved and flavorful dish enjoyed by many! 🍛"

},
{
    id:"North Indian",
    image:"https://assets.vogue.com/photos/6352ccb841ea2bd565be085f/master/w_2560%2Cc_limit/GettyImages-1223580360.jpg",
    hotelName:"Nawabs of North",
    foodRating:"4.2",
    foodDeliveryTime:"30-35 mins",
    foodtype:{
        foodName:"North Indian",
        foodVerity:"North Indian , Punjabi , Chaat , Indian"
    },
    address:"Hinjwadi" ,
    description:"Originating from Amritsar, this flatbread is stuffed with spiced potatoes, onions, and cottage cheese. Thin, crispy, and smeared with ghee, it’s a staple in the city’s bustling food scene. A creamy lentil dish slow-cooked with butter, cream, and aromatic spices. It’s a comfort food staple across North India. Spiced chickpeas served with soft kulchas (bread) – a popular street food combo."
},
{
    id:"Pizza",
    image:"https://miro.medium.com/v2/resize:fit:1400/0*oTfm1pTXLxitHHFy.jpg",
    hotelName:"SNS Bites",
    foodRating:"3.1",
    foodDeliveryTime:"50-55 mins",
    foodtype:{
        foodName:"Pizza",
        foodVerity:"Italian , Pizzas , Beverages"
    },
    address:"Chinchwad" ,
    description:"Pizza’s roots trace back to Naples, Italy, where it emerged as a humble street food. The classic Neapolitan pizza features a thin crust, tomato sauce, fresh mozzarella, basil, and a drizzle of olive oil. Over time, pizza has evolved into countless variations. From New York-style with its foldable slices to Chicago deep-dish with its thick, buttery crust, there’s a pizza for every palate. Toppings range from traditional (pepperoni, mushrooms, bell peppers) to adventurous (pineapple, goat cheese, arugula). Customization is part of the fun!"
},
{
    id:"Burgers",
    image:"https://insanelygoodrecipes.com/wp-content/uploads/2020/02/Burger-and-Fries.jpg",
    hotelName:"La Delice",
    foodRating:"4.2",
    foodDeliveryTime:"40-45 mins",
    foodtype:{
        foodName:"Burgers",
        foodVerity:"Beverages , Fast Food , Burgers"
    },
    address:"Wakad",
    description:" Burgers are a beloved classic in American cuisine. Whether grilled outdoors or cooked on the stovetop, they’re versatile and perfect for various occasions. To make a perfect homemade burger, start with high-quality ground chuck. Form the patties gently, avoiding overhandling the meat. Grill them to medium-rare perfection, and if you like, melt some cheese on top during the last minute of cooking. Serve your juicy burgers in buns with your favorite toppings and condiments—think ketchup, mustard, BBQ sauce, or even homemade Chick-fil-A Sauce. Pair them with sides like coleslaw and baked beans for a complete meal. If you’re looking for more burger inspiration, there are countless variations out there, from classic beef burgers to creative twists like turkey burgers, veggie burgers, and beyond. Enjoy your burger adventure! 🍔" 
},
{
    id:"Chinese",
    image:"https://assets.zeezest.com/blogs/PROD_Banner_1663162846668.jpg",
    hotelName:"Chinese Wok",
    foodRating:"3.9",
    foodDeliveryTime:"40-45 mins",
    foodtype:{
        foodName:"Chinese",
        foodVerity:"Chinese , Asian , Tibetan, Desserts"
    },
    address:"Chinchwad" ,
    description:" A fundamental component, often served alongside various dishes.  From delicate rice noodles to hearty wheat noodles, they come in countless shapes and flavors. Scallions, ginger, and garlic form the Chinese holy trinity. Other aromatics include Chinese chives, cilantro, garlic scapes, and long hot green peppers. Chinese food staples have spread globally, making flavors like sweet, sour, and savory beloved worldwide1. Whether you’re enjoying take-out or exploring dim sum, understanding these ingredients can enhance your home cooking experience! 🥢🍚🥟"
},
{
    id:"South Indian",
    image:"https://sukhis.com/app/uploads/2022/04/image3-4.jpg",
    hotelName:"Tanjavur Cafe",
    foodRating:"4.3",
    foodDeliveryTime:"40-45 mins",
    foodtype:{
        foodName:"South Indian",
        foodVerity:"South Indian"
    },
    address:"Baner" ,
    description:"A cornerstone in various forms—boiled rice, idlis (steamed rice cakes), dosas (crispy crepes), and uttapams (pancakes). Daals (lentils) Essential for most meals. Sambar and rasam Lentil-based soups with spices and chilies. Coconut-based chutneys and poppadums (crispy lentil pancakes). Coconut-based chutneys and poppadums (crispy lentil pancakes). Andhra cuisine: Fiery and largely vegetarian, with coastal seafood.Chettinad cuisine (Tamil Nadu): Known for its intense spiciness.Malabari cooking (Kerala): Offers tasty seafood dishes.Hyderabadi food: Regal and rich, with nuts, dried fruits, and saffron.And don’t forget the love affair between South Indians and their special chicory coffee! ☕🌴🍛"
},
{
    id:"Ice-Creame",
    image:"https://static.toiimg.com/photo/101136807.cms",
    hotelName:"Aroma's Hyderabad House",
    foodRating:"4.3",
    foodDeliveryTime:"25-30 mins",
    foodtype:{
        foodName:"Ice-Creame",
        foodVerity:"Beverages , Ice-Creame "
    },
    address:"Wakad" ,
    description:"Ice cream is a delightful frozen dessert made from milk or cream, sweetened with sugar, and flavored with ingredients like vanilla, cocoa, or fruit. It’s a quintessential summer treat that brings joy to both kids and adults. While traditional ice cream recipes often include egg custard, I recommend the Philadelphia-style version, which skips the eggs and results in a smoother texture. With just five simple ingredients—cream, milk, sugar, salt, and vanilla—you can create a creamy vanilla ice cream that’s perfect for topping cobblers, crisps, or enjoying on its own. Plus, you can customize it by adding your favorite mix-ins, like chunks of brownies, cookie dough, or swirls of salted caramel sauce. If you don’t have an ice cream maker, don’t worry—you can still make ice cream without one! 😊"
},
{
    id:"Bengali",
    image:"https://citychroniclesbyp.wordpress.com/wp-content/uploads/2019/03/90884826_2534843936762402_6609355030979936256_n.jpg",
    hotelName:"Rannaghor The Taste of Bengal",
    foodRating:"4.5",
    foodDeliveryTime:"35-40 mins",
    foodtype:{
        foodName:"Bengali",
        foodVerity:"North Indian , Bengali"
    },
    address:"Hinjwadi" ,
    description:"Bengali cuisine, shaped by diverse history and climate, is a delightful fusion of flavors from Bangladesh and the Indian states of West Bengal and Tripura. Here are some renowned dishes . Mangshor Jhol (Bengali Mutton Curry) A Sunday favorite, tender mutton simmers in a rich gravy, accompanied by steaming rice. The thin gravy retains the meat’s freshness, and the natural gelatin imparts silkiness to the dish1.Macher Jhol (Bengali Fish Curry) Bengal’s abundant seafood supply results in flavorful fish curries. Hilsa and rohu are beloved choices, cooked in aromatic spices and served with rice. Shukto A unique veggie mix, Shukto combines bitter gourd, eggplant, and other vegetables in a mildly spiced gravy. It’s a traditional Bengali starter. Kosha Mangsho Slow-cooked mutton, marinated in spices, creates a rich and aromatic dish. "
},
{
    id:"Shawarma",
    image:"https://hips.hearstapps.com/hmg-prod/images/190130-chicken-shwarma-horizontal-1549421250.png?crop=1xw:0.843328335832084xh;center,top",
    hotelName:"Shwarama King",
    foodRating:"4.5",
    foodDeliveryTime:"30-35 mins",
    foodtype:{
        foodName:"Shawarma",
        foodVerity:"Biryani , Mughlai , Shawarma"
    },
    address:"Lebanese" ,
    description:"Shawarma, originating from the Levant region of Syria during the Ottoman Empire, is a beloved Middle Eastern dish. It consists of thinly sliced meat—traditionally lamb or mutton—stacked in an inverted cone and roasted on a slow-turning vertical spit. Nowadays, chicken, turkey, beef, or veal are also used. The outer layer is shaved off once cooked, resulting in tender, flavorful slices. Shawarma is popular street food across the Arab world and the Greater Middle East. It’s typically served as a sandwich or wrap in flatbreads like pita, laffa, or lavash. Chicken shawarma, for instance, pairs wonderfully with garlic sauce, fries, and pickles. 😋🥙"
},

]

export default FoodData 