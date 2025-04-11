import React from 'react';

function ExpenseTable({ expenses, onDelete }) {
  return (
    <div className="relative overflow-x-auto">
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
      <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <th scope="col" className="px-6 py-3">Name</th>
          <th scope="col" className="px-6 py-3">Description</th>
          <th scope="col" className="px-6 py-3">Amount</th>
          <th scope="col" className="px-6 py-3">Category</th>
          <th scope="col" className="px-6 py-3">Date</th>
          <th scope="col" className="px-6 py-3">Actions</th>
        </tr>
      </thead>
      <tbody>
        {expenses.map((expense) => (
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200" key={expense.id}>
            <td className="px-6 py-4">{expense.name}</td>
            <td className="px-6 py-4">{expense.description}</td>
            <td className="px-6 py-4">${expense.amount.toFixed(2)}</td>
            <td className="px-6 py-4">{expense.category}</td>
            <td className="px-6 py-4">{expense.date}</td>
            <td className="px-6 py-4">
              <button onClick={() => onDelete(expense.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    
    </div>);
}

export default ExpenseTable;