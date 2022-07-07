import React from "react";
import "./ChartBar.css";

export default function ChartBar(props) {
  let barHeight = "0%";
  if (props.maxValue > 0) {
    barHeight = Math.round((props.value / props.maxValue) * 100) + "%";
  }
  return (
   
    <div className="flex h-full flex-col items-center">
      <div className="flex h-full w-5 flex-col justify-end overflow-hidden rounded-xl border-2 border-black bg-purple-400">
        <div
          className="w-full bg-blue-800 transition-all delay-200 ease-out"
          style={{ height: barHeight }}
        ></div>
      </div>
      <div className="text-center font-prompt font-bold">{props.label}</div>
    </div>
  );
}
