import React from "react";
import { connect } from "react-redux";
import ExpenseForm from "./ExpenseForm";
import { startAddExpense } from "../actions/expenses";

export class AddExpensePage extends React.Component {
  onSubmit = expense => {
    // callback function onSubmit as props
    this.props.startAddExpense(expense);
    // props.dispatch(addExpense(expense));
    this.props.history.push("/"); // is react-router function to redirect to given path
  };
  render() {
    return (
      <div>
        <h1>Add Expense</h1>
        <ExpenseForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    startAddExpense: expense => dispatch(startAddExpense(expense))
  };
};

export default connect(undefined, mapDispatchToProps  )(AddExpensePage);
