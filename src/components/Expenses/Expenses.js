import React, { useState } from "react";
import Card from "../UI/Card";
import ExpenseChart from "./ExpenseChart";

import ExpenseFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";

export default function Expenses(props) {
  const [filterYear, setFilterYear] = useState("2022");
  const filteredYear = (enteredYear) => {
    setFilterYear(enteredYear);
  };

  const filtered = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filterYear;
  });

  return (
    <Card className="flex flex-col bg-zinc-700 mx-32 my-20">
      <ExpenseFilter selected={filterYear} onSelectYear={filteredYear} />
      <ExpenseChart expenses={filtered}/>
      <ExpensesList items={filtered} />
    </Card>
  );
}
