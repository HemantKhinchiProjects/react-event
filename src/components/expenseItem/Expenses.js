import React, { useState } from 'react';
import './Expenses.css';


import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import Card from '../ui/Card';
const Expenses = (props) => {
  // console.log(props.items);
  const [filtredYear, setFiltredYear] = useState();

  const filterChangehandler = (selectedYear) => {
    setFiltredYear(selectedYear);
  };
  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filtredYear;
  });
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filtredYear}
          onChangeFilter={filterChangehandler}
        />
        {/* {filteredExpenses.length === 0 ? (
          <p>No expenses Found </p>
        ) : (
          filteredExpenses.map((expense) => (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          ))
        )} */}
        <ExpensesList item={filteredExpenses} />
      </Card>
    </div>
  );
};
export default Expenses;
