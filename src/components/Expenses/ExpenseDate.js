import React from "react";

export default function ExpenseDate(props) {
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();
  return (
    <div>
      <div className=" flex items-center justify-center flex-col h-32 w-32 border-2 rounded-lg bg-slate-700">
        <div className="text-white font-bold text-xl">{month}</div>
        <div className="text-white text-lg">{year}</div>
        <div className="text-white text-4xl font-bold">{day}</div>
      </div>
    </div>
  );
}
