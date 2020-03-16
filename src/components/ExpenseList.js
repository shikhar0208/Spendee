import React from "react";
import { connect } from "react-redux";
import ExpenseListItems from "./ExpenseListItems";
import selectExpenses from "../selectors/expenses";

export const ExpenseList = props => (
  <div>
    {props.expenses.length === 0 ? (
      <p> No Expenses</p>
    ) : (
      props.expenses.map(expense => {
        return <ExpenseListItems key={expense.id} {...expense} />;
      })
    )}
  </div>
);

// when store get changes components will rerender with new values

const mapStateToProps = state => {
  return {
    expenses: selectExpenses(state.expenses, state.filters) // this will return to the props as object
  };
};

export default connect(mapStateToProps)(ExpenseList);
