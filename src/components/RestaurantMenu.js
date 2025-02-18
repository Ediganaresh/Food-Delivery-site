import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import RestaurantCategory from "./RestaurantCategory";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) return <Shimmer />;

  const {
    name,
    cuisines,
    costForTwoMessage,
    totalRatingsString,
    areaname,
    avgRating,
    sla,
  } = resInfo?.cards[2]?.card?.card?.info || {};

  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    ) || [];

  return (
    <div className="flex-col justify-center items-center m-4">
      <div className="flex-col items-center justify-center mx-auto shadow-lg rounded-3xl bg-slate-200 p-4 w-5/12">
        <h1 className="text-center text-3xl text-slate-700 font-bold my-2 rounded-2xl bg-slate-300 p-2">
          {name}
        </h1>
        <div className="flex-col justify-center items-center">
          <h2 className="text-center font-custom underline hover:underline-offset-4 transition-all ease duration-1000 text-lg rounded-2xl bg-slate-300 p-2">
            {cuisines?.join(", ")}
          </h2>
          <h3 className="text-md my-2">{areaname}</h3>
          <div className="flex justify-center items-center gap-4 bg-slate-300 rounded-2xl">
            <h3 className="text-slate-800 text-md my-2">{avgRating}</h3>
            <h3 className="text-md my-2">{totalRatingsString}</h3>
            <h3>•</h3>
            <h3 className="text-md my-2">{costForTwoMessage}</h3>
          </div>
          <h3 className="text-center text-md my-2 bg-slate-300 rounded-2xl p-2">
            Delivery in : {sla?.slaString}
          </h3>
        </div>
      </div>
      <div className="flex-col items-center justify-center">
        {categories && categories.length > 0 ? (
          categories.map((category, _index) => (
            <RestaurantCategory
              key={category?.card?.card?.title}
              info={category?.card?.card}
            />
          ))
        ) : (
          <p>No categories available</p>
        )}
      </div>
    </div>
  );
};

export default RestaurantMenu;