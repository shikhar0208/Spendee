import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/initialize';

const now = moment();

export default class ExpenseForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // when the component call without expense(ie. at time of createExpense) then default values are '' 
            description: props.expense ? props.expense.description : '',
            note: props.expense ? props.expense.note : '',
            amount: props.expense ? (props.expense.amount).toString() : '',
            createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
            calendarFocused: false,
            error: undefined
        };
    }
    

    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState(() => ({ description }));       // shorthand syntax
    };

    onNoteChange = e => {
        const note = e.target.value;
        this.setState(() => ({ note }));
    };

    onAmountChange = (e) => {
        const amount = e.target.value;
        // {1,} means atleast 1 value should exist before decimal
        if(!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)){
            this.setState(() => ({ amount }));
        }
    }

    onDateChange = (createdAt) => {
        // so that anyone can't delete the whole date but can only select new one
        if(createdAt) {
            this.setState(() => ({ createdAt }));
        }
    }

    onFocusChange = ({ focused }) => {
        this.setState(() => ({ calendarFocused: focused }))
    }

    onSubmit = (e) =>{
        e.preventDefault();
        if(!this.state.description || !this.state.amount) {
            // Set error state to 'Please provide description and amount.'
            this.setState(() => ({error: "Please provide description and amount."}))
        } else {
            // Clear the error
            this.setState(() => ({error: undefined}));
            this.props.onSubmit({       // props coming from AddExpensePage.js in component ExpenseForm 
                description: this.state.description,
                amount: parseFloat(this.state.amount, 10),  // to convert string to float of base 10
                createdAt: this.state.createdAt.valueOf(),     // to convert date into timestamp(milliseconds)
                note: this.state.note
            })
        }
    };

    render () {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.onSubmit}>
                    <input 
                        type="text"
                        placeholder="Description"
                        autoFocus
                        value={this.state.description}
                        onChange={this.onDescriptionChange}
                    />
                    <input
                        type="text"
                        placeholder="Amount"
                        value={this.state.amount}
                        onChange={this.onAmountChange}
                    />
                    <SingleDatePicker
                       date={this.state.createdAt}
                       onDateChange={this.onDateChange}
                       focused={this.state.calendarFocused}
                       onFocusChange={this.onFocusChange}
                       numberOfMonths={1} 
                       isOutsideRange={() => false}
                    />
                    <textarea
                        type="text"
                        placeholder="Add a note for your expense (optional)"
                        value={this.state.note}
                        onChange={this.onNoteChange}
                    >
                    </textarea>
                    <button>Add Expense</button>
                </form>
            </div>
        )
    }
}