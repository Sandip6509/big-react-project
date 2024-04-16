import { Transaction } from './types';

type State = Transaction[];

type Action =
    | { type: 'DELETE_TRANSACTION'; payload: string }
    | { type: 'ADD_TRANSACTION'; payload: Transaction };

const contextReducer = (state: State, action: Action): State => {
    let transactions: State;

    switch (action.type) {
        case 'DELETE_TRANSACTION':
            transactions = state.filter((transaction) => transaction.id !== action.payload);
            localStorage.setItem('transactions', JSON.stringify(transactions));
            return transactions;

        case 'ADD_TRANSACTION':
            transactions = [action.payload, ...state];
            localStorage.setItem('transactions', JSON.stringify(transactions));
            return transactions;

        default:
            return state;
    }
};

export default contextReducer;