import React from "react";
import BtnCard from "./BtnCard";

const btnList = [
  "All",
  "Musie",
  "Dancing",
  "Cooking",
  "Trending",
  "Popular",
  "News",
  "Kids",
  "Series",
  "Sports",
  "Movies",
  "Technology",
  "Gadgets",
  "Reviews",
  "Traliers",
  "Songs",
];
const ButtonList = () => {
  return (
    <div>
      {btnList.map((eachBtn) => (
        <BtnCard key={eachBtn} name={eachBtn} />
      ))}
    </div>
  );
};

export default ButtonList;
