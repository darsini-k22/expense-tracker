import React from "react";
import "./Chart.css";
import ChartBar from "./ChartBar";

export default function Chart(props) {
  const dataPointsValue = props.dataPoints.map((datapt) => {
    return datapt.value;
  });

  const totalMax = Math.max(...dataPointsValue);
  return (
    <div className="flex h-52 justify-around rounded-xl mt-12 mb-5 mx-10 bg-pink-200 p-3  text-center">
      {props.dataPoints.map((point) => {
        return (
          <ChartBar
            key={point.month}
            value={point.value}
            maxValue={totalMax}
            label={point.month}
          />
        );
      })}
    </div>
  );
}
