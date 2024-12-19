import React from "react";
import { CDN_URL } from "../assets/constants";

const RestaurantCard = (props) => {
  const { resData } = props;

  // Destructure info and sla with default empty objects
  const { info = {} } = resData;
  const { cloudinaryImageId, name, avgRating, costForTwo, areaName } = info;
  const OriginalCostForTwo = costForTwo.replace(/\D/g, "");
  const modifiedCostForTwo1 = parseFloat(OriginalCostForTwo);
  const modifiedCostForTwo2 = modifiedCostForTwo1 + 200;
  // Extract deliveryTime from sla
  // const { slaString } = sla;

  // Check if cuisines array is defined and not empty
  const cuisinesArray = info.cuisines || [];
  const cuisinesText =
    cuisinesArray.length > 0 ? cuisinesArray.join(", ") : "Unknown";

  return (
    <div className="flex-col justify-center items-center rounded-2xl bg-slate-200 w-[280px] h-[380px] pb-4 relative hover:scale-90 transition-all ease duration-500">
      <div className="flex justify-center items-center rounded-lg">
        <img
          className="pt-4 px-4 w-[260px] h-[180px] object-cover"
          alt="res-images"
          src={CDN_URL + cloudinaryImageId}
        />
      </div>
      <div className="flex-col justify-center px-4 mt-3">
        <div className="flex justify-between font-bold text-sm">
          <h3 className="font-custom font-bold text-gray-700 text-[18px] leading-6 mb-1">
            {name}
          </h3>
          <h4 className="text-sm">{avgRating}⭐</h4>
        </div>
        <h4 className="flex justify-center items-center text-center text-slate-500 text-xs">
          {cuisinesText}
        </h4>
        <div className="flex justify-between items-center px-4 py-2 mt-2">
          <h4 className="text-[#3C3C4399] text-[14px] font-bold line-through">
            ₹{modifiedCostForTwo2} for Two
          </h4>
          <h4 className="text-[14px] font-bold text-[#0FB478]">{costForTwo}</h4>
        </div>
        <h4 className="flex justify-center items-center absolute bottom-5 left-[35%] text-xs">
          📍{areaName}
        </h4>
      </div>
    </div>
  );
};

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute top-2 left-2 bg-red-600 text-white px-2 py-1 rounded-full text-xs">Promoted</label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
