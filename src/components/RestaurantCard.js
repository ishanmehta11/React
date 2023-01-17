import { IMG_CDN_URL } from "../constants";
const RestaurantCard =({name ,cloudinaryImageId, cuisines ,lastMileDistance})=>{
    return (
        <div className="card">
        <img src={IMG_CDN_URL+cloudinaryImageId }/>
        <h2>{name}</h2>
        <h3>{cuisines.join(", ") }</h3>
        <h4>{lastMileDistance}</h4>
        </div>
);
};

export default RestaurantCard;