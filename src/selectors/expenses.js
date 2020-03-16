import moment from 'moment';

// Get Visible Expenses
export default (expenses, { text, sortBy, startDate, endDate }) => {
    return expenses.filter((expense) => {
        const createdAtMoment = moment(expense.createdAt);
        const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, 'day') : true;
        const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment) : true;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());
    
        return startDateMatch && endDateMatch && textMatch;
      }).sort((a, b) => {
          if(sortBy === 'date') {
            return a.createdAt < b.createdAt ? 1 : -1   // a comes first for -1 and b for 1  
          } else if(sortBy === 'amount') {
              return a.amount < b.amount ? 1 : -1
          }
      })
};
