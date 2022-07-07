import React, { useState } from "react";
import Card from "../UI/Card";
import "./ExpenseForm.css";

export default function ExpenseForm(props) {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [amount, setAmount] = useState("");


  // const [inputValues, setInputValues] = useState({
  //   expenseTitle: "",
  //   expenseDate: "",
  //   expenseAmount: "",
  // });

  const titleHandler = (e) => {
    // setInputValues({ ...inputValues, expenseTitle: e.target.value });
    // setInputValues((prevState) => {
    //   return { ...prevState, expenseTitle: e.target.value };
    // });
    setTitle(e.target.value);
  };
  const dateHandler = (e) => {
    // setInputValues({ ...inputValues, expenseDate: e.target.value });
    setDate(e.target.value);
  };
  const amountHandler = (e) => {
    // setInputValues({ ...inputValues, expenseAmount: e.target.value });
    setAmount(e.target.value);
  };


  const submitHandler = (e) => {
    e.preventDefault();
    const expenseData = {
      title: title,
      date: new Date(date),
      amount: +amount,
    };
    props.onSaveExpense(expenseData);
    setTitle("");
    setAmount(""); //two way binding: not only listening to the event we can also make changes to the event
    setDate("");
  };
  return (
    <Card className="bg-slate-700 p-14 mx-32">
      <form onSubmit={submitHandler}>
        <div className="grid gap-6 grid-cols-2 flex-wrap">
          <div className="col-span-2 grid grid-col-2  gap-4">
            <lable className="lable">Title</lable>
            <input
              type="text"
              onChange={titleHandler}
              value={title}
              className="input"
            ></input>
          </div>
          <div className="grid grid-col-2 gap-4">
            <lable className="lable">Date</lable>
            <input
              type="date"
              className="input font-prompt"
              onChange={dateHandler}
              value={date}
            ></input>
          </div>
          <div className="grid grid-col-2 gap-4">
            <lable className="lable">Amount</lable>
            <input
              type="number"
              className="input"
              value={amount}
              onChange={amountHandler}
            ></input>
          </div>
          <div className="flex gap-8 pt-4 pd-0 justify-end col-end-3">
            <button onClick={props.onCancel} className="h-12 w-24 text-lg font-bold font-prompt rounded-lg bg-blue-500 text-white ">
              Cancel
            </button>
            <button
              type="submit"
              className="h-12 w-24 text-lg font-bold font-prompt rounded-lg bg-blue-500 text-white "
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </Card>
  );
}
