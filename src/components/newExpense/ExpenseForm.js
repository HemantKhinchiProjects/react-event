import React, { useState } from 'react';
import './ExpenseForm.css';
const ExpenseForm = () => {
  const [enterdTitle, SetenterdTitle] = useState('');
  const [enterdAmount, SetenterdAmount] = useState('');
  const [enterdDate, SetenterdDate] = useState('');
  const titleChangeHandler = (event) => {
    SetenterdTitle(event.target.value);
  };
  const amountChangeHandler = (event) => {
    SetenterdTitle(event.target.value);
  };
  const dateChangeHandler = (event) => {
    SetenterdTitle(event.target.value);
  };
  const submitHandler = (event) => {
    event.prevent.default();
    const expenseData = {
      title: enterdTitle,
      amount: enterdAmount,
      date: new Date(enterdDate),
    };
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2024-01-01"
            onChange={dateChangeHandler}
          />
        </div>
        <div className="new-expense__actions">
          <button type="submit">Add Expense</button>
        </div>
      </div>
    </form>
  );
};
export default ExpenseForm;
