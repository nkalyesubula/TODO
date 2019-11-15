import React, { Component } from 'react';
import { connect } from 'react-redux';
import ToDoComponent from './todoComponents';
import GetToDosComponent from './getTodosComponent';
import Appheader from '../welcome/welcome';
import { addTodo, getTodos, deleteTodo  } from '../../redux/action/index';



class ToDo extends Component {
    state = { 
        task: '',
        todoList: [],
     }

    // componentWillReceiveProps(nextProps){
    //     if(nextProps.todos !== this.props.todos){
    //         console.log(nextProps.todos);
    //     }
    // }

    deleteHandler = (id) => {
        console.log('my id is ', id);
        const { deleteTodo } = this.props;
        deleteTodo(id);
    }

    submitHandler = (e) =>{
        e.preventDefault();
        
        const { addTodo: addTask, todos} = this.props;
        const { task } = this.state;
        if(task){
            addTask({name: task, id: (todos.length +1)});
        }
        
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    render() { 
        const { todos  } = this.props;

        console.log('todo contents', todos);
        
        return ( 
            <>
            <Appheader />
            <ToDoComponent submitHandler={this.submitHandler} onChange={this.onChange}/>
            <div>
            <div style={{ textAlign: 'center' }}>
            <h3 style={{ color: 'navy' }}>
                To do List
            </h3>
            <br/>
            <GetToDosComponent data={todos} deleteHandler={this.deleteHandler}/>
            </div>
        </div>
            </>
         );
    }
}

const mapStateToProps = ({ todos }) =>({
   todos,
})
 
export default connect(mapStateToProps, { addTodo, getTodos, deleteTodo })(ToDo);