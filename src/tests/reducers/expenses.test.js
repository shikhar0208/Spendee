import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('should test the default state', () => {
    const state = expensesReducer(undefined, {type: '@@INIT'})
    expect(state).toEqual([])
})

test('should remove expense by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    };
    const state = expensesReducer(expenses, action)
    // as expenses[1] is removed we expect to see expenses[0] and expenses[2]
    expect(state).toEqual([expenses[0], expenses[2]])
});

test('should not remove expense if id is not found', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: -1
    };
    const state = expensesReducer(expenses, action)
    expect(state).toEqual(expenses)      //means all expenses are there non of them should be remove with invalid id
});

test('should add an expense', () => {
    const newExpense = {
        id: 4,
        description: 'car emi',
        note: '',
        amount: 25000,
        createdAt: 200000
    };
    const action = {
        type: 'ADD_EXPENSE',
        expense: newExpense
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([...expenses, newExpense])
})

test('should edit expense', () => {
    const updatedExpense = {
        note: 'last month rent',
        amount: 270000
    }
    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[1].id,
        updates: {
            ...updatedExpense
        }
    };
    const state = expensesReducer(expenses, action);
    expect(state[1]).toEqual({...expenses[1], ...updatedExpense})
})

test('should not edit expense if expenses is not found', () => {
    const updatedExpense = {
        note: 'last month rent',
        amount: 270000
    }
    const action = {
        type: 'EDIT_EXPENSE',
        id: 400,
        updates: {
            ...updatedExpense
        }
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses)
})

