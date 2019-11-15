import initialState from '../store/initialState';
import * as types from './../action/actionTypes';
const reducers = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_TODOS:
      console.log('get todos', state.todos);
      
      return {
        ...state,
      };
    case types.DELETE_TODO:
      console.log('task id', action.payload)
      const todosxxx = state.todos
      todosxxx.splice(todosxxx.findIndex(function(i){
        return i.id === action.payload;
    }), 1);
      console.log(todosxxx);
      return {todos: [
        ...state.todos,
      ]};
    case types.ADD_TODO:
      return {todos: [
        ...state.todos,
        {
          name: action.payload.name,
          id: action.payload.id
        }
      ]};
      
    default:
      return state;
  }
};
export default reducers;