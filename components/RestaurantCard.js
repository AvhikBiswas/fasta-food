import {IMG_CDN_URL} from './constant.js';

 function RestaurantCard({

    cloudinaryImageId, name, cuisines, area, lastMileTravelString, costForTwoString, avgRating,
}) {

    return (
        <div className='cart'>
            <img className='cart-image' src={IMG_CDN_URL + cloudinaryImageId} />
            <h3>{name}</h3>
            <h4>{cuisines.join(" , ")}</h4>
            <h5>{area}</h5>

        </div>

    );
}
export default RestaurantCard;
