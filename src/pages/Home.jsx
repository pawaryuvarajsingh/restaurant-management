import { useContext } from "react";
import { RestaurantContext } from "../context/RestaurantContext";

function Home() {
  const restaurant = useContext(RestaurantContext);

  return (
    <div>
      <h1>Welcome to {restaurant}</h1>
      <p>Best Food, Best Service!</p>
    </div>
  );
}

export default Home;