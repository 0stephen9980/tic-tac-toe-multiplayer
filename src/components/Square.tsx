import React from "react";

type props = {
  player?: string;
  index: Number;
  onClick(event: any): void;
};

function Square({ player, onClick, index }: props) {
  const scale = player ? "scale-100" : "scale-0";
  const textcolor = player === "X" ? "text-black" : "text-pink-500";
  const hover = "transition duaration-500 hover:scale-105 transform";
  return (
    <div
      data-cell-index={index}
      className={`border-4 border-solid border-white h-36 text-8xl flex justify-center items-center cursor-pointer ${hover}`}
      {...{ onClick }}
    >
      <span
        data-cell-index={index}
        className={`transform transition-all duration-150 ease-out ${scale} ${textcolor}`}
      >
        {player}
      </span>
    </div>
  );
}

export default React.memo(Square);
