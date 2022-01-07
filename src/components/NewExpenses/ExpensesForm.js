import React, { useState } from "react";
import "./ExpensesForm.css";
const ExpensesForm = () => {
  const [newDate, setNewDate] = useState("");
  const [newAmount, setNewAmount] = useState("");
  const [newTitle, setNewTitle] = useState("");
  const dateChangeHandler = (event) => {
    setNewDate(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setNewAmount(event.target.value);
  };
  const titleChangeHandler = (event) => {
    setNewTitle(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    const ExpenseData = {
      title: newTitle,
      amount: newAmount,
      date: new Date(newDate),
    };
    console.log(ExpenseData);
    setNewDate();
    setNewTitle();
    setNewAmount();
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={newTitle} onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={newAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2015-01-01"
            max="2022-01-01"
            value={newDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <button type="submit">Add Expenses</button>
    </form>
  );
};
export default ExpensesForm;
