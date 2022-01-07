import React, { useState } from "react";
import "./ExpensesForm.css";
const ExpensesForm = () => {
  const [newDate, setNewDate] = useState("");
  const dateChangeHandler = (event) => {
    setNewDate(event.target.value);
  };

  const [newAmount, setNewAmount] = useState("");
  const amountChangeHandler = (event) => {
    setNewAmount(event.target.value);
  };
  const [newTitle, setNewTitle] = useState("");
  const titleChangeHandler = (event) => {
    setNewTitle(event.target.value);
  };
  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2015-01-01"
            max="2022-01-01"
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <button type="submit">Add Expenses</button>
    </form>
  );
};
export default ExpensesForm;
