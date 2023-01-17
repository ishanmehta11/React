import { restaurantList } from "../constants";
import RestaurantCard from "./RestaurantCard";
import { useState } from "react";

const filterData = (searchText , restaurants)=>{
  return restaurants.filter((restaurant)=>   restaurant.data.name.includes(searchText)
  );
}

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [restaurants, setRestaurants] = useState(restaurantList);
  const [restaurants1, setRestaurants1] = useState(restaurantList);

  return (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />

        <button
          className="search-btn"
          onClick={(e) => {
            setRestaurants(filterData(searchText , restaurants1));
          }}
        >
          Search
        </button>
      </div>
      <div className="restaurant-list">
        {restaurants.map((restaurant) => {
          console.log(restaurant.data.id);
          return (
            <RestaurantCard {...restaurant.data} key={restaurant.data.id} />
          );
        })}
      </div>
    </>
  );
};

export default Body;
