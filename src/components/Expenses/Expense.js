import Card from "../UI/Card";
import "./Expense.css";
import ExpenseItems from "./ExpenseItems";
function Expense(props) {
  return (
    <Card className="expenses">
      <ExpenseItems
        title={props.expenses[0].title}
        price={props.expenses[0].amount}
        date={props.expenses[0].date}
      />
      <ExpenseItems
        title={props.expenses[1].title}
        price={props.expenses[1].amount}
        date={props.expenses[1].date}
      />
      <ExpenseItems
        title={props.expenses[2].title}
        price={props.expenses[2].amount}
        date={props.expenses[2].date}
      />
      <ExpenseItems
        title={props.expenses[3].title}
        price={props.expenses[3].amount}
        date={props.expenses[3].date}
      />
    </Card>
  );
}

export default Expense;
