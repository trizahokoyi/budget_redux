import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter'
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore(); // returns the two states

store.dispatch(addExpense({ description: 'Water bill', amount: 4500, createdAt: 3000 }));
store.dispatch(addExpense({ description: 'Gas bill', amount: 5000, createdAt: 11000 }));
store.dispatch(addExpense({ description: 'Visit Canada', amount: 10000, createdAt: 8000}));

const jsx = (
    <Provider store = {store}>
        <AppRouter />
    </Provider>
)

ReactDOM.render(jsx, document.getElementById('app')); 
    

