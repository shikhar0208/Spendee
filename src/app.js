import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import {setTextFilter} from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'react-dates/lib/css/_datepicker.css';
import 'normalize.css/normalize.css';
import './styles/styles.scss';


const store = configureStore();

store.dispatch(
    addExpense({ description: "Water Bill", amount: 1000, createdAt: 111000 })
);

store.dispatch(
    addExpense({description: "Gas Bill", amount: 850, createdAt: 11000})
)

store.dispatch(
    addExpense({description: "Rent", amount: 8500})
)

// store.dispatch(setTextFilter('water'));


const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
console.log(visibleExpenses)

const jsx = (
    <Provider store={store} >
        <AppRouter />
    </Provider>
);

ReactDOM.render( jsx, document.getElementById("app"));
