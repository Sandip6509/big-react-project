import React, { createContext, useReducer, ReactNode } from 'react';
import contextReducer from './contextReducer';
import { Transaction } from './types';

// Define the type for the context values
type ContextValues = {
    transactions: Transaction[];
    balance: number;
    deleteTransaction: (id: string) => void;
    addTransaction: (transaction: Transaction) => void;
};

// Define the initial state
const initialState: Transaction[] = JSON.parse(localStorage.getItem('transactions') || '[]') || [
    { amount: 500, category: 'Salary', type: 'Income', date: '2020-11-16', id: '44c68123-5b86-4cc8-b915-bb9e16cebe6a' },
    // ... (other initial transactions)
];

// Create the context
export const ExpenseTrackerContext = createContext<ContextValues>({
    transactions: initialState,
    balance: 0,
    deleteTransaction: () => { },
    addTransaction: () => { },
});

// Define the Provider component
export const Provider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [transactions, dispatch] = useReducer(contextReducer, initialState);

    // Define the deleteTransaction function
    const deleteTransaction = (id: string) => {
        dispatch({ type: 'DELETE_TRANSACTION', payload: id });
    };

    // Define the addTransaction function
    const addTransaction = (transaction: Transaction) => {
        dispatch({ type: 'ADD_TRANSACTION', payload: transaction });
    };

    // Calculate the balance
    const balance = transactions.reduce((acc, currVal) => (currVal.type === 'Expense' ? acc - currVal.amount : acc + currVal.amount), 0);

    // Provide the context values to the children components
    return (
        <ExpenseTrackerContext.Provider value={{ transactions, balance, deleteTransaction, addTransaction }}>
            {children}
        </ExpenseTrackerContext.Provider>
    );
};