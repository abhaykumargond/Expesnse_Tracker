import React, { createContext, useState } from 'react';

// 1. Mock Data
const initialExpenses = [
  { id: '1', amount: 350, category: 'Groceries', date: '2024-07-20', notes: 'Weekly grocery shopping' },
  { id: '2', amount: 120, category: 'Transport', date: '2024-07-20', notes: 'Train ticket to work' },
  { id: '3', amount: 200, category: 'Entertainment', date: '2024-07-19', notes: 'Cinema with friends' },
  { id: '4', amount: 400, category: 'Bills', date: '2024-07-18', notes: 'Electricity bill' },
  { id: '5', amount: 150, category: 'Other', date: '2024-07-18', notes: 'New shirt' },
];

const initialCategories = [
  { id: '1', name: 'Groceries', icon: 'food-apple' },
  { id: '2', name: 'Transport', icon: 'car' },
  { id: '3', name: 'Entertainment', icon: 'gamepad-variant' },
  { id: '4', name: 'Bills', icon: 'file-document' },
  { id: '5', name: 'Other', icon: 'cash' },
  { id: '6', name: 'Health', icon: 'heart-pulse' },
  { id: '7', name: 'Education', icon: 'school' },
];

const initialUsers = [
    { id: '1', name: 'John Doe', email: 'john.doe@example.com' },
    { id: '2', name: 'Jane Smith', email: 'jane.smith@example.com' },
    { id: '3', name: 'Peter Jones', email: 'peter.jones@example.com' },
];


// 2. Create Context
export const AppContext = createContext();

// 3. Create Provider Component
export const AppProvider = ({ children }) => {
  const [expenses, setExpenses] = useState(initialExpenses);
  const [categories, setCategories] = useState(initialCategories);
  const [users, setUsers] = useState(initialUsers);
  const [theme, setTheme] = useState('light'); // 'light' or 'dark'

  const addExpense = (expense) => {
    setExpenses(prevExpenses => [...prevExpenses, { ...expense, id: String(Date.now()) }]);
  };

  const deleteExpense = (expenseId) => {
    setExpenses(prevExpenses => prevExpenses.filter(expense => expense.id !== expenseId));
  };

  const addCategory = (category) => {
    setCategories(prevCategories => [...prevCategories, { ...category, id: String(Date.now()) }]);
  };

  const deleteCategory = (categoryId) => {
    setCategories(prevCategories => prevCategories.filter(category => category.id !== categoryId));
  };

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const value = {
    expenses,
    addExpense,
    deleteExpense,
    categories,
    addCategory,
    deleteCategory,
    users,
    theme,
    toggleTheme,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
