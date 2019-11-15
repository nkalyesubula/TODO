import * as actions from './actionTypes';

export const postTaskSuccess = (data) => ({
  type: actions.ADD_TODO,
  payload: data,
});

export const deleteTaskSuccess = (id) => ({
  type: actions.DELETE_TODO,
  payload: id,
});

export const getTaskSuccess = () => ({
  type: actions.GET_TODOS,
});



export const addTodo = (input) => (dispatch) =>{
  return dispatch(postTaskSuccess(input));
}


export const getTodos = () => (dispatch) => {
  return dispatch(getTaskSuccess());
};

export const deleteTodo = (id) => (dispatch) => {
  return dispatch(deleteTaskSuccess(id));
}

