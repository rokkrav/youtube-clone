import React from "react";

const BtnCard = ({ name }) => {
  return (
    <button className="px-2 py-1 m-1 font-semibold bg-zinc-100 rounded-md">
      {name}
    </button>
  );
};

export default BtnCard;
