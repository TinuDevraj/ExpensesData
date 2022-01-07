import React, { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItems.css";
function ExpenseItems(props) {
  const [title, setTitle] = useState(props.title);

  const clickHandler = () => {
    setTitle("UPDATED");
    console.log(title);
  };
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2> {title}</h2>
        <div className="expense-item__price">${props.price}K</div>
      </div>
      <button onClick={clickHandler}>Edit</button>
    </Card>
  );
}

export default ExpenseItems;
