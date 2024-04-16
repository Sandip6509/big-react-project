import { useContext } from 'react';
import { ExpenseTrackerContext } from './context/context';
import { incomeCategories, expenseCategories, resetCategories } from './constants/categories';
import { Transaction } from './context/types';

type Category = {
    type: string;
    amount: number;
    color: string;
};

type ChartData = {
    datasets: {
        data: number[];
        backgroundColor: string[];
    }[];
    labels: string[];
};

const useTransactions = (title: string) => {
    resetCategories();
    const { transactions } = useContext(ExpenseTrackerContext);
    const rightTransactions = transactions.filter((t: Transaction) => t.type === title);
    const total = rightTransactions.reduce((acc: number, currVal: Transaction) => acc += currVal.amount, 0);
    const categories: Category[] = title === 'Income' ? incomeCategories : expenseCategories;

    rightTransactions.forEach((t: Transaction) => {
        const category = categories.find((c: Category) => c.type === t.category);
        if (category) category.amount += t.amount;
    });

    const filteredCategories = categories.filter((sc: Category) => sc.amount > 0);

    const chartData: ChartData = {
        datasets: [
            {
                data: filteredCategories.map((c: Category) => c.amount),
                backgroundColor: filteredCategories.map((c: Category) => c.color),
            },
        ],
        labels: filteredCategories.map((c: Category) => c.type),
    };

    return { filteredCategories, total, chartData };
};

export default useTransactions;