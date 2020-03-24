import React from "react";
import { connect } from "react-redux";
import ExpenseForm from "./ExpenseForm";
import ConfirmationModal from './ConfirmationModal';
import { startEditExpense, startRemoveExpense } from "../actions/expenses";

export class EditExpensePage extends React.Component {
  
  state = {
    selectedOption: false
  };
  
  onSubmit = expense => {
    this.props.startEditExpense(this.props.expense.id, expense);
    this.props.history.push("/");
  };

  handleRemove = () => {
    this.setState(() => ({ selectedOption: true }));
    // alert('Removing');
  };

  handleClearSelectedOption = () => {
    this.setState(() => ({
      selectedOption: false
    }));
  };

  onRemove = () => {
    this.setState(() => ( {selectedOption: false} ));
    this.props.startRemoveExpense({ id: this.props.expense.id });
    this.props.history.push("/");
  };

  render() {
    return (
      <div>
        <div className="page-header">
          <div className="content-container">
            <h1 className="page-header__title">Edit Expense</h1>
          </div>
        </div>
        <div className="content-container">
          <ExpenseForm onSubmit={this.onSubmit} expense={this.props.expense} />
          <button className="button button--secondary" onClick={this.handleRemove}>Remove Expense</button>
        </div>
        <ConfirmationModal 
          selectedOption={this.state.selectedOption}
          handleClearSelectedOption={this.handleClearSelectedOption}
          onRemove={this.onRemove}
        />
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  //props -> props pass to the higher order components
  return {
    expense: state.expenses.find(
      expense => expense.id === props.match.params.id
    )
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    startEditExpense: (id, expense) => dispatch(startEditExpense(id, expense)),
    startRemoveExpense: id => dispatch(startRemoveExpense(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);
