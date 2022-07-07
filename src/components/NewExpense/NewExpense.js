import React, { useState } from "react";

import ExpenseForm from "./ExpenseForm";

export default function NewExpense(props) {
  const [isAddExpense, setIsAddExpense] = useState(false);

  const saveExpenseData = (enteredData) => {
    const expenseData = {
      ...enteredData,
      id: 'e'+Math.ceil(Math.random().toString()*100),
    };
    props.onAddExpense(expenseData);
    setIsAddExpense(false);
  };

  const addExpenseHandler = () => {
    setIsAddExpense(true);
  };
  const cancelHandler = () => {
    setIsAddExpense(false);
  };

  return (
    <div className="pt-10">
      {!isAddExpense && (
        <div className="flex justify-center text-center border-2 border-white shadow-lg shadow-gray-700 bg-slate-700 rounded-3xl p-12 mx-32">
          {" "}
          <button
            onClick={addExpenseHandler}
            className="h-12 w-36 text-lg font-bold font-prompt rounded-lg bg-blue-500 text-white "
          >
            Add Expense
          </button>
        </div>
      )}
      {isAddExpense && (
        <ExpenseForm onSaveExpense={saveExpenseData} onCancel={cancelHandler} />
      )}
    </div>
  );
}
