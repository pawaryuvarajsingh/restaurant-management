import { createContext } from "react";

export const RestaurantContext = createContext();

function RestaurantProvider({ children }) {
  const restaurantName = "Yuvaraj's Restaurant";

  return (
    <RestaurantContext.Provider value={restaurantName}>
      {children}
    </RestaurantContext.Provider>
  );
}

export default RestaurantProvider;