import React from "react";
import { connect } from "react-redux";
import ExpenseListItems from "./ExpenseListItems";
import selectExpenses from "../selectors/expenses";

export const ExpenseList = props => (
  <div className="content-container">
    <div className="list-header">
      <div className="show-for-mobile">Expenses</div>
      <div className="show-for-desktop">Expense</div>
      <div className="show-for-desktop">Amount</div>
    </div>
    <div className="list-body">
      {props.expenses.length === 0 ? (
        <div className="list-item list-item--message">
          <span>No expenses</span>
        </div>
      ) : (
        props.expenses.map(expense => {
          return <ExpenseListItems key={expense.id} {...expense} />;
        })
      )}
    </div>
  </div>
);

// when store get changes components will rerender with new values

const mapStateToProps = state => {
  return {
    expenses: selectExpenses(state.expenses, state.filters) // this will return to the props as object
  };
};

export default connect(mapStateToProps)(ExpenseList);
