import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';


const ExpenseList = (props) => (
    <div>
        <h1> Expense List </h1>
        {props.expenses.map((expense) =>{
            return <ExpenseListItem key = {expense.id} {...expense} /> //looking for description,amnt,createdAt
        })}
    </div>
);

const mapStateToProps = (state) => {
    //console.log(state);
    return{
        expenses: selectExpenses(state.expenses, state.filters)
    };
};

export default connect(mapStateToProps)(ExpenseList);
