import React from "react";
import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";

export default function ExpensesList(props) {
  if (props.items.length === 0) {
    return <h2 className="notAvailableMsg">No Entries Found!</h2>;
  }

  return props.items.map((expense) => {
    return (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        date={expense.date}
        amount={expense.amount}
      />
    );
  });
}
