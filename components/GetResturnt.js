// data.cards[2].data.data.cards[0].data.name


// data.cards[2].data.data.cards[0].data.cloudinaryImageId img


// https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/bhqyp0l82rtle2mc5yu7
import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import Crosel from "./Crosel";


function filterData(mySearch, getRestaurant) {
    const filterData = getRestaurant.filter((getRestaurant) =>

        getRestaurant?.data?.name.toLowerCase().includes(mySearch.toLowerCase())
    );
    return filterData;
}

export const GetResturnt = () => {
    const [allRestaurants, setAllRestaurants] = useState([]);
    const [mySearch, setSearch] = useState("");
    const [filterResturent, setFilterResturent] = useState([]);
    const [crousel, setCrosel] = useState([]);

    console.log(allRestaurants); console.log("hi");
    useEffect(() => {
        Call_api();

    }, []);
    async function Call_api() {
        try {
            const res = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.473895&lng=88.374313&page_type=DESKTOP_WEB_LISTING#', { mode: 'cors' });

            const jsondata = await res.json();
            setAllRestaurants(jsondata?.data?.cards[2]?.data?.data?.cards);
            setFilterResturent(jsondata?.data?.cards[2]?.data?.data?.cards);
            setCrosel(jsondata?.data?.cards[0]?.data?.data?.cards) ;   //data.cards[0].data.data.cards[1].data

        }
        catch (error) {
            console.log(error);
        }

    }

    function searchResturent(mySearch, getRestaurant) {

        if (mySearch !== '') {
            const Data = filterData(mySearch, getRestaurant)
            setFilterResturent(Data);
            if (Data.length == 0) {
                console.log("NO RESTURENT");
            }

        }


    }

    return allRestaurants.length==0 ? (
        <Shimmer />
    ) : (

        <> 
          
          <div className="hero-section">
          
          {

crousel.map((c, index) => {
  // Limit the mapping to only the first four elements (index 0 to 3)
  if (index < 4) {
    return <Crosel key={c.data.id} {...c.data} />;
  }
  return null; // Skip the rest of the elements
})
}

          </div>
            <div className="search-container">

                <input className="search" placeholder="HUNGRY" type="text"

                    value={mySearch}
                    // update the state variable searchText when we typing in input box
                    onChange={(e) => setSearch(e.target.value)}


                />
                <h1>{mySearch}</h1>
                <button className="btn"

                    onClick={() => {

                        searchResturent(mySearch, allRestaurants);

                    }}

                >Search</button>

            </div>

            <div className="allresurent">
                {

                    filterResturent.map((restaurant) => {
                        return (
                            <RestaurantCard key={restaurant.data.id} {...restaurant.data} />
                        );
                    })
                }

            </div>

        </>


    )
}