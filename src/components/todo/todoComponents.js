import React from 'react';
import './todo.scss';

const TodoComponent = ({ submitHandler, onChange }) => (
    <div className="form-group">
        <form role="form" onSubmit={submitHandler}>
        <input type="text" className="form-control" placeholder="Your Task" name="task" onChange={onChange} />
        </form>&nbsp;
        <button type="button" className="btn btn btn-primary" onClick={submitHandler}>Add</button>
        <div></div>
    <ul className="list-unstyled" id="todo"></ul>
    </div>
  );

  export default TodoComponent;





