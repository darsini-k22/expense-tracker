import React from "react";

export default function ExpenseFilter(props) {
  const filterYearHandler = (e) => {
    props.onSelectYear(e.target.value);
  };
  return (
    <div className="flex flex-row justify-between px-16  pt-10 font-prompt text-2xl text-white ">
      <lable>Filter By Year</lable>

      <div>
        <select
          value={props.selected}
          onChange={filterYearHandler}
          className="bg-slate-600 text-white w-44 rounded-md border-2 border-black"
        >
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
}
