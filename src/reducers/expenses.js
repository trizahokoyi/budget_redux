//expenses reducer
const expensesReducerDefaultState = []; //the current state is empty

export default (state = expensesReducerDefaultState, action) => {
  switch(action.type) {
      case 'ADD_EXPENSE':
          return [
              ...state,
              action.expense
          ];
      case 'EDIT_EXPENSE':
      return state.map((expense) => {
          if (expense.id === action.id) {
              return {
                  ...expense,
                  ...action.updates
              }
          } else {
              return expense;
          }
      })
      case 'REMOVE_EXPENSE':
          return state.filter((expense) => expense.id !==action.id);
      default:
      return state;
  }
}