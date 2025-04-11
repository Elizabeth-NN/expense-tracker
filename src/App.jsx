import React, { useState } from 'react';
import ExpenseTable from './ExpenseTable';
import ExpenseForm from './ExpenseForm';
import SearchBar from './SearchBar';

function App() {
  const [expenses, setExpenses] = useState([
    {
      id: 1,
      name: 'Groceries',
      description: 'Weekly grocery shopping',
      amount: 125.75,
      category: 'Food',
      date: '2023-05-15',
    },
    {
      id: 2,
      name: 'Gas',
      description: 'Car fuel',
      amount: 45.2,
      category: 'Transportation',
      date: '2023-05-14',
    },
    {
      id: 3,
      name: 'Movie',
      description: 'Weekend entertainment',
      amount: 24.99,
      category: 'Entertainment',
      date: '2023-05-13',
    },
  ]);

  const [searchTerm, setSearchTerm] = useState('');

  const handleAddExpense = (newExpense) => {
    setExpenses([...expenses, newExpense]);
  };

  const handleDeleteExpense = (id) => {
    setExpenses(expenses.filter((expense) => expense.id !== id));
  };

  const filteredExpenses = expenses.filter(
    (expense) =>
      expense.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      expense.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div >
      <div className='flex flex-col align-center justify-center '>
      <h1
        className="bg-blue-100  mb-[30px] text-center text-blue-800 text-2xl font-semibold me-2 px-2.5 py-0.5 rounded-sm dark:bg-blue-200 dark:text-blue-800 ms-2"
      >EXPENSE TRACKER
      </h1>
      <SearchBar
      
      searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      </div>
      
      <div className='flex flex-wrap align-center justify-center mt-[50px]'>
      <ExpenseForm onAddExpense={handleAddExpense} />
      <ExpenseTable expenses={filteredExpenses} onDelete={handleDeleteExpense} />
      </div>
    </div>
  );
}

export default App;