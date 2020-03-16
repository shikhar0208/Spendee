import React from "react";
import { connect } from "react-redux";
import ExpenseForm from "./ExpenseForm";
import { addExpense } from "../actions/expenses";

export class AddExpensePage extends React.Component {
  onSubmit = expense => {
    // callback function onSubmit as props
    this.props.addExpense(expense);
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
    addExpense: expense => dispatch(addExpense(expense))
  };
};

export default connect(undefined, mapDispatchToProps  )(AddExpensePage);
