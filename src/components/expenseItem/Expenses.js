import React, { useState } from 'react';
import './Expenses.css';

import Card from '../ui/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';
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
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList item={filteredExpenses} />
      </Card>
    </div>
  );
};
export default Expenses;
