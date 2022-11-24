import React, { useState } from 'react';
import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpensesFilter';
import Card from '../ui/Card';
function Expenses(props) {
  const [filtredYear, setFiltredYear] = useState();
  const filterChangehandler = (selectedYear) => {
    setFiltredYear(selectedYear);
  };
  return (
    <>
      <Card className="expenses">
        <ExpensesFilter
          selected={filtredYear}
          onChangeFilter={filterChangehandler}
        />
        {props.items.map((expense) => (
          <ExpenseItem
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </Card>
    </>
  );
}
export default Expenses;
